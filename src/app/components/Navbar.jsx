'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar({ settings: s }) {
  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/academics', label: 'Academics' },
    { href: '/admissions', label: 'Admissions' },
    { href: '/notices', label: 'Notices' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <>
      <div className="topbar">
        <div className="topbar-left">
          <span className="topbar-item">📞 {s?.phone || '+91 98765 43210'}</span>
          <span className="topbar-item">✉️ {s?.email || 'info@cmtzpschool.in'}</span>
          <span className="topbar-item">📍 {s?.address || 'New Delhi, India'}</span>
        </div>
        <div className="topbar-right">
          <span className="topbar-badge">CBSE AFFILIATED</span>
          <span className="topbar-badge">EST. {s?.foundedYear || '2012'}</span>
        </div>
      </div>

      <nav className="navbar">
        <div className="navbar-inner">
          <Link href="/" className="navbar-brand">
            <div className="navbar-logos">
              <Image src="/logo-cm.svg" alt="CM Public School" width={44} height={50} />
              <div className="navbar-divider" />
              <Image src="/logo-tzp.svg" alt="Taare Zameen Par" width={44} height={44}  />
            </div>
            <div className="navbar-brand-text">
              <h2>CM Public School</h2>
              <p>& Taare Zameen Par Play School</p>
            </div>
          </Link>
          <div className="navbar-links">
            {links.map(link => (
              <Link key={link.href} href={link.href}>{link.label}</Link>
            ))}
            <Link href="/admissions" className="navbar-apply">Apply Now</Link>
          </div>
        </div>
      </nav>

      <Link href="/notices" className="notice-bar" style={{ textDecoration: 'none' }}>
        <span className="notice-pill">NOTICE</span>
        <span className="notice-text">{s?.latestNotice || s?.noticeBarText || 'Admissions open for Session 2026–27'}</span>
        <span className="notice-link">View all →</span>
      </Link>
    </>
  )
}