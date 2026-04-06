import { useState, useCallback } from 'react';
import { ComponentInfo, ColorInfo } from './settings-library';
import { Copy, Check, ChevronDown, ChevronRight, Circle, ToggleRight } from 'lucide-react';

// CSS 변수 → 실제 rgba 값 매핑 (Sort UI 컬러 시스템)
const varToRgba: Record<string, string> = {
  'var(--background)': 'rgba(255, 255, 255, 1.00)',
  'var(--foreground)': 'rgba(17, 17, 21, 1.00)',
  'var(--card)': 'rgba(255, 255, 255, 1.00)',
  'var(--card-foreground)': 'rgba(17, 17, 21, 1.00)',
  'var(--popover)': 'rgba(255, 255, 255, 1.00)',
  'var(--popover-foreground)': 'rgba(17, 17, 21, 1.00)',
  'var(--primary)': 'rgba(67, 125, 252, 1.00)',
  'var(--primary-foreground)': 'rgba(255, 255, 255, 1.00)',
  'var(--secondary)': 'rgba(255, 255, 255, 1.00)',
  'var(--secondary-foreground)': 'rgba(17, 17, 21, 1.00)',
  'var(--muted)': 'rgba(39, 39, 42, 0.06)',
  'var(--muted-foreground)': 'rgba(111, 111, 119, 1.00)',
  'var(--accent)': 'rgba(67, 125, 252, 1.00)',
  'var(--accent-foreground)': 'rgba(255, 255, 255, 1.00)',
  'var(--destructive)': 'rgba(231, 67, 65, 1.00)',
  'var(--destructive-foreground)': 'rgba(255, 255, 255, 1.00)',
  'var(--border)': 'rgba(39, 39, 42, 0.15)',
  'var(--input)': 'rgba(255, 255, 255, 1.00)',
  'var(--input-background)': 'rgba(255, 255, 255, 1.00)',
  'var(--ring)': 'rgba(101, 160, 253, 0.40)',
  'var(--inverted)': 'rgba(39, 39, 42, 1.00)',
  'var(--inverted-foreground)': 'rgba(255, 255, 255, 1.00)',
  'var(--sidebar)': 'rgba(255, 255, 255, 1.00)',
  'var(--sidebar-foreground)': 'rgba(78, 78, 85, 1.00)',
  'var(--sidebar-primary)': 'rgba(67, 125, 252, 1.00)',
  'var(--sidebar-border)': 'rgba(39, 39, 42, 0.10)',
  'var(--chart-3)': 'rgba(79, 198, 96, 1.00)',
  'var(--badge-blue-bg)': 'rgba(101, 160, 253, 0.1)',
  'var(--badge-blue-text)': 'rgba(33, 71, 221, 1.00)',
  'var(--badge-blue-border)': 'rgba(101, 160, 253, 0.3)',
};

function rgbaToHex(rgba: string): string {
  const match = rgba.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
  if (!match) return rgba;
  const r = parseInt(match[1]).toString(16).padStart(2, '0');
  const g = parseInt(match[2]).toString(16).padStart(2, '0');
  const b = parseInt(match[3]).toString(16).padStart(2, '0');
  return `#${r}${g}${b}`.toUpperCase();
}

function resolveHex(value: string): string {
  const resolved = varToRgba[value] || value;
  return rgbaToHex(resolved);
}

function categorizeColors(colors: ColorInfo[]): Record<string, ColorInfo[]> {
  const categories: Record<string, ColorInfo[]> = {};
  for (const color of colors) {
    let cat = 'Selection colors';
    if (color.name.startsWith('bg/')) cat = 'Background colors';
    else if (color.name.startsWith('border/')) cat = 'Border colors';
    else if (color.name.startsWith('text/')) cat = 'Selection colors';
    else if (color.name.startsWith('icon/')) cat = 'Selection colors';
    if (!categories[cat]) categories[cat] = [];
    categories[cat].push(color);
  }
  return categories;
}

interface PropertiesPanelProps {
  selectedComponent: ComponentInfo | null;
}

