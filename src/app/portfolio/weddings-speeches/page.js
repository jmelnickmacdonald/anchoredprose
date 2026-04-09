'use client'
import Image from 'next/image'
import { useState } from 'react'

const PIECES = [
  {
    type: 'Wedding Officiant',
    title: 'My Sister, Her Perfect Match',
    meta: 'Destination Wedding · Punta Cana, Dominican Republic',
    pull: "\"I'm the type B minus to Rebecca's Type A.\"",
    excerpt: "Welcome, welcome, beach lovers and party enthusiasts! Can we just take a moment to appreciate how beautiful this backdrop is, how stunning our bride and groom look and how clean my children are for a change?\n\nFor those of you who don't know me, I'm Julianna, immensely proud sister of the bride, chronic thorn in her side, and forever accomplice. I spend my days in equal parts chasing kids, cursing at farm animals, and questioning many of my life choices. Meanwhile, Rebecca is off being crowned a world champion fitness competitor, owning and operating an incredible business, being a thoughtful and generous daughter, sister and friend, and looking fabulous doing it all.\n\nNaturally, I set my bar considerably lower. I'm the type B minus to Rebecca's Type A, and I am simply thrilled to be standing here today in a dress and heels instead of my usual muck-covered rubber boots, celebrating my sister and her perfect match.",
  },
  {
    type: 'Best Man Toast',
    title: 'The Turn',
    meta: 'Twenty-Four Years of Friendship',
    pull: '"He still can\'t assemble furniture, but he shows up."',
    excerpt: "I've known Matt for twenty-four years, which means I've seen every version of this man. The kid who ate an entire sleeve of Oreos before a cross-country meet and threw up at the starting line. The guy who once tried to assemble an IKEA bookshelf without the instructions and ended up with something that looked like modern art and held exactly zero books.\n\nHere's the thing about Claire. She knows exactly what she's getting into. And she chose him anyway. Fully informed, eyes wide open. That's not a small thing.\n\nHe still can't assemble furniture, but he shows up. And that's the part that matters.",
  },
  {
    type: 'Father of the Bride',
    title: 'Letting Go',
    meta: 'What Nobody Warns You About',
    pull: '"The job was never to keep them."',
    excerpt: "Here's the thing nobody warns you about when you become a parent. You spend years becoming the world's leading expert on one small human: what makes them laugh, what scares them, which breakfast battles aren't worth fighting, the exact pitch of the cry that means something actually hurts versus the one that means her sister looked at her wrong.\n\nAnd then one day, someone else starts learning those things too. And you realize the job was never to keep them. The job was to make sure that when they found their person, they'd know.\n\nShe doesn't need me to give her away. She's not mine to give. But I am so honoured to watch.",
  },
  {
    type: 'Wedding Vows',
    title: 'The Night I Knew',
    meta: 'Autumn Wedding · Prince Edward Island',
    pull: '"I don\'t ever want to come home to a house where this isn\'t happening."',
    excerpt: "I knew I wanted this the night you fell asleep on the couch with both dogs on top of you and the TV still going, and I sat there for a full ten minutes just looking at you, thinking: I don't ever want to come home to a house where this isn't happening.\n\nI'm not going to promise you perfection. I'm going to forget things. I'm going to load the dishwasher wrong. I'm going to need you to tell me what's wrong instead of saying \"I'm fine\" because I will believe you every single time.\n\nBut here's what I can promise: I will always be in your corner. I will always choose us, even when us is hard. I will love you quietly, stubbornly, and without keeping score.",
  },
  {
    type: 'Choral Reading · Wedding Ceremony',
    title: "Oh, the Places You'll Go",
    meta: "Inspired by Dr. Seuss' Oh, the Places You'll Go!",
    pull: '"Oh, the places you\'ll go, the things you will do, a lifetime of joy is waiting for you."',
    excerpt: "Congratulations, today is the big day!\nYou've found your partner to help you pave your way.\nThe world is before you, it's open and wide,\nFilled with adventures you'll take in stride.\n\nAs you step into marriage, with love in your hearts,\nKnow there will be challenges, but that's just the start.\nYou'll face the unknown, with strength and with grace,\nThrough twists and through turns, in life's crazy race.\n\nThere'll be highs, there'll be lows,\nbut you've got this down,\nYou're in it together,\nthe best team in town.\n\nSometimes you'll falter, and sometimes you'll fall,\nBut love will be there to help you stand tall.\nFor no matter the place, no matter the time,\nThe two of you together will be just fine.\n\nSo dream and discover, laugh and explore,\nFor this journey ahead will open new doors.\nWith patience, with kindness, and love as your guide,\nYou'll conquer the world, standing side by side.\n\nSo here's to your future, bright as can be,\nThe adventure of love, for all to see.\nOh, the places you'll go, the things you will do,\nA lifetime of joy is waiting for you.",
  },
  {
    type: 'Choral Reading · Wedding Ceremony',
    title: "Oh, the Places You'll Go",
    meta: "Inspired by Dr. Seuss' Oh, the Places You'll Go!",
    pull: '"Oh, the places you\'ll go, the things you will do, a lifetime of joy is waiting for you."',
    excerpt: "Congratulations, today is the big day!\nYou've found your partner to help you pave your way.\nThe world is before you, it's open and wide,\nFilled with adventures you'll take in stride.\n\nAs you step into marriage, with love in your hearts,\nKnow there will be challenges, but that's just the start.\nYou'll face the unknown, with strength and with grace,\nThrough twists and through turns, in life's crazy race.\n\nThere'll be highs, there'll be lows,\nbut you've got this down,\nYou're in it together,\nthe best team in town.\n\nSometimes you'll falter, and sometimes you'll fall,\nBut love will be there to help you stand tall.\nFor no matter the place, no matter the time,\nThe two of you together will be just fine.\n\nSo dream and discover, laugh and explore,\nFor this journey ahead will open new doors.\nWith patience, with kindness, and love as your guide,\nYou'll conquer the world, standing side by side.\n\nSo here's to your future, bright as can be,\nThe adventure of love, for all to see.\nOh, the places you'll go, the things you will do,\nA lifetime of joy is waiting for you.",
  },
]

export default function WeddingsSpeechesPage() {
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
          <h1>Weddings &amp; <span className="script-accent">Speeches</span></h1>
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
                {p.excerpt.split('\n\n').map((para, j) => <p key={j} style={{ whiteSpace: 'pre-line' }}>{para}</p>)}
              </div>
            )}
            <span className="portfolio-link">{expanded === i ? 'Close' : 'Read excerpt'}</span>
          </div>
        ))}
      </div>
      <div className="subpage-cta-bar">
        <p>Like what you see? <a href="/#contact">Let&apos;s work together.</a></p>
      </div>
    </div>
  )
}
