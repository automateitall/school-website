 
'use client'
import { useEffect, useState } from 'react'

export default function Notices() {
  const [notices, setNotices] = useState([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('ALL')

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/notices')
        const data = await res.json()
        setNotices(data)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    fetchNotices()
  }, [])

  const filtered = filter === 'ALL' ? notices : notices.filter(n => n.school === filter)

  return (
    <div>
      <div className="page-hero">
        <div className="page-hero-inner">
          <p className="section-eyebrow">Stay Informed</p>
          <h1 className="page-hero-title">Notices & Circulars</h1>
          <p className="page-hero-desc">All official notices, circulars, exam schedules and announcements from both schools in one place.</p>
        </div>
      </div>

      <section style={{ padding: '48px 2rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>

          <div className="notices-filter">
            {['ALL', 'CMP', 'TZP'].map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`filter-btn ${filter === f ? 'filter-btn-active' : ''}`}
              >
                {f === 'ALL' ? 'All Schools' : f === 'CMP' ? 'CM Public School' : 'Taare Zameen Par'}
              </button>
            ))}
          </div>

          {loading ? (
            <div className="notices-loading">Loading notices...</div>
          ) : filtered.length === 0 ? (
            <div className="notices-empty">No notices found.</div>
          ) : (
            <div className="notices-list">
              {filtered.map(n => (
                <div key={n.id} className={`notice-list-card ${n.pinned ? 'notice-pinned' : ''}`}>
                  <div className="notice-list-left">
                    {n.pinned && <span className="pinned-badge">📌 Pinned</span>}
                    <h3>{n.title}</h3>
                    <p>{n.content}</p>
                    <div className="notice-list-meta">
                      <span className={`school-badge ${n.school === 'CMP' ? 'school-badge-cm' : 'school-badge-tzp'}`}>
                        {n.school === 'CMP' ? 'CM Public School' : 'Taare Zameen Par'}
                      </span>
                      <span className="notice-list-date">
                        {new Date(n.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
                      </span>
                    </div>
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