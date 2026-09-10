import { X } from 'lucide-react';

export default function ImageModal({ isOpen, onClose, imageSrc, altText }) {
  if (!isOpen) return null;

  return (
    <div className="image-modal-overlay" onClick={onClose}>
      <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-modal-btn" onClick={onClose}>
          <X size={20} />
        </button>
        <img src={imageSrc} alt={altText} className="zoomed-image" />
      </div>
    </div>
  );
}