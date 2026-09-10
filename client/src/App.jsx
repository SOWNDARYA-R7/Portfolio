import { useState, useEffect } from 'react';
import { Sun, Moon, User, Briefcase, Code, Mail, Wrench, ExternalLink } from 'lucide-react';

import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import ImageModal from './components/ImageModal';

import About from './pages/About';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

import './App.css';

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [theme, setTheme] = useState('dark');
  const [isImageOpen, setIsImageOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const navItems = [
    { id: 'about', label: 'About Me', icon: <User size={18} /> },
    { id: 'skills', label: 'Skills', icon: <Wrench size={18} /> },
    { id: 'experience', label: 'Experience', icon: <Briefcase size={18} /> },
    { id: 'projects', label: 'Projects', icon: <Code size={18} /> },
    { id: 'contact', label: 'Contact', icon: <Mail size={18} /> },
  ];

  const renderPageContent = () => {
    switch (currentView) {
      case 'about': return <About />;
      case 'skills': return <Skills />;
      case 'experience': return <Experience />;
      case 'projects': return <Projects />;
      case 'contact': return <Contact />;
      default: return null;
    }
  };

  return (
    <div className="container">
      <Cursor />

      {/* Theme Toggle */}
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        {theme === 'dark' ? 'Light' : 'Dark'}
      </button>

      {/* LANDING / HOME VIEW */}
      {currentView === 'home' ? (
        <div className="home-view fade-page">
          <div className="avatar-container" onClick={() => setIsImageOpen(true)}>
            <img src="/professional.png" alt="Sowndarya R" className="professional-avatar" />
          </div>

          <h1 className="hero-name">Sowndarya R</h1>
          <p className="short-desc">
            Full-Stack Developer | Data Analytics Enthusiast
          </p>

          <div className="home-grid">
            {navItems.map((item) => (
              <button 
                key={item.id} 
                className="flex-card" 
                onClick={() => setCurrentView(item.id)}
              >
                {item.icon} {item.label}
              </button>
            ))}
          </div>

          <div className="profile-links-container">
            <a href="http://www.linkedin.com/in/sowndaryar" target="_blank" rel="noreferrer" className="profile-btn">
              LinkedIn <ExternalLink size={16} />
            </a>
            <a href="https://github.com/SOWNDARYA-R7" target="_blank" rel="noreferrer" className="profile-btn">
              GitHub <ExternalLink size={16} />
            </a>
          </div>
        </div>
      ) : (
        /* DEDICATED PAGE VIEW */
        <div className="fade-page">
          <Navbar navItems={navItems} currentView={currentView} setCurrentView={setCurrentView} />
          <div className="page-window">
            {renderPageContent()}
          </div>
        </div>
      )}

      {/* MODAL COMPONENT */}
      <ImageModal 
        isOpen={isImageOpen} 
        onClose={() => setIsImageOpen(false)} 
        imageSrc="/professional.png" 
        altText="Sowndarya R" 
      />
    </div>
  );
}

export default App;