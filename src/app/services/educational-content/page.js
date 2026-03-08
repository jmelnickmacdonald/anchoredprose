'use client'
import Link from 'next/link'
import Image from 'next/image'

export default function EducationalContent() {
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
          <div className="section-label" style={{ color: 'var(--gold)' }}>Service III</div>
          <h1>Educational <span className="script-accent">Content</span></h1>
          <p className="subpage-tagline">Thoughtful learning deserves thoughtful language.</p>
        </div>
      </section>

      <section className="subpage-intro">
        <div className="subpage-container">
          <p>
            I hold a Master of Professional Education, and I&apos;ve spent years in classrooms, workshops, and training rooms. I know what it takes to teach something well: clarity, structure, and respect for the learner&apos;s time.
          </p>
          <p>
            Whether you&apos;re building a course, writing a curriculum, or developing training materials, I can help you say what you mean in a way people can actually learn from.
          </p>
        </div>
      </section>

      <section className="subpage-process">
        <div className="subpage-container">
          <h2>How It <span className="script-accent">Works</span></h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">01</div>
              <h3>Understand the Learning Goal</h3>
              <p>We start with what you want learners to know, do, or feel by the end. Everything flows from there. Clear outcomes make for clear content.</p>
            </div>
            <div className="process-step">
              <div className="step-number">02</div>
              <h3>Structure the Content</h3>
              <p>I organize the material into a logical flow that builds understanding step by step. No jargon for jargon&apos;s sake. No filler. Just clean, teachable content.</p>
            </div>
            <div className="process-step">
              <div className="step-number">03</div>
              <h3>Write and Refine</h3>
              <p>I write the lessons, modules, or materials. We review together and adjust until it&apos;s ready to teach.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="subpage-deliverables">
        <div className="subpage-container">
          <h2>What You <span className="script-accent">Get</span></h2>
          <ul>
            <li>Curriculum or course content structured for clear learning outcomes</li>
            <li>Lesson plans, facilitator guides, or participant materials</li>
            <li>Language that respects your audience&apos;s intelligence and time</li>
            <li>Up to two rounds of revision</li>
          </ul>
        </div>
      </section>

      <section className="subpage-pricing">
        <div className="subpage-container">
          <p>Educational projects range from a single workshop to a full curriculum. Tell me what you&apos;re building, who it&apos;s for, and what you need, and we&apos;ll figure out the right scope together.</p>
        </div>
      </section>

      <section className="subpage-cta">
        <div className="subpage-container">
          <h2>Ready to teach something <span className="script-accent">worth learning</span>?</h2>
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
