'use client'
import Image from 'next/image'
import { useState } from 'react'

const SERVICES = [
  {
    title: 'Wedding & Event Speeches',
    tagline: "The perfect words that sound just like you on your best day — the ones you couldn't quite find on your own.",
    desc: "I've got you when it comes to toasts, vows, ceremony scripts, and full wedding writing. Whether you're the best man, a couple building a ceremony from scratch, or a parent feeling all the feels, we'll work through it together and I'll write words that hold the room and hold up over time.",
  },
  {
    title: 'Keynotes & Public Speaking',
    tagline: 'From the conference stage to the commencement address, a talk that holds a room.',
    desc: "Keynotes, TEDx talks, professional development sessions, panel prep — whatever you need to deliver, I work with founders, educators, and leaders to find the through-line and write the words that make their expertise land.",
  },
  {
    title: 'Educational Content',
    tagline: 'Thoughtful learning deserves thoughtful language.',
    desc: 'Curriculum, lesson materials, course development, and learning experience writing grounded in structure, clarity, and respect for learners. From K-12 to professional development to full online course builds.',
  },
  {
    title: 'Brand & Content Strategy',
    tagline: "You've built something worth talking about — let's make sure the world knows it.",
    desc: "I work with small businesses, realtors, creatives, and entrepreneurs to figure out who they are and why they're worth noticing, then build the words, the web copy, the content strategy, and sometimes the website itself to show it. Whether you need a brand voice guide, a full site rewrite, newsletter copy and design, a content plan you'll actually follow, or all of the above, we start with the whole picture and build from there.",
  },
]

