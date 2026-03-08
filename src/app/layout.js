import './globals.css'

export const metadata = {
  title: 'Anchored Prose | Professional Writing Services',
  description: 'Professional writing services from Nova Scotia — wedding speeches, keynotes, educational content, brand copy, and content strategy. Words worth anchoring.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
