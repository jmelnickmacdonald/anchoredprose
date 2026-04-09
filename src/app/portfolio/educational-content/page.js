'use client'
import { useState } from 'react'
import Image from 'next/image'

const PIECES = [
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
    excerpt: "A three-hour workshop for grades 6-8 that moves students through a clear learning arc: Learn, Experience, Teach. By the end, students aren't just safer online — they're equipped to help others navigate digital spaces.\n\nBuilt for depth, not speed. Each hour focuses on one core concept with time for real discussion and reflection.",
  },
  {
    type: 'Alternative Education · Curriculum Framework',
    title: '12 Weeks of Wonder',
    meta: 'Mixed-Age Learning · Ages 8-14',
    pull: '"True inquiry-based learning means following the curiosity and questions of the children in our care."',
    excerpt: "A 12-week inquiry-based learning journey designed for mixed-age groups (ages 8-14). This curriculum framework follows children's curiosity through thematic units — from mapping and cartography to bread science, garden ecology, and pirate navigation.\n\nEach unit includes multiple entry points so younger learners engage through hands-on exploration while older learners tackle leadership roles, design experiments, and engage with real-world applications.",
  },
]

export default function EducationalContentPage() {
  const [expanded, setExpanded] = useState(null)
  return (
    <div className="subpage">
      <nav className="subpage-nav">
        <a href="/" className="logo"><Image src="/logo.png" alt="Anchored Prose" width={200} height={50} style={{ height: 46, width: 'auto' }} /></a>
        <a href="/#portfolio" className="back-link">← Back to Portfolio</a>
      </nav>
      <div className="subpage-banner">
        <Image src="/banner.jpg" alt="" fill style={{ objectFit: 'cover', objectPosition: 'center 40%' }} />
        <div className="subpage-banner-overlay" />
        <div className="subpage-banner-title">
          <div className="section-label" style={{ color: 'var(--gold)', justifyContent: 'center' }}>Portfolio</div>
          <h1>Educational <span className="script-accent">Content</span></h1>
        </div>
      </div>
      <div className="subpage-portfolio-grid">
        {PIECES.map((p, i) => (
          <div key={i} className="portfolio-card" onClick={() => setExpanded(expanded === i ? null : i)} tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && setExpanded(expanded === i ? null : i)}>
            <div className="portfolio-type">{p.type}</div>
            <h3>{p.title}</h3>
            <p className="portfolio-meta">{p.meta}</p>
            <p className="portfolio-pull">{p.pull}</p>
            {expanded === i && (
              <div className="portfolio-excerpt">
                {p.excerpt.split('\n\n').map((para, j) => <p key={j}>{para}</p>)}
              </div>
            )}
            <span className="portfolio-link">{expanded === i ? 'Close' : 'Read excerpt'}</span>
          </div>
        ))}
      </div>
      <div className="subpage-cta-bar">
        <p>Looking for custom curriculum or training content? <a href="/#contact">Let&apos;s talk.</a></p>
      </div>
    </div>
  )
}
