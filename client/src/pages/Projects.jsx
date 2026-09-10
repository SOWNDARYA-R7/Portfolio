import { projects } from '../data/portfolioData';

export default function Projects() {
  return (
    <div className="fade-page">
      <h2 className="page-title">Featured Projects</h2>
      <div className="project-grid-view">
        {projects.map((proj, idx) => (
          <div key={idx} className="detail-card">
            <h3 style={{ color: 'var(--text-main)' }}>{proj.title}</h3>
            <p style={{ color: 'var(--text-sub)', marginTop: '0.6rem', fontSize: '0.95rem', lineHeight: '1.6' }}>
              {proj.desc}
            </p>
            <div style={{ marginTop: '0.8rem' }}>
              {proj.badges.map((b, bIdx) => (
                <span key={bIdx} className="badge">{b}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}