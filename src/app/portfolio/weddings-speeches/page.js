'use client'
import Image from 'next/image'
import { useState } from 'react'

const SPEECHES = [
  {
    type: 'Wedding Officiant',
    title: 'My Sister and Her Perfect Match',
    meta: 'Wedding Ceremony Script · Destination Wedding, Punta Cana',
    pull: '"I\'m the type B minus to Rebecca\'s Type A."',
    excerpt: "Welcome, welcome, beach lovers and party enthusiasts! Can we just take a moment to appreciate how beautiful this backdrop is, how stunning our bride and groom look and how clean my children are for a change?\n\nFor those of you who don't know me, I'm Julianna, immensely proud sister of the bride, chronic thorn in her side, and forever accomplice. I spend my days in equal parts chasing kids, cursing at farm animals, and questioning many of my life choices. Meanwhile, Rebecca is off being crowned a world champion fitness competitor, owning and operating an incredible business, being a thoughtful and generous daughter, sister and friend, and looking fabulous doing it all. Naturally, I set my bar considerably lower. I guess you could say I'm the type B minus to Rebecca's Type A.\n\nAll that said, I am simply thrilled to be standing here today in a dress and heels instead of my usual muck-covered rubber boots, celebrating my sister and her perfect match.",
  },
  {
    type: 'Best Man Toast',
    title: 'That Was Matt',
    meta: 'Twenty-Four Years of Friendship',
    pull: '"Because for the first time ever, this one mattered."',
    excerpt: "I've known Matt for twenty-four years. We met when we were nine, playing hockey together. This means I've seen just about every version of this man standing here.\n\nThe 9-year-old who decided he was going to be a goalie. That lasted exactly one game ... actually, maybe less? Did you even make it past second period, buddy? Turns out the job involves getting hit with things, and the puck does not care about your confidence. The 13-year-old who ate an entire sleeve of Oreos before a cross-country meet and threw up at the starting line. The 18-year-old, which, for legal reasons, we're just going to refer to as his bold era. He was very confident, very charismatic, and very rarely correct. I also got to see the 25-year-old, fresh out of grad school Matt, who tried to assemble a Kijiji-purchased IKEA bookshelf without the instructions and ended up with something that looked like modern art and held exactly zero books ever.\n\nFor a long time, that was Matt. A lot of enthusiasm, a lot of confidence... and a track record that didn't always agree.\n\nHe'd always been the life of the party. If something was going to happen, we knew exactly who was leading the charge. Matt would walk into a place and somehow know the bouncer, the bartender, the lead singer of the band and half the room before the rest of us had even sipped our first beers.\n\nThat was Matt, until he met Claire and suddenly my leading man had met his leading lady and, for once, stopped trying to run the whole show.\n\nBecause for the first time ever... this one mattered.",
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
    pull: '"He adapted to every new chapter the same way he handled most things in life."',
    excerpt: "Today we said goodbye to Finley, our first baby.\n\nHe came into our lives long before any of the tiny humans did, and he was the dog we brought every one of those babies home to. In a lot of ways he grew up with us while we were figuring out how to become grown ups ourselves.\n\nFinley had an adventurous almost 13 years. He started out in suburbia, moved with us into rural life, was uprooted with us after the fire, and eventually ended up living the good life as a farm dog. He adapted to every new chapter the same way he handled most things in life — with curiosity, a bit of stubbornness, and the quiet confidence that he belonged wherever his people (and more importantly, his kids) were.\n\nAlong the way he learned how to deal with cats, learned to tolerate chickens and ducks (though he definitely liked to keep them on their toes), developed a very healthy respect for geese, and was endlessly fascinated by pigs, goats, cows, and horses. Farm life suited him. You really can teach an old dog new tricks, it seems!\n\nNothing made him happier than his river walks. If there was a trail and water involved, Finley was all in. Even if he had to go on his own with Piper and Oakley, as they did all summer long... apparently our twice-a-day walks were not sufficient, so they took it upon themselves to add two more for good measure.\n\nFrom the very first day we brought him home he had a sensitive stomach, but he never let that slow him down. We spent a ridiculous amount of money in his first year only for vets to tell us he was just fine and just a little sensitive. Don't worry, they said, he'll grow out of it. Well, rather than growing out of it he basically defined puke and rally... clean up, carry on, business as usual. What a dog.\n\nOakley was his best friend. Piper was very much his little sister, and he loved her in the most big-brother way possible — including making it very clear when she was being annoying. They were the three stooges, spending their days bouncing between outdoor adventures and couch naps.\n\nHe loved to eat... including things he absolutely shouldn't. In the last year or so he developed a real attachment to the chicken feed despite Mom's best efforts to prevent that. He took his job around the property seriously too. Regular perimeter sweeps of the yard, checking in on everything and everyone, and of course making time for his daily Max the Barn Cat check in.\n\nFinley also had the important job of teaching the other dogs how to be Melnick-MacDonald dogs. He set the tone and carried it his whole life.\n\nThen there were his favourite people in the world — his kids. He was our baby first, but in his own quiet way he helped raise our human babies too. He went from cautiously moving away from crawling Willow in the early days (she'd make it to him and he would move again... forever moving the goalposts, much to her baby rage) to patiently living through babies two, three, and four. They slowly wore him down, and he became the endlessly gentle, steady dog who was always part of the background of their childhood. He was never far when they were playing outside and was always game for a forest adventure. They loved him fiercely, and they are absolutely devastated today.\n\nI've been dreading this day for a long time. It has felt like we've been quietly chasing a clock for the last couple of years... trying to soak up every moment while also pretending it wasn't getting closer. Denial, I guess. His tummy was always a challenge, he was getting lumpy and bumpy, and over the last six months his back end had lost a lot of muscle. On the days when he went too hard (and he absolutely still had those ridiculous puppy-mode days several times a week) he would really struggle to get moving again after. I worried about how we would know when it was time, but I hoped he would tell us in his own gentle way.\n\nYesterday evening he was just a little off. He'd had a good morning and afternoon — a walk with me in the morning and then lounging the rest of the day — but by evening he seemed spacey. He wandered off on a little walk and I had to coax him back up to the house, which was unusual for him. Willow and I tucked him in to sleep and she slept downstairs on the couch with him.\n\nThis morning, after getting rubs and kisses from his kids before they left for school, he passed peacefully in his sleep. In his own quiet way, I think he had made his final decision. I honestly can't think of a more Finley way to close out his chapter. While I am absolutely devastated, I can't help but feel grateful that he made it a little easier on me.\n\nHe was deeply loved, lived a very full life, and left paw prints all over this family. We're going to miss you so much, Finley.",
  },
  {
    type: 'Obituary',
    title: 'Austin Allison Cronk',
    meta: 'November 21, 1927 — January 4, 2018',
    pull: '"There was no such thing as a quick trip to the grocery store."',
    excerpt: "I had to go back a bit for this one.\n\nThis piece is from over eight years ago, and I hesitated to include it. It's more personal than most of what I share here, but when I take a mental inventory of the writing I've done over the years, this is one that always comes back to me.\n\nMy Da was always one of my biggest cheerleaders when it came to my writing. At one point, he insisted I mail him a paper I had written during my undergrad. I didn't think much of it at the time, but later found out he had shared it with a former student he deeply respected — someone who had gone on to become a highly regarded Canadian author. I remember feeling instantly mortified at the time, but later realizing how lucky I was to have his unfailing support.\n\n— ✦ —\n\nWith heavy hearts and great sadness, we announce the passing of Austin, 90, on January 4, 2018. Born in Ontario in 1927, Austin was predeceased by both his parents and siblings. He was lucky enough to meet and fall in love with his partner in crime, Loretta, and they were married in 1953.\n\nAustin was a loving father to four sons, and a fiercely proud grandfather to his grandchildren and great-grandchildren. He was a caring and supportive uncle to many and a generous friend.\n\nAn avid learner and ambitious student, Austin was an avid collector of educational paperwork, having graduated from Teachers College in Peterborough and the Industrial Arts School in Toronto, before going on to earn a Bachelor of Arts from Queen's University and a Master of Education from the University of Ottawa. His love for learning fueled his passion for teaching and guidance, a career he pursued with vigour (and more than a little vim from time to time!)\n\nAs the much-respected guidance counsellor before retiring after 33 years, Austin was a surrogate father and fierce advocate for many of his students, known for offering a warm shoulder, a compassionate ear or sage advice for whomever needed it most. He was an active community member as a Boy Scout leader, volunteer with the Heart & Stroke Society and a member of the Masonic Lodge. He and his sons shared a love for the great outdoors and together they spent a great deal of time out at the bush property.\n\nAustin, Dad, Uncle Austin, Grandpa, Da, Great Grandpa, G-Da, Mr. C — as you leave this world, please know how much you are loved. We will forever miss your warm smile, often repeated but always much-enjoyed tales of times past, your punny jokes, bedtime stories, love and constant support.\n\nThere was no such thing as a quick trip to the grocery store for Austin, as he couldn't make it through without exchanging a fond memory or kind word with a former student or friend, and that is truly a testament to his character and legacy. For those wishing to honour Austin with a memorial donation, please make donations to the Heart & Stroke Foundation. As an alternative, in celebration of this kind and gentle soul, please consider passing on an unexpected and unsolicited act of kindness, knowing how much it would bring a smile to his face.",
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
          <h1>Speeches, Ceremonies <span className="script-accent">&amp; Tributes</span></h1>
        </div>
      </div>

      <div style={{ background: '#aaa3a0', position: 'relative', zIndex: 10 }}>
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

        <div style={{ paddingTop: "56px" }}></div>
        <div className="subpage-category-label">Tributes &amp; Memorials</div>
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
