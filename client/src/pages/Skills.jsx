import { Code2, Terminal, Database } from 'lucide-react';
import { skills } from '../data/portfolioData';

export default function Skills() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Code2': return <Code2 size={28} color="var(--accent)" />;
      case 'Terminal': return <Terminal size={28} color="var(--accent)" />;
      case 'Database': return <Database size={28} color="var(--accent)" />;
      default: return <Code2 size={28} color="var(--accent)" />;
    }
  };

  return (
    <div className="fade-page">
      <h2 className="page-title">Technical Expertise</h2>
      <div className="project-grid-view">
        {skills.map((skill, idx) => (
          <div key={idx} className="detail-card">
            {getIcon(skill.icon)}
            <h3 style={{ marginTop: '0.8rem', color: 'var(--text-main)' }}>{skill.title}</h3>
            <p style={{ color: 'var(--text-sub)', marginTop: '0.5rem' }}>{skill.list}</p>
          </div>
        ))}
      </div>
    </div>
  );
}