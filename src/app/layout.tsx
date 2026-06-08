import type { Metadata } from 'next'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { getSettings } from './lib/settings'

export const metadata: Metadata = {
  title: 'CM Public School & Taare Zameen Par Play School',
  description: 'Quality education for your children in a nurturing environment.',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const settings = await getSettings()
  
  let latestNotice = null
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/notices`, { next: { revalidate: 60 } })
    const data = await res.json()
    if (data?.length > 0) latestNotice = data[0].title
  } catch {}

  if (latestNotice) settings.latestNotice = latestNotice

  return (
    <html lang="en">
      <body>
        <Navbar settings={settings} />
        <main>{children}</main>
        <Footer settings={settings} />
      </body>
    </html>
  )
}