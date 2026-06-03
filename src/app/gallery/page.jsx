'use client'
import { useState } from 'react'

const photos = [
  { id: 1, title: 'Annual Sports Day 2025', category: 'Events', school: 'CMP', emoji: '🏃' },
  { id: 2, title: 'Science Exhibition', category: 'Academic', school: 'CMP', emoji: '🔬' },
  { id: 3, title: 'Republic Day Celebration', category: 'Events', school: 'CMP', emoji: '🇮🇳' },
  { id: 4, title: 'Play School Activities', category: 'Activities', school: 'TZP', emoji: '🎨' },
  { id: 5, title: 'Diwali Celebration', category: 'Events', school: 'TZP', emoji: '🪔' },
  { id: 6, title: 'Reading Hour', category: 'Activities', school: 'TZP', emoji: '📖' },
  { id: 7, title: 'Annual Prize Distribution', category: 'Events', school: 'CMP', emoji: '🏆' },
  { id: 8, title: 'Art & Craft Day', category: 'Activities', school: 'TZP', emoji: '✂️' },
  { id: 9, title: 'PTM 2025', category: 'Academic', school: 'CMP', emoji: '👨‍👩‍👧' },
]

export default function Gallery() {
  const [filter, setFilter] = useState('ALL')

  const filtered = filter === 'ALL' ? photos : photos.filter(p => p.school === filter || p.category === filter)

  return (
    <div>
      <div className="page-hero">
        <div className="page-hero-inner">
          <p className="section-eyebrow">Our Moments</p>
          <h1 className="page-hero-title">Photo Gallery</h1>
          <p className="page-hero-desc">A glimpse into the vibrant life at CM Public School and Taare Zameen Par Play School.</p>
        </div>
      </div>

      <section style={{ padding: '48px 2rem', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

          <div className="notices-filter" style={{ marginBottom: '32px' }}>
            {['ALL', 'CMP', 'TZP', 'Events', 'Academic', 'Activities'].map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`filter-btn ${filter === f ? 'filter-btn-active' : ''}`}
              >
                {f === 'ALL' ? 'All' : f === 'CMP' ? 'CM Public' : f === 'TZP' ? 'TZP Play School' : f}
              </button>
            ))}
          </div>

          <div className="gallery-grid">
            {filtered.map(photo => (
              <div key={photo.id} className="gallery-card">
                <div className="gallery-img">
                  <span className="gallery-emoji">{photo.emoji}</span>
                </div>
                <div className="gallery-info">
                  <p className="gallery-title">{photo.title}</p>
                  <div className="gallery-meta">
                    <span className={`school-badge ${photo.school === 'CMP' ? 'school-badge-cm' : 'school-badge-tzp'}`}>
                      {photo.school === 'CMP' ? 'CM Public' : 'TZP'}
                    </span>
                    <span className="gallery-category">{photo.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px', padding: '32px', background: '#f8fafc', borderRadius: '16px' }}>
            <p style={{ color: '#083e78', fontWeight: '700', fontSize: '15px', marginBottom: '8px' }}>More photos coming soon</p>
            <p style={{ color: '#64748b', fontSize: '13px' }}>Follow us on WhatsApp for the latest updates and photos from school events.</p>
          </div>

        </div>
      </section>
    </div>
  )
} 
