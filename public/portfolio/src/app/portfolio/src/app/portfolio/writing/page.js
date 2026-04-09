'use client'
import Image from 'next/image'
import { useState } from 'react'

const PIECES = [
  {
    type: 'Satire',
    title: 'Mothers Encouraged to Optimize Their Time',
    meta: "Captain's Log · February 2026",
    pull: '"Time doesn\'t just disappear. It reflects your priorities."',
    excerpt: "In a statement released Monday, national productivity leaders confirmed that every human being receives the same 24 hours in a day, clarifying that mothers who feel otherwise may need to reevaluate how theirs are being used.\n\n\"If you're unloading the dishwasher, you should be completing a series of squats,\" said performance consultant Caleb Rowe. \"If a child is asking why the sky exists at the same time, that's cognitive engagement layered onto physical activation. There's no reason those functions can't operate simultaneously. Anything less is just lazy.\"\n\nAt press time, mothers across the country were microwaving leftovers, responding to questions about dinosaurs, stepping on unidentified objects, and briefly attempting to determine where, precisely, their identical allotment of time had gone.",
  },
  {
    type: 'Essay',
    title: 'The Real Damage of Disinformation',
    meta: 'Opinion · February 2026',
    pull: '"The collapse of trust rarely looks like anger. More often, it looks like indifference."',
    excerpt: "We often treat misinformation as though the danger is believing the wrong thing. The deeper risk is the erosion of trust. Democracy does not depend on agreement. It depends on a shared baseline of reality.\n\nWhen my neighbour watched that fake video, she was fooled because it looked real. When she later dismissed a legitimate scandal, she wasn't fooled at all. She was fatigued. And I think that distinction matters more than we realize.\n\nThe collapse of trust rarely looks like anger. More often, it looks like indifference, and indifference corrodes quietly.",
  },
  {
    type: 'Editorial',
    title: 'A Letter from the Annapolis Valley',
    meta: 'September 2025',
    pull: '"The sunlight falls on both. But only one makes it into the picture."',
    excerpt: "In Nova Scotia's Annapolis Valley, mornings drift in gently and unhurried. Mist settles into the hollows between field and fence. At the end of the driveway, my children wait with backpacks as big as they are.\n\nThis is a place with roots deep in farming tradition, where fertile soil gives rise to orchards, fields, and harvests abundant enough to fill roadside stands. But this quiet rhythm does not tell the whole story of the Valley.",
    hasImage: true,
    imagePath: '/portfolio/annapolis-valley-quote.png',
  },
  {
    type: 'Personal Essay · Parenting',
    title: 'Working From Home, Preschool Edition',
    meta: 'February 2026',
    pull: '"It is loud, absurd, and occasionally unhinged."',
    excerpt: "There is a very specific kind of panic that sets in when your naked child comes sprinting toward your office door mid-call.\n\nIn that moment, you move quickly. You turn off your camera, redirect the situation with whatever harmless object is within reach — not in anger, but in strategy — and return to the screen as if nothing happened. The object must be light enough not to cause harm, heavy enough to carry intention, and unlikely to shatter on impact. I have curated a small collection in my top drawer for this purpose. One Jolly Rancher included. Finders keepers.",
  },
  {
    type: 'Personal Essay',
    title: 'For a Minute',
    meta: 'February 2026',
    pull: '"It just looked like she had it all figured out for a minute."',
    excerpt: "It's funny how quickly you can look at someone and feel like they're doing it better than you.\n\nI ran into a mom from my kids' school at the grocery store yesterday. I hadn't seen her in a while and for a second I almost didn't recognize her. Hair done, nails done, just put together in a way that felt worlds apart from the last time I'd seen her.",
    hasImage: true,
    imagePath: '/portfolio/for-a-minute-quote.png',
  },
  {
    type: 'Op-Ed · Politics & Civic Engagement',
    title: 'Echo Chambers of Insanity',
    meta: 'February 2026',
    pull: '"We\'re living in an echo chamber of insanity, and it\'s officially time that we break free."',
    excerpt: "Canadian politics have gone straight to hell in a handbasket, and frankly, I'm over it. My partner and I care deeply about our community, local businesses, infrastructure and the well-being of the people around us. But, most importantly, we care about the health, rights, and dignity of others.\n\nThe current political landscape is pretty darn icky. It's like every conversation has been overtaken by an out-of-control game of telephone, where everyone is yelling at each other from their corners of the internet.",
  },
]

export default function WritingPage() {
  const [expanded, setExpanded] = useState(null)
  return (
    <div className="subpage">
      <nav className="subpage-nav">
        <a href="/" className="logo"><Image src="/logo.png" alt="Anchored Prose" width={200} height={50} style={{ height: 46, width: 'auto' }} /></a>
        <a href="/#portfolio" className="back-link">← Back to Portfolio</a>
      </nav>
      <div className="subpage-banner">
        <Image src="/banner.jpg" alt="" fill style={{ objectFit: 'cover', objectPosition: 'center 40%' }} />
        <div className="subpage-banner-overlay" />
        <div className="subpage-banner-title">
          <div className="section-label" style={{ color: 'var(--gold)', justifyContent: 'center' }}>Portfolio</div>
          <h1><span className="script-accent">Writing</span></h1>
        </div>
      </div>
      <div className="subpage-portfolio-grid">
        {PIECES.map((p, i) => (
          <div key={i} className="portfolio-card" onClick={() => setExpanded(expanded === i ? null : i)} tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && setExpanded(expanded === i ? null : i)}>
            <div className="portfolio-type">{p.type}</div>
            <h3>{p.title}</h3>
            <p className="portfolio-meta">{p.meta}</p>
            {p.hasImage && <div style={{ margin: '1rem 0' }}><Image src={p.imagePath} alt={p.title} width={600} height={400} style={{ width: '100%', height: 'auto' }} /></div>}
            <p className="portfolio-pull">{p.pull}</p>
            {expanded === i && (
              <div className="portfolio-excerpt">
                {p.excerpt.split('\n\n').map((para, j) => <p key={j}>{para}</p>)}
              </div>
            )}
            <span className="portfolio-link">{expanded === i ? 'Close' : 'Read excerpt'}</span>
          </div>
        ))}
      </div>
      <div className="subpage-cta-bar">
        <p>Like what you see? <a href="/#contact">Let&apos;s work together.</a></p>
      </div>
    </div>
  )
}
