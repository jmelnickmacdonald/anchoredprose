'use client'
import Image from 'next/image'
import { useState } from 'react'

const PIECES = [
  {
    type: 'Satire',
    title: 'Mothers Encouraged to Optimize Their Time',
    meta: "Captain's Log · February 2026",
    pull: '"Time doesn\'t just disappear. It reflects your priorities."',
    excerpt: "In a statement released Monday, national productivity leaders confirmed that every human being receives the same 24 hours in a day, clarifying that mothers who feel otherwise may need to reevaluate how theirs are being used.\n\n\"If you're unloading the dishwasher, you should be completing a series of squats,\" said performance consultant Caleb Rowe. \"If a child is asking why the sky exists at the same time, that's cognitive engagement layered onto physical activation. There's no reason those functions can't operate simultaneously. Anything less is just lazy.\"\n\nRowe acknowledged that some mothers cited sleep deprivation, food preparation for multiple humans with conflicting preferences, and the management of seventeen concurrent emotional crises as potential barriers to optimization. He recommended a planner.\n\nIn related news, a survey of 4,000 mothers found that 94 percent had, at some point in the last week, eaten something cold that was meant to be hot, forgotten what they walked into a room for, and answered a question that was not directed at them. Researchers noted this was simply a Tuesday.\n\nAt press time, mothers across the country were microwaving leftovers, responding to questions about dinosaurs, stepping on unidentified objects, and briefly attempting to determine where, precisely, their identical allotment of time had gone."If you're unloading the dishwasher, you should be completing a series of squats,\" said performance consultant Caleb Rowe. \"If a child is asking why the sky exists at the same time, that's cognitive engagement layered onto physical activation. There's no reason those functions can't operate simultaneously. Anything less is just lazy.\"\n\nAt press time, mothers across the country were microwaving leftovers, responding to questions about dinosaurs, stepping on unidentified objects, and briefly attempting to determine where, precisely, their identical allotment of time had gone.",
  },
  {
    type: 'Essay',
    title: 'The Real Damage of Disinformation',
    meta: 'Opinion · February 2026',
    pull: '"The collapse of trust rarely looks like anger. More often, it looks like indifference."',
    excerpt: "We often treat misinformation as though the danger is believing the wrong thing. That's a real risk. But I've started to think the deeper and more corrosive risk is something else: the erosion of trust itself. Not trust in one institution or one politician, but trust in the entire project of shared reality.\n\nDemocracy does not depend on agreement. It never has. What it depends on is a shared baseline — the idea that facts exist, that evidence matters, that we can disagree about what to do while still agreeing on what is true.\n\nMy neighbour watched a fake video last spring. A politician, apparently confessing to something damning. She was shaken. She sent it to me. I looked it up, found it was fabricated, sent her the fact-check. She was relieved. That time.\n\nSix months later, I sent her a link to a legitimate investigative piece about the same politician — real reporting, real sources. She shrugged it off. \"You can't really know anymore, can you,\" she said.\n\nShe wasn't fooled the second time. She was fatigued. And I think that distinction matters more than we realize. The collapse of trust rarely looks like anger. More often, it looks like indifference, and indifference corrodes quietly. It doesn't march in the streets. It just stops showing up.",
  },
  {
    type: 'Editorial',
    title: 'A Letter from the Annapolis Valley',
    meta: 'September 2025',
    pull: '"The sunlight falls on both. But only one makes it into the picture."',
    excerpt: "In Nova Scotia's Annapolis Valley, mornings drift in gently and unhurried. Mist settles into the hollows between field and fence. At the end of the driveway, my children wait with backpacks as big as they are, and somewhere down the road someone is already pulling into the farm stand, the one with the handwritten sign and the honour-system cash box.\n\nThis is a place with roots deep in farming tradition — fertile soil, abundant harvests, orchards older than anyone living can remember. It is easy to fall in love with the Valley's particular beauty. Easy to photograph. Easy to write about in the soft-focus way that makes people want to move here.\n\nBut this quiet rhythm does not tell the whole story.\n\nThe same roads that carry the farm-to-table crowd carry families who have farmed them for generations and are no longer sure they can afford to stay. The same soil that produces award-winning wines also produces the kind of exhaustion that doesn't make it into the tourism brochures. There are people in this Valley who work two jobs and still can't keep the heat on. There are kids who go to school hungry. There are communities that feel, increasingly, like they are being photographed rather than seen.\n\nThe sunlight falls on both. But only one makes it into the picture.",
    hasImage: true,
    imagePath: '/portfolio/annapolis-valley-quote.png',
  },
  {
    type: 'Personal Essay · Parenting',
    title: 'Working From Home, Preschool Edition',
    meta: 'February 2026',
    pull: '"It is loud, absurd, and occasionally unhinged."',
    excerpt: "There is a very specific kind of panic that sets in when your naked child comes sprinting toward your office door mid-call.\n\nIn that moment, you move quickly. You turn off your camera, redirect the situation with whatever harmless object is within reach — not in anger, but in strategy — and return to the screen as if nothing happened. The object must be light enough not to cause harm, heavy enough to carry intention, and unlikely to shatter on impact. I have curated a small collection in my top drawer for this purpose. One Jolly Rancher included. Finders keepers.\n\nFour children in seven years means our household operates at a volume and pace that resists optimization. There is always someone who needs something, always a snack that has been eaten by the wrong person, always a sock that has vanished in a way that suggests it left of its own accord. The background noise of a working-from-home parent is not the gentle hum of productivity. It is the particular symphony of a house that is very full and very alive.\n\nI have learned to work in the margins. In the twenty minutes before anyone else is awake. In the car while someone is at swimming. In the bathroom, which locks, and which I have come to regard as a satellite office. You find the cracks and you pour yourself into them. And somehow, improbably, things get done.\n\nThe days are loud and absurd and occasionally unhinged. I wouldn't trade them.",
  },
  {
    type: 'Personal Essay',
    title: 'For a Minute',
    meta: 'February 2026',
    pull: '"It just looked like she had it all figured out for a minute."',
    excerpt: "It's funny how quickly you can look at someone and feel like they're doing it better than you.\n\nI ran into a mom from my kids' school at the grocery store yesterday. I hadn't seen her in a while and for a second I almost didn't recognize her. Hair done, nails done, just put together in a way that felt worlds apart from the last time I'd seen her — at pickup, both of us looking like we'd survived something.\n\nWe talked for a few minutes. She seemed good. She seemed, honestly, great. And I drove home feeling that particular kind of small that you feel when someone else appears to be managing something you can't quite get a handle on.\n\nLater that night she texted me. She'd seen me at the store too, she said. She'd almost said something about how I always seem so calm, so sorted. How did I manage it all, she wanted to know.\n\nI stared at my phone for a long time.\n\nI had been standing in that aisle in yesterday's clothes, mentally tallying whether we had enough pasta to avoid a second trip, three days post-shower, holding a coupon I'd forgotten to use. She thought I looked calm. I thought she looked like she had it together.\n\nNeither of us was seeing clearly. We were both just catching each other in a moment, and making a story out of it. It just looked like she had it all figured out for a minute. I imagine it looked the same from where she was standing.",
    hasImage: true,
    imagePath: '/portfolio/for-a-minute-quote.png',
  },
  {
    type: 'Op-Ed · Politics & Civic Engagement',
    title: 'Echo Chambers of Insanity',
    meta: 'February 2026',
    pull: '"We\'re living in an echo chamber of insanity, and it\'s officially time that we break free."',
    excerpt: "Canadian politics have gone straight to hell in a handbasket, and frankly, I'm over it.\n\nMy partner and I care deeply about our community, local businesses, infrastructure and the well-being of the people around us. But most importantly, we care about the health, rights, and dignity of others. These days, it feels like we care too much — and right now, that feels like a curse.\n\nThe current political landscape is pretty darn icky. It's like every conversation has been overtaken by an out-of-control game of telephone, where everyone is yelling at each other from their corners of the internet, trying to one-up each other with the latest smear or conspiracy. Nobody is actually talking to each other. Everyone is performing for an audience that already agrees with them.\n\nI've started to notice the moment a conversation shifts from exchange to spectacle. There's a particular quality to it — the way someone stops listening and starts loading. The way a question gets answered with a talking point. The way nuance gets treated like weakness.\n\nI don't know how to fix Canadian politics. I'm not sure anyone does. But I do know that the people I trust most — the ones whose judgment I actually respect — are the ones who are willing to sit with complexity. Who can say \"I don't know\" without losing themselves. Who treat other people's disagreement as information rather than threat.\n\nWe're living in an echo chamber of insanity, and it's officially time that we break free. Not by getting louder. By getting curious.",
  },
]

export default function WritingPage() {
  const [expanded, setExpanded] = useState(null)
  return (
    <div className="subpage" style={{ backgroundImage: "url('/creamseashellfloral.jpg')", backgroundSize: '500px', backgroundBlendMode: 'normal' }}>
      <nav className="subpage-nav">
        <a href="/" className="logo"><Image src="/logo.png" alt="Anchored Prose" width={200} height={50} style={{ height: 46, width: 'auto' }} /></a>
        <a href="/#portfolio" className="back-link">← Back to Portfolio</a>
      </nav>
      <div className="subpage-banner">
        <Image src="/banner.jpg" alt="" fill style={{ objectFit: 'cover', objectPosition: 'center 40%' }} />
        <div className="subpage-banner-overlay" />
        <div className="subpage-banner-title">
          <div className="section-label" style={{ color: 'var(--gold)', justifyContent: 'center', marginBottom: '12px' }}>Portfolio</div>
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
