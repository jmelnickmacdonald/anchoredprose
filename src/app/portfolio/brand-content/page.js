'use client'
import Image from 'next/image'
import { useState } from 'react'

const SOCIAL_PIECES = [
  { type: 'Social Media · Willow & Rose', title: 'Homestead Brand Voice', image: '/portfolio/willowandrose-social-1.png' },
  { type: 'Video · Willow & Rose', title: 'Reel Copywriting', video: '/portfolio/willowandrose-video-1.mp4' },
  { type: 'Social Media · Raven House Co.', title: 'Farmstand & Community Post', image: '/portfolio/raven-house-social-1.png' },
  { type: 'Social Media · Raven House Co.', title: 'Lifestyle Social Copy', image: '/portfolio/raven-house-social-3.png' },
  { type: 'Social Media · Raven House Co.', title: 'Small Business Social Copy', image: '/portfolio/raven-house-social-2.png' },
]

const REALESTATE_PIECES = [
  { type: 'Real Estate · Mock-Up', title: 'Listing Social Post', image: '/portfolio/realestate-social-1.png' },
  { type: 'Real Estate · Mock-Up', title: 'Realtor Personal Brand Post', image: '/portfolio/realestate-social-2.png' },
  { type: 'Real Estate · Mock-Up', title: 'Property Listing Flyer', image: '/portfolio/realestate-flyer-1.png' },
  { type: 'Real Estate · Mock-Up', title: 'Realtor Marketing Flyer', image: '/portfolio/real-estate-flyer-3.jpg' },
  { type: 'Video · Mock-Up', title: 'Real Estate Reel', video: '/portfolio/realestate-video-3.mp4' },
  { type: 'Video · Mock-Up', title: 'Property Carousel Reel', video: '/portfolio/realestate-video-4.mp4' },
  { type: 'Video · Mock-Up', title: 'Real Estate Social Reel', video: '/portfolio/realestate-social-4.mp4' },
]

function GalleryTile({ p, onVideoClick, onImageClick }) {
  return (
    <div
      onClick={() => { if (p.video) onVideoClick(p.video); else if (p.image) onImageClick(p.image); }}
      style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column' }}
    >
      <div style={{ position: 'relative', overflow: 'hidden', background: '#e8e4dd', borderRadius: '2px' }}>
        {p.image && (
          <img
            src={p.image}
            alt={p.title}
            style={{ width: '100%', height: '260px', objectFit: 'contain', objectPosition: 'center', display: 'block', transition: 'transform 0.3s ease' }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          />
        )}
        {p.video && (
          <div style={{ position: 'relative' }}>
            <video src={p.video} style={{ width: '100%', height: '260px', objectFit: 'cover', display: 'block' }} muted playsInline preload="metadata" />
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(13,27,46,0.15)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(155,123,58,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><polygon points="4,2 14,8 4,14" fill="white"/></svg>
              </div>
            </div>
          </div>
        )}
      </div>
      <div style={{ padding: '12px 4px 0' }}>
        <p style={{ fontFamily: "'Crimson Pro',Georgia,serif", fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(155,123,58,0.8)', marginBottom: '4px' }}>{p.type}</p>
        <p style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: '17px', color: 'var(--navy)', fontWeight: 400 }}>{p.title}</p>
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
        <a href="/" className="logo">
          <Image src="/logo.png" alt="Anchored Prose" width={200} height={50} style={{ height: 46, width: 'auto' }} />
        </a>
        <a href="/#portfolio" className="back-link">← Back to Portfolio</a>
      </nav>

      <div className="subpage-banner">
        <div className="subpage-banner-overlay" />
        <div className="subpage-banner-title">
          <div className="section-label" style={{ color: 'var(--gold)', justifyContent: 'center', marginBottom: '12px' }}>Portfolio</div>
          <h1>Brand &amp; <span className="script-accent">Content</span></h1>
        </div>
      </div>
      <div style={{ height: '3px', background: '#0D1B2E', width: '100%' }} />

      <div style={{ background: '#F5F0E8', position: 'relative', zIndex: 10, padding: '56px 64px 72px' }}>

        <div style={{ maxWidth: '1100px', margin: '0 auto 48px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
          {SOCIAL_PIECES.map((p, i) => (
            <GalleryTile key={i} p={p} onVideoClick={setLightboxVideo} onImageClick={setLightboxImage} />
          ))}
        </div>

        <div style={{ maxWidth: '1100px', margin: '0 auto 32px', display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div style={{ flex: 1, height: '1px', background: 'rgba(13,27,46,0.1)' }} />
          <p style={{ fontFamily: "'Crimson Pro',Georgia,serif", fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(13,27,46,0.35)', whiteSpace: 'nowrap' }}>Real Estate — mock-ups for demonstration</p>
          <div style={{ flex: 1, height: '1px', background: 'rgba(13,27,46,0.1)' }} />
        </div>

        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
          {REALESTATE_PIECES.map((p, i) => (
            <GalleryTile key={i} p={p} onVideoClick={setLightboxVideo} onImageClick={setLightboxImage} />
          ))}
        </div>

      </div>

      {lightboxVideo && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.92)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }} onClick={() => setLightboxVideo(null)}>
          <button onClick={() => setLightboxVideo(null)} style={{ position: 'absolute', top: '24px', right: '32px', background: 'none', border: 'none', color: 'white', fontSize: '32px', cursor: 'pointer' }}>×</button>
          <video src={lightboxVideo} controls autoPlay style={{ maxWidth: '90vw', maxHeight: '85vh', borderRadius: '4px' }} onClick={e => e.stopPropagation()} />
        </div>
      )}

      {lightboxImage && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.92)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }} onClick={() => setLightboxImage(null)}>
          <button onClick={() => setLightboxImage(null)} style={{ position: 'absolute', top: '24px', right: '32px', background: 'none', border: 'none', color: 'white', fontSize: '32px', cursor: 'pointer' }}>×</button>
          <img src={lightboxImage} alt="" style={{ maxWidth: '92vw', maxHeight: '90vh', objectFit: 'contain', borderRadius: '4px' }} onClick={e => e.stopPropagation()} />
        </div>
      )}

      <div className="subpage-cta-bar">
        <p>Like what you see? <a href="/#contact">Let&apos;s work together.</a></p>
      </div>
    </div>
  )
}
