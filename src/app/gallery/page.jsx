'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const CATEGORIES = ['All', 'General', 'Sports', 'Events', 'Classroom', 'Festivals', 'Trips']

export default function Gallery() {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('All')
  const [school, setSchool] = useState('ALL')

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/gallery`)
      .then(r => r.json())
      .then(data => { setImages(Array.isArray(data) ? data : []); setLoading(false) })
      .catch(() => setLoading(false))
  }, [])

  const filtered = images
    .filter(i => filter === 'All' || i.category === filter)
    .filter(i => school === 'ALL' || i.school === school)

  return (
    <div>
      <div className="page-hero">
        <div className="page-hero-inner">
          <p className="section-eyebrow">Our Memories</p>
          <h1 className="page-hero-title">Gallery</h1>
          <p className="page-hero-desc">A glimpse into life at CM Public School and Taare Zameen Par Play School.</p>
        </div>
      </div>

      <section style={{ padding: '48px 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

          <div style={{ display: 'flex', gap: '12px', marginBottom: '16px', flexWrap: 'wrap' }}>
            {['ALL', 'CMP', 'TZP'].map(s => (
              <button key={s} onClick={() => setSchool(s)} style={{
                padding: '7px 18px', borderRadius: '8px', cursor: 'pointer', fontWeight: '600', fontSize: '13px',
                border: school === s ? '2px solid #083e78' : '1.5px solid #e2e8f0',
                background: school === s ? '#083e78' : 'white',
                color: school === s ? 'white' : '#1e293b'
              }}>
                {s === 'ALL' ? 'All Schools' : s === 'CMP' ? 'CM Public School' : 'Taare Zameen Par'}
              </button>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '10px', marginBottom: '32px', flexWrap: 'wrap' }}>
            {CATEGORIES.map(c => (
              <button key={c} onClick={() => setFilter(c)} style={{
                padding: '6px 14px', borderRadius: '8px', cursor: 'pointer', fontWeight: '500', fontSize: '13px',
                border: filter === c ? '2px solid #ff914d' : '1.5px solid #e2e8f0',
                background: filter === c ? '#fff3ec' : 'white',
                color: filter === c ? '#c45e1e' : '#64748b'
              }}>
                {c}
              </button>
            ))}
          </div>

          {loading ? (
            <p style={{ textAlign: 'center', color: '#94a3b8', padding: '4rem' }}>Loading gallery...</p>
          ) : filtered.length === 0 ? (
            <p style={{ textAlign: 'center', color: '#94a3b8', padding: '4rem' }}>No photos yet.</p>
          ) : (
            <div style={{ columns: '3 280px', gap: '16px' }}>
              {filtered.map(img => (
                <div key={img.id} style={{ breakInside: 'avoid', marginBottom: '16px', borderRadius: '12px', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
                  <img src={img.imageUrl} alt={img.title} style={{ width: '100%', display: 'block' }} />
                  <div style={{ padding: '10px 14px', background: 'white' }}>
                    <p style={{ fontWeight: '600', fontSize: '13px', color: '#1e293b', marginBottom: '4px' }}>{img.title}</p>
                    <span style={{ fontSize: '11px', color: '#64748b', background: '#f1f5f9', padding: '2px 8px', borderRadius: '99px' }}>{img.category}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}