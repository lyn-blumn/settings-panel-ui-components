export default function Badge() {
  return (
    <div 
      className="relative size-full" 
      data-name="Badge"
      style={{
        backgroundColor: 'var(--badge-blue-bg)',
        borderRadius: 'var(--radius-button)'
      }}
    >
      <div 
        className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full"
        style={{ padding: 'var(--spacing-1)' }}
      >
        <div className="content-stretch flex items-center relative shrink-0" data-name="Frame" style={{ paddingLeft: 'var(--spacing-1)', paddingRight: 'var(--spacing-1)' }}>
          <p 
            className="not-italic relative shrink-0 whitespace-nowrap"
            style={{
              fontFamily: 'var(--font-family-suit-medium)',
              fontSize: 'var(--size-xs)',
              lineHeight: '16px',
              color: 'var(--badge-blue-text)',
              letterSpacing: '-0.25px'
            }}
          >
            뱃지
          </p>
        </div>
      </div>
      <div 
        aria-hidden="true" 
        className="absolute border border-solid inset-0 pointer-events-none" 
        style={{ 
          borderColor: 'var(--sidebar-border)',
          borderRadius: 'var(--radius-button)'
        }} 
      />
    </div>
  );
}