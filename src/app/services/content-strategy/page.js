'use client'
import Link from 'next/link'
import Image from 'next/image'

export default function ContentStrategy() {
  return (
    <>
      <nav className="subpage-nav">
        <Link href="/" className="logo">
          <Image src="/logo.png" alt="Anchored Prose" width={160} height={40} style={{ height: 36, width: 'auto' }} priority />
        </Link>
        <Link href="/" className="back-link">← Back to Home</Link>
      </nav>

      <section className="subpage-hero">
        <div className="subpage-hero-content">
          <div className="section-label" style={{ color: 'var(--gold)' }}>Service V</div>
          <h1>Content <span className="script-accent">Strategy</span></h1>
          <p className="subpage-tagline">A plan you&apos;ll actually follow, because it&apos;s built around you.</p>
        </div>
      </section>

      <section className="subpage-intro">
        <div className="subpage-container">
          <p>
            If your messaging feels scattered, it probably is. Blogs, newsletters, social content, thought leadership. When every piece is written in isolation, it shows. Content should build on itself. It should sound like one person with one clear point of view.
          </p>
          <p>
            I help anchor your content in a cohesive voice and a strategy that actually connects. Not a plan you&apos;ll abandon by February. A system you can sustain.
          </p>
        </div>
      </section>

      <section className="subpage-process">
        <div className="subpage-container">
          <h2>How It <span className="script-accent">Works</span></h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">01</div>
              <h3>Audit and Align</h3>
              <p>We look at what you have, what&apos;s working, and what&apos;s missing. I help clarify your messaging pillars: the three or four things your content should always come back to.</p>
            </div>
            <div className="process-step">
              <div className="step-number">02</div>
              <h3>Build the Framework</h3>
              <p>I develop a content strategy, editorial direction, or messaging framework that gives your communications a backbone. Then I write the content to fill it, or guide your team to do it consistently.</p>
            </div>
            <div className="process-step">
              <div className="step-number">03</div>
              <h3>Execute and Sustain</h3>
              <p>Whether it&apos;s a batch of blog posts, a quarter of newsletters, or a social content plan, I deliver polished, on-brand writing ready to publish.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="subpage-deliverables">
        <div className="subpage-container">
          <h2>What You <span className="script-accent">Get</span></h2>
          <ul>
            <li>Messaging framework or content strategy</li>
            <li>Long-form content: blog posts, articles, newsletters</li>
            <li>Editorial direction and voice guidelines</li>
            <li>Up to two rounds of revision per deliverable</li>
          </ul>
        </div>
      </section>

      <section className="subpage-pricing">
        <div className="subpage-container">
          <p>Content work can be a one-time project or an ongoing relationship. Some people need one great blog post. Some need a whole quarter mapped out. Tell me where you are and we&apos;ll build the right arrangement.</p>
        </div>
      </section>

      <section className="subpage-cta">
        <div className="subpage-container">
          <h2>Ready to anchor your <span className="script-accent">message</span>?</h2>
          <Link href="/#contact" className="btn-gold">Get in Touch</Link>
        </div>
      </section>

      <footer className="subpage-footer">
        <p>© 2026 Anchored Prose. All rights reserved.</p>
        <Link href="/">Back to Home</Link>
      </footer>
    </>
  )
}
