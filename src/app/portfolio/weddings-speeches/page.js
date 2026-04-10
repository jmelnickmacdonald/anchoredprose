'use client'
import Image from 'next/image'
import { useState } from 'react'

const SPEECHES = [
  {
    type: 'Wedding Officiant',
    title: 'The Type B Minus to Her Type A',
    meta: 'Destination Wedding · Punta Cana, Dominican Republic',
    pull: '"I\'m the type B minus to Rebecca\'s Type A."',
    excerpt: "Welcome, welcome, beach lovers and party enthusiasts! Can we just take a moment to appreciate how beautiful this backdrop is, how stunning our bride and groom look and how clean my children are for a change?\n\nFor those of you who don't know me, I'm Julianna, immensely proud sister of the bride, chronic thorn in her side, and forever accomplice. I spend my days in equal parts chasing kids, cursing at farm animals, and questioning many of my life choices. Meanwhile, Rebecca is off being crowned a world champion fitness competitor, owning and operating an incredible business, being a thoughtful and generous daughter, sister and friend, and looking fabulous doing it all. Naturally, I set my bar considerably lower. I guess you could say I'm the type B minus to Rebecca's Type A.\n\nAll that said, I am simply thrilled to be standing here today in a dress and heels instead of my usual muck-covered rubber boots, celebrating my sister and her perfect match.",
  },
  {
    type: 'Best Man Toast',
    title: 'The One Who Mattered',
    meta: 'Twenty-Four Years of Friendship',
    pull: '"He still can\'t assemble furniture, but he shows up."',
    excerpt: "I've known Matt for twenty-four years. We met when we were nine, playing hockey which means I've seen just about every version of this man standing here.\n\nThe 9-year-old who decided he was going to be a goalie. That lasted exactly one game — in fact, maybe less? Did you even make it past second period, buddy? Turns out the job involves getting hit with things, and the puck does not care about your confidence. The 13-year-old who ate an entire sleeve of Oreos before a cross-country meet and threw up at the starting line. The 18-year-old, which, for legal reasons, we're just going to refer to as a bold era. Very confident, very charismatic, and very rarely correct. And the 25-year-old, fresh out of grad school Matt, who tried to assemble a Kijiji-purchased IKEA bookshelf without the instructions and ended up with something that looked like modern art and held exactly zero books ever.\n\nFor a long time, that was Matt. A lot of enthusiasm, a lot of confidence… and a track record that didn't always agree.\n\nMatt had always been the life of the party. If something was going to happen, we knew exactly who was leading the charge. He could walk into a place and somehow know the bouncer, the bartender, the lead singer of the band and half the room before the rest of us had even sipped our first beer.\n\nThat was Matt. Until he met Claire. And then just like that… my leading man met his leading lady and, for once, stopped trying to run the whole show.\n\nBecause for the first time ever… this one mattered.",
  },
  {
    type: 'Father of the Bride',
    title: 'Letting Go',
    meta: 'What Nobody Warns You About',
    pull: '"The job was never to keep her."',
    excerpt: "Here's the thing nobody warns you about when you become a parent. You spend years becoming the world's leading expert on one tiny human: what makes them laugh, which breakfast battles aren't worth fighting, the exact pitch of the cry that means something actually hurts versus the one that means her sister looked at her wrong, and how to make it better when they're having a hard day.\n\nThen one day, you realize your someone else sees her—and understands her—the way you do. That's when it hits you and gosh, it hits hard.\n\nYour job was never to keep her.\n\nIt was to raise her well so that when it really mattered, she'd know.\n\nShe doesn't need me to give her away. She's been bossing me around since she was about three so let's be honest about who's really been in charge here. She's not mine to give, but I am so unbelievably proud to be here to watch it.",
  },
  {
    type: 'Choral Reading · Wedding Ceremony',
    title: 'The Journey Ahead',
    meta: "Inspired by Dr. Seuss' Oh, the Places You'll Go!",
    pull: '"Oh, the places you\'ll go, the things you will do, a lifetime of joy is waiting for you."',
    excerpt: "Congratulations, today is the big day!\nYou've found your partner to help you pave your way.\nThe world is before you, it's open and wide,\nFilled with adventures you'll take in stride.\n\nAs you step into marriage, with love in your hearts,\nKnow there will be challenges, but that's just the start.\nYou'll face the unknown, with strength and with grace,\nThrough twists and through turns, in life's crazy race.\n\nThere'll be highs, there'll be lows, but you've got this down,\nYou're in it together, the best team in town.\n\nSometimes you'll falter, and sometimes you'll fall,\nBut love will be there to help you stand tall.\nFor no matter the place, no matter the time,\nThe two of you together will be just fine.\n\nSo dream and discover, laugh and explore,\nFor this journey ahead will open new doors.\nWith patience, with kindness, and love as your guide,\nYou'll conquer the world, standing side by side.\n\nSo here's to your future, bright as can be,\nThe adventure of love, for all to see.\nOh, the places you'll go, the things you will do,\nA lifetime of joy is waiting for you.",
  },
]

