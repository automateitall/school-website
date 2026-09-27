import { getSettings } from '../lib/settings'

const CLASS_ORDER = ['Play Group', 'Nursery', 'LKG', 'UKG', 'Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5', 'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10', 'Class 11', 'Class 12']

async function getClasses() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/settings/classes`, {
      next: { revalidate: 60 }
    })
    const data = await res.json()
    return data?.classes || []
  } catch {
    return []
  }
}

async function getSubjectsForClass(className) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/subjects?class=${encodeURIComponent(className)}`, {
      next: { revalidate: 60 }
    })
    const data = await res.json()
    return Array.isArray(data) ? data : []
  } catch {
    return []
  }
}

export default async function School() {
  const s = await getSettings()
  const allClasses = await getClasses()
  const class1Idx = CLASS_ORDER.indexOf('Class 1')
  const cmpClasses = allClasses.filter(c => CLASS_ORDER.indexOf(c) >= class1Idx)

  const subjectsByClass = {}
  await Promise.all(cmpClasses.map(async c => {
    subjectsByClass[c] = await getSubjectsForClass(c)
  }))

  return (
    <div>
      <section className="page-hero">
        <div className="page-hero-inner">
          <p className="section-eyebrow">{s?.cmSchoolTag || `UP Board Affiliated · Nursery to ${s?.classTo || 'Class 5'}`}</p>
          <h1 className="page-hero-title">CM Public School</h1>
          <p className="page-hero-desc">{s?.cmSchoolDescription}</p>
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '24px', flexWrap: 'wrap' }}>
            <a href="/admissions" className="btn-primary">Apply for Admission →</a>
            <a href="/contact" className="btn-outline" style={{ background: 'white' }}>Contact Us</a>
          </div>
        </div>
      </section>

      <section style={{ padding: '56px 2rem', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

          {/* About */}
          <div style={{ marginBottom: '56px', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '40px', alignItems: 'center' }}>
            <div>
              <p className="section-eyebrow" style={{ textAlign: 'left' }}>About Us</p>
              <h2 className="section-title" style={{ textAlign: 'left' }}>Quality education since {s?.foundedYear || '2012'}</h2>
              <p className="about-para">{s?.cmSchoolDescription}</p>
              <p className="about-para">UP Board affiliated, English medium, with a curriculum spanning Nursery right through {s?.classTo || 'Class 5'} — designed to nurture academic excellence alongside holistic, values-based development.</p>
            </div>
            <div className="about-stats-col">
              {[
                { n: s?.foundedYear || '2012', label: 'Year founded' },
                { n: s?.totalStudents || '50+', label: 'Students enrolled' },
                { n: s?.facultyCount || '40+', label: 'Trained faculty' },
                { n: s?.passRate || '95%', label: 'Annual pass rate' },
              ].map(stat => (
                <div key={stat.label} className="about-stat-card">
                  <strong>{stat.n}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Classes Offered */}
          {cmpClasses.length > 0 && (
            <div style={{ marginBottom: '56px' }}>
              <p className="section-eyebrow">Classes Offered</p>
              <h2 className="section-title">From {cmpClasses[0]} to {cmpClasses[cmpClasses.length - 1]}</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '12px', marginTop: '24px' }}>
                {cmpClasses.map(c => (
                  <div key={c} style={{ background: '#f0f4fb', borderRadius: '10px', padding: '16px', textAlign: 'center', border: '1px solid #dbe4f3' }}>
                    <p style={{ fontWeight: '700', color: '#083e78', fontSize: '14px' }}>{c}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Subjects */}
          {cmpClasses.length > 0 && (
            <div style={{ marginBottom: '56px' }}>
              <p className="section-eyebrow">Curriculum</p>
              <h2 className="section-title">Subjects by class</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', marginTop: '24px' }}>
                {cmpClasses.map(c => (
                  <div key={c} style={{ background: '#f0f4fb', borderRadius: '14px', padding: '20px', border: '1px solid #dbe4f3' }}>
                    <h3 style={{ color: '#083e78', fontWeight: '700', fontSize: '15px', marginBottom: '12px' }}>{c}</h3>
                    {subjectsByClass[c]?.length ? (
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                        {subjectsByClass[c].map(sub => (
                          <span key={sub.id} style={{ background: 'white', border: '1px solid #dbe4f3', borderRadius: '99px', padding: '4px 12px', fontSize: '12px', color: '#083e78', fontWeight: '500' }}>
                            {sub.name}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <p style={{ color: '#94a3b8', fontSize: '12px' }}>Subjects not configured yet.</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Facilities */}
          <div style={{ marginBottom: '56px' }}>
            <p className="section-eyebrow">Facilities</p>
            <h2 className="section-title">Why choose CM Public School</h2>
            <div className="features-grid" style={{ marginTop: '24px' }}>
              {[1, 2, 3, 4].map(n => (
                <div key={n} className="feature-card">
                  <div className="feature-icon">{['🎓', '👩‍🏫', '💚', '🛡️'][n - 1]}</div>
                  <h4>{s?.[`feature${n}Title`]}</h4>
                  <p>{s?.[`feature${n}Desc`]}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div style={{ marginBottom: '56px' }}>
            <p className="section-eyebrow">Our Track Record</p>
            <h2 className="section-title">Achievements that matter</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px', marginTop: '24px' }}>
              {[
                { n: s?.passRate || '95%', label: 'Annual pass rate' },
                { n: s?.yearsOfExcellence || '15+', label: 'Years of excellence' },
                { n: s?.totalStudents || '50+', label: 'Students enrolled' },
                { n: s?.campuses || '2', label: 'Campuses' },
              ].map(stat => (
                <div key={stat.label} className="about-stat-card">
                  <strong>{stat.n}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <section style={{ background: '#083e78', borderRadius: '20px', padding: '44px 32px', textAlign: 'center' }}>
            <h2 style={{ color: 'white', fontSize: '24px', fontWeight: '900', marginBottom: '10px' }}>
              Ready to join CM Public School?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px', marginBottom: '24px', maxWidth: '440px', margin: '0 auto 24px', lineHeight: '1.75' }}>
              Limited seats available for Session {s?.currentSession || '2026-27'}. Fill out a free enquiry form and our team will reach out within 24 hours.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/admissions" style={{ background: 'white', color: '#083e78', fontSize: '14px', fontWeight: '700', padding: '13px 28px', borderRadius: '10px', display: 'inline-block' }}>
                Apply Now — It's Free →
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