const PORTFOLIO = {
  celebrations: [
    {
      type: 'Wedding Officiant',
      title: 'My Sister, Her Perfect Match',
      meta: 'Destination Wedding · Punta Cana, Dominican Republic',
      pull: "\"I'm the type B minus to Rebecca's Type A.\"",
      excerpt: "Welcome, welcome, beach lovers and party enthusiasts! Can we just take a moment to appreciate how beautiful this backdrop is, how stunning our bride and groom look and how clean my children are for a change?\n\nFor those of you who don't know me, I'm Julianna, immensely proud sister of the bride, chronic thorn in her side, and forever accomplice. I spend my days in equal parts chasing kids, cursing at farm animals, and questioning many of my life choices. Meanwhile, Rebecca is off being crowned a world champion fitness competitor, owning and operating an incredible business, being a thoughtful and generous daughter, sister and friend, and looking fabulous doing it all.\n\nNaturally, I set my bar considerably lower. I'm the type B minus to Rebecca's Type A, and I am simply thrilled to be standing here today in a dress and heels instead of my usual muck-covered rubber boots, celebrating my sister and her perfect match.",
    },
    {
      type: 'Best Man Toast',
      title: 'The Turn',
      meta: 'Twenty-Four Years of Friendship',
      pull: '"He still can\'t assemble furniture, but he shows up."',
      excerpt: "I've known Matt for twenty-four years, which means I've seen every version of this man. The kid who ate an entire sleeve of Oreos before a cross-country meet and threw up at the starting line. The guy who once tried to assemble an IKEA bookshelf without the instructions and ended up with something that looked like modern art and held exactly zero books.\n\nHere's the thing about Claire. She knows exactly what she's getting into. And she chose him anyway. Fully informed, eyes wide open. That's not a small thing.\n\nHe still can't assemble furniture, but he shows up. And that's the part that matters.",
    },
    {
      type: 'Father of the Bride',
      title: 'Letting Go',
      meta: 'What Nobody Warns You About',
      pull: '"The job was never to keep them."',
      excerpt: "Here's the thing nobody warns you about when you become a parent. You spend years becoming the world's leading expert on one small human: what makes them laugh, what scares them, which breakfast battles aren't worth fighting, the exact pitch of the cry that means something actually hurts versus the one that means her sister looked at her wrong.\n\nAnd then one day, someone else starts learning those things too. And you realize the job was never to keep them. The job was to make sure that when they found their person, they'd know.\n\nShe doesn't need me to give her away. She's not mine to give. But I am so honoured to watch.",
    },
    {
      type: 'Wedding Vows',
      title: 'The Night I Knew',
      meta: 'Autumn Wedding · Prince Edward Island',
      pull: '"I don\'t ever want to come home to a house where this isn\'t happening."',
      excerpt: "I knew I wanted this the night you fell asleep on the couch with both dogs on top of you and the TV still going, and I sat there for a full ten minutes just looking at you, thinking: I don't ever want to come home to a house where this isn't happening.\n\nI'm not going to promise you perfection. I'm going to forget things. I'm going to load the dishwasher wrong. I'm going to need you to tell me what's wrong instead of saying \"I'm fine\" because I will believe you every single time.\n\nBut here's what I can promise: I will always be in your corner. I will always choose us, even when us is hard. I will love you quietly, stubbornly, and without keeping score.",
    },
    {
      type: 'Choral Reading · Wedding Ceremony',
      title: 'Oh, the Places You\'ll Go',
      meta: 'Inspired by Dr. Seuss\' Oh, the Places You\'ll Go!',
      pull: '"Oh, the places you\'ll go, the things you will do, a lifetime of joy is waiting for you."',
      excerpt: "Congratulations, today is the big day!\nYou've found your partner to help you pave your way.\nThe world is before you, it's open and wide,\nFilled with adventures you'll take in stride.\n\nAs you step into marriage, with love in your hearts,\nKnow there will be challenges, but that's just the start.\nYou'll face the unknown, with strength and with grace,\nThrough twists and through turns, in life's crazy race.\n\nThere'll be highs, there'll be lows,\nbut you've got this down,\nYou're in it together,\nthe best team in town.\n\nSometimes you'll falter, and sometimes you'll fall,\nBut love will be there to help you stand tall.\nFor no matter the place, no matter the time,\nThe two of you together will be just fine.\n\nSo dream and discover, laugh and explore,\nFor this journey ahead will open new doors.\nWith patience, with kindness, and love as your guide,\nYou'll conquer the world, standing side by side.\n\nSo here's to your future, bright as can be,\nThe adventure of love, for all to see.\nOh, the places you'll go, the things you will do,\nA lifetime of joy is waiting for you.",
    },
  ],
  essays: [
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
      pull: '"Four children in seven years means constant motion and constant need. It is loud, absurd, and occasionally unhinged."',
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
      excerpt: "Canadian politics have gone straight to hell in a handbasket, and frankly, I'm over it. My partner and I care deeply about our community, local businesses, infrastructure and the well-being of the people around us. But, most importantly, we care about the health, rights, and dignity of others.\n\nThe current political landscape is pretty darn icky. It's like every conversation has been overtaken by an out-of-control game of telephone, where everyone is yelling at each other from their corners of the internet trying to one-up each other with the latest smear or conspiracy.",
    },
  ],
  education: [
    {
      type: 'Professional Development · Curriculum Design',
      title: 'Equity in Real Classroom Practice',
      meta: 'Five-Course Learning Series',
      pull: '"Most equity professional development stops at awareness. Teachers leave knowing why equity matters but not what to do when things get hard."',
      excerpt: "A five-course professional learning series designed to move educators from equity awareness to equity action. Each course targets a specific hard moment where teachers get stuck — reading participation patterns, teaching controversial issues, interrupting microaggressions, navigating racial conversations, and sustaining the work long-term.\n\nThe approach is framework-driven, script-supported, and practice-based. Not theory. Not principles to remember. Mental models for quick categorization, actual language for difficult moments, and rehearsal that builds muscle memory.",
    },
    {
      type: 'Impact Report · Intersectional Justice',
      title: 'Race + Disability Initiative Report',
      meta: 'November 2025',
      pull: '"By naming the interdependence of racial and disability justice, the initiative demonstrates how local collaboration can shape national learning."',
      excerpt: "A comprehensive report documenting eighteen months of collaborative work advancing racial equity and disability justice in Western Pennsylvania. Written for the FISA Foundation, The Pittsburgh Foundation, and The Heinz Endowments, this report captures the evolution of a regional network committed to inclusive systems change.\n\nAcross four convenings and ongoing partnerships, more than fifty organizations moved from compliance toward transformation — reframing accessibility as a shared value, diversifying leadership, and aligning funding structures with inclusion.",
    },
    {
      type: 'Youth Workshop · Media Literacy',
      title: 'Social Media Safety Workshop',
      meta: 'Grades 6-8 · Three-Hour Format',
      pull: '"The program is built for depth, not speed. Each hour focuses on one core concept with time built in for real discussion."',
      excerpt: "A three-hour workshop for grades 6-8 that moves students through a clear learning arc: Learn, Experience, Teach. By the end, students aren't just safer online — they're equipped to help others navigate digital spaces.\n\nBuilt for depth, not speed. Each hour focuses on one core concept with time for real discussion and reflection. Students identify risks, recognize manipulation, and develop strategies for safe digital participation.",
    },
    {
      type: 'Alternative Education · Curriculum Framework',
      title: '12 Weeks of Wonder',
      meta: 'Mixed-Age Learning · Ages 8-14',
      pull: '"True inquiry-based learning means following the curiosity and questions of the children in our care."',
      excerpt: "A 12-week inquiry-based learning journey designed for mixed-age groups (ages 8-14). This curriculum framework follows children's curiosity through thematic units — from mapping and cartography to bread science, garden ecology, and pirate navigation.\n\nEach unit includes multiple entry points so younger learners engage through hands-on exploration while older learners tackle leadership roles, design experiments, and engage with real-world applications.",
    },
  brandContent: [
    {
      type: 'Social Media Content · Willow & Rose',
      title: 'Homestead Brand Voice',
      meta: 'Willow & Rose — Product & Lifestyle Content',
      pull: '"Warm, personal content that sounds like the person behind the brand."',
      image: '/portfolio/willowandrose-social-1.png',
    },
    {
      type: 'Video Content · Willow & Rose',
      title: 'Reel Copywriting',
      meta: 'Willow & Rose — Short Form Video',
      pull: '"Scroll-stopping hooks written for real audiences."',
      video: '/portfolio/willowandrose-video-1.mp4',
    },
    {
      type: 'Social Media Content · Raven House Co.',
      title: 'Small Business Social Copy',
      meta: 'Raven House Co. — Instagram Content',
      pull: '"Community-first copy that builds connection, not just followers."',
      image: '/portfolio/raven-house-social-1.png',
    },
    {
      type: 'Social Media Content · Raven House Co.',
      title: 'Product & Story Posts',
      meta: 'Raven House Co. — Instagram Content',
      pull: '"Copy that lets the product speak without overselling it."',
      image: '/portfolio/raven-house-social-2.png',
    },
    {
      type: 'Social Media Content · Raven House Co.',
      title: 'Brand Storytelling',
      meta: 'Raven House Co. — Instagram Content',
      pull: '"Every post part of a larger brand narrative."',
      image: '/portfolio/raven-house-social-3.png',
    },
    {
      type: 'Social Media Content · Raven House Co.',
      title: 'Engagement Copy',
      meta: 'Raven House Co. — Instagram Content',
      pull: '"Written to start conversations, not just collect likes."',
      image: '/portfolio/raven-house-social-4.png',
    },
    {
      type: 'Real Estate Copy · Mock-Up',
      title: 'Listing Social Post',
      meta: 'Real Estate — Social Media Content',
      pull: '"Copy that sells the feeling of a home, not just the specs."',
      image: '/portfolio/realestate-social-1.png',
    },
    {
      type: 'Real Estate Copy · Mock-Up',
      title: 'Realtor Personal Brand Post',
      meta: 'Real Estate — Social Media Content',
      pull: '"Positioning a realtor as the trusted guide, not just the salesperson."',
      image: '/portfolio/realestate-social-2.png',
    },
    {
      type: 'Real Estate Copy · Mock-Up',
      title: 'Property Listing Flyer',
      meta: 'Real Estate — Print & Digital',
      pull: '"This could be the one."',
      image: '/portfolio/realestate-flyer-1.png',
    },
    {
      type: 'Real Estate Copy · Mock-Up',
      title: 'Realtor Marketing Flyer',
      meta: 'Real Estate — Print & Digital',
      pull: '"Ready for a change? That\'s where I come in."',
      image: '/portfolio/real-estate-flyer-3.jpg',
    },
    {
      type: 'Video Content · Mock-Up',
      title: 'Real Estate Reel',
      meta: 'Real Estate — Short Form Video',
      pull: '"They weren\'t looking for anything extraordinary..."',
      video: '/portfolio/realestate-video-3.mp4',
    },
    {
      type: 'Video Content · Mock-Up',
      title: 'Property Carousel Reel',
      meta: 'Real Estate — Short Form Video',
      pull: '"Carousel copy that tells a story slide by slide."',
      video: '/portfolio/realestate-video-4.mp4',
    },
  ],
}

