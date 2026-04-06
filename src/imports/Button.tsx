import svgPaths from "./svg-rrdx7pikid";

export default function Button() {
  return (
    <div 
      className="content-stretch flex items-center justify-center overflow-clip relative size-full" 
      data-name="Button"
      style={{
        backgroundColor: 'var(--muted)',
        gap: 'var(--spacing-1-5)',
        paddingLeft: 'var(--spacing-3)',
        paddingRight: 'var(--spacing-3)',
        paddingTop: 'var(--spacing-2)',
        paddingBottom: 'var(--spacing-2)',
        borderRadius: 'var(--radius-button)'
      }}
    >
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="lead-icon">
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
            <path d={svgPaths.p1b6d7480} fill="var(--muted-foreground)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Label" style={{ paddingLeft: 'var(--spacing-0-5)', paddingRight: 'var(--spacing-0-5)' }}>
        <p 
          className="not-italic relative shrink-0 whitespace-nowrap"
          style={{
            fontFamily: 'var(--font-family-suit-medium)',
            fontSize: 'var(--size-sm)',
            lineHeight: '20px',
            color: 'var(--sidebar-foreground)',
            letterSpacing: '-0.25px'
          }}
        >
          버튼
        </p>
      </div>
      <div 
        className="content-stretch flex items-center justify-center relative shrink-0" 
        data-name="badge"
        style={{
          height: 'var(--spacing-5)',
          minWidth: 'var(--spacing-5)',
          paddingLeft: 'var(--spacing-1)',
          paddingRight: 'var(--spacing-1)',
          borderRadius: 'var(--radius-badge)'
        }}
      >
        <div 
          aria-hidden="true" 
          className="absolute border border-solid inset-0 pointer-events-none" 
          style={{ 
            borderColor: 'var(--border)',
            borderRadius: 'var(--radius-badge)'
          }} 
        />
        <p 
          className="not-italic relative shrink-0 whitespace-nowrap"
          style={{
            fontFamily: 'var(--font-family-suit-medium)',
            fontSize: 'var(--size-xs)',
            lineHeight: '16px',
            color: 'var(--muted-foreground)',
            letterSpacing: '-0.25px'
          }}
        >
          /
        </p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="tail-icon">
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
            <path d={svgPaths.p1b6d7480} fill="var(--muted-foreground)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}