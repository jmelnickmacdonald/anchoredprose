'use client'
import Link from 'next/link'
import Image from 'next/image'

export default function BrandCopy() {
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
          <div className="section-label" style={{ color: 'var(--gold)' }}>Service IV</div>
          <h1>Brand & Web <span className="script-accent">Copy</span></h1>
          <p className="subpage-tagline">Make someone read it and think: yes, this is exactly who I was looking for.</p>
        </div>
      </section>

      <section className="subpage-intro">
        <div className="subpage-container">
          <p>
            Most businesses know what they offer. Fewer know how to say it. The words on your website, your about page, your pitch deck? They&apos;re doing more work than you think.
          </p>
          <p>
            I write brand copy that sounds like a person, not a press release. Copy that earns the right reader and quietly turns away the wrong one. The kind that makes someone feel like they already know you before they&apos;ve ever met you.
          </p>
        </div>
      </section>

      <section className="subpage-process">
        <div className="subpage-container">
          <h2>How It <span className="script-accent">Works</span></h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">01</div>
              <h3>Find Your Voice</h3>
              <p>We talk about who you are, who you serve, and what makes you different. I listen for the phrases you use naturally, the values you come back to, the things that light you up when you talk about your work.</p>
            </div>
            <div className="process-step">
              <div className="step-number">02</div>
              <h3>Write the Copy</h3>
              <p>I draft your website, about page, taglines, or whatever you need. Every word is chosen to sound like you, speak to your people, and do actual work on the page.</p>
            </div>
            <div className="process-step">
              <div className="step-number">03</div>
              <h3>Refine Until It&apos;s Right</h3>
              <p>We review together. You tell me what lands and what doesn&apos;t. We adjust until it feels unmistakably, confidently yours.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="subpage-deliverables">
        <div className="subpage-container">
          <h2>What You <span className="script-accent">Get</span></h2>
          <ul>
            <li>Website copy that sounds like a human wrote it (because one did)</li>
            <li>About page, services pages, or landing pages</li>
            <li>Taglines, bios, and brand voice guidelines</li>
            <li>Up to two rounds of revision</li>
          </ul>
        </div>
      </section>

      <section className="subpage-pricing">
        <div className="subpage-container">
          <p>Some people need a full website. Some just need an about page that doesn&apos;t make them cringe. Let&apos;s talk about what you need and we&apos;ll figure out the scope together.</p>
        </div>
      </section>

      <section className="subpage-cta">
        <div className="subpage-container">
          <h2>Ready to sound like <span className="script-accent">yourself</span>?</h2>
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