const BLOG_POSTS = [
  {
    category: "Captain's Log",
    date: 'February 2026',
    title: 'Mothers Encouraged to Optimize Their Time',
    excerpt: 'A deeply reported investigation into the perpetually imminent arrival of productivity, and the women who have stopped making plans in August.',
  },
  {
    category: 'Essay',
    date: 'February 2026',
    title: 'The Real Damage of Disinformation',
    excerpt: "When my neighbour watched that fake video, she was fooled because it looked real. When she later dismissed a legitimate scandal, she wasn't fooled at all. She was fatigued.",
  },
  {
    category: 'Editorial',
    date: 'September 2025',
    title: 'A Letter from the Annapolis Valley',
    excerpt: "In Nova Scotia's Annapolis Valley, mornings drift in gently and unhurried. But for families living at the edge, there is nothing slow about survival.",
  },
]

const TESTIMONIALS = [
  {
    quote: "Julianna did an incredible job working with my father to build his speech. He was so overwhelmed and she walked him through it with care, compassion and an amazing sense of humour. She took his messy, scribbled notes and made magic happen. Thank you!",
    name: 'Sarah M.',
    role: 'Bride, Annapolis Valley',
    featured: true,
  },
  {
    quote: "Julianna handled our disability justice report with real care. She preserved the complexity of the conversations while shaping them into something clear and cohesive. The final document felt thorough, responsible, and reflective of the lived experiences at its core.",
    name: 'Stacey R.',
    role: 'Project Lead',
  },
  {
    quote: "Julianna created original stories for our children's literature workshop that fit beautifully within our structure and themes. She understood the framework right away and delivered work that was seamless and ready to bring straight into the classroom.",
    name: 'Tom W.',
    role: 'Workshop Facilitator',
  },
  {
    quote: "Julianna was honestly excellent to work with. She got it done, and with impeccable real work. Met all of my wants and beyond.",
    name: 'Vivian C.',
    role: '',
  },
  {
    quote: "I was so deep inside my own course content that I needed someone else to come in and do the heavy lifting. Julianna delivered. She was insightful, nailed exactly what I was looking for, and that's no easy feat in a specialized education field.",
    name: 'Mark J.',
    role: 'Course Developer',
  },
  {
    quote: "Oh my goodness. I just read the first half. I don't even know what to say. I laughed, I cried. I never expected that someone would just 'get it' on so little detail — but you sure did.",
    name: 'Trina K.',
    role: '',
  },
]

