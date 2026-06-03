 
'use client'
import { useState } from 'react'

export default function Admissions() {
  const [form, setForm] = useState({
    childName: '',
    parentName: '',
    phone: '',
    email: '',
    classApplied: '',
    school: 'CMP',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('http://localhost:5000/api/admissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        setError('Something went wrong. Please try again.')
      }
    } catch {
      setError('Could not connect. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <div className="page-hero">
        <div className="page-hero-inner">
          <p className="section-eyebrow">2026–27 Session</p>
          <h1 className="page-hero-title">Admissions Open</h1>
          <p className="page-hero-desc">Fill the enquiry form below and our team will contact you within 24 hours to guide you through the admission process.</p>
        </div>
      </div>

      <section className="admissions-section">
        <div className="admissions-inner">

          <div className="admissions-info">
            <div className="info-card">
              <h3>How it works</h3>
              <div className="steps">
                {[
                  { n: '1', title: 'Fill the form', desc: 'Submit your enquiry with basic details below' },
                  { n: '2', title: 'We call you', desc: 'Our team contacts you within 24 hours' },
                  { n: '3', title: 'Visit school', desc: 'Schedule a visit and meet the faculty' },
                  { n: '4', title: 'Confirm seat', desc: 'Submit documents and confirm admission' },
                ].map(step => (
                  <div key={step.n} className="step">
                    <div className="step-num">{step.n}</div>
                    <div>
                      <p className="step-title">{step.title}</p>
                      <p className="step-desc">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="info-card" style={{ marginTop: '16px' }}>
              <h3>Seats available</h3>
              <div className="seats-list">
                {[
                  { label: 'Play School (TZP)', badge: 'badge-green', status: 'Open' },
                  { label: 'Nursery – Class II', badge: 'badge-green', status: 'Open' },
                  { label: 'Class III – V', badge: 'badge-green', status: 'Open' },
                  { label: 'Class VI – VIII', badge: 'badge-blue', status: 'Limited' },
                  { label: 'Class IX – X', badge: 'badge-blue', status: 'Limited' },
                  { label: 'Class XI – XII', badge: 'badge-orange', status: 'Few Seats' },
                ].map(row => (
                  <div key={row.label} className="seat-row">
                    <span className="seat-label">{row.label}</span>
                    <span className={row.badge}>{row.status}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="info-card contact-card" style={{ marginTop: '16px' }}>
              <h3>Need help?</h3>
              <p className="contact-desc">Call us directly and we'll answer all your questions.</p>
              <a href="tel:+919876543210" className="btn-call">📞 +91 98765 43210</a>
            </div>
          </div>

          <div className="admissions-form-wrap">
            {submitted ? (
              <div className="success-card">
                <div className="success-icon">✅</div>
                <h2>Enquiry Submitted!</h2>
                <p>Thank you! Our admissions team will call you within 24 hours on the number you provided.</p>
                <button onClick={() => setSubmitted(false)} className="btn-primary" style={{ marginTop: '20px' }}>Submit Another Enquiry</button>
              </div>
            ) : (
              <div className="form-card">
                <h2>Admission Enquiry Form</h2>
                <p className="form-subtitle">Fill in the details below and we'll get back to you shortly.</p>

                {error && <div className="form-error">{error}</div>}

                <form onSubmit={handleSubmit} className="adm-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label>Child's Full Name *</label>
                      <input type="text" value={form.childName} onChange={e => setForm({...form, childName: e.target.value})} placeholder="e.g. Aarav Sharma" required />
                    </div>
                    <div className="form-group">
                      <label>Parent / Guardian Name *</label>
                      <input type="text" value={form.parentName} onChange={e => setForm({...form, parentName: e.target.value})} placeholder="e.g. Rahul Sharma" required />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Phone Number *</label>
                      <input type="tel" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} placeholder="e.g. 98765 43210" required />
                    </div>
                    <div className="form-group">
                      <label>Email Address</label>
                      <input type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="e.g. rahul@email.com" />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Applying for School *</label>
                      <select value={form.school} onChange={e => setForm({...form, school: e.target.value})} required>
                        <option value="CMP">CM Public School</option>
                        <option value="TZP">Taare Zameen Par Play School</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Class / Grade Applying For *</label>
                      <select value={form.classApplied} onChange={e => setForm({...form, classApplied: e.target.value})} required>
                        <option value="">Select class</option>
                        <option>Play Group</option>
                        <option>Nursery</option>
                        <option>LKG</option>
                        <option>UKG</option>
                        {[1,2,3,4,5,6,7,8,9,10,11,12].map(n => (
                          <option key={n}>Class {n}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Any questions or message?</label>
                    <textarea value={form.message} onChange={e => setForm({...form, message: e.target.value})} placeholder="Any specific questions about the school, curriculum, fees..." rows={3} />
                  </div>

                  <button type="submit" className="btn-submit" disabled={loading}>
                    {loading ? 'Submitting...' : 'Submit Enquiry →'}
                  </button>

                  <p className="form-note">🔒 Your information is safe with us. We never share your details with third parties.</p>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}