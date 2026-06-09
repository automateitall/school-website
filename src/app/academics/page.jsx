import { getSettings } from '../lib/settings'

const SUBJECTS = {
  early: ['Hindi', 'English', 'Maths', 'GK', 'Drawing'],
  primary: ['Hindi', 'English', 'Math', 'Hindi Vyakaran', 'English Grammar', 'EVS (Science / S.S.T)', 'GK', 'Computer', 'Art / Writing Practice'],
}

export default async function Academics() {
  const s = await getSettings()

  return (
    <div>
      <div className="page-hero">
        <div className="page-hero-inner">
          <p className="section-eyebrow">Curriculum & Learning</p>
          <h1 className="page-hero-title">Academics</h1>
          <p className="page-hero-desc">A strong CBSE curriculum designed to nurture every child's potential — from Play Group to Class 5.</p>
        </div>
      </div>

      <section style={{ padding: '56px 2rem', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

          {/* CBSE Affiliation */}
          <div style={{ background: '#f0f4fb', borderRadius: '16px', padding: '32px', marginBottom: '48px', display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ fontSize: '48px' }}>🎓</div>
            <div>
              <p className="section-eyebrow" style={{ textAlign: 'left' }}>Board Affiliation</p>
              <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#083e78', marginBottom: '8px' }}>Central Board of Secondary Education (CBSE)</h2>
              <p style={{ color: '#64748b', fontSize: '14px', lineHeight: '1.75', maxWidth: '600px' }}>
                CM Public School is affiliated with CBSE, one of India's most respected education boards. Our curriculum follows the National Education Policy (NEP 2020) guidelines, focusing on conceptual understanding, skill development, and holistic growth.
              </p>
              <a href="https://cbse.gov.in" target="_blank" rel="noopener noreferrer" style={{ color: '#083e78', fontSize: '13px', fontWeight: '600', marginTop: '10px', display: 'inline-block' }}>
                Visit CBSE Website →
              </a>
            </div>
          </div>

          {/* School Timing */}
          <div style={{ marginBottom: '48px' }}>
            <p className="section-eyebrow">School Timing</p>
            <h2 className="section-title">When do we meet?</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginTop: '24px' }}>
              {[
                { label: 'Play Group – UKG', time: s?.timingEarly || '9:00 AM – 12:00 PM', icon: '⭐' },
                { label: 'Class 1 – 5', time: s?.timingPrimary || '9:00 AM – 2:00 PM', icon: '📚' },
              ].map(item => (
                <div key={item.label} style={{ background: '#f8fafc', borderRadius: '12px', padding: '20px', border: '1px solid #e2e8f0' }}>
                  <div style={{ fontSize: '28px', marginBottom: '10px' }}>{item.icon}</div>
                  <p style={{ fontWeight: '700', color: '#1e293b', fontSize: '14px', marginBottom: '4px' }}>{item.label}</p>
                  <p style={{ color: '#083e78', fontWeight: '700', fontSize: '16px' }}>{item.time}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Classes Offered */}
          <div style={{ marginBottom: '48px' }}>
            <p className="section-eyebrow">Classes Offered</p>
            <h2 className="section-title">From Play Group to Class 5</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '12px', marginTop: '24px' }}>
              {['Play Group', 'Nursery', 'LKG', 'UKG', 'Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5'].map(c => (
                <div key={c} style={{ background: '#f0f4fb', borderRadius: '10px', padding: '16px', textAlign: 'center', border: '1px solid #dbe4f3' }}>
                  <p style={{ fontWeight: '700', color: '#083e78', fontSize: '14px' }}>{c}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Subjects */}
          <div style={{ marginBottom: '48px' }}>
            <p className="section-eyebrow">Curriculum</p>
            <h2 className="section-title">Subjects we teach</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginTop: '24px' }}>
              <div style={{ background: '#fff8f3', borderRadius: '14px', padding: '24px', border: '1px solid #fcd5b0' }}>
                <h3 style={{ color: '#c45e1e', fontWeight: '700', fontSize: '16px', marginBottom: '16px' }}>⭐ Play Group – UKG</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {SUBJECTS.early.map(sub => (
                    <span key={sub} style={{ background: 'white', border: '1px solid #fcd5b0', borderRadius: '99px', padding: '4px 14px', fontSize: '13px', color: '#c45e1e', fontWeight: '500' }}>
                      {sub}
                    </span>
                  ))}
                </div>
              </div>
              <div style={{ background: '#f0f4fb', borderRadius: '14px', padding: '24px', border: '1px solid #dbe4f3' }}>
                <h3 style={{ color: '#083e78', fontWeight: '700', fontSize: '16px', marginBottom: '16px' }}>📚 Class 1 – 5</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {SUBJECTS.primary.map(sub => (
                    <span key={sub} style={{ background: 'white', border: '1px solid #dbe4f3', borderRadius: '99px', padding: '4px 14px', fontSize: '13px', color: '#083e78', fontWeight: '500' }}>
                      {sub}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Assessment Pattern */}
          <div style={{ marginBottom: '48px' }}>
            <p className="section-eyebrow">Assessment</p>
            <h2 className="section-title">How we evaluate</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginTop: '24px' }}>
              {[
                { name: 'Unit Test 1', marks: '25 Marks', when: 'July', color: '#e8f0fb', border: '#dbe4f3', text: '#083e78' },
                { name: 'Half Yearly', marks: '50 Marks', when: 'September', color: '#fff8f3', border: '#fcd5b0', text: '#c45e1e' },
                { name: 'Unit Test 2', marks: '25 Marks', when: 'November', color: '#e8f0fb', border: '#dbe4f3', text: '#083e78' },
                { name: 'Final Exam', marks: '100 Marks', when: 'February', color: '#e6f9f0', border: '#bbf7d0', text: '#166534' },
              ].map(item => (
                <div key={item.name} style={{ background: item.color, borderRadius: '12px', padding: '20px', border: `1px solid ${item.border}` }}>
                  <p style={{ fontWeight: '700', color: item.text, fontSize: '15px', marginBottom: '4px' }}>{item.name}</p>
                  <p style={{ color: item.text, fontSize: '22px', fontWeight: '900', marginBottom: '4px' }}>{item.marks}</p>
                  <p style={{ color: '#64748b', fontSize: '12px' }}>📅 {item.when}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <section style={{ background: '#083e78', borderRadius: '20px', padding: '44px 32px', textAlign: 'center' }}>
            <h2 style={{ color: 'white', fontSize: '24px', fontWeight: '900', marginBottom: '10px' }}>
              Want to know more about our curriculum?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px', marginBottom: '24px', maxWidth: '440px', margin: '0 auto 24px', lineHeight: '1.75' }}>
              Visit us or call us directly — we'd love to show you around and answer any questions.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/admissions" style={{ background: 'white', color: '#083e78', fontSize: '14px', fontWeight: '700', padding: '13px 28px', borderRadius: '10px', display: 'inline-block' }}>
                Apply for Admission →
              </a>
              <a href="/contact" style={{ border: '1.5px solid rgba(255,255,255,0.5)', color: 'white', fontSize: '14px', fontWeight: '600', padding: '12px 26px', borderRadius: '10px', display: 'inline-block' }}>
                Contact Us
              </a>
            </div>
          </section>

        </div>
      </section>
    </div>
  )
}