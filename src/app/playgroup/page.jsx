import Image from 'next/image'
import { getSettings } from '../lib/settings'

export default async function Playgroup() {
  const s = await getSettings()

  return (
    <div>
      <section style={{ background: '#fff8f3', padding: '56px 2rem 48px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#e6f9f0', color: '#057a43', fontSize: '12px', fontWeight: '600', padding: '4px 14px', borderRadius: '99px', border: '1px solid #bbf7d0', marginBottom: '20px' }}>
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#00bf63', display: 'inline-block' }}></span>
            Admissions open 2026–27
          </div>

          <div style={{ width: '90px', height: '90px', borderRadius: '50%', background: '#fff3ec', border: '3px solid #fcd5b0', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', overflow: 'hidden', padding: '8px' }}>
            <Image src="/logo-tzp.svg" alt="Taare Zameen Par" width={65} height={65} />
          </div>

          <h1 style={{ fontSize: '2.4rem', fontWeight: '900', color: '#c45e1e', lineHeight: '1.15', marginBottom: '8px', letterSpacing: '-0.02em' }}>
            Taare Zameen Par<br /><span style={{ color: '#ff914d' }}>Play School</span>
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '15px', lineHeight: '1.8', marginBottom: '28px', maxWidth: '480px', margin: '0 auto 28px' }}>
            {s?.tzpSchoolDescription || 'A warm, joyful space where little ones aged 2–6 discover the magic of learning through play, creativity, and lots of love.'}
          </p>

          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '28px' }}>
            <a href="/admissions" className="btn-primary" style={{ borderRadius: '99px' }}>Apply for Admission →</a>
            <a href="/contact" className="btn-outline" style={{ borderRadius: '99px' }}>Call Us</a>
          </div>

          <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {['Play Group · Age 2+', 'Nursery · Age 3+', 'LKG · Age 4+', 'UKG · Age 5+'].map(pill => (
              <span key={pill} style={{ background: 'white', border: '1.5px solid #fcd5b0', borderRadius: '99px', padding: '5px 14px', fontSize: '12px', color: '#c45e1e', fontWeight: '600' }}>
                {pill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '56px 2rem', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <p className="section-eyebrow">Why TZP</p>
            <h2 className="section-title">A place your child will love</h2>
            <p className="section-desc">Every morning should feel like an adventure. Here's what makes TZP special.</p>
          </div>

          <div className="features-grid" style={{ marginBottom: '56px' }}>
            {[
              { icon: '🎨', title: 'Learn through play', desc: 'Every activity is designed to spark curiosity and build confidence naturally', bg: '#fff3ec' },
              { icon: '💚', title: 'Safe & nurturing', desc: 'Trained caregivers, clean spaces, and a family-like atmosphere every day', bg: '#e6f9f0' },
              { icon: '📖', title: 'Language & literacy', desc: 'Stories, songs, and conversations that build strong communication skills', bg: '#e8f0fb' },
              { icon: '🌿', title: 'Holistic growth', desc: 'Motor skills, social skills, creativity — all nurtured every single day', bg: '#fef9ec' },
            ].map(item => (
              <div key={item.title} className="feature-card" style={{ borderRadius: '16px' }}>
                <div className="feature-icon" style={{ background: item.bg, borderRadius: '14px' }}>{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'start', marginBottom: '56px' }}>
            <div>
              <p className="section-eyebrow" style={{ textAlign: 'left' }}>Daily routine</p>
              <h2 className="section-title" style={{ textAlign: 'left' }}>A day at TZP</h2>
              <p className="about-para">Every day is structured, fun, and full of learning moments that your child will look forward to.</p>
              <div style={{ marginTop: '24px', borderLeft: '2px solid #fcd5b0', paddingLeft: '20px' }}>
                {[
                  { time: '8:30 AM', icon: '👋', title: 'Morning circle', desc: 'Greetings, songs, and calendar time' },
                  { time: '9:00 AM', icon: '🎨', title: 'Art & craft', desc: 'Creative activities and fine motor skills' },
                  { time: '10:00 AM', icon: '📖', title: 'Story & learning', desc: 'Letters, numbers, and language' },
                  { time: '11:00 AM', icon: '🏃', title: 'Outdoor play', desc: 'Physical activity in a safe space' },
                  { time: '12:00 PM', icon: '🍱', title: 'Lunch & rest', desc: 'Healthy habits and quiet time' },
                  { time: '1:00 PM', icon: '🎵', title: 'Music & goodbye', desc: 'Songs and a warm farewell' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', padding: '10px 0', position: 'relative' }}>
                    <div style={{ position: 'absolute', left: '-26px', top: '14px', width: '10px', height: '10px', borderRadius: '50%', background: '#ff914d', border: '2px solid white', boxShadow: '0 0 0 2px #fcd5b0' }}></div>
                    <span style={{ fontSize: '11px', fontWeight: '700', color: '#ff914d', whiteSpace: 'nowrap', minWidth: '65px', paddingTop: '2px' }}>{item.time}</span>
                    <span style={{ fontSize: '20px', marginTop: '1px' }}>{item.icon}</span>
                    <div>
                      <p style={{ fontSize: '13px', fontWeight: '700', color: '#1e293b', marginBottom: '2px' }}>{item.title}</p>
                      <p style={{ fontSize: '12px', color: '#64748b', lineHeight: '1.5' }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="section-eyebrow" style={{ textAlign: 'left' }}>Our little stars</p>
              <h2 className="section-title" style={{ textAlign: 'left' }}>Numbers that matter</h2>
              <p className="about-para">We take pride in providing the best early childhood experience for every child.</p>
              <div className="about-stats-col" style={{ marginTop: '20px' }}>
                {[
                  { n: '150+', label: 'Happy children enrolled', color: '#ff914d' },
                  { n: '2–6', label: 'Age group we serve', co