function Lead() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Lead" style={{ gap: 'var(--spacing-1)' }}>
      <p 
        className="not-italic relative shrink-0 whitespace-nowrap"
        style={{
          fontFamily: 'var(--font-family-suit-medium)',
          fontSize: 'var(--size-sm)',
          lineHeight: '20px',
          color: 'var(--foreground)',
          letterSpacing: '-0.25px'
        }}
      >
        라벨명
      </p>
    </div>
  );
}

function Tail() {
  return <div className="content-stretch flex items-center shrink-0" data-name="Tail" style={{ gap: 'var(--spacing-1)', height: 'var(--spacing-5)', width: '73px' }} />;
}

function Container() {
  return (
    <div 
      className="flex-[1_0_0] min-h-px min-w-px relative w-full" 
      data-name="Container"
      style={{ 
        backgroundColor: 'var(--input-background)',
        borderRadius: 'var(--radius-input)' 
      }}
    >
      <div className="overflow-clip rounded-[inherit] size-full">
        <div 
          className="content-stretch flex flex-col items-start relative size-full" 
          style={{ 
            paddingBottom: 'var(--spacing-3)',
            paddingTop: 'var(--spacing-2-5)',
            paddingLeft: 'var(--spacing-3)',
            paddingRight: 'var(--spacing-3)'
          }}
        >
          <p 
            className="flex-[1_0_0] min-h-px min-w-px not-italic relative w-full"
            style={{
              fontFamily: 'var(--font-family-suit-regular)',
              fontSize: 'var(--size-sm)',
              lineHeight: '20px',
              color: 'var(--muted-foreground)',
              letterSpacing: '-0.25px'
            }}
          >
            Your message
          </p>
        </div>
      </div>
      <div 
        aria-hidden="true" 
        className="absolute border border-solid inset-0 pointer-events-none" 
        style={{ 
          borderColor: 'var(--sidebar-border)',
          borderRadius: 'var(--radius-input)'
        }} 
      />
    </div>
  );
}

export default function TextArea() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Text Area" style={{ gap: 'var(--spacing-2)' }}>
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Label">
        <Lead />
        <Tail />
      </div>
      <Container />
      <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Caption">
        <p 
          className="flex-[1_0_0] min-h-px min-w-px not-italic relative"
          style={{
            fontFamily: 'var(--font-family-suit-regular)',
            fontSize: 'var(--size-xs)',
            lineHeight: '16px',
            color: 'var(--muted-foreground)',
            letterSpacing: '-0.25px'
          }}
        >
          Caption text
        </p>
      </div>
    </div>
  );
}