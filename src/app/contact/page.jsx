import { getSettings } from '../lib/settings'

export default async function Contact() {
  const s = await getSettings()

  return (
    <div>
      <div className="page-hero">
        <div className="page-hero-inner">
          <p className="section-eyebrow">Get in Touch</p>
          <h1 className="page-hero-title">Contact Us</h1>
          <p className="page-hero-desc">We'd love to hear from you. Reach out to us for admissions, general enquiries, or to schedule a visit.</p>
        </div>
      </div>

      <section style={{ padding: '56px 2rem', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="contact-grid">
            <div className="contact-info-col">
              <h2 style={{ color: '#083e78', fontSize: '20px', fontWeight: '800', marginBottom: '24px' }}>Reach us directly</h2>
              {[
                { icon: '📞', label: 'Phone', value: s?.phone || '+91 98765 43210', sub: `${s?.workingDays || 'Mon–Sat'}, ${s?.schoolHours || '8am to 5pm'}` },
                { icon: '✉️', label: 'Email', value: s?.email || 'info@cmtzpschool.in', sub: 'We reply within 24 hours' },
                { icon: '📍', label: 'Address', value: s?.address || 'New Delhi, India', sub: 'Visit us any school day' },
                { icon: '🕐', label: 'School Hours', value: s?.schoolHours || '8:00 AM – 2:30 PM', sub: s?.workingDays || 'Monday to Saturday' },
              ].map(item => (
                <div key={item.label} className="contact-info-item">
                  <div className="contact-info-icon">{item.icon}</div>
                  <div>
                    <p className="contact-info-label">{item.label}</p>
                    <p className="contact-info-value">{item.value}</p>
                    <p className="contact-info-sub">{item.sub}</p>
                  </div>
                </div>
              ))}
              <div className="contact-cta-box">
                <p style={{ color: '#083e78', fontWeight: '700', fontSize: '14px', marginBottom: '8px' }}>Want to visit the school?</p>
                <p style={{ color: '#64748b', fontSize: '13px', marginBottom: '14px' }}>Schedule a campus visit and meet our faculty and staff in person.</p>
                <a href="/admissions" className="btn-primary" style={{ display: 'inline-block', fontSize: '13px', padding: '10px 20px' }}>Book a Visit →</a>
              </div>
            </div>

            <div className="contact-form-col">
              <div className="form-card">
                <h2 style={{ color: '#083e78', fontSize: '18px', fontWeight: '800', marginBottom: '6px' }}>Send us a message</h2>
                <p className="form-subtitle">Fill in the form and we'll get back to you within 24 hours.</p>
                <form className="adm-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label>Your Name</label>
                      <input type="text" placeholder="e.g. Rahul Sharma" />
                    </div>
                    <div className="form-group">
                      <label>Phone Number</label>
                      <input type="tel" placeholder="e.g. 98765 43210" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" placeholder="e.g. rahul@email.com" />
                  </div>
                  <div className="form-group">
                    <label>Subject</label>
                    <select>
                      <option>Admission Enquiry</option>
                      <option>Fee Related</option>
                      <option>General Enquiry</option>
                      <option>Schedule a Visit</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Message</label>
                    <textarea rows={4} placeholder="Write your message here..." />
                  </div>
                  <button type="submit" className="btn-submit">Send Message →</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}