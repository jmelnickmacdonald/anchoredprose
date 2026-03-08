'use client'
import Link from 'next/link'
import Image from 'next/image'

export default function Keynotes() {
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
          <div className="section-label" style={{ color: 'var(--gold)' }}>Service II</div>
          <h1>Keynotes & Public <span className="script-accent">Speaking</span></h1>
          <p className="subpage-tagline">A good talk doesn&apos;t just inform. It holds a room.</p>
        </div>
      </section>

      <section className="subpage-intro">
        <div className="subpage-container">
          <p>
            Whether you&apos;re presenting at a conference, leading a panel, or giving a commencement address, the difference between a presentation people endure and one they remember comes down to structure, story, and saying exactly what needs to be said.
          </p>
          <p>
            I work with founders, educators, and leaders who have something to say but need help saying it well. Not in someone else&apos;s voice. In yours. Structured so it lands.
          </p>
        </div>
      </section>

      <section className="subpage-process">
        <div className="subpage-container">
          <h2>How It <span className="script-accent">Works</span></h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">01</div>
              <h3>Find the Through-Line</h3>
              <p>We start by figuring out what you&apos;re really saying. Not the topic, the point. The thing you want people to walk away thinking about. Once we have that, everything else falls into place.</p>
            </div>
            <div className="process-step">
              <div className="step-number">02</div>
              <h3>Build the Structure</h3>
              <p>I write the talk with a clear arc: opening that grabs, middle that moves, ending that sticks. We think about pacing, where to pause, where to punch, and how to bring it home.</p>
            </div>
            <div className="process-step">
              <div className="step-number">03</div>
              <h3>Rehearse and Refine</h3>
              <p>You practice. I listen. We adjust. The goal is a talk you can deliver with confidence because you know exactly where you&apos;re going and why.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="subpage-deliverables">
        <div className="subpage-container">
          <h2>What You <span className="script-accent">Get</span></h2>
          <ul>
            <li>A fully written keynote or presentation script</li>
            <li>Clear structure designed for audience engagement</li>
            <li>Up to two rounds of revision</li>
            <li>Optional slide deck guidance or speaker notes</li>
          </ul>
        </div>
      </section>

      <section className="subpage-pricing">
        <div className="subpage-container">
          <p>Keynotes vary widely in scope. A 10-minute conference talk is different from a 45-minute TEDx. Let&apos;s talk about your event, your audience, and what you&apos;re trying to accomplish.</p>
        </div>
      </section>

      <section className="subpage-cta">
        <div className="subpage-container">
          <h2>Ready to own the <span className="script-accent">room</span>?</h2>
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
