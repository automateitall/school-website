import Image from 'next/image'
import Link from 'next/link'

export default function Footer({ settings: s }) {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="footer-brand-logos">
            <Image src="/logo-cm.svg" alt="CM Public School" width={38} height={38} className="footer-logo" />
            <Image src="/logo-tzp.svg" alt="Taare Zameen Par" width={38} height={38} className="footer-logo" />
          </div>
          <h3>CM Public School &<br />Taare Zameen Par</h3>
          <p>Nurturing young minds with quality education and strong values. CBSE affiliated, established {s?.foundedYear || '2012'}, {s?.address || 'New Delhi, India'}.</p>
        </div>
        <div className="footer-col">
          <h4>Quick Links</h4>
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/academics">Academics</Link>
          <Link href="/admissions">Admissions</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="footer-col">
          <h4>For Parents</h4>
          <Link href="/notices">Notices & Circulars</Link>
          <Link href="/notices">Exam Schedule</Link>
          <Link href="/admissions">Fee Structure</Link>
          <Link href="/gallery">Photo Gallery</Link>
          <Link href="/contact">Parent Portal</Link>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <a href={`tel:${s?.phone}`}>📞 {s?.phone || '+91 98765 43210'}</a>
          <a href={`mailto:${s?.email}`}>✉️ {s?.email || 'info@cmtzpschool.in'}</a>
          <a href="#">📍 {s?.address || 'New Delhi, India'}</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} CM Public School & Taare Zameen Par Play School. All rights reserved.</p>
        <div className="footer-bottom-links">
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms of Use</Link>
        </div>
      </div>
    </footer>
  )
}