export function PropertiesPanel({ selectedComponent }: PropertiesPanelProps) {
  const [copiedSection, setCopiedSection] = useState<string | null>(null);
  const [isLayoutExpanded, setIsLayoutExpanded] = useState(true);
  const [isModesExpanded, setIsModesExpanded] = useState(false);
  const [isColorsExpanded, setIsColorsExpanded] = useState(false);
  const [isTailwindExpanded, setIsTailwindExpanded] = useState(false);
  const [isReactExpanded, setIsReactExpanded] = useState(false);

  const handleCopy = (text: string, section: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(section);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  if (!selectedComponent) {
    return (
      <div 
        className="w-96 border-l border-border bg-card flex items-center justify-center"
        style={{ fontFamily: 'var(--font-family-suit)' }}
      >
        <p style={{
          fontSize: 'var(--size-sm)',
          color: 'var(--muted-foreground)',
          textAlign: 'center',
          padding: '24px'
        }}>
          Select a component to view its properties
        </p>
      </div>
    );
  }

  return (
    <div 
      className="w-96 border-l border-border bg-card overflow-y-auto"
      style={{ fontFamily: 'var(--font-family-suit)' }}
    >
      {/* Component Information */}
      <div className="p-6 border-b border-border">
        <h2 style={{
          fontSize: 'var(--size-md)',
          fontWeight: 'var(--font-weight-semibold)',
          color: 'var(--muted-foreground)',
          marginBottom: '12px'
        }}>
          Component information
        </h2>
        
        {/* Component Preview */}
        <div 
          className="rounded p-6 mb-4"
          style={{ 
            backgroundColor: 'var(--muted)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {selectedComponent.component}
        </div>

        {/* Variant Properties */}
        {selectedComponent.variantProperties && selectedComponent.variantProperties.length > 0 && (
          <div className="space-y-2">
            {selectedComponent.variantProperties.map((prop, index) => (
              <div 
                key={index}
                className="flex items-center justify-between"
                style={{ 
                  paddingTop: '8px',
                  paddingBottom: '8px'
                }}
              >
                <span style={{
                  fontSize: 'var(--size-sm)',
                  color: 'var(--muted-foreground)'
                }}>
                  {prop.label}
                </span>
                <div className="flex items-center ds-gap-8">
                  {prop.type === 'boolean' && (
                    <ToggleRight 
                      size={16} 
                      style={{ 
                        color: 'var(--muted-foreground)',
                        opacity: 0.5 
                      }} 
                    />
                  )}
                  {prop.type === 'icon' && (
                    <Circle 
                      size={16} 
                      style={{ color: 'var(--muted-foreground)' }} 
                    />
                  )}
                  <span style={{
                    fontSize: 'var(--size-sm)',
                    color: 'var(--card-foreground)',
                    fontWeight: 'var(--font-weight-medium)'
                  }}>
                    {typeof prop.value === 'boolean' ? (prop.value ? 'True' : 'False') : prop.value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Layout Section */}
      <div className="border-b border-border">
        <div className="p-4">
          <div className="flex items-center justify-between mb-3">
            <button
              onClick={() => setIsLayoutExpanded(!isLayoutExpanded)}
              className="flex items-center ds-gap-8 hover:opacity-80 transition-opacity"
            >
              {isLayoutExpanded ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
              <h3 style={{
                fontSize: 'var(--size-md)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--card-foreground)'
              }}>
                Layout
              </h3>
            </button>
            {isLayoutExpanded && (
              <button
                onClick={() => handleCopy(
                  Object.entries(selectedComponent.cssProperties)
                    .map(([key, value]) => `${key}: ${value};`)
                    .join('\n'),
                  'layout'
                )}
                className="p-1.5 rounded hover:bg-muted transition-colors"
                style={{ color: 'var(--muted-foreground)' }}
              >
                {copiedSection === 'layout' ? <Check size={16} /> : <Copy size={16} />}
              </button>
            )}
          </div>
          
          {isLayoutExpanded && (
            <div 
              className="rounded p-3"
              style={{ 
                backgroundColor: 'var(--muted)',
                fontSize: 'var(--size-xs)',
                fontFamily: 'monospace'
              }}
            >
              {Object.entries(selectedComponent.cssProperties).map(([key, value], index) => (
                <div key={key} className="flex" style={{ marginBottom: index < Object.keys(selectedComponent.cssProperties).length - 1 ? '4px' : '0' }}>
                  <span style={{ 
                    color: 'var(--muted-foreground)',
                    marginRight: '4px',
                    minWidth: '16px',
                    display: 'inline-block',
                    textAlign: 'right'
                  }}>
                    {index + 1}
                  </span>
                  <span style={{ color: 'var(--foreground)' }}>
                    <span style={{ color: 'var(--foreground)' }}>{key}</span>
                    <span style={{ color: 'var(--foreground)' }}>: </span>
                    <span style={{ color: value.startsWith('var(') ? 'hsl(280, 100%, 70%)' : 'hsl(31, 100%, 71%)' }}>
                      {value}
                    </span>
                    <span style={{ color: 'var(--foreground)' }}>;</span>
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Modes Section */}
      {selectedComponent.modes && selectedComponent.modes.length > 0 && (
        <div className="border-b border-border">
          <div className="p-4">
            <div className="flex items-center justify-between mb-3">
              <button
                onClick={() => setIsModesExpanded(!isModesExpanded)}
                className="flex items-center ds-gap-8 hover:opacity-80 transition-opacity"
              >
                {isModesExpanded ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                <h3 style={{
                  fontSize: 'var(--size-md)',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--card-foreground)'
                }}>
                  Modes
                </h3>
              </button>
            </div>
            
            {isModesExpanded && (
              <div className="space-y-3">
                {selectedComponent.modes.map((mode, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <span style={{
                      fontSize: 'var(--size-sm)',
                      color: 'var(--muted-foreground)'
                    }}>
                      {mode.label}
                    </span>
                    <span style={{
                      fontSize: 'var(--size-sm)',
                      color: 'var(--card-foreground)'
                    }}>
                      {mode.value}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Colors Section */}
      {selectedComponent.colors && selectedComponent.colors.length > 0 && (
        <div className="border-b border-border">
          <div className="p-4">
            <div className="flex items-center justify-between mb-3">
              <button
                onClick={() => setIsColorsExpanded(!isColorsExpanded)}
                className="flex items-center ds-gap-8 hover:opacity-80 transition-opacity"
              >
                {isColorsExpanded ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                <h3 style={{
                  fontSize: 'var(--size-md)',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--card-foreground)'
                }}>
                  Colors
                </h3>
              </button>
            </div>
            
            {isColorsExpanded && (
              <div>
                {Object.entries(categorizeColors(selectedComponent.colors!)).map(([category, colors]) => (
                  <div key={category} style={{ marginBottom: '16px' }}>
                    <p style={{
                      fontSize: 'var(--size-sm)',
                      color: 'var(--muted-foreground)',
                      marginBottom: '8px'
                    }}>
                      {category}
                    </p>
                    <div className="space-y-1">
                      {colors.map((color, index) => {
                        const hex = resolveHex(color.value);
                        const colorKey = `color-${category}-${index}`;
                        return (
                          <button
                            key={index}
                            onClick={() => handleCopy(hex, colorKey)}
                            className="flex items-center w-full rounded-md transition-colors hover:bg-muted"
                            style={{
                              padding: '8px 12px',
                              border: '1px solid var(--border)',
                              backgroundColor: copiedSection === colorKey ? 'var(--muted)' : 'var(--background)',
                              cursor: 'pointer',
                            }}
                          >
                            <div
                              style={{
                                width: '28px',
                                height: '28px',
                                borderRadius: '6px',
                                backgroundColor: color.value,
                                border: '1px solid var(--border)',
                                flexShrink: 0
                              }}
                            />
                            <span style={{
                              fontSize: 'var(--size-sm)',
                              color: 'var(--card-foreground)',
                              marginLeft: '12px',
                              fontFamily: 'monospace',
                              flex: 1,
                              textAlign: 'left'
                            }}>
                              {color.name}
                            </span>
                            <span style={{
                              fontSize: 'var(--size-xs)',
                              color: 'var(--muted-foreground)',
                              marginLeft: '8px',
                              flexShrink: 0
                            }}>
                              {copiedSection === colorKey ? (
                                <Check size={14} style={{ color: 'var(--chart-3)' }} />
                              ) : hex}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Tailwind Classes - Collapsible */}
      <div className="border-b border-border">
        <div className="p-4">
          <div className="flex items-center justify-between mb-3">
            <button
              onClick={() => setIsTailwindExpanded(!isTailwindExpanded)}
              className="flex items-center ds-gap-8 hover:opacity-80 transition-opacity"
            >
              {isTailwindExpanded ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
              <h3 style={{
                fontSize: 'var(--size-md)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--card-foreground)'
              }}>
                Tailwind Classes
              </h3>
            </button>
            {isTailwindExpanded && (
              <button
                onClick={() => handleCopy(selectedComponent.tailwindClasses.join(' '), 'tailwind')}
                className="p-1.5 rounded hover:bg-muted transition-colors"
                style={{ color: 'var(--muted-foreground)' }}
              >
                {copiedSection === 'tailwind' ? <Check size={16} /> : <Copy size={16} />}
              </button>
            )}
          </div>
        
          {isTailwindExpanded && (
            <div 
              className="rounded p-3"
              style={{ 
                backgroundColor: 'var(--muted)',
                fontSize: 'var(--size-xs)',
                fontFamily: 'monospace',
                color: 'var(--foreground)',
                overflowWrap: 'break-word'
              }}
            >
              {selectedComponent.tailwindClasses.join(' ')}
            </div>
          )}
        </div>
      </div>

      {/* React Code - Collapsible */}
      <div className="border-b border-border">
        <div className="p-4">
          <div className="flex items-center justify-between mb-3">
            <button
              onClick={() => setIsReactExpanded(!isReactExpanded)}
              className="flex items-center ds-gap-8 hover:opacity-80 transition-opacity"
            >
              {isReactExpanded ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
              <h3 style={{
                fontSize: 'var(--size-md)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--card-foreground)'
              }}>
                React Code
              </h3>
            </button>
            {isReactExpanded && (
              <button
                onClick={() => handleCopy(selectedComponent.reactCode, 'react')}
                className="p-1.5 rounded hover:bg-muted transition-colors"
                style={{ color: 'var(--muted-foreground)' }}
              >
                {copiedSection === 'react' ? <Check size={16} /> : <Copy size={16} />}
              </button>
            )}
          </div>
        
          {isReactExpanded && (
            <pre 
              className="rounded p-3 overflow-x-auto"
              style={{ 
                backgroundColor: 'var(--muted)',
                fontSize: 'var(--size-xs)',
                fontFamily: 'monospace',
                color: 'var(--foreground)'
              }}
            >
              <code>{selectedComponent.reactCode}</code>
            </pre>
          )}
        </div>
      </div>
    </div>
  );
}