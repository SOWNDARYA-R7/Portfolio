import { experiences } from '../data/portfolioData';

export default function Experience() {
  return (
    <div className="fade-page">
      <h2 className="page-title">Work Experience</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {experiences.map((exp, idx) => (
          <div key={idx} className="detail-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
              <h3 style={{ color: 'var(--text-main)' }}>{exp.role}</h3>
              <span style={{ color: 'var(--accent)', fontWeight: 'bold' }}>
                {exp.company} {exp.date ? `| ${exp.date}` : ''}
              </span>
            </div>
            <p style={{ color: 'var(--text-sub)', marginTop: '0.8rem', lineHeight: '1.7' }}>
              {exp.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}