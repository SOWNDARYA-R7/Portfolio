import { useState } from 'react';
import { ExternalLink, Award, Code2, Database, Terminal, CheckCircle2 } from 'lucide-react';

const Sections = ({ activeTab }) => {
  const [showMore, setShowMore] = useState(false);

  switch (activeTab) {
    case 'about':
      return (
        <div>
          <h2>About Me</h2>
          <p style={{ marginTop: '1rem', color: 'var(--text-sub)', lineHeight: '1.7', fontSize: '1.05rem' }}>
            I am a B.E. Computer Science student at KIT Coimbatore passionate about building impactful full-stack applications and analyzing complex datasets[cite: 1].
          </p>

          {/* Quick Stats Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem', marginTop: '1.5rem' }}>
            <div className="stat-box">
              <div className="stat-number">200+</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-sub)' }}>LeetCode Solved[cite: 1]</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">700+</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-sub)' }}>CodeChef Solved[cite: 1]</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">8.5</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-sub)' }}>Current CGPA[cite: 1]</div>
            </div>
          </div>

          <button className="show-more-btn" onClick={() => setShowMore(!showMore)}>
            {showMore ? 'Show Less ▲' : 'Read Full Highlights ▼'}
          </button>

          {showMore && (
            <div className="fade-in" style={{ marginTop: '1.2rem', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
              <h3>Education & Hackathons</h3>
              <ul style={{ color: 'var(--text-sub)', paddingLeft: '1.2rem', marginTop: '0.6rem', lineHeight: '1.8' }}>
                <li><strong>B.E. CSE:</strong> KIT Coimbatore (2024–2028)[cite: 1]</li>
                <li><strong>Hackathons:</strong> DevJams 48-Hour Hackathon Finalist at VIT[cite: 1]</li>
                <li><strong>Awards:</strong> 2nd Prize in Code Debugging (KGisl) & Treasure Hunt Coding (SREC)[cite: 1]</li>
              </ul>
            </div>
          )}

          <h3 style={{ marginTop: '2rem', fontSize: '1.1rem' }}>Profiles & Platforms</h3>
          <div className="social-links">
            <a href="https://linkedin.com/in/sondaryar" target="_blank" rel="noreferrer" className="social-btn">LinkedIn <ExternalLink size={16} /></a>
            <a href="https://github.com/SOWNDARYA-R7" target="_blank" rel="noreferrer" className="social-btn">GitHub <ExternalLink size={16} /></a>
            <a href="https://leetcode.com" target="_blank" rel="noreferrer" className="social-btn">LeetCode <ExternalLink size={16} /></a>
            <a href="https://codechef.com" target="_blank" rel="noreferrer" className="social-btn">CodeChef (2★) <ExternalLink size={16} /></a>
          </div>
        </div>
      );

    case 'projects':
      return (
        <div>
          <h2>Featured Projects</h2>
          <div className="projects-grid">
            <div className="project-card glass-card">
              <h3>SMS Spam Detection (xLSTM)</h3>
              <p style={{ color: 'var(--text-sub)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                High-accuracy deep learning NLP model achieving 95.94% accuracy[cite: 1].
              </p>
              <div style={{ marginTop: '0.8rem' }}>
                <span className="tech-badge">Python</span>
                <span className="tech-badge">PyTorch</span>
                <span className="tech-badge">NLP</span>
              </div>
            </div>

            <div className="project-card glass-card">
              <h3>Zoho-Style CRM System</h3>
              <p style={{ color: 'var(--text-sub)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                Full-stack lead to deal management system with JWT security[cite: 1].
              </p>
              <div style={{ marginTop: '0.8rem' }}>
                <span className="tech-badge">React</span>
                <span className="tech-badge">Node.js</span>
                <span className="tech-badge">MongoDB</span>
              </div>
            </div>

            <div className="project-card glass-card">
              <h3>Lunara - Art Gallery</h3>
              <p style={{ color: 'var(--text-sub)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                Interactive digital art platform with seamless artwork CRUD ops[cite: 1].
              </p>
              <div style={{ marginTop: '0.8rem' }}>
                <span className="tech-badge">MERN Stack</span>
                <span className="tech-badge">REST API</span>
              </div>
            </div>
          </div>
        </div>
      );

    case 'skills':
      return (
        <div>
          <h2>Tech Stack & Capabilities</h2>
          <div className="projects-grid">
            <div className="project-card glass-card">
              <Code2 size={24} color="var(--accent)" />
              <h3 style={{ marginTop: '0.5rem' }}>Languages</h3>
              <p style={{ color: 'var(--text-sub)', fontSize: '0.9rem' }}>C++, Python, Java, JavaScript, SQL[cite: 1]</p>
            </div>
            <div className="project-card glass-card">
              <Terminal size={24} color="var(--accent)" />
              <h3 style={{ marginTop: '0.5rem' }}>Web Dev</h3>
              <p style={{ color: 'var(--text-sub)', fontSize: '0.9rem' }}>React.js, Node.js, Express, MongoDB, Tailwind[cite: 1]</p>
            </div>
            <div className="project-card glass-card">
              <Database size={24} color="var(--accent)" />
              <h3 style={{ marginTop: '0.5rem' }}>Data & Tools</h3>
              <p style={{ color: 'var(--text-sub)', fontSize: '0.9rem' }}>Power BI, Data Analytics, Git, Postman[cite: 1]</p>
            </div>
          </div>
        </div>
      );

    case 'experience':
      return (
        <div>
          <h2>Work Experience</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginTop: '1rem' }}>
            <div className="project-card glass-card">
              <h3>Backend Developer Intern</h3>
              <span style={{ color: 'var(--accent)', fontSize: '0.85rem' }}>Clar Technologies | June 2026[cite: 1]</span>
              <p style={{ color: 'var(--text-sub)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                Designed MongoDB schemas, built REST APIs in Node/Express, and worked in Agile sprints[cite: 1].
              </p>
            </div>
            <div className="project-card glass-card">
              <h3>Data Analytics Intern</h3>
              <span style={{ color: 'var(--accent)', fontSize: '0.85rem' }}>Appin Technology[cite: 1]</span>
              <p style={{ color: 'var(--text-sub)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                Created interactive business intelligence dashboards using Power BI and DAX measures[cite: 1].
              </p>
            </div>
          </div>
        </div>
      );

    case 'contact':
      return (
        <div style={{ textAlign: 'center', padding: '1rem 0' }}>
          <h2>Get In Touch</h2>
          <p style={{ color: 'var(--text-sub)', marginTop: '0.5rem' }}>
            Open for Full-Stack & Data Analytics opportunities!
          </p>
          <div style={{ marginTop: '1.5rem', display: 'inline-block', textAlign: 'left' }} className="project-card glass-card">
            <p><strong>Email:</strong> kit28.24cs165@gmail.com[cite: 1]</p>
            <p style={{ marginTop: '0.5rem' }}><strong>Phone:</strong> +91 7550332156[cite: 1]</p>
            <p style={{ marginTop: '0.5rem' }}><strong>Location:</strong> Coimbatore, India[cite: 1]</p>
          </div>
        </div>
      );

    default:
      return null;
  }
};

export default Sections;