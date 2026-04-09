'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const SERVICES = [
  {
    title: 'Wedding & Event Speeches',
    tagline: "Words that sound like you on your best day. The ones you couldn't quite find.",
    desc: "Toasts, vows, ceremony scripts, and full wedding writing. Whether you're the best man at midnight or a couple building a ceremony from scratch, I write words that hold the room and hold up over time.",
    href: '/services/wedding-speeches',
  },
  {
    title: 'Keynotes & Public Speaking',
    tagline: 'From the conference stage to the commencement address. Structured to hold a room.',
    desc: 'Keynotes, TEDx talks, commencement addresses, professional development sessions, panel prep. I work with founders, educators, and leaders to find the through-line and write the words that make their expertise land.',
    href: '/services/keynotes',
  },
  {
    title: 'Educational Content',
    tagline: 'Thoughtful learning deserves thoughtful language.',
    desc: 'Curriculum, lesson materials, and learning resources grounded in structure, clarity, and respect for learners.',
    href: '/services/educational-content',
  },
  {
    title: 'Brand & Web Copy',
    tagline: 'Make someone read it and think: yes, this is exactly who I was looking for.',
    desc: 'Website copy, about pages, taglines, brand voice guides. Writing that earns the right reader.',
    href: '/services/brand-copy',
  },
  {
    title: 'Content Strategy',
    tagline: "A plan you'll actually follow. Because it's built around you.",
    desc: "Editorial strategy, content audits, and long-form writing for businesses ready to stop guessing and start publishing with purpose.",
    href: '/services/content-strategy',
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
      meta: 'Twenty-Two Years of Friendship',
      pull: '"He still can\'t assemble furniture, but he shows up."',
      excerpt: "I've known Matt for twenty-two years, which means I've seen every version of this man. The kid who ate an entire sleeve of Oreos before a cross-country meet and threw up at the starting line. The guy who once tried to assemble an IKEA bookshelf without the instructions and ended up with something that looked like modern art and held exactly zero books.\n\nHere's the thing about Claire. She knows exactly what she's getting into. And she chose him anyway. Fully informed, eyes wide open. That's not a small thing.\n\nHe still can't assemble furniture, but he shows up. And that's the part that matters.",
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
      excerpt: "It's funny how quickly you can look at someone and feel like they're doing it better than you.\n\nI ran into a mom from my kids' school at the grocery store yesterday. I hadn't seen her in a while and for a second I almost didn't recognize her. Hair done, nails done, just… put together in a way that felt worlds apart from the last time I'd seen her.",
      hasImage: true,
      imagePath: '/portfolio/for-a-minute-quote.png',
    },
    {
      type: 'Op-Ed · Politics & Civic Engagement',
      title: 'Echo Chambers of Insanity',
      meta: 'February 2026',
      pull: '"We\'re living in an echo chamber of insanity, and it\'s officially time that we break free."',
      excerpt: "Canadian politics have gone straight to hell in a handbasket, and frankly, I'm over it. My partner and I care deeply about our community, local businesses, infrastructure and the well-being of the people around us. But, most importantly, we care about the health, rights, and dignity of others. Honestly these days, it's almost like we care too much—and right now, that feels like a curse.\n\nThe current political landscape? It's pretty darn icky, if you ask me. It's like every conversation has been overtaken by an out-of-control game of telephone, where everyone is yelling at each other from their corners of the internet trying to one-up each other with the latest smear or conspiracy.",
    },
  ],
  education: [
    {
      type: 'Professional Development · Curriculum Design',
      title: 'Equity in Real Classroom Practice',
      meta: 'Five-Course Learning Series',
      pull: '"Most equity professional development stops at awareness. Teachers leave knowing why equity matters but not what to do when things get hard."',
      excerpt: "A five-course professional learning series designed to move educators from equity awareness to equity action. Each course targets a specific \"hard moment\" where teachers get stuck—reading participation patterns, teaching controversial issues, interrupting microaggressions, navigating racial conversations, and sustaining the work long-term.\n\nThe approach is framework-driven, script-supported, and practice-based. Not theory. Not principles to remember. Mental models for quick categorization, actual language for difficult moments, and rehearsal that builds muscle memory.",
    },
    {
      type: 'Impact Report · Intersectional Justice',
      title: 'Race + Disability Initiative Report',
      meta: 'November 2025',
      pull: '"By naming the interdependence of racial and disability justice, the initiative demonstrates how local collaboration can shape national learning."',
      excerpt: "A comprehensive report documenting eighteen months of collaborative work advancing racial equity and disability justice in Western Pennsylvania. Written for the FISA Foundation, The Pittsburgh Foundation, and The Heinz Endowments, this report captures the evolution of a regional network committed to inclusive systems change.\n\nAcross four convenings and ongoing partnerships, more than fifty organizations moved from compliance toward transformation—reframing accessibility as a shared value, diversifying leadership, and aligning funding structures with inclusion.",
    },
    {
      type: 'Youth Workshop · Media Literacy',
      title: 'Social Media Safety Workshop',
      meta: 'Grades 6-8 · Three-Hour Format',
      pull: '"The program is built for depth, not speed. Each hour focuses on one core concept with time built in for real discussion."',
      excerpt: "A three-hour workshop for grades 6-8 that moves students through a clear learning arc: Learn → Experience → Teach. By the end, students aren't just safer online—they're equipped to help others navigate digital spaces.\n\nBuilt for depth, not speed. Each hour focuses on one core concept with time for real discussion and reflection. Students identify risks (privacy leaks, consent issues, emotional posting), recognize manipulation (peer pressure, exclusion), and develop strategies for safe digital participation.",
    },
    {
      type: 'Alternative Education · Curriculum Framework',
      title: '12 Weeks of Wonder',
      meta: 'Mixed-Age Learning · Ages 8-14',
      pull: '"True inquiry-based learning means following the curiosity and questions of the children in our care."',
      excerpt: "A 12-week inquiry-based learning journey designed for mixed-age groups (ages 8-14). This curriculum framework follows children's curiosity through thematic units—from mapping and cartography to bread science, garden ecology, and pirate navigation.\n\nEach unit includes multiple entry points so younger learners engage through hands-on exploration while older learners tackle leadership roles, design experiments, and engage with real-world applications. Think of it as a map, not a mandate—we know where we're headed, but the most magical learning happens on the scenic detours.",
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
          <Image src="/logo.png" alt="Anchored Prose" width={200} height={50} style={{ height: 48, width: 'auto' }} priority />
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

      {/* UPDATED ABOUT SECTION */}
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
              Hey there! I&apos;m Julianna — a writer, educator, and the founder of Anchored Prose. I hold a Master of Professional Education, and I&apos;ve spent over a decade helping people find the right words — whether that&apos;s for the moments that count or the message that defines you.
            </p>
            <p className="about-body">
              I&apos;ve always loved to write. It was an escape, a way to get my feelings out on paper, a way to make myself laugh, remember, relate. It took me a long time to realize it was something I could actually do for a living. My years as a teacher taught me how to make complex systems less confusing, how to advocate for people navigating bureaucracies that weren&apos;t built with them in mind, and how to disrupt the systemic inequities that keep good people quiet. That work shaped how I write now — it honed my capacity to build and develop voice, to help people say what they mean in a way that lands.
            </p>
            <p className="about-body">
              Now I write brand copy for small businesses who need to sound like themselves. Real estate listings that sell the story, not just the specs. Speeches and keynotes for leaders who want their message to stick. Curriculum and educational content that makes difficult concepts accessible. Grant applications and policy critiques for nonprofits doing the work. Wedding ceremonies, website copy, full content packages — carefully constructed words brought to life with beautiful graphics and intentional design.
            </p>
            <p className="about-body">
              I also build custom websites for writers, small businesses, and creatives who need more than a template — full content strategy, copywriting, and design that works together. Whether you need brand strategy that clarifies who you are and how you show up, content strategy that maps out what to say and when, or a complete creative overhaul, I help you build a presence that sounds and looks like you.
            </p>
            <blockquote className="about-pull">
              &ldquo;Whether it&apos;s a wedding ceremony, a keynote presentation, brand copy that finally captures what you&apos;ve been trying to say, or a website that does the work for you, I write words that persuade, comfort, celebrate, and move people to <em className="script-accent">act</em>.&rdquo;
            </blockquote>
            <div className="about-note" style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid rgba(18, 45, 71, 0.2)', fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--navy)', opacity: 0.85 }}>
              What&apos;s here is public-facing: ceremonies people remember, essays worth sharing, commentary that cuts through noise. I also write for academic and educational contexts—research, curriculum, training content. Different audience, different purpose. If that&apos;s what you&apos;re after, I can share those samples separately.
            </div>
          </div>
        </div>
      </section>

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
              <Link href={s.href} className="service-link">Learn More →</Link>
            </div>
          ))}
        </div>
      </section>

      {/* UPDATED PORTFOLIO SECTION - 3 CATEGORIES */}
      <section className="portfolio" id="portfolio">
        <div className="portfolio-header">
          <div className="section-label">Portfolio</div>
          <h2 className="section-title">
            Selected <span className="script-accent">Work</span>
          </h2>
          <p className="portfolio-note">Excerpts from client projects and personal writing. Names changed where noted.</p>
        </div>

        {/* CELEBRATIONS & CEREMONIES */}
        <div style={{ marginBottom: '4rem' }}>
          <h3 style={{ textAlign: 'center', fontSize: '0.875rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--navy)', opacity: 0.6, marginBottom: '2rem' }}>CELEBRATIONS & CEREMONIES</h3>
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

        {/* ESSAYS & COMMENTARY */}
        <div style={{ marginBottom: '4rem' }}>
          <h3 style={{ textAlign: 'center', fontSize: '0.875rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--navy)', opacity: 0.6, marginBottom: '2rem' }}>ESSAYS & COMMENTARY</h3>
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
                    <Image
                      src={p.imagePath}
                      alt={p.pull.replace(/"/g, '')}
                      width={600}
                      height={600}
                      style={{ width: '100%', height: 'auto', borderRadius: '4px' }}
                    />
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

        {/* EDUCATIONAL CONTENT & CURRICULUM */}
        <div>
          <h3 style={{ textAlign: 'center', fontSize: '0.875rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--navy)', opacity: 0.6, marginBottom: '1rem' }}>EDUCATIONAL CONTENT & CURRICULUM</h3>
          <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 2rem', fontSize: '1rem', lineHeight: '1.6', color: 'var(--navy)' }}>
            I design curriculum, training programs, and educational resources for schools, nonprofits, and organizations working toward equity and systemic change. This work is grounded in research, built for real-world application, and written to make complex systems accessible.
          </p>
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
          <p style={{ textAlign: 'center', maxWidth: '800px', margin: '3rem auto 0', fontSize: '1rem', lineHeight: '1.6', color: 'var(--navy)' }}>
            Looking for custom curriculum development, training design, or educational content? <a href="mailto:hello@anchoredprose.ca" style={{ color: 'var(--navy)', fontWeight: 600, textDecoration: 'underline' }}>Contact me</a> to discuss your project.
          </p>
        </div>
      </section>

      {/* UPDATED TESTIMONIALS SECTION */}
      <section className="testimonials" id="testimonials">
        <div className="testimonials-header">
          <div className="section-label" style={{ color: 'var(--gold)' }}>Kind Words</div>
          <h2 className="section-title" style={{ color: 'var(--cream)' }}>
            What Clients <span className="script-accent">Say</span>
          </h2>
        </div>
        <div className="testimonials-featured">
          <blockquote>
            &ldquo;{TESTIMONIALS[0].quote}&rdquo;
          </blockquote>
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
                <Link href="/blog" className="blog-card-link">Read More →</Link>
              </div>
            ))}
          </div>
          <div className="blog-dots">
            {BLOG_POSTS.map((_, i) => (
              <button
                key={i}
                className={`blog-dot ${currentSlide === i ? 'active' : ''}`}
                onClick={() => setCurrentSlide(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

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
                  <option value="wedding">Wedding & Event Speeches</option>
                  <option value="keynote">Keynotes & Public Speaking</option>
                  <option value="education">Educational Content</option>
                  <option value="brand">Brand & Web Copy</option>
                  <option value="strategy">Content Strategy</option>
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
