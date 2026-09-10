import { useState, useEffect } from 'react';

const Cursor = () => {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      className="custom-cursor" 
      style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
    />
  );
};

export default Cursor;