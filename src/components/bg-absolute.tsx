const bgClass = 'absolute text-9xl font-bold tracking-tighter animate-pulse text-foreground/10'

function StackedText({ text, gap }: { text: string; gap: string }) {
  return (
    <div>
      <h1>{text}</h1>
      <h1 style={{ marginTop: gap }}>{text}</h1>
      <h1 style={{ marginTop: gap }}>{text}</h1>
    </div>
  )
}

export function HomeBg() {
  return (
    <div className={bgClass} aria-hidden="true">
      <StackedText text="AYUSH" gap="-24.5%" />
    </div>
  )
}

export function ProjectsBg() {
  return (
    <div className={bgClass} aria-hidden="true">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-12">
        {[0, 1, 2].map((i) => (
          <div className="mt-6" key={i}>
            <StackedText text="WORK" gap="-31%" />
            <StackedText text="CODE" gap="-31%" />
            <StackedText text="PLAY" gap="-31%" />
          </div>
        ))}
      </div>
    </div>
  )
}

export function ContactBg() {
  return (
    <div className={bgClass} aria-hidden="true">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
        <div>
          <h1>SAY</h1>
          <h1 style={{ marginTop: '-41%' }}>SAY</h1>
          <h1 style={{ marginTop: '-41%' }}>SAY</h1>
        </div>
        <div>
          <h1>HI!</h1>
          <h1 style={{ marginTop: '-41%' }}>HI!</h1>
          <h1 style={{ marginTop: '-41%' }}>HI!</h1>
        </div>
      </div>
    </div>
  )
}
