import { useState } from 'react';
import { ComponentSidebar } from './component-sidebar';
import { ComponentGrid } from './component-grid';
import { PropertiesPanel } from './properties-panel';

export type ComponentCategory = 'all' | 'input' | 'textarea' | 'dropdown' | 'button' | 'toggle-accordion' | 'etc';

export interface VariantProperty {
  label: string;
  value: string | boolean;
  type?: 'text' | 'boolean' | 'icon';
}

export interface ModeInfo {
  label: string;
  value: string;
}

export interface ColorInfo {
  name: string;
  value: string;
}

export interface ComponentInfo {
  id: string;
  category: ComponentCategory;
  name: string;
  variants: string[];
  variantProperties?: VariantProperty[];
  component: React.ReactNode;
  cssProperties: Record<string, string>;
  modes?: ModeInfo[];
  colors?: ColorInfo[];
  tailwindClasses: string[];
  reactCode: string;
}

export function SettingsLibrary() {
  const [selectedCategory, setSelectedCategory] = useState<ComponentCategory>('all');
  const [selectedComponent, setSelectedComponent] = useState<ComponentInfo | null>(null);

  return (
    <div className="flex h-screen bg-background">
      {/* Left Sidebar - Filter */}
      <ComponentSidebar
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      {/* Center - Component Grid */}
      <ComponentGrid
        selectedCategory={selectedCategory}
        onComponentSelect={setSelectedComponent}
        selectedComponentId={selectedComponent?.id}
      />

      {/* Right Panel - Properties */}
      <PropertiesPanel selectedComponent={selectedComponent} />
    </div>
  );
}