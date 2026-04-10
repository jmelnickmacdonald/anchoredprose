'use client'
import Image from 'next/image'
import { useState } from 'react'

const SOCIAL_PIECES = [
  { type: 'Social Media Content · Willow & Rose', title: 'Homestead Brand Voice', meta: 'Willow & Rose — Product & Lifestyle Content', pull: '"Warm, personal content that sounds like the person behind the brand."', image: '/portfolio/willowandrose-social-1.png' },
  { type: 'Video Content · Willow & Rose', title: 'Reel Copywriting', meta: 'Willow & Rose — Short Form Video', pull: '"Scroll-stopping hooks written for real audiences."', video: '/portfolio/willowandrose-video-1.mp4' },
  { type: 'Social Media Content · Raven House Co.', title: 'Small Business Social Copy', meta: 'Raven House Co. — Instagram Content', pull: '"Community-first copy that builds connection, not just followers."', image: '/portfolio/raven-house-social-2.png' },
  { type: 'Social Media Content · Raven House Co.', title: 'Product & Story Posts', meta: 'Raven House Co. — Instagram Content', pull: '"Copy that lets the product speak without overselling it."', image: '/portfolio/raven-house-social-3.png' },
  { type: 'Social Media Content · Raven House Co.', title: 'Brand Storytelling', meta: 'Raven House Co. — Instagram Content', pull: '"Every post part of a larger brand narrative."', image: '/portfolio/raven-house-social-4.png' },
]

const REALESTATE_PIECES = [
  { type: 'Real Estate Copy · Mock-Up', title: 'Listing Social Post', meta: 'Real Estate — Social Media Content', pull: '"Copy that sells the feeling of a home, not just the specs."', image: '/portfolio/realestate-social-1.png' },
  { type: 'Real Estate Copy · Mock-Up', title: 'Realtor Personal Brand Post', meta: 'Real Estate — Social Media Content', pull: '"Positioning a realtor as the trusted guide, not just the salesperson."', image: '/portfolio/realestate-social-2.png' },
  { type: 'Real Estate Copy · Mock-Up', title: 'Property Listing Flyer', meta: 'Real Estate — Print & Digital', pull: '"This could be the one."', image: '/portfolio/realestate-flyer-1.png' },
  { type: 'Real Estate Copy · Mock-Up', title: 'Realtor Marketing Flyer', meta: 'Real Estate — Print & Digital', pull: '"Ready for a change? That\'s where I come in."', image: '/portfolio/real-estate-flyer-3.jpg' },
  { type: 'Video Content · Mock-Up', title: 'Real Estate Reel', meta: 'Real Estate — Short Form Video', pull: '"They weren\'t looking for anything extraordinary..."', video: '/portfolio/realestate-video-3.mp4' },
  { type: 'Video Content · Mock-Up', title: 'Property Carousel Reel', meta: 'Real Estate — Short Form Video', pull: '"Carousel copy that tells a story slide by slide."', video: '/portfolio/realestate-video-4.mp4' },
]

function PieceCard({ p, isActive, onToggle, onVideoClick }) {
  return (
    <div className="portfolio-card" style={{ cursor: p.video ? 'pointer' : 'default' }} onClick={() => p.video ? onVideoClick(p.video) : onToggle()}>
      <div className="portfolio-type">{p.type}</div>
      <h3>{p.title}</h3>
      <p className="portfolio-meta">{p.meta}</p>
      {p.image && (
        <div style={{ margin: '1rem 0', borderRadius: '4px', overflow: 'hidden' }}>
          <Image src={p.image} alt={p.title} width={600} height={400} style={{ width: '100%', height: '220px', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
        </div>
      )}
      {p.video && (
        <div style={{ margin: '1rem 0', borderRadius: '4px', overflow: 'hidden', position: 'relative', background: '#0D1B2E' }}>
          <video src={p.video} style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }} muted playsInline preload="metadata" />
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(184,150,62,0.92)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><polygon points="5,3 16,9 5,15" fill="white"/></svg>
          </div>
        </div>
      )}
      <p className="portfolio-pull">{p.pull}</p>
    </div>
  )
}

export default function BrandContentPage() {
  const [lightbox, setLightbox] = useState(null)

  return (
    <div className="subpage" style={{ backgroundImage: "url('/creamseashellfloral.jpg')", backgroundSize: '500px', backgroundBlendMode: 'normal' }}>
      <nav className="subpage-nav">
        <a href="/" className="logo"><Image src="/logo.png" alt="Anchored Prose" width={200} height={50} style={{ height: 46, width: 'auto' }} /></a>
        <a href="/#portfolio" className="back-link">← Back to Portfolio</a>
      </nav>

      <div className="subpage-banner">
        <Image src="/banner2.jpg" alt="" fill style={{ objectFit: 'cover', objectPosition: 'center 70%' }} />
        <div className="subpage-banner-overlay" />
        <div className="subpage-banner-title">
          <div className="section-label" style={{ color: 'var(--gold)', justifyContent: 'center' }}>Portfolio</div>
          <h1>Brand &amp; <span className="script-accent">Content</span></h1>
        </div>
      </div>

      <div className="subpage-content">
      <div className="subpage-portfolio-grid">
        {SOCIAL_PIECES.map((p, i) => (
          <PieceCard key={i} p={p} onVideoClick={setLightbox} />
        ))}
      </div>

      <div style={{ maxWidth: '1100px', margin: '32px auto 0', padding: '0 48px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontFamily: "'Crimson Pro', Georgia, serif", fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(13,27,46,0.4)' }}>
          <div style={{ flex: 1, height: '1px', background: 'rgba(13,27,46,0.12)', maxWidth: '120px' }} />
          Real Estate — mock-ups created for demonstration
          <div style={{ flex: 1, height: '1px', background: 'rgba(13,27,46,0.12)', maxWidth: '120px' }} />
        </div>
      </div>

      <div className="subpage-portfolio-grid">
        {REALESTATE_PIECES.map((p, i) => (
          <PieceCard key={i} p={p} onVideoClick={setLightbox} />
        ))}
      </div>

      </div>

      {lightbox && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.92)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }} onClick={() => setLightbox(null)}>
          <button onClick={() => setLightbox(null)} style={{ position: 'absolute', top: '24px', right: '32px', background: 'none', border: 'none', color: 'white', fontSize: '32px', cursor: 'pointer', lineHeight: 1 }}>×</button>
          <video src={lightbox} controls autoPlay style={{ maxWidth: '90vw', maxHeight: '80vh', borderRadius: '4px' }} onClick={(e) => e.stopPropagation()} />
        </div>
      )}

      <div className="subpage-cta-bar">
        <p>Like what you see? <a href="/#contact">Let&apos;s work together.</a></p>
      </div>
    </div>
  )
}
