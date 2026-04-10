'use client'
import Image from 'next/image'
import { useState } from 'react'

const PIECES = [
  {
    type: 'Satire',
    title: 'Mothers Encouraged to Optimize Their Time',
    meta: "Captain's Log · February 2026",
    pull: '"Time doesn\'t just disappear. It reflects your priorities."',
    excerpt: "In a statement released Monday, national productivity leaders confirmed that every human being receives the same 24 hours in a day, clarifying that mothers who feel otherwise may need to reevaluate how theirs are being used.\n\nThe announcement was delivered during a virtual seminar on domestic efficiency led by performance consultant Caleb Rowe, who argued that time is not scarce but poorly structured.\n\n\"Time doesn't just 'disappear,'\" Rowe said. \"It reflects your priorities.\"\n\nAccording to Rowe, many household routines are rife with untapped performance potential. Tasks typically treated as singular activities, he explained, can be layered for maximal output.\n\n\"If you're unloading the dishwasher, you should be completing a series of squats,\" he said. \"If a child is asking why the sky exists at the same time, that's cognitive engagement layered onto physical activation. There's no reason those functions can't operate simultaneously. Anything less is just lazy.\"\n\nRowe acknowledged that some mothers cited sleep deprivation, food preparation for multiple humans with conflicting preferences, and the management of seventeen concurrent emotional crises as potential barriers to optimization. He recommended a planner.\n\nAt press time, mothers across the country were microwaving leftovers, responding to questions about dinosaurs, stepping on unidentified objects, and briefly attempting to determine where, precisely, their identical allotment of time had gone.\n\nIndustry representatives reiterated that everyone receives the same 24 hours each day and expressed optimism that mothers will soon begin experiencing theirs in full.",
  },
  {
    type: 'Essay',
    title: 'The Real Damage of Disinformation',
    meta: "Captain's Log · February 2026",
    pull: '"The collapse of trust rarely looks like anger. More often, it looks like indifference."',
    excerpt: "My grandmother is the most stubborn fact-checker I know. She once called our local news station because they reported that a city council meeting was Tuesday when it was actually Wednesday. She wasn't planning to attend. She simply believed people deserved correct information. So when she sent me a video of a politician confessing to corruption, I assumed she had already checked it.\n\nI watched it, and honestly, I believed it at first. The lighting looked right. The voice sounded right. Even the pauses felt natural. Then something seemed off. The blinking didn't match the cadence. The timing slipped. The video wasn't real. It had been generated with artificial intelligence — his face, his voice, words he never said.\n\nWhen I showed her the proof, she shook her head. \"I saw him say it,\" she insisted. A few weeks later, a real scandal broke about a different official. She barely reacted. \"How do we even know anymore?\" she said, and changed the subject.\n\nWe often treat misinformation as though the danger is believing the wrong thing. The deeper risk is the erosion of trust. Democracy does not depend on agreement. It depends on a shared baseline of reality. We can argue about policy. We can disagree about leadership. But if we cannot agree on what happened in the first place, the structure weakens.\n\nThe collapse of trust rarely looks like anger. More often, it looks like indifference, and indifference corrodes quietly. A functioning democracy depends on people believing truth is knowable enough to act on. When we assume every claim is manipulated and every source is biased beyond repair, participation shrinks.\n\nWhat helps is discernment rather than cynicism. There's a difference between skepticism and collapse. Skepticism asks, \"What's the source?\" Collapse says, \"Nothing is real.\"\n\nTrust doesn't live on platforms. It lives in relationships.",
  },
  {
    type: 'Essay',
    title: 'A Letter from the Annapolis Valley',
    meta: "Captain's Log · September 2025",
    pull: '"The sunlight falls on both. But only one makes it into the picture."',
    excerpt: "In Nova Scotia's Annapolis Valley, mornings drift in gently and unhurried. Mist settles into the hollows between field and fence. At the end of the driveway, my children wait with backpacks as big as they are. Above them, a rosy glow gradually spreads across the South Mountain. Their school bus winds down the road while farm trucks packed with apples head for market. This is a place with roots deep in farming tradition, where fertile soil gives rise to orchards, fields, and harvests abundant enough to fill roadside stands.\n\nI drive my youngest to half-day preschool and when I return home, the house is already warm, our promise to resist turning on the heat this early in the season quietly broken. I open my laptop; the internet is steady enough as I work. Quiet comforts, but not ones I take for granted.\n\nI know this comfort is not universal. It is a rhythm made possible only by privilege, one that spares me from the harder questions many of my neighbours face daily. What if there were no preschool spots or no jobs flexible enough to let me slip away mid-afternoon? What if the choice became filling the oil tank or filling the fridge? For many families in the Valley, these are not hypotheticals but relentless equations.\n\nIn the Valley, this survival math shows itself in the rush when word spreads that a food rescue has arrived. Cars line gravel roads, eager to see what is available. Parents with toddlers, teenagers headed home from school, seniors shuffling up the potholed shoulder. It does not matter what arrives, only that something does.\n\nAnd still the Valley looks beautiful. Tourists stop for photographs with the tide in the background, never knowing how many cupboards nearby sit bare. That is the contradiction of this place: systems that celebrate its abundance while neglecting its need. The sunlight falls on both, but only one makes it into the picture.",
  },
  {
    type: 'Humour',
    title: 'Working From Home, Preschool Edition',
    meta: "Captain's Log · February 2026",
    pull: '"I have curated a small collection in my top drawer for this purpose. One Jolly Rancher included."',
    excerpt: "There is a very specific kind of panic that sets in when your naked child comes sprinting toward your office door mid-call.\n\nIn that moment, you move quickly. You turn off your camera, redirect the situation with whatever harmless object is within reach (not in anger, but in strategy) and return to the screen as if nothing happened. The object must be light enough not to cause harm, heavy enough to carry intention, and unlikely to shatter on impact. I have curated a small collection in my top drawer for this purpose. One Jolly Rancher included. Finders keepers.\n\nOn a recent Monday morning, I broke up a fight between two children who both wanted to press play on the same show. Not because they wanted different things, but because they both wanted the power of initiation.\n\nMoments later, there was a crash. One child had startled the dog, who knocked over a box of mason jars while she rollerbladed through the kitchen wearing plastic Dracula teeth. She had been waiting for her bagel to pop. When she fell backward, the bagel remained upright. \"It's okay,\" she said, fangs crooked. \"Bagel's fine. Me too.\"\n\nFour children in seven years means constant motion and constant need. It is loud, absurd, and occasionally unhinged.\n\nBecause one day the office door will stay closed. The microwave will be used responsibly. The dogs will nap uninterrupted. And the house will be quiet in a way that feels less like peace and more like absence.\n\nFor now, though, the calls resume. The door opens again. Someone is always mid-crisis or mid-discovery or mid-bagel. And I keep a small pile of soft projectiles in my desk drawer, just in case.",
  },
  {
    type: 'Personal Essay',
    title: 'For a Minute',
    meta: "Captain's Log · November 2025",
    pull: '"It just looked like she had it all figured out for a minute."',
    excerpt: "It's funny how quickly you can look at someone and feel like they're doing it better than you.\n\nI ran into a mom from my kids' school at the grocery store yesterday. I hadn't seen her in a while and for a second I almost didn't recognize her. Hair done, nails done, just put together in a way that felt worlds apart from the last time I'd seen her — at pickup, both of us looking like we'd survived something.\n\nWe talked for a few minutes. She seemed good. She seemed, honestly, great. And I drove home feeling that particular kind of small that you feel when someone else appears to be managing something you can't quite get a handle on.\n\nLater that night she texted me. She'd seen me at the store too, she said. She'd almost said something about how I always seem so calm, so sorted. How did I manage it all, she wanted to know.\n\nI stared at my phone for a long time.\n\nI had been standing in that aisle in yesterday's clothes, mentally tallying whether we had enough pasta to avoid a second trip, three days post-shower, holding a coupon I'd forgotten to use. She thought I looked calm. I thought she looked like she had it together.\n\nNeither of us was seeing clearly. We were both just catching each other in a moment, and making a story out of it. It just looked like she had it all figured out for a minute. I imagine it looked the same from where she was standing.",
  },
  {
    type: 'Opinion',
    title: 'Echo Chambers of Insanity',
    meta: "Captain's Log · October 2025",
    pull: '"Nobody is actually talking to each other. Everyone is performing for an audience that already agrees with them."',
    excerpt: "Canadian politics have gone straight to hell in a handbasket, and frankly, I'm over it.\n\nMy partner and I care deeply about our community, local businesses, infrastructure and the well-being of the people around us. But most importantly, we care about the health, rights, and dignity of others. These days, it feels like we care too much — and right now, that feels like a curse.\n\nThe current political landscape is pretty darn icky. It's like every conversation has been overtaken by an out-of-control game of telephone, where everyone is yelling at each other from their corners of the internet, trying to one-up each other with the latest smear or conspiracy. Nobody is actually talking to each other. Everyone is performing for an audience that already agrees with them.\n\nI've started to notice the moment a conversation shifts from exchange to spectacle. There's a particular quality to it — the way someone stops listening and starts loading. The way a question gets answered with a talking point. The way nuance gets treated like weakness.\n\nWe're living in an echo chamber of insanity, and it's officially time that we break free. Not by getting louder. By getting curious.",
  },
]