const HOW_IT_WORKS = [
  {
    num: '01',
    title: 'You reach out.',
    desc: 'Tell me what you\'re working on. No polished brief required — just tell me where you\'re at.',
  },
  {
    num: '02',
    title: 'We talk it through.',
    desc: 'One conversation to figure out what you actually need, how we get there, and what good looks like.',
  },
  {
    num: '03',
    title: 'I write it.',
    desc: 'Drafts, revisions, back and forth until it sounds exactly right and feels completely like you.',
  },
  {
    num: '04',
    title: 'You launch it.',
    desc: 'Whether you\'re stepping up to the mic, hitting publish, or unveiling something you\'ve worked hard on — you do it knowing everything is exactly right.',
  },
]

export default function Home() {
  const [formStatus, setFormStatus] = useState('')
  const [formSubmitting, setFormSubmitting] = useState(false)
  const [expandedPortfolio, setExpandedPortfolio] = useState(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  async function handleSubmit(e) {
    e.preventDefault()
    setFormSubmitting(true)
    try {
      const res = await fetch('https://formspree.io/f/xqeyalvn', {
        method: 'POST',
        body: new FormData(e.target),
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        e.target.reset()
        setFormStatus("Your message is on its way. I'll be in touch soon.")
      } else {
        setFormStatus('Something went wrong. Please email hello@anchoredprose.ca directly.')
      }
    } catch {
      setFormStatus('Something went wrong. Please email hello@anchoredprose.ca directly.')
    }
    setFormSubmitting(false)
  }

  return (
    <>
      <nav>
        <a href="#" className="logo">
          <Image src="/logo.png" alt="Anchored Prose" width={240} height={60} style={{ height: 56, width: 'auto' }} priority />
        </a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#testimonials">Kind Words</a></li>
          <li><a href="#blog">Captain&apos;s Log</a></li>
          <li><a href="#contact">Get in Touch</a></li>
        </ul>
        <a href="#contact" className="hire-btn">Hire Me</a>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <div className="hero-eyebrow fade-up fade-up-1">Professional Writing · Nova Scotia, Canada</div>
          <h1 className="fade-up fade-up-2">
            Every Word,<br /><span className="script-accent">Anchored</span> in Purpose
          </h1>
          <p className="hero-sub fade-up fade-up-3">
            Speeches that hold a room. Copy that earns the right reader. Content with a reason to exist. Every word should be worth it.
          </p>
          <div className="hero-ctas fade-up fade-up-4">
            <a href="#services" className="btn-gold">See What I Do</a>
            <a href="#portfolio" className="btn-ghost">Read My Work</a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about" id="about">
        <div className="about-grid">
          <div className="about-image-wrap">
            <div className="about-image-inner">
              <Image
                src="/headshot.png"
                alt="Julianna Melnick-MacDonald — Anchored Prose"
                width={460}
                height={300}
                style={{ width: '100%', height: 300, objectFit: 'cover', objectPosition: 'center 15%', display: 'block' }}
              />
            </div>
            <div className="about-gold-bar"></div>
            <div className="about-caption">
              <p>The Voice Behind the Work</p>
              <span>Julianna Melnick-MacDonald</span>
            </div>
          </div>
          <div className="about-text">
            <div className="section-label">About</div>
            <h2 className="section-title">
              Writing for the<br /><span className="script-accent">moments that count</span>
            </h2>
            <p className="about-body">
              Hi! I&apos;m Julianna, a writer, educator, mom, wannabe farmer, and the founder of Anchored Prose. I hold a Master of Professional Education and a few other degrees that cost me a lot of time and money, and I&apos;ve spent over a decade helping people find the right words for the moments that count.
            </p>
            <p className="about-body">
              I&apos;ve always loved to write. It was where I went to make sense of things, to hold onto moments, to make myself laugh, and to feel understood. For a long time, writing felt like mine alone — something personal and quietly important, but not necessarily something I could build a life around. It took years of teaching, advocating, and working alongside people navigating systems that weren&apos;t built with them in mind before I realized that the thing I&apos;d always done for myself was exactly what other people needed too.
            </p>
            <p className="about-body">
              My years as an educator shaped how I write now. They taught me how to take something complicated and make it clear, how to find the right words for people who couldn&apos;t find their own, and how to build a voice that actually sounds like the person it belongs to. That work lives in everything I do at Anchored Prose, whether that&apos;s a wedding speech, a brand identity, a keynote, or a curriculum guide.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services" id="services">
        <div className="services-header">
          <div className="section-label" style={{ color: 'var(--gold)' }}>Services</div>
          <h2 className="section-title" style={{ color: 'var(--cream)' }}>
            What I <span className="script-accent">Offer</span>
          </h2>
        </div>
        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <div key={i} className="service-card">
              <h3>{s.title}</h3>
              <p className="service-tagline">{s.tagline}</p>
              <p className="service-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="portfolio" id="portfolio">
        <div className="portfolio-header">
          <div className="section-label">Portfolio</div>
          <h2 className="section-title">
            Selected <span className="script-accent">Work</span>
          </h2>
          <p className="portfolio-note">Excerpts from client projects and personal writing. Names changed where noted.</p>
        </div>

        <div className="portfolio-category">
          <h3 className="portfolio-category-title">Weddings &amp; Speeches</h3>
          <div className="portfolio-grid">
            {PORTFOLIO.celebrations.map((p, i) => (
              <div
                key={`cel-${i}`}
                className="portfolio-card"
                onClick={() => setExpandedPortfolio(expandedPortfolio === `cel-${i}` ? null : `cel-${i}`)}
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setExpandedPortfolio(expandedPortfolio === `cel-${i}` ? null : `cel-${i}`)}
              >
                <div className="portfolio-type">{p.type}</div>
                <h3>{p.title}</h3>
                <p className="portfolio-meta">{p.meta}</p>
                <p className="portfolio-pull">{p.pull}</p>
                {expandedPortfolio === `cel-${i}` && (
                  <div className="portfolio-excerpt">
                    {p.excerpt.split('\n\n').map((para, j) => (
                      <p key={j}>{para}</p>
                    ))}
                  </div>
                )}
                <span className="portfolio-link">
                  {expandedPortfolio === `cel-${i}` ? 'Close' : 'Read excerpt'}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="portfolio-category">
          <h3 className="portfolio-category-title">Writing</h3>
          <div className="portfolio-grid">
            {PORTFOLIO.essays.map((p, i) => (
              <div
                key={`essay-${i}`}
                className="portfolio-card"
                onClick={() => setExpandedPortfolio(expandedPortfolio === `essay-${i}` ? null : `essay-${i}`)}
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setExpandedPortfolio(expandedPortfolio === `essay-${i}` ? null : `essay-${i}`)}
              >
                <div className="portfolio-type">{p.type}</div>
                <h3>{p.title}</h3>
                <p className="portfolio-meta">{p.meta}</p>
                {p.hasImage && (
                  <div style={{ margin: '1.5rem -1rem' }}>
                    <Image src={p.imagePath} alt={p.pull.replace(/"/g, '')} width={600} height={600} style={{ width: '100%', height: 'auto', borderRadius: '4px' }} />
                  </div>
                )}
                <p className="portfolio-pull">{p.pull}</p>
                {expandedPortfolio === `essay-${i}` && (
                  <div className="portfolio-excerpt">
                    {p.excerpt.split('\n\n').map((para, j) => (
                      <p key={j}>{para}</p>
                    ))}
                  </div>
                )}
                <span className="portfolio-link">
                  {expandedPortfolio === `essay-${i}` ? 'Close' : 'Read excerpt'}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="portfolio-category">
          <h3 className="portfolio-category-title">Educational Content</h3>
          <div className="portfolio-grid">
            {PORTFOLIO.education.map((p, i) => (
              <div
                key={`edu-${i}`}
                className="portfolio-card"
                onClick={() => setExpandedPortfolio(expandedPortfolio === `edu-${i}` ? null : `edu-${i}`)}
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setExpandedPortfolio(expandedPortfolio === `edu-${i}` ? null : `edu-${i}`)}
              >
                <div className="portfolio-type">{p.type}</div>
                <h3>{p.title}</h3>
                <p className="portfolio-meta">{p.meta}</p>
                <p className="portfolio-pull">{p.pull}</p>
                {expandedPortfolio === `edu-${i}` && (
                  <div className="portfolio-excerpt">
                    {p.excerpt.split('\n\n').map((para, j) => (
                      <p key={j}>{para}</p>
                    ))}
                  </div>
                )}
                <span className="portfolio-link">
                  {expandedPortfolio === `edu-${i}` ? 'Close' : 'Read excerpt'}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="portfolio-category">
          <h3 className="portfolio-category-title">Brand &amp; Content</h3>
          <div className="portfolio-grid">
            {PORTFOLIO.brandContent.map((p, i) => (
              <div
                key={`brand-${i}`}
                className="portfolio-card"
                onClick={() => setExpandedPortfolio(expandedPortfolio === `brand-${i}` ? null : `brand-${i}`)}
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setExpandedPortfolio(expandedPortfolio === `brand-${i}` ? null : `brand-${i}`)}
              >
                <div className="portfolio-type">{p.type}</div>
                <h3>{p.title}</h3>
                <p className="portfolio-meta">{p.meta}</p>
                {p.image && (
                  <div style={{ margin: '1rem 0', borderRadius: '4px', overflow: 'hidden' }}>
                    <Image src={p.image} alt={p.title} width={600} height={400} style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }} />
                  </div>
                )}
                {p.video && (
                  <div style={{ margin: '1rem 0', borderRadius: '4px', overflow: 'hidden', position: 'relative', background: '#0D1B2E' }}>
                    <video src={p.video} style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }} muted playsInline preload="metadata" />
                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(184,150,62,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><polygon points="5,3 14,8 5,13" fill="white"/></svg>
                    </div>
                  </div>
                )}
                <p className="portfolio-pull">{p.pull}</p>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials" id="testimonials">
        <div className="testimonials-header">
          <div className="section-label" style={{ color: 'var(--gold)' }}>Kind Words</div>
          <h2 className="section-title" style={{ color: 'var(--cream)' }}>
            What Clients <span className="script-accent">Say</span>
          </h2>
        </div>
        <div className="testimonials-featured">
          <blockquote>&ldquo;{TESTIMONIALS[0].quote}&rdquo;</blockquote>
          <p className="testimonial-name">{TESTIMONIALS[0].name}</p>
          <p className="testimonial-role">{TESTIMONIALS[0].role}</p>
        </div>
        <div className="testimonials-grid">
          {TESTIMONIALS.slice(1).map((t, i) => (
            <div key={i} className="testimonial-card">
              <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
              <p className="testimonial-name">{t.name}</p>
              {t.role && <p className="testimonial-role">{t.role}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how-it-works" id="process">
        <div className="hiw-header">
          <div className="section-label">The Process</div>
          <h2 className="section-title">
            How we <span className="script-accent">work together.</span>
          </h2>
        </div>
        <div className="hiw-steps">
          {HOW_IT_WORKS.map((step, i) => (
            <div key={i} className="hiw-step">
              <div className="hiw-step-num">{step.num}</div>
              <div className="hiw-step-icon">
                {i === 0 && <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M4,6 L28,6 L28,20 L16,20 L10,26 L10,20 L4,20 Z" stroke="var(--gold)" strokeWidth="1.2" fill="none" strokeLinejoin="round"/><line x1="10" y1="12" x2="22" y2="12" stroke="var(--gold)" strokeWidth="1" opacity="0.6"/><line x1="10" y1="15.5" x2="17" y2="15.5" stroke="var(--gold)" strokeWidth="1" opacity="0.6"/></svg>}
                {i === 1 && <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="11" stroke="var(--gold)" strokeWidth="1.2"/><circle cx="16" cy="16" r="2.5" fill="var(--gold)"/><polygon points="16,7 17.5,14.5 16,13.5 14.5,14.5" fill="var(--gold)"/><polygon points="16,25 17.5,17.5 16,18.5 14.5,17.5" fill="var(--gold)" opacity="0.4"/></svg>}
                {i === 2 && <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M7,25 L11,21 L23,9 L25,11 L13,23 Z" stroke="var(--gold)" strokeWidth="1.2" fill="none" strokeLinejoin="round"/><line x1="21" y1="7" x2="25" y2="11" stroke="var(--gold)" strokeWidth="1.2"/><line x1="7" y1="25" x2="12" y2="25" stroke="var(--gold)" strokeWidth="1.2"/></svg>}
                {i === 3 && <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M16,4 L18.5,12 L27,12.5 L21,17.5 L23,26 L16,21.5 L9,26 L11,17.5 L5,12.5 L13.5,12 Z" stroke="var(--gold)" strokeWidth="1.2" fill="none" strokeLinejoin="round"/></svg>}
              </div>
              <h3 className="hiw-step-title">{step.title}</h3>
              <p className="hiw-step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
        <p className="hiw-note">
          Need help with the delivery itself, not just the words? I offer consulting on that too — <a href="#contact">reach out and we&apos;ll figure it out.</a>
        </p>
      </section>

      {/* BLOG */}
      <section className="blog" id="blog">
        <div className="blog-header">
          <div className="section-label">Captain&apos;s Log</div>
          <h2 className="section-title">
            Latest <span className="script-accent">Writing</span>
          </h2>
        </div>
        <div className="blog-carousel">
          <div className="blog-cards" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {BLOG_POSTS.map((post, i) => (
              <div key={i} className="blog-card">
                <div className="blog-card-category">{post.category} · {post.date}</div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
              </div>
            ))}
          </div>
          <div className="blog-dots">
            {BLOG_POSTS.map((_, i) => (
              <button key={i} className={`blog-dot ${currentSlide === i ? 'active' : ''}`} onClick={() => setCurrentSlide(i)} aria-label={`Go to slide ${i + 1}`} />
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <div className="contact-grid">
          <div className="contact-info">
            <div className="section-label">Get in Touch</div>
            <h2 className="contact-title">
              Let&apos;s create<br /><span className="script-accent">something</span> together
            </h2>
            <p className="contact-intro">
              Whether you have a clear project in mind or just a sense that the words aren&apos;t quite right yet, I&apos;d love to hear from you. Tell me what you&apos;re working on, and we&apos;ll figure out the rest.
            </p>
            <div className="contact-detail">
              <p className="contact-detail-label">Email</p>
              <a href="mailto:hello@anchoredprose.ca" className="contact-detail-value">hello@anchoredprose.ca</a>
            </div>
            <div className="contact-detail">
              <p className="contact-detail-label">Based In</p>
              <p className="contact-detail-value">Nova Scotia, Canada</p>
            </div>
            <div className="contact-detail">
              <p className="contact-detail-label">Availability</p>
              <p className="contact-detail-value">Currently booking for Spring 2026</p>
            </div>
          </div>
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="project">What are you working on?</label>
                <select id="project" name="project">
                  <option value="">Select a service...</option>
                  <option value="wedding">Wedding &amp; Event Speeches</option>
                  <option value="keynote">Keynotes &amp; Public Speaking</option>
                  <option value="education">Educational Content</option>
                  <option value="brand">Brand &amp; Content Strategy</option>
                  <option value="other">Something else</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Tell me more</label>
                <textarea id="message" name="message" rows={5} required></textarea>
              </div>
              <button type="submit" className="form-submit" disabled={formSubmitting}>
                {formSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              {formStatus && <p className="form-status">{formStatus}</p>}
            </form>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <Image src="/logo.png" alt="Anchored Prose" width={360} height={90} style={{ height: 90, width: 'auto' }} />
            <p className="footer-tagline">Every word, <span className="script-accent">anchored</span> in purpose.</p>
            <p>Nova Scotia, Canada</p>
          </div>
          <div className="footer-links">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#testimonials">Kind Words</a>
            <a href="#blog">Captain&apos;s Log</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-bottom">
            <p>© 2026 Anchored Prose. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
