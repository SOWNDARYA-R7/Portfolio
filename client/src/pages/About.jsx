import { stats, achievements } from '../data/portfolioData';

export default function About() {
  return (
    <div className="fade-page">
      <h2 className="page-title">About Me</h2>
      <p style={{ color: 'var(--text-sub)', lineHeight: '1.8', fontSize: '1.1rem' }}>
        I am a Computer Science & Engineering student at KIT Coimbatore with a passion for building high-performance full-stack web platforms and applying machine learning to real-world data problems.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.2rem', marginTop: '2rem' }}>
        {stats.map((item, idx) => (
          <div key={idx} className="detail-card" style={{ textAlign: 'center' }}>
            <h3 style={{ color: 'var(--accent)', fontSize: '2rem' }}>{item.value}</h3>
            <p style={{ color: 'var(--text-sub)', marginTop: '0.3rem' }}>{item.label}</p>
          </div>
        ))}
      </div>

      <h3 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--text-main)' }}>Achievements & Recognitions</h3>
      <ul style={{ color: 'var(--text-sub)', lineHeight: '2', paddingLeft: '1.2rem' }}>
        {achievements.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}