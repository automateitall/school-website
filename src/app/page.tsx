import { getSettings } from './lib/settings'

export default async function Home() {
  const s = await getSettings()

  const seatColor = (status: string) => {
    if (status === 'Open') return { bg: '#dcfce7', color: '#166534' }
    if (status === 'Limited') return { bg: '#dbeafe', color: '#1e40af' }
    if (status === 'Few Seats') return { bg: '#ffedd5', color: '#c2410c' }
    return { bg: '#f1f5f9', color: '#64748b' }
  }

  return (
    <div>
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-left">
            <div className="hero-eyebrow">🏫 {s?.cmSchoolEyebrow || 'CBSE Affiliated · Est. 2012'}</div>
            <h1>{s?.heroHeading || 'Where Every Child Finds Their Spark'}</h1>
            <p className="hero-sub">{s?.heroSubheading || 'CM Public School & Taare Zameen Par Play School'}</p>
            <p className="hero-desc">{s?.heroDescription}</p>
            <div className="hero-btns">
              <a href="/admissions" className="btn-primary">Apply for Admission →</a>
              <a href="/about" className="btn-outline">Take a Virtual Tour</a>
            </div>
            <div className="hero-stats">
              <div className="hero-stat"><strong>{s?.yearsOfExcellence || '15+'}</strong><span>Years of excellence</span></div>
              <div className="hero-stat"><strong>{s?.totalStudents || '500+'}</strong><span>Students enrolled</span></div>
              <div className="hero-stat"><strong>{s?.facultyCount || '40+'}</strong><span>Trained faculty</span></div>
              <div className="hero-stat"><strong>{s?.passRate || '95%'}</strong><span>Board pass rate</span></div>
            </div>
          </div>
          <div className="hero-right">
            <div className="hero-card">
              <div className="hero-card-header">
                <div className="hero-card-header-bg" />
                <h3>{s?.heroCardTitle || '2026–27 Admissions'}</h3>
                <p>{s?.heroCardSubtitle || 'Applications being accepted now'}</p>
              </div>
              <div className="hero-card-body">
                {[
                  { label: '🌟 Play School (TZP)', key: 'seatPlayGroup' },
                  { label: '📚 Nursery – Class V', key: 'seatNurseryV' },
                  { label: '📚 Class VI – X', key: 'seatVIX' },
                  { label: '📚 Class XI – XII', key: 'seatXXII' },
                ].map(row => {
                  const status = s?.[row.key] || 'Open'
                  const colors = seatColor(status)
                  return (
                    <div key={row.key} className="hero-card-row">
                      <span className="hero-card-label">{row.label}</span>
                      <span style={{ background: colors.bg, color: colors.color }}
                        className="badge-green">{status}</span>
                    </div>
                  )
                })}
                <a href="/admissions" className="hero-card-cta">Fill Enquiry Form →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="schools-section">
        <div className="section-wrap">
          <div className="section-header">
            <p className="section-eyebrow">Our Institutions</p>
            <h2 className="section-title">Two Schools, One Vision</h2>
            <p className="section-desc">From ages 2 to 18 — committed to nurturing every stage of your child's journey.</p>
          </div>
          <div className="schools-grid">
            <div className="school-card school-card-cm">
              <div className="school-card-top">
                <div className="school-icon school-icon-cm">🏛️</div>
                <span className="school-tag school-tag-cm">{s?.cmSchoolTag || 'CBSE AFFILIATED'}</span>
              </div>
              <h3 style={{ color: '#083e78' }}>CM Public School</h3>
              <p>{s?.cmSchoolDescription}</p>
              <div className="school-card-footer">
                <span className="school-meta">👥 {s?.totalStudents || '500+'} students enrolled</span>
                <a href="/school" className="btn-school-cm">Explore →</a>
              </div>
            </div>
            <div className="school-card school-card-tzp">
              <div className="school-card-top">
                <div className="school-icon school-icon-tzp">⭐</div>
                <span className="school-tag school-tag-tzp">{s?.tzpSchoolTag || 'PLAY SCHOOL'}</span>
              </div>
              <h3 style={{ color: '#c45e1e' }}>Taare Zameen Par</h3>
              <p>{s?.tzpSchoolDescription}</p>
              <div className="school-card-footer">
                <span className="school-meta">👥 150+ little ones</span>
                <a href="/playgroup" className="btn-school-tzp">Explore →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="section-wrap">
          <div className="section-header">
            <p className="section-eyebrow">Why Choose Us</p>
            <h2 className="section-title">Built for every child</h2>
            <p className="section-desc">We believe every child is unique and deserves an education that brings out their very best.</p>
          </div>
          <div className="features-grid">
            {[1,2,3,4].map(n => (
              <div key={n} className="feature-card">
                <div className="feature-icon">
                  {['🎓','👩‍🏫','💚','🛡️'][n-1]}
                </div>
                <h4>{s?.[`feature${n}Title`]}</h4>
                <p>{s?.[`feature${n}Desc`]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <NoticesSection />

      <section className="cta-section">
        <h2>{s?.ctaHeading || 'Admissions Open for 2026–27'}</h2>
        <p>Secure your child's future today. Limited seats available across all classes and both schools.</p>
        <div className="cta-btns">
          <a href="/admissions" className="btn-cta-white">Apply Now — It's Free →</a>
          <a href="/contact" className="btn-cta-ghost">Call Us to Know More</a>
        </div>
      </section>
    </div>
  )
}

async function NoticesSection() {
  let notices = []
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/notices`, {
      next: { revalidate: 60 }
    })
    notices = await res.json()
  } catch {}

  const typeStyle = (title: string) => {
    const t = title?.toLowerCase()
    if (t?.includes('exam') || t?.includes('test')) return { bg: '#dbeafe', color: '#1e40af', label: 'EXAM' }
    if (t?.includes('holiday') || t?.includes('vacation')) return { bg: '#dcfce7', color: '#166534', label: 'HOLIDAY' }
    return { bg: '#fef3c7', color: '#92400e', label: 'NOTICE' }
  }

  return (
    <section className="notices-section">
      <div className="section-wrap">
        <div className="section-header">
          <p className="section-eyebrow">Latest Updates</p>
          <h2 className="section-title">Notices & Events</h2>
          <p className="section-desc">Stay up to date with the latest from both schools.</p>
        </div>
        {notices.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#94a3b8', padding: '2rem' }}>No notices yet.</p>
        ) : (
          <div className="notices-grid">
            {notices.slice(0, 3).map((n: any) => {
              const style = typeStyle(n.title)
              return (
                <div key={n.id} className="notice-card">
                  <div className="notice-card-top">
                    <span className="notice-type" style={{ background: style.bg, color: style.color }}>
                      {style.label}
                    </span>
                    <span className="notice-date">
                      {new Date(n.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </span>
                  </div>
                  <h4>{n.title}</h4>
                  <p>{n.content}</p>
                </div>
              )
            })}
          </div>
        )}
        <div className="notices-footer">
          <a href="/notices" className="btn-notices">View All Notices →</a>
        </div>
      </div>
    </section>
  )
}