export default function WritingPage() {
  const [expanded, setExpanded] = useState(null)

  return (
    <div className="subpage">
      <nav className="subpage-nav">
        <a href="/" className="logo">
          <Image src="/logo.png" alt="Anchored Prose" width={200} height={50} style={{ height: 46, width: 'auto' }} />
        </a>
        <a href="/#portfolio" className="back-link">← Back to Portfolio</a>
      </nav>

      <div className="subpage-banner">
        <div className="subpage-banner-overlay" />
        <div className="subpage-banner-title">
          <div className="section-label" style={{ color: 'var(--gold)', justifyContent: 'center', marginBottom: '12px' }}>Portfolio</div>
          <h1><span className="script-accent">Writing</span></h1>
        </div>
      </div>

      <div style={{ background: '#F5F0E8', position: 'relative', zIndex: 10 }}>
          <div className="subpage-portfolio-grid">
          {PIECES.map((p, i) => (
            <div key={i} className="portfolio-card" onClick={() => setExpanded(expanded === i ? null : i)}>
              <div className="portfolio-type">{p.type}</div>
              <h3>{p.title}</h3>
              <p className="portfolio-meta">{p.meta}</p>
              <p className="portfolio-pull">{p.pull}</p>
              {expanded === i && (
                <div className="portfolio-excerpt">
                  {p.excerpt.split('\n\n').map((para, j) => (
                    <p key={j}>{para}</p>
                  ))}
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
    </div>
  )
}
