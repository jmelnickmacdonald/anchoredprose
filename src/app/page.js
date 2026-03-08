'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const SERVICES = [
  {
    title: 'Wedding & Event Speeches',
    tagline: "The words you'll wish you'd written yourself — because they will be",
    desc: "Toasts, vows, ceremony scripts, and full wedding writing. Whether you're the best man at midnight or a couple building a ceremony from scratch, I write words that hold the room and hold up over time.",
    href: '/services/wedding-speeches',
  },
  {
    title: 'Keynotes & Public Speaking',
    tagline: 'From the conference stage to the commencement address — structured to hold a room',
    desc: 'Keynotes, TEDx talks, commencement addresses, professional development sessions, panel prep. I work with founders, educators, and leaders to find the through-line and write the words that make their expertise land.',
    href: '/services/keynotes',
  },
  {
    title: 'Educational Content',
    tagline: 'Thoughtful learning deserves thoughtful language',
    desc: 'Curriculum, lesson materials, and learning resources grounded in structure, clarity, and respect for learners.',
    href: '/services/educational-content',
  },
  {
    title: 'Brand & Web Copy',
    tagline: 'Make someone read it and think: yes, this is exactly who I was looking for',
    desc: 'Website copy, about pages, taglines, brand voice guides. Writing that earns the right reader.',
    href: '/services/brand-copy',
  },
  {
    title: 'Content Strategy',
    tagline: "A plan you'll actually follow — because it's built around you",
    desc: "Editorial strategy, content audits, and long-form writing for businesses ready to stop guessing and start publishing with purpose.",
    href: '/services/content-strategy',
  },
]

