import { ComponentCategory } from './settings-library';
import { Layers, Type, ChevronDown, ToggleLeft, MoreHorizontal } from 'lucide-react';

interface ComponentSidebarProps {
  selectedCategory: ComponentCategory;
  onCategoryChange: (category: ComponentCategory) => void;
}

const categories = [
  { id: 'all' as ComponentCategory, label: 'All Components', icon: Layers },
  { id: 'input' as ComponentCategory, label: 'Input', icon: Type },
  { id: 'textarea' as ComponentCategory, label: 'Text Area', icon: Type },
  { id: 'dropdown' as ComponentCategory, label: 'Dropdown', icon: ChevronDown },
  { id: 'toggle-accordion' as ComponentCategory, label: 'Toggle + Accordion', icon: ToggleLeft },
  { id: 'etc' as ComponentCategory, label: 'Etc.', icon: MoreHorizontal },
];

export function ComponentSidebar({ selectedCategory, onCategoryChange }: ComponentSidebarProps) {
  return (
    <div 
      className="w-60 border-r border-border bg-sidebar flex flex-col"
      style={{ fontFamily: 'var(--font-family-suit)' }}
    >
      <div className="p-6 border-b border-sidebar-border">
        <h2 style={{ 
          fontSize: 'var(--size-xl)',
          fontWeight: 'var(--font-weight-semibold)',
          color: 'var(--sidebar-foreground)'
        }}>
          Components
        </h2>
      </div>
      
      <nav className="flex-1 p-3">
        {categories.map((category) => {
          const Icon = category.icon;
          const isSelected = selectedCategory === category.id;
          
          return (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-md transition-colors border"
              style={{
                backgroundColor: 'transparent',
                borderColor: isSelected ? 'var(--primary)' : 'transparent',
                borderWidth: isSelected ? '2px' : '1px',
                color: isSelected ? 'var(--primary)' : 'var(--sidebar-foreground)',
                fontSize: 'var(--size-sm)',
                fontWeight: 'var(--font-weight-medium)',
                boxShadow: isSelected ? '0px 2px 8px 0px rgba(67, 125, 252, 0.2)' : 'none',
                marginBottom: '2px'
              }}
            >
              <Icon size={18} />
              <span>{category.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}