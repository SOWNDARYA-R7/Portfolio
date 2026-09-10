import { ArrowLeft } from 'lucide-react';

export default function Navbar({ navItems, currentView, setCurrentView }) {
  return (
    <div className="sticky-nav-bar">
      <button className="back-btn" onClick={() => setCurrentView('home')}>
        <ArrowLeft size={18} /> Back to Home
      </button>

      <div className="nav-links-wrapper">
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`compact-nav-card ${currentView === item.id ? 'active' : ''}`}
            onClick={() => setCurrentView(item.id)}
          >
            {item.icon} {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}