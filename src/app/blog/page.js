'use client'
import Link from 'next/link'
import Image from 'next/image'

const BLOG_POSTS = [
  {
    category: "Captain's Log",
    date: 'March 2026',
    title: 'Area Homesteader Confirms Family Now "One Project Away"',
    excerpt: 'A deeply reported investigation into the perpetually imminent arrival of self-sufficiency, and the woman who has stopped making plans in August.',
  },
  {
    category: 'Essay',
    date: 'February 2026',
    title: 'The Real Damage of Disinformation',
    excerpt: 'When my neighbour watched that fake video, she was fooled because it looked real. When she later dismissed a legitimate scandal, she wasn\'t fooled at all. She was fatigued.',
  },
  {
    category: 'On Writing',
    date: 'January 2026',
    title: "Why the Best Man Speech Is the Hardest Thing You'll Ever Write",
    excerpt: 'It\'s not the jokes. It\'s not the length. It\'s the fact that you\'re trying to say something true about someone you love in front of everyone they know.',
  },
]

export default function Blog() {
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
          <div className="section-label" style={{ color: 'var(--gold)' }}>Writing</div>
          <h1>Captain&apos;s <span className="script-accent">Log</span></h1>
          <p className="subpage-tagline">Essays, satire, and reflections on the craft.</p>
        </div>
      </section>

      <section className="blog-list">
        <div className="subpage-container">
          {BLOG_POSTS.map((post, i) => (
            <article key={i} className="blog-list-item">
              <div className="blog-list-meta">{post.category} · {post.date}</div>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <span className="blog-list-link">Read More →</span>
            </article>
          ))}
        </div>
      </section>

      <footer className="subpage-footer">
        <p>© 2026 Anchored Prose. All rights reserved.</p>
        <Link href="/">Back to Home</Link>
      </footer>
    </>
  )
}