const PORTFOLIO = [
  {
    type: 'Speeches',
    title: 'Wedding Officiant',
    meta: 'Destination Wedding · Punta Cana DR',
    pull: "\"I'm the type B minus to Rebecca's Type A.\"",
    excerpt: "They'd been together long enough that the inside jokes needed no explanation. Long enough that the awkward silences had turned into comfortable ones. Long enough that when Marcus looked at her across that beach, it wasn't wonder he felt — it was recognition.\n\nThat's what I wanted to capture. Not the beginning of something, but the confirmation of it.\n\n\"You didn't fall in love with me,\" he said. \"You chose me. Every day, quietly, you chose me. And I'm standing here today to choose you back. Out loud. In front of everyone we love.\"\n\nThe room — the beach, the wind, the whole soft Dominican evening — went very still.",
  },
  {
    type: 'Speeches',
    title: 'Best Man Toast',
    meta: 'Backyard Wedding · Ontario',
    pull: '"He still can\'t assemble furniture, but he shows up."',
    excerpt: "I've known Ryan for twenty-two years. I've watched him parallel park into spaces that physically should not have fit his car. I've watched him build furniture using only intuition and a deep, misplaced confidence in himself.\n\nHe still can't assemble furniture, but he shows up.\n\nThat's the thing about Ryan that nobody talks about enough. He's not the guy with all the answers. He's the guy who gets there anyway. Every time. Late, sometimes. Wrong tool, sometimes. But there, always.\n\nMelissa, you already know this. You've seen him show up for you in every version of the word. I'm just here to tell everyone else what you figured out first.",
  },
  {
    type: 'Speeches',
    title: 'Father of the Bride',
    meta: 'Vineyard Wedding · Annapolis Valley NS',
    pull: '"The job was never to keep them."',
    excerpt: "I spent a lot of years trying to hold on.\n\nWhen she was small, I held her hand crossing streets. When she was older, I drove too slowly on the way to school, not because of traffic. When she moved out, I found reasons to call.\n\nThe job was never to keep them. I think I always knew that, even when I was doing the opposite. The job was to raise someone who could leave well. Who could walk toward something without looking back in doubt. Who could love without needing a safety net.\n\nShe does all of that. She has for years. I just didn't want to admit it was already done.\n\nShe doesn't need me to give her away. She's not mine to give. But I am so honoured to watch.",
  },
  {
    type: 'Speeches',
    title: 'Maid of Honour',
    meta: 'City Wedding · Halifax NS',
    pull: '"That\'s sacred. Protect it."',
    excerpt: "There's a story Clara never tells at parties. We were twenty-three, sitting in her apartment after a bad week — the kind of bad week that doesn't have a single cause, just accumulates — and she said something I've never forgotten.\n\nShe said: \"I know what matters to me. I just have to stop apologising for it.\"\n\nI thought about that line a lot over the years. The way she carried it. The way she built a life around it quietly, without announcement.\n\nShe didn't broadcast her values. She just lived by them. She protected the people she loved the same way — no speeches, no declarations. Just presence. Loyalty that never needed to be named.\n\nThat's sacred. Protect it.",
  },
  {
    type: 'Speeches',
    title: 'Wedding Vows',
    meta: 'Autumn Wedding · Prince Edward Island',
    pull: '"I don\'t ever want to come home to a house where this isn\'t happening."',
    excerpt: "I love the way you move through the world like you're not surprised by it. Like you expected goodness and so goodness tends to show up.\n\nI love our Tuesday evenings most of all. Not the vacations, not the big occasions — the Tuesdays. The soup on the stove and the bad television and the way you laugh at your own jokes before you've even finished telling them.\n\nI don't ever want to come home to a house where this isn't happening.\n\nI vow to be someone who deserves the ordinary days with you. I vow to show up for the Tuesdays. To keep choosing this, quietly, for as long as we get.",
  },
  {
    type: 'Editorial',
    title: 'The Real Damage of Disinformation',
    meta: 'Opinion Essay · February 2026',
    pull: '"The collapse of trust rarely looks like anger."',
    excerpt: "We talk about disinformation as a problem of belief — as though the central damage is that people believe false things, and the fix is correction. More facts. Better journalism. Clearer labelling.\n\nBut the collapse of trust rarely looks like anger. It looks, more often, like exhaustion.\n\nPeople don't stop trusting specific sources and transfer that trust elsewhere. They stop trusting the project of knowing altogether. Why engage with something that will only be contested, reframed, or reversed next week?\n\nThis is the real damage. Not the lies believed, but the legitimacy surrendered. A population that doesn't know what to believe is not, paradoxically, more skeptical. It is more susceptible — not to facts, but to whoever speaks with the most confidence.",
  },
  {
    type: "Captain's Log",
    title: 'Area Homesteader Confirms Family Now "One Project Away"',
    meta: 'Satire · March 2026',
    pull: '"You can\'t put a price on food security."',
    excerpt: "CAPE BRETON — Local homesteader and part-time romantic, Darren Fitch, 38, confirmed Tuesday that his family is, by his estimate, approximately one completed project away from full self-sufficiency, a milestone he has described as \"basically imminent\" since 2021.\n\n\"Once we get the second chicken coop sorted,\" said Fitch, gesturing toward a structure that regional architects have described as \"load-bearing optimism,\" \"we're basically there.\"\n\nHis wife, Joanna, who has heard the phrase \"basically there\" applied to the root cellar, the wood-gasifier, the composting toilet, and what Darren refers to as \"the situation with the goats,\" confirmed only that they have eggs most days and that she has learned not to make plans in August.\n\n\"You can't put a price on food security,\" Darren added, from inside the second chicken coop.",
  },
]

