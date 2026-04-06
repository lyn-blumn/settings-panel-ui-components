import { useState } from 'react';
import { ComponentCategory, ComponentInfo } from './settings-library';
import { ComponentBlock } from './component-block';
import { getComponentsData } from './components-data';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

// Map category IDs to display names
function getCategoryDisplayName(category: ComponentCategory): string {
  const categoryNames: Record<ComponentCategory, string> = {
    'all': 'All Components',
    'input': 'Input',
    'textarea': 'Text Area',
    'dropdown': 'Dropdown',
    'button': 'Button',
    'toggle-accordion': 'Toggle + Accordion',
  };
  return categoryNames[category];
}

interface ComponentGridProps {
  selectedCategory: ComponentCategory;
  onComponentSelect: (component: ComponentInfo) => void;
  selectedComponentId?: string;
}

export function ComponentGrid({ selectedCategory, onComponentSelect, selectedComponentId }: ComponentGridProps) {
  const [styleFilter, setStyleFilter] = useState<string>('all');
  const [sizeFilter, setSizeFilter] = useState<string>('all');
  const [iconFilter, setIconFilter] = useState<string>('all');
  const [stateFilter, setStateFilter] = useState<string>('all');

  const components = getComponentsData();
  
  let filteredComponents = selectedCategory === 'all'
    ? components.filter(c => c.category !== 'button')
    : components.filter(c => c.category === selectedCategory);

  // Apply additional filters for buttons
  if (selectedCategory === 'button') {
    filteredComponents = filteredComponents.filter(component => {
      const styleMatch = styleFilter === 'all' || component.id.includes(`-${styleFilter}-`);
      const sizeMatch = sizeFilter === 'all' || component.id.includes(`-${sizeFilter}-`);
      const iconMatch = iconFilter === 'all' || component.id.includes(`-${iconFilter}-`) || component.id.includes(`-${iconFilter}`);
      const stateMatch = stateFilter === 'all' || component.id.includes(`-${stateFilter}`);
      
      return styleMatch && sizeMatch && iconMatch && stateMatch;
    });
  }

  const showFilters = selectedCategory === 'button';

  return (
    <div className="flex-1 overflow-y-auto p-8">
      <div className="mb-6">
        <h1 style={{
          fontSize: 'var(--size-3xl)',
          fontWeight: 'var(--font-weight-semibold)',
          color: 'var(--foreground)',
          fontFamily: 'var(--font-family-suit)'
        }}>
          {getCategoryDisplayName(selectedCategory)}
        </h1>
      </div>

      {/* Filter Controls */}
      {showFilters && (
        <div className="mb-6 flex ds-gap-16 flex-wrap">
          <div className="flex flex-col ds-gap-8">
            <label style={{
              fontSize: 'var(--size-sm)',
              fontWeight: 'var(--font-weight-medium)',
              color: 'var(--foreground)',
              fontFamily: 'var(--font-family-suit)'
            }}>
              Style
            </label>
            <Select value={styleFilter} onValueChange={setStyleFilter}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="primary">Primary</SelectItem>
                <SelectItem value="outline">Outline</SelectItem>
                <SelectItem value="soft">Soft</SelectItem>
                <SelectItem value="secondary">Secondary</SelectItem>
                <SelectItem value="ghost">Ghost</SelectItem>
                <SelectItem value="destructive">Destructive</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col ds-gap-8">
            <label style={{
              fontSize: 'var(--size-sm)',
              fontWeight: 'var(--font-weight-medium)',
              color: 'var(--foreground)',
              fontFamily: 'var(--font-family-suit)'
            }}>
              Size
            </label>
            <Select value={sizeFilter} onValueChange={setSizeFilter}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="sm">Small</SelectItem>
                <SelectItem value="md">Medium</SelectItem>
                <SelectItem value="lg">Large</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col ds-gap-8">
            <label style={{
              fontSize: 'var(--size-sm)',
              fontWeight: 'var(--font-weight-medium)',
              color: 'var(--foreground)',
              fontFamily: 'var(--font-family-suit)'
            }}>
              Icon
            </label>
            <Select value={iconFilter} onValueChange={setIconFilter}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="none">None</SelectItem>
                <SelectItem value="leading">Leading</SelectItem>
                <SelectItem value="trailing">Trailing</SelectItem>
                <SelectItem value="both">Both</SelectItem>
                <SelectItem value="badge">With Badge</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col ds-gap-8">
            <label style={{
              fontSize: 'var(--size-sm)',
              fontWeight: 'var(--font-weight-medium)',
              color: 'var(--foreground)',
              fontFamily: 'var(--font-family-suit)'
            }}>
              State
            </label>
            <Select value={stateFilter} onValueChange={setStateFilter}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="default">Default</SelectItem>
                <SelectItem value="disabled">Disabled</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      )}
      
      <div className="grid ds-gap-24" style={{
        gridTemplateColumns: 'repeat(3, 300px)',
      }}>
        {filteredComponents.map((component) => (
          <ComponentBlock
            key={component.id}
            component={component}
            isSelected={selectedComponentId === component.id}
            onClick={() => onComponentSelect(component)}
          />
        ))}
      </div>
    </div>
  );
}