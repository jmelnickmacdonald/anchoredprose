import './globals.css'

export const metadata = {
  title: 'Anchored Prose | Professional Writing Services',
  description: 'Professional writing services from Nova Scotia — wedding speeches, keynotes, educational content, brand copy, and content strategy. Words worth anchoring.',
  keywords: 'writing services, wedding speeches, keynotes, copywriting, Nova Scotia, Canadian writer',
  openGraph: {
    title: 'Anchored Prose | Professional Writing Services',
    description: 'Speeches that hold a room. Copy that earns the right reader. Words worth anchoring.',
    url: 'https://www.anchoredprose.ca',
    siteName: 'Anchored Prose',
    locale: 'en_CA',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
