import svgPaths from "./svg-87td1dyhci";

function Lead() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Lead" style={{ gap: 'var(--spacing-1)' }}>
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
        라벨명
      </p>
    </div>
  );
}

function Handle() {
  return <div className="rounded-[9999px] shrink-0 size-[14px]" data-name="Handle" style={{ backgroundColor: 'var(--background)', boxShadow: 'var(--elevation-sm)' }} />;
}

function Tail() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Tail" style={{ gap: 'var(--spacing-1)' }}>
      <div 
        className="content-stretch flex items-center justify-end relative rounded-[9999px] shrink-0" 
        data-name="Switch"
        style={{
          backgroundColor: 'var(--chart-3)',
          padding: 'var(--spacing-0-5) var(--spacing-0-5) var(--spacing-0-5) var(--spacing-1)',
          width: 'var(--spacing-8)'
        }}
      >
        <Handle />
      </div>
      <div 
        className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 size-[24px]" 
        data-name="tail-icon"
        style={{
          backgroundColor: 'transparent',
          minHeight: 'var(--spacing-6)',
          minWidth: 'var(--spacing-6)',
          borderRadius: 'var(--radius-button)'
        }}
      >
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="lead-icon">
          <div className="absolute inset-[34.26%_23.48%_33.33%_23.48%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.48527 5.18548">
              <path d={svgPaths.p3cfa0180} fill="var(--sidebar-foreground)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function InputLabel() {
  return (
    <div 
      className="content-stretch flex items-center justify-between relative size-full" 
      data-name="Input Label"
      style={{
        paddingBottom: 'var(--spacing-4)',
        paddingTop: 'var(--spacing-3)',
        paddingLeft: 'var(--spacing-4)',
        paddingRight: 'var(--spacing-4)'
      }}
    >
      <div 
        aria-hidden="true" 
        className="absolute border-b border-solid border-t-4 inset-0 pointer-events-none" 
        style={{ borderColor: 'var(--border)' }}
      />
      <Lead />
      <Tail />
    </div>
  );
}