const TRIBUTES = [
  {
    type: 'Pet Tribute',
    title: 'Finley',
    meta: 'Personal Essay · 2024',
    pull: '"He set the tone and carried it his whole life."',
    excerpt: "Today we said goodbye to Finley, our first baby. He came into our lives long before any of the tiny humans did, and he was the dog we brought every one of those babies home to. In a lot of ways he grew up with us while we were figuring out how to become grown ups ourselves.\n\nFinley had an adventurous almost 13 years. He started out in suburbia, moved with us into rural life, was uprooted with us after the fire, and eventually ended up living the good life as a farm dog. He adapted to every new chapter the same way he handled most things in life - with curiosity, a bit of stubbornness, and the quiet confidence that he belonged wherever his people (and more importantly, his kids) were.\n\nNothing made him happier than his river walks. If there was a trail and water involved, Finley was all in.\n\nOakley was his best friend. Piper was very much his little sister, and he loved her in the most big-brother way possible - including making it very clear when she was being annoying. They were the three stooges, spending their days bouncing between outdoor adventures and couch naps.\n\nFinley also had the important job of teaching the other dogs how to be Melnick-MacDonald dogs. He set the tone and carried it his whole life.\n\nThis morning, after getting rubs and kisses from his kids before they left for school, he passed peacefully in his sleep. In his own quiet way, I think he had made his final decision. I honestly can't think of a more Finley way to close out his chapter.\n\nHe was deeply loved, lived a very full life, and left paw prints all over this family. We're going to miss you so much, Finley.",
  },
  {
    type: 'Obituary',
    title: 'Austin Allison Cronk',
    meta: 'November 21, 1927 — January 4, 2018',
    pull: '"There was no such thing as a quick trip to the grocery store for Austin."',
    excerpt: "With heavy hearts and great sadness, we announce the passing of Austin Allison Cronk, 90, of Huntsville, Ontario on January 4, 2018.\n\nAustin was a man who knew everyone, and made sure everyone knew it. There was no such thing as a quick trip to the grocery store for Austin. There was no errand that couldn't be extended by forty-five minutes and at least two lengthy conversations. He had a handshake for strangers and a story for anyone who stayed long enough to hear it.\n\nHe leaves behind a family who loved him, a community that will miss him, and a Huntsville Tim Hortons that will never quite be the same.",
  },
]

export default function WeddingsSpeechesPage() {
  const [expanded, setExpanded] = useState(null)

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
          <h1>Weddings &amp; <span className="script-accent">Speeches</span></h1>
        </div>
      </div>

      <div style={{ background: '#F5F0E8', position: 'relative', zIndex: 10 }}>
        <div style={{ height: '3px', background: 'var(--navy)', width: '100%' }} />
        <div className="subpage-category-bar"></div>
        <div className="subpage-category-label">Speeches &amp; Ceremonies</div>
        <div className="subpage-portfolio-grid">
          {SPEECHES.map((p, i) => (
            <div key={i} className="portfolio-card" onClick={() => setExpanded(expanded === 'speech-' + i ? null : 'speech-' + i)}>
              <div className="portfolio-type">{p.type}</div>
              <h3>{p.title}</h3>
              <p className="portfolio-meta">{p.meta}</p>
              <p className="portfolio-pull">{p.pull}</p>
              {expanded === 'speech-' + i && (
                <div className="portfolio-excerpt">
                  {p.excerpt.split('\n\n').map((para, j) => (
                    <p key={j}>{para}</p>
                  ))}
                </div>
              )}
              <span className="portfolio-link">{expanded === 'speech-' + i ? 'Close' : 'Read excerpt'}</span>
            </div>
          ))}
        </div>

        <div style={{ height: '3px', background: 'var(--navy)', width: '100%', marginTop: '48px' }} />
        <div className="subpage-category-bar"></div>
        <div className="subpage-category-label">Tributes &amp; Remembrances</div>
        <div className="subpage-portfolio-grid">
          {TRIBUTES.map((p, i) => (
            <div key={i} className="portfolio-card" onClick={() => setExpanded(expanded === 'tribute-' + i ? null : 'tribute-' + i)}>
              <div className="portfolio-type">{p.type}</div>
              <h3>{p.title}</h3>
              <p className="portfolio-meta">{p.meta}</p>
              <p className="portfolio-pull">{p.pull}</p>
              {expanded === 'tribute-' + i && (
                <div className="portfolio-excerpt">
                  {p.excerpt.split('\n\n').map((para, j) => (
                    <p key={j}>{para}</p>
                  ))}
                </div>
              )}
              <span className="portfolio-link">{expanded === 'tribute-' + i ? 'Close' : 'Read excerpt'}</span>
            </div>
          ))}
        </div>

        <div className="subpage-cta-bar">
          <p>Like what you see? <a href="/#contact">Let&apos;s work together.</a></p>
        </div>
      </div>
    </div>
  )
}
