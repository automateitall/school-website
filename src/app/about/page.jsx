export default function About() {
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
              <h2 className="section-title" style={{ textAlign: 'left' }}>A legacy of learning<br />since 2008</h2>
              <p className="about-para">CM Public School was founded in 2008 with a simple mission — to provide quality, value-based education to children in our community. What started as a small school has grown into a thriving institution serving over 500 students across two campuses.</p>
              <p className="about-para">Taare Zameen Par Play School, our early childhood wing, was established to give the youngest learners a warm, nurturing, and playful first experience with education — building the confidence and curiosity that lasts a lifetime.</p>
              <p className="about-para">Together, we offer a seamless educational journey from age 2 all the way to Class XII — so your child grows with us every step of the way.</p>
            </div>
            <div className="about-stats-col">
              {[
                { n: '2008', label: 'Year founded' },
                { n: '500+', label: 'Students enrolled' },
                { n: '40+', label: 'Trained faculty' },
                { n: '95%', label: 'CBSE pass rate' },
                { n: '2', label: 'School campuses' },
                { n: '15+', label: 'Years of excellence' },
              ].map(s => (
                <div key={s.label} className="about-stat-card">
                  <strong>{s.n}</strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about-mission">
            <div className="mission-card mission-card-vision">
              <div className="mission-icon">🔭</div>
              <h3>Our Vision</h3>
              <p>To be the most trusted educational institution in our community — producing confident, compassionate, and capable young citizens ready to thrive in a changing world.</p>
            </div>
            <div className="mission-card mission-card-mission">
              <div className="mission-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>To deliver quality, value-based education through a nurturing environment, trained faculty, and a curriculum that balances academics, arts, and character development.</p>
            </div>
            <div className="mission-card mission-card-values">
              <div className="mission-icon">💛</div>
              <h3>Our Values</h3>
              <p>Integrity, curiosity, respect, and perseverance. We believe these aren't just taught in classrooms — they're lived every day on our campus.</p>
            </div>
          </div>

          <div className="principal-section">
            <div className="principal-avatar">👨‍💼</div>
            <div className="principal-text">
              <p className="section-eyebrow" style={{ textAlign: 'left' }}>Message from the Principal</p>
              <blockquote className="principal-quote">"Education is not the filling of a pail, but the lighting of a fire. At CM Public School and Taare Zameen Par, we strive every day to light that fire in every child who walks through our doors."</blockquote>
              <p className="principal-name">— Principal, CM Public School & Taare Zameen Par Play School</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}