import { ComponentInfo } from './settings-library';

interface ComponentBlockProps {
  component: ComponentInfo;
  isSelected: boolean;
  onClick: () => void;
}

export function ComponentBlock({ component, isSelected, onClick }: ComponentBlockProps) {
  return (
    <div
      onClick={onClick}
      className="flex flex-col items-center justify-center p-6 rounded-lg border transition-shadow hover:shadow-card"
      style={{
        width: '300px',
        minHeight: '200px',
        backgroundColor: 'var(--card)',
        borderColor: isSelected ? 'var(--primary)' : 'var(--border)',
        borderWidth: isSelected ? '2px' : '1px',
        borderRadius: 'var(--radius-card)',
        cursor: 'pointer',
        boxShadow: isSelected ? '0px 4px 12px 0px rgba(67, 125, 252, 0.25)' : 'none'
      }}
    >
      <div 
        className="flex-1 flex items-center justify-center"
        style={{ width: '238px' }}
        onClick={(e) => e.stopPropagation()}
      >
        {component.component}
      </div>
      
      <div className="mt-4 text-center w-full">
        <p style={{
          fontSize: 'var(--size-sm)',
          fontWeight: 'var(--font-weight-medium)',
          color: 'var(--foreground)',
          fontFamily: 'var(--font-family-suit)'
        }}>
          {component.name}
        </p>
        {component.variants.length > 0 && (
          <p style={{
            fontSize: 'var(--size-xs)',
            color: 'var(--muted-foreground)',
            marginTop: '4px',
            fontFamily: 'var(--font-family-suit)'
          }}>
            {component.variants.length} variant{component.variants.length > 1 ? 's' : ''}
          </p>
        )}
      </div>
    </div>
  );
}