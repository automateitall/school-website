export default function Home() {
  return (
    <div>
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-left">
            <div className="hero-eyebrow">🏫 CBSE Affiliated · Est. 2008</div>
            <h1>Where Every Child<br />Finds Their <span>Spark</span></h1>
            <p className="hero-sub">CM Public School & Taare Zameen Par Play School</p>
            <p className="hero-desc">From your child's very first steps in our play school to their Class XII board exams — we nurture every student with care, quality, and purpose.</p>
            <div className="hero-btns">
              <a href="/admissions" className="btn-primary">Apply for Admission →</a>
              <a href="/about" className="btn-outline">Take a Virtual Tour</a>
            </div>
            <div className="hero-stats">
              <div className="hero-stat"><strong>15+</strong><span>Years of excellence</span></div>
              <div className="hero-stat"><strong>500+</strong><span>Students enrolled</span></div>
              <div className="hero-stat"><strong>40+</strong><span>Trained faculty</span></div>
              <div className="hero-stat"><strong>95%</strong><span>Board pass rate</span></div>
            </div>
          </div>
          <div className="hero-right">
            <div className="hero-card">
              <div className="hero-card-header">
                <div className="hero-card-header-bg" />
                <h3>2026–27 Admissions</h3>
                <p>Applications being accepted now</p>
              </div>
              <div className="hero-card-body">
                <div className="hero-card-row">
                  <span className="hero-card-label">🌟 Play School (TZP)</span>
                  <span className="badge-green">Seats Available</span>
                </div>
                <div className="hero-card-row">
                  <span className="hero-card-label">📚 Nursery – Class V</span>
                  <span className="badge-green">Open</span>
                </div>
                <div className="hero-card-row">
                  <span className="hero-card-label">📚 Class VI – X</span>
                  <span className="badge-blue">Limited</span>
                </div>
                <div className="hero-card-row">
                  <span className="hero-card-label">📚 Class XI – XII</span>
                  <span className="badge-orange">Few Seats</span>
                </div>
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
                <span className="school-tag school-tag-cm">CBSE AFFILIATED</span>
              </div>
              <h3 style={{ color: '#083e78' }}>CM Public School</h3>
              <p>A CBSE affiliated institution committed to academic excellence, holistic development, and character building. Structured curriculum from Nursery right through Class XII.</p>
              <div className="school-card-footer">
                <span className="school-meta">👥 350+ students enrolled</span>
                <a href="/school" className="btn-school-cm">Explore →</a>
              </div>
            </div>
            <div className="school-card school-card-tzp">
              <div className="school-card-top">
                <div className="school-icon school-icon-tzp">⭐</div>
                <span className="school-tag school-tag-tzp">PLAY SCHOOL</span>
              </div>
              <h3 style={{ color: '#c45e1e' }}>Taare Zameen Par</h3>
              <p>A warm, playful environment where little ones ages 2–6 take their very first steps into learning through play, creativity, and a whole lot of love and care.</p>
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
            {[
              { icon: '🎓', title: 'CBSE Curriculum', desc: 'Nationally recognised board with structured, progressive learning from day one' },
              { icon: '👩‍🏫', title: 'Trained Faculty', desc: 'Experienced, caring teachers dedicated to each student\'s growth' },
              { icon: '💚', title: 'Holistic Growth', desc: 'Academics, sports, arts and life skills woven seamlessly together' },
              { icon: '🛡️', title: 'Safe Campus', desc: 'Secure, clean and nurturing environment every single day' },
            ].map(item => (
              <div key={item.title} className="feature-card">
                <div className="feature-icon">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="notices-section">
        <div className="section-wrap">
          <div className="section-header">
            <p className="section-eyebrow">Latest Updates</p>
            <h2 className="section-title">Notices & Events</h2>
            <p className="section-desc">Stay up to date with the latest from both schools.</p>
          </div>
          <div className="notices-grid">
            <div className="notice-card">
              <div className="notice-card-top">
                <span className="notice-type type-exam">EXAM</span>
                <span className="notice-date">3 Jun 2026</span>
              </div>
              <h4>Class X Pre-Board Examination Schedule</h4>
              <p>Pre-board exams for Class X begin 15th June. Students must carry their admit cards.</p>
            </div>
            <div className="notice-card">
              <div className="notice-card-top">
                <span className="notice-type type-holiday">HOLIDAY</span>
                <span className="notice-date">28 May 2026</span>
              </div>
              <h4>Summer Vacation Notice 2026</h4>
              <p>School will remain closed from 1st June to 30th June for summer vacation.</p>
            </div>
            <div className="notice-card">
              <div className="notice-card-top">
                <span className="notice-type type-event">EVENT</span>
                <span className="notice-date">20 May 2026</span>
              </div>
              <h4>Annual Sports Day — All Students</h4>
              <p>Annual Sports Day will be held on 25th May. Parents are cordially invited to attend.</p>
            </div>
          </div>
          <div className="notices-footer">
            <a href="/notices" className="btn-notices">View All Notices →</a>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Admissions Open for 2026–27</h2>
        <p>Secure your child's future today. Limited seats available across all classes and both schools.</p>
        <div className="cta-btns">
          <a href="/admissions" className="btn-cta-white">Apply Now — It's Free →</a>
          <a href="/contact" className="btn-cta-ghost">Call Us to Know More</a>
        </div>
      </section>
    </div>
  )
}