const BLOG_POSTS = [
  {
    category: "Captain's Log",
    date: 'March 2026',
    title: 'Area Homesteader Confirms Family Now "One Project Away"',
    excerpt: 'A deeply reported investigation into the perpetually imminent arrival of self-sufficiency, and the woman who has stopped making plans in August.',
  },
  {
    category: 'Essay',
    date: 'February 2026',
    title: 'The Real Damage of Disinformation',
    excerpt: 'When my neighbour watched that fake video, she was fooled because it looked real. When she later dismissed a legitimate scandal, she wasn\'t fooled at all. She was fatigued.',
  },
  {
    category: 'On Writing',
    date: 'January 2026',
    title: "Why the Best Man Speech Is the Hardest Thing You'll Ever Write",
    excerpt: 'It\'s not the jokes. It\'s not the length. It\'s the fact that you\'re trying to say something true about someone you love in front of everyone they know.',
  },
]

const TESTIMONIALS = [
  {
    quote: "Julianna captured my father's voice so perfectly that when he read the speech back to himself, he said it was exactly what he would have said, if he could ever find the words. People are still talking about it.",
    name: 'Sarah M.',
    role: 'Bride, Annapolis Valley wedding',
    featured: true,
  },
  {
    quote: "There was laughter, there were tears, and I felt steady delivering it.",
    name: 'Miranda D.',
    role: 'Mother of the Bride',
  },
  {
    quote: "Julianna handled our disability justice report with real care. She preserved the complexity of the conversations while shaping them into something clear and cohesive. The final document felt thorough, responsible, and reflective of the lived experiences at its core.",
    name: 'Stacey R.',
    role: 'Project Lead',
  },
  {
    quote: "Our messaging finally made sense after working with Julianna. It was sharper, more direct, and easier for clients to understand.",
    name: 'Daniel R.',
    role: 'Founder',
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
              <p>The Captain</p>
              <span>Julianna Melnick-MacDonald</span>
            </div>
          </div>
          <div className="about-text">
            <div className="section-label">About</div>
            <h2 className="section-title">
              Writing for the<br /><span className="script-accent">moments that count</span>
            </h2>
            <p className="about-body">
              I&apos;m Julianna — a writer, educator, and the founder of Anchored Prose. I hold a Master of Professional Education, and I&apos;ve spent over a decade helping people find the right words for the moments that matter most.
            </p>
            <p className="about-body">
              Whether it&apos;s a wedding toast that makes the room laugh and cry in the same breath, a keynote that earns the standing ovation, or brand copy that finally sounds like you — I write words that hold up under pressure.
            </p>
            <blockquote className="about-pull">
              &ldquo;The right words don&apos;t just tell your story — they make people <em className="script-accent">feel</em> it.&rdquo;
            </blockquote>
            <div className="about-credential">
              <span className="about-credential-dot"></span>
              <p>Master of Professional Education</p>
            </div>
            <div className="about-credential">
              <span className="about-credential-dot"></span>
              <p>10+ Years Professional Writing</p>
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

      <section className="portfolio" id="portfolio">
        <div className="portfolio-header">
          <div className="section-label">Portfolio</div>
          <h2 className="section-title">
            Selected <span className="script-accent">Work</span>
          </h2>
        </div>
        <div className="portfolio-grid">
          {PORTFOLIO.map((p, i) => (
            <div
              key={i}
              className="portfolio-card"
              onClick={() => setExpandedPortfolio(expandedPortfolio === i ? null : i)}
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setExpandedPortfolio(expandedPortfolio === i ? null : i)}
            >
              <div className="portfolio-type">{p.type}</div>
              <h3>{p.title}</h3>
              <p className="portfolio-meta">{p.meta}</p>
              <p className="portfolio-pull">{p.pull}</p>
              {expandedPortfolio === i && (
                <div className="portfolio-excerpt">
                  {p.excerpt.split('\n\n').map((para, j) => (
                    <p key={j}>{para}</p>
                  ))}
                </div>
              )}
              <span className="portfolio-link">
                {expandedPortfolio === i ? 'Close' : 'Read excerpt'}
              </span>
            </div>
          ))}
        </div>
      </section>

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
            <Image src="/logo.png" alt="Anchored Prose" width={220} height={55} style={{ height: 56, width: 'auto' }} />
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
