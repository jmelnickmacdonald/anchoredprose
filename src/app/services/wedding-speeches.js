'use client'
import Link from 'next/link'
import Image from 'next/image'

export default function WeddingSpeeches() {
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
          <div className="section-label" style={{ color: 'var(--gold)' }}>Service I</div>
          <h1>Wedding & Event <span className="script-accent">Speeches</span></h1>
          <p className="subpage-tagline">Milestone moments deserve more than clichés.</p>
        </div>
      </section>

      <section className="subpage-intro">
        <div className="subpage-container">
          <p>
            You know the feeling. You know the stories. You might even have a few scribbled notes on your phone from 2 a.m. when the words were flowing and the feelings were big.
          </p>
          <p>
            But turning all of that into something you can stand up and say out loud? In front of everyone? Without your voice cracking on the second sentence? That&apos;s a different skill entirely.
          </p>
          <p>
            I write speeches for weddings, retirements, galas, and all the moments that matter too much to wing it. The kind that sound like you on your very best day. The kind that make people laugh and cry in the same breath. Ideally in that order.
          </p>
        </div>
      </section>

      <section className="subpage-process">
        <div className="subpage-container">
          <h2>How It <span className="script-accent">Works</span></h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">01</div>
              <h3>We Talk</h3>
              <p>This is the good part. We sit down (or hop on a call) and just talk. I&apos;ll ask questions. Some obvious, some a little sideways. I want the stories nobody else would think to tell. The weird inside jokes. The quiet Tuesday that somehow says more than the big vacation. The thing that makes you tear up even when you&apos;re not expecting it.</p>
            </div>
            <div className="process-step">
              <div className="step-number">02</div>
              <h3>I Write</h3>
              <p>I shape your speech with structure, pacing, and personality. I think about how it sounds out loud, not just how it reads on paper. Where does the room need a laugh? Where do they need a breath? Where&apos;s the line that&apos;s going to land right in someone&apos;s chest?</p>
            </div>
            <div className="process-step">
              <div className="step-number">03</div>
              <h3>We Refine</h3>
              <p>You read it. Sit with it. Read it out loud (yes, out loud, I&apos;m serious). We tweak and adjust until it feels completely yours. Until you can stand up, take a breath, and deliver something you&apos;re proud of.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="subpage-deliverables">
        <div className="subpage-container">
          <h2>What You <span className="script-accent">Get</span></h2>
          <ul>
            <li>A fully written, delivery-ready speech tailored to your voice and your audience</li>
            <li>Pacing and structure designed for how people actually listen</li>
            <li>Up to two rounds of revision</li>
            <li>Optional coaching notes on delivery, timing, and what to do with your hands</li>
          </ul>
        </div>
      </section>

      <section className="subpage-pricing">
        <div className="subpage-container">
          <p>Every speech is different. Different story, different stakes, different number of times you want the room reaching for tissues. I&apos;d much rather hear about your moment than hand you a price list.</p>
        </div>
      </section>

      <section className="subpage-cta">
        <div className="subpage-container">
          <h2>Ready to say something that <span className="script-accent">matters</span>?</h2>
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
