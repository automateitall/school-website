import { getSettings } from '../lib/settings'

export default async function About() {
  const s = await getSettings()

  return (
    <div>
      <div className="page-hero">
        <div className="page-hero-inner">
          <p className="section-eyebrow">Our Story</p>
          <h1 className="page-hero-title">About Us</h1>
          <p className="page-hero-desc">Two schools, one family — built on the belief that every child deserves the very best start in life.</p>
        </div>
      </div>

      <section style={{ padding: '56px 2rem', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="about-grid">
            <div className="about-text">
              <p className="section-eyebrow" style={{ textAlign: 'left' }}>Who we are</p>
              <h2 className="section-title" style={{ textAlign: 'left' }}>A legacy of learning<br />since {s?.foundedYear || '2012'}</h2>
              <p className="about-para">CM Public School was founded in {s?.foundedYear || '2012'} with a simple mission — to provide quality, value-based education to children in our community. What started as a small school has grown into a thriving institution serving over {s?.totalStudents || '500+'} students across two campuses.</p>
              <p className="about-para">Taare Zameen Par Play School, our early childhood wing, was established to give the youngest learners a warm, nurturing, and playful first experience with education — building the confidence and curiosity that lasts a lifetime.</p>
              <p className="about-para">Together, we offer a seamless educational journey from age 2 all the way to {s?.classTo || 'Class XII'} — so your child grows with us every step of the way.</p>
            </div>
            <div className="about-stats-col">
              {[
                { n: s?.foundedYear || '2012', label: 'Year founded' },
                { n: s?.totalStudents || '500+', label: 'Students enrolled' },
                { n: s?.facultyCount || '40+', label: 'Trained faculty' },
                { n: s?.passRate || '95%', label: 'CBSE pass rate' },
                { n: s?.campuses || '2', label: 'School campuses' },
                { n: s?.yearsOfExcellence || '15+', label: 'Years of excellence' },
              ].map(stat => (
                <div key={stat.label} className="about-stat-card">
                  <strong>{stat.n}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about-mission">
            <div className="mission-card mission-card-vision">
              <div className="mission-icon">🔭</div>
              <h3>Our Vision</h3>
              <p>{s?.vision}</p>
            </div>
            <div className="mission-card mission-card-mission">
              <div className="mission-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>{s?.mission}</p>
            </div>
            <div className="mission-card mission-card-values">
              <div className="mission-icon">💛</div>
              <h3>Our Values</h3>
              <p>{s?.values}</p>
            </div>
          </div>

          <div className="principal-section">
            <div className="principal-avatar">👨‍💼</div>
            <div className="principal-text">
              <p className="section-eyebrow" style={{ textAlign: 'left' }}>Message from the Principal</p>
              <blockquote className="principal-quote">"{s?.principalQuote}"</blockquote>
              <p className="principal-name">— Principal, CM Public School & Taare Zameen Par Play School</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}