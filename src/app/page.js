'use client'
import Image from 'next/image'
import { useState } from 'react'

const SERVICES = [
  {
    title: 'Wedding & Event Speeches',
    tagline: 'The perfect words crafted to sound just like you.',
    desc: "Toasts, vows, ceremony scripts, and full wedding writing. Whether you're the best man, a couple building a ceremony from scratch, a parent feeling all the feels, or anyone else standing up to speak on a day that matters, we work through it together and I write words that hold the room and hold up over time.",
  },
  {
    title: 'Memorials & Tributes',
    tagline: 'The hardest words to find are often the most important ones.',
    desc: "Eulogies, tributes, memorial services, and celebrations of life. I'll help you say what needs to be said with care, honesty, and the kind of warmth that honours a life fully lived. You don't have to find the words alone.",
  },
  {
    title: 'Keynotes & Public Speaking',
    tagline: 'From the conference stage to the commencement address, a talk that holds a room.',
    desc: "Whether it's a keynote, a TEDx, a professional development session, or panel prep, I work with founders, educators, and leaders to find the through-line and write the words that make their expertise land.",
  },
  {
    title: 'Educational Content',
    tagline: 'Thoughtful learning deserves thoughtful language.',
    desc: "Curriculum, lesson materials, course development, and learning experience writing grounded in structure, clarity, and respect for learners, whether that's a K-12 curriculum, a professional development series, or a full online course build.",
  },
  {
    title: 'Brand & Content Strategy',
    tagline: "You've built something worth talking about. Let's make sure the world knows it.",
    desc: "I work with small businesses, realtors, creatives, and entrepreneurs to figure out who they are and why they're worth noticing, then build the words, the web copy, the content strategy, and sometimes the website itself to show it. Whether you need a brand voice guide, a full site rewrite, newsletter copy and design, or a content plan you'll actually follow, we start with the whole picture and build from there.",
  },
]

const PORTFOLIO_CATEGORIES = [
  {
    title: 'Weddings & Speeches',
    desc: 'Ceremony scripts, toasts, vows, and the words people remember long after the day.',
    href: '/portfolio/weddings-speeches',
  },
  {
    title: 'Writing',
    desc: 'Essays, satire, opinion, and personal writing that earns its space on the page.',
    href: '/portfolio/writing',
  },
  {
    title: 'Educational Content',
    desc: 'Curriculum, training programs, and learning resources built for real-world application.',
    href: '/portfolio/educational-content',
  },
  {
    title: 'Brand & Content',
    desc: 'Social media, real estate copy, video scripts, and content that sounds like the brand behind it.',
    href: '/portfolio/brand-content',
  },
]

const HOW_IT_WORKS = [
  {
    num: '01',
    title: 'You reach out.',
    desc: "Tell me what you're working on. No polished brief required — just tell me where you're at.",
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
    desc: "Whether you're stepping up to the mic, hitting publish, or unveiling something you've worked hard on, you do it knowing everything is exactly right.",
  },
]

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

export default function Home() {
  const [formStatus, setFormStatus] = useState('')
  const [formSubmitting, setFormSubmitting] = useState(false)
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
          <Image src="/logo.png" alt="Anchored Prose" width={220} height={55} style={{ height: 52, width: 'auto' }} priority />
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
          <div className="hero-ctas fade-up fade-up-3">
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
                width={500}
                height={380}
                style={{ width: '100%', height: 380, objectFit: 'cover', objectPosition: 'center 25%', display: 'block' }}
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

      <section className="portfolio" id="portfolio">
        <div className="portfolio-header">
          <div className="section-label">Portfolio</div>
          <h2 className="section-title">
            Selected <span className="script-accent">Work</span>
          </h2>
          <p className="portfolio-note">Excerpts from client projects and personal writing. Names changed where noted.</p>
        </div>
        <div className="portfolio-cats">
          {PORTFOLIO_CATEGORIES.map((cat, i) => (
            <a key={i} href={cat.href} className="portfolio-cat-card">
              <div className="portfolio-cat-body">
                <h3>{cat.title}</h3>
                <p>{cat.desc}</p>
                <span className="portfolio-cat-link">View Work →</span>
              </div>
            </a>
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

      <section className="how-it-works" id="process">
        <div className="hiw-header">
          <div className="section-label" style={{ color: 'var(--gold)' }}>The Process</div>
          <h2 className="section-title" style={{ color: 'var(--cream)' }}>
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
          Need help with the delivery itself, not just the words? I offer consulting on that too. <a href="#contact">Reach out and we&apos;ll figure it out.</a>
        </p>
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

      <div className="section-divider" />

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
                  <option value="memorial">Memorials &amp; Tributes</option>
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
