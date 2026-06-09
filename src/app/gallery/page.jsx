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
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
    {[1,2,3,4,5,6].map(n => (
      <div key={n} style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
        <div style={{ width: '100%', height: '200px', background: '#f1f5f9' }} />
        <div style={{ padding: '10px 14px', background: 'white' }}>
          <div style={{ height: '12px', background: '#f1f5f9', borderRadius: '4px', marginBottom: '8px', width: '70%' }} />
        </div>
      </div>
    ))}
  </div>
) : filtered.length === 0 ? (
  <p style={{ textAlign: 'center', color: '#94a3b8', padding: '4rem' }}>No photos yet.</p>
) : (
  <GalleryGrid images={filtered} />
)}
        </div>
      </section>
    </div>
  )
}

function GalleryGrid({ images }) {
  const grouped = images.reduce((acc, img) => {
    if (!acc[img.title]) acc[img.title] = []
    acc[img.title].push(img)
    return acc
  }, {})

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
      {Object.entries(grouped).map(([title, imgs]) => (
        <GalleryCard key={title} title={title} images={imgs} />
      ))}
    </div>
  )
}

function GalleryCard({ title, images }) {
  const [current, setCurrent] = useState(0)
  const [lightbox, setLightbox] = useState(false)

  return (
    <>
      <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid #e2e8f0', background: 'white', cursor: 'pointer' }}>
        <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }} onClick={() => setLightbox(true)}>
          <img
            src={images[current].imageUrl.replace('/upload/', '/upload/w_600,q_auto,f_auto/')}
            alt={title}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
          {images.length > 1 && (
            <>
              <button onClick={e => { e.stopPropagation(); setCurrent(c => (c - 1 + images.length) % images.length) }}
                style={{ position: 'absolute', left: '8px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.4)', color: 'white', border: 'none', borderRadius: '50%', width: '28px', height: '28px', cursor: 'pointer', fontSize: '14px' }}>
                ‹
              </button>
              <button onClick={e => { e.stopPropagation(); setCurrent(c => (c + 1) % images.length) }}
                style={{ position: 'absolute', right: '8px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.4)', color: 'white', border: 'none', borderRadius: '50%', width: '28px', height: '28px', cursor: 'pointer', fontSize: '14px' }}>
                ›
              </button>
            </>
          )}
          {images.length > 1 && (
            <div style={{ position: 'absolute', bottom: '8px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '5px' }}>
              {images.map((_, i) => (
                <div key={i} onClick={e => { e.stopPropagation(); setCurrent(i) }}
                  style={{ width: i === current ? '18px' : '6px', height: '6px', borderRadius: '99px', background: i === current ? 'white' : 'rgba(255,255,255,0.5)', transition: 'all 0.2s', cursor: 'pointer' }} />
              ))}
            </div>
          )}
        </div>
        <div style={{ padding: '10px 14px' }}>
          <p style={{ fontWeight: '600', fontSize: '13px', color: '#1e293b', marginBottom: '4px' }}>{title}</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '11px', color: '#64748b', background: '#f1f5f9', padding: '2px 8px', borderRadius: '99px' }}>{images[0].category}</span>
            {images.length > 1 && <span style={{ fontSize: '11px', color: '#94a3b8' }}>{images.length} photos</span>}
          </div>
        </div>
      </div>

      {lightbox && (
        <div onClick={() => setLightbox(false)} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.9)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <button onClick={() => setLightbox(false)} style={{ position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', color: 'white', fontSize: '32px', cursor: 'pointer' }}>×</button>
          {images.length > 1 && (
            <button onClick={e => { e.stopPropagation(); setCurrent(c => (c - 1 + images.length) % images.length) }}
              style={{ position: 'absolute', left: '20px', background: 'rgba(255,255,255,0.2)', border: 'none', color: 'white', fontSize: '32px', borderRadius: '50%', width: '48px', height: '48px', cursor: 'pointer' }}>
              ‹
            </button>
          )}
          <img
            src={images[current].imageUrl}
            alt={title}
            onClick={e => e.stopPropagation()}
            style={{ maxHeight: '85vh', maxWidth: '90vw', borderRadius: '8px', objectFit: 'contain' }}
          />
          {images.length > 1 && (
            <button onClick={e => { e.stopPropagation(); setCurrent(c => (c + 1) % images.length) }}
              style={{ position: 'absolute', right: '20px', background: 'rgba(255,255,255,0.2)', border: 'none', color: 'white', fontSize: '32px', borderRadius: '50%', width: '48px', height: '48px', cursor: 'pointer' }}>
              ›
            </button>
          )}
          <div style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '6px' }}>
            {images.map((_, i) => (
              <div key={i} onClick={e => { e.stopPropagation(); setCurrent(i) }}
                style={{ width: i === current ? '20px' : '8px', height: '8px', borderRadius: '99px', background: i === current ? 'white' : 'rgba(255,255,255,0.4)', transition: 'all 0.2s', cursor: 'pointer' }} />
            ))}
          </div>
        </div>
      )}
    </>
  )
}