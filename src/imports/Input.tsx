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

function Label() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center relative w-full" style={{ paddingLeft: 'var(--spacing-1)', paddingRight: 'var(--spacing-1)' }}>
          <p 
            className="not-italic relative shrink-0 whitespace-nowrap"
            style={{
              fontFamily: 'var(--font-family-suit-regular)',
              fontSize: 'var(--size-sm)',
              lineHeight: '20px',
              color: 'var(--muted-foreground)',
              letterSpacing: '-0.25px'
            }}
          >
            Placeholder text
          </p>
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="container" style={{ gap: 'var(--spacing-0-5)' }}>
      <Label />
    </div>
  );
}

function Badge() {
  return (
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
        0 / 00
      </p>
    </div>
  );
}

function Container1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div 
          className="content-stretch flex items-center justify-center relative w-full" 
          style={{ 
            gap: 'var(--spacing-1-5)',
            paddingLeft: 'var(--spacing-2)',
            paddingRight: 'var(--spacing-2)',
            paddingTop: 'var(--spacing-1-5)',
            paddingBottom: 'var(--spacing-1-5)'
          }}
        >
          <Container2 />
          <Badge />
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div 
      className="relative shrink-0 w-full" 
      data-name="Container"
      style={{ 
        backgroundColor: 'var(--input-background)',
        borderRadius: 'var(--radius-input)' 
      }}
    >
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] w-full">
        <Container1 />
      </div>
      <div 
        aria-hidden="true" 
        className="absolute border border-solid inset-0 pointer-events-none" 
        style={{ 
          borderColor: 'var(--border)',
          borderRadius: 'var(--radius-input)'
        }} 
      />
    </div>
  );
}

export default function Input() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Input" style={{ gap: 'var(--spacing-2)' }}>
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Input Label">
        <Lead />
        <Tail />
      </div>
      <Container />
    </div>
  );
}