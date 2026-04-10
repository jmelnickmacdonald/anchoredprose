'use client'
import Image from 'next/image'
import { useState } from 'react'

const SOCIAL_PIECES = [
  {
    type: 'Social Media Content · Willow & Rose',
    title: 'Homestead Brand Voice',
    meta: 'Willow & Rose — Product & Lifestyle Content',
    image: '/portfolio/willowandrose-social-1.png',
  },
  {
    type: 'Video Content · Willow & Rose',
    title: 'Reel Copywriting',
    meta: 'Willow & Rose — Short Form Video',
    video: '/portfolio/willowandrose-video-1.mp4',
  },

  {
    type: 'Social Media Content · Raven House Co.',
    title: 'Farmstand & Community Post',
    meta: 'Raven House Co. — Instagram Content',
    image: '/portfolio/raven-house-social-1.png',
  },

  {
    type: 'Social Media Content · Raven House Co.',
    title: 'Lifestyle Social Copy',
    meta: 'Raven House Co. — Instagram Content',
    image: '/portfolio/raven-house-social-3.png',
  },

]

const REALESTATE_PIECES = [
  {
    type: 'Real Estate Copy · Mock-Up',
    title: 'Listing Social Post',
    meta: 'Real Estate — Social Media Content',
    image: '/portfolio/realestate-social-1.png',
  },
  {
    type: 'Real Estate Copy · Mock-Up',
    title: 'Realtor Personal Brand Post',
    meta: 'Real Estate — Social Media Content',
    image: '/portfolio/realestate-social-2.png',
  },
  {
    type: 'Real Estate Copy · Mock-Up',
    title: 'Property Listing Flyer',
    meta: 'Real Estate — Print & Digital',
    image: '/portfolio/realestate-flyer-1.png',
  },
  {
    type: 'Real Estate Copy · Mock-Up',
    title: 'Realtor Marketing Flyer',
    meta: 'Real Estate — Print & Digital',
    image: '/portfolio/real-estate-flyer-3.jpg',
  },
  {
    type: 'Video Content · Mock-Up',
    title: 'Real Estate Reel',
    meta: 'Real Estate — Short Form Video',
    video: '/portfolio/realestate-video-3.mp4',
  },
  {
    type: 'Video Content · Mock-Up',
    title: 'Property Carousel Reel',
    meta: 'Real Estate — Short Form Video',
    video: '/portfolio/realestate-video-4.mp4',
  },
  {
    type: 'Video Content · Mock-Up',
    title: 'Real Estate Social Reel',
    meta: 'Real Estate — Short Form Video',
    video: '/portfolio/realestate-social-4.mp4',
  },
]

function PieceCard({ p, onVideoClick, onImageClick }) {
  return (
    <div
      className="portfolio-card"
      style={{ cursor: 'pointer', background: '#1a2d47', borderTop: '3px solid rgba(155,123,58,0.4)', padding: '32px', position: 'relative', overflow: 'hidden' }}
      onClick={() => { if (p.video) onVideoClick(p.video); else if (p.image) onImageClick(p.image); }}
    >
      <div style={{ fontFamily: "'Crimson Pro', Georgia, serif", fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase', color: '#9B7B3A', marginBottom: '10px' }}>{p.type}</div>
      <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '22px', color: '#FAF7F2', marginBottom: '6px', fontWeight: 400 }}>{p.title}</h3>
      <p style={{ fontFamily: "'Crimson Pro', Georgia, serif", fontSize: '14px', color: 'rgba(250,247,242,0.45)', marginBottom: '16px' }}>{p.meta}</p>
      {p.image && (
        <div style={{ borderRadius: '4px', overflow: 'hidden', background: '#0D1B2E' }}>
          <Image
            src={p.image}
            alt={p.title}
            width={600}
            height={420}
            style={{ width: '100%', height: '460px', objectFit: 'contain', objectPosition: 'center', display: 'block' }}
          />
        </div>
      )}
      {p.video && (
        <div style={{ borderRadius: '4px', overflow: 'hidden', position: 'relative', background: '#0D1B2E' }}>
          <video src={p.video} style={{ width: '100%', height: '320px', objectFit: 'cover', display: 'block' }} muted playsInline preload="metadata" />
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(155,123,58,0.92)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><polygon points="5,3 16,9 5,15" fill="white"/></svg>
          </div>
        </div>
      )}
      <p style={{ fontFamily: "'Crimson Pro', Georgia, serif", fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', color: '#9B7B3A', marginTop: '14px' }}>
        {p.video ? 'Click to play' : 'Click to enlarge'}
      </p>
    </div>
    </div>
  )
}

export default function BrandContentPage() {
  const [lightboxVideo, setLightboxVideo] = useState(null)
  const [lightboxImage, setLightboxImage] = useState(null)

  return (
    <div className="subpage">
      <nav className="subpage-nav">
        <a href="/" className="logo"><Image src="/logo.png" alt="Anchored Prose" width={200} height={50} style={{ height: 46, width: 'auto' }} /></a>
        <a href="/#portfolio" className="back-link">← Back to Portfolio</a>
      </nav>

      <div className="subpage-banner">
        <div className="subpage-banner-overlay" />
        <div className="subpage-banner-title">
          <div className="section-label" style={{ color: 'var(--gold)', justifyContent: 'center', marginBottom: '12px' }}>Portfolio</div>
          <h1>Brand &amp; <span className="script-accent">Content</span></h1>
        </div>
      </div>

      <div className="subpage-body">
        <div className="subpage-portfolio-grid">
          {SOCIAL_PIECES.map((p, i) => (
            <PieceCard key={i} p={p} onVideoClick={setLightboxVideo} onImageClick={setLightboxImage} />
          ))}
        </div>

        <div style={{ maxWidth: '1100px', margin: '48px auto 0', padding: '0 48px', textAlign: 'center' }}>
          <p style={{ fontFamily: "'Crimson Pro', Georgia, serif", fontSize: '14px', letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(13,27,46,0.4)' }}>
            Real Estate — mock-ups created for demonstration
          </p>
        </div>

        <div className="subpage-portfolio-grid">
          {REALESTATE_PIECES.map((p, i) => (
            <PieceCard key={i} p={p} onVideoClick={setLightboxVideo} onImageClick={setLightboxImage} />
          ))}
        </div>
      </div>

      {lightboxVideo && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.92)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }} onClick={() => setLightboxVideo(null)}>
          <button onClick={() => setLightboxVideo(null)} style={{ position: 'absolute', top: '24px', right: '32px', background: 'none', border: 'none', color: 'white', fontSize: '32px', cursor: 'pointer' }}>×</button>
          <video src={lightboxVideo} controls autoPlay style={{ maxWidth: '90vw', maxHeight: '85vh', borderRadius: '4px' }} onClick={(e) => e.stopPropagation()} />
        </div>
      )}

      {lightboxImage && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.92)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }} onClick={() => setLightboxImage(null)}>
          <button onClick={() => setLightboxImage(null)} style={{ position: 'absolute', top: '24px', right: '32px', background: 'none', border: 'none', color: 'white', fontSize: '32px', cursor: 'pointer' }}>×</button>
          <img src={lightboxImage} alt="" style={{ maxWidth: '92vw', maxHeight: '90vh', objectFit: 'contain', borderRadius: '4px' }} onClick={(e) => e.stopPropagation()} />
        </div>
      )}

      <div className="subpage-cta-bar">
        <p>Like what you see? <a href="/#contact">Let&apos;s work together.</a></p>
      </div>
    </div>
  )
}
