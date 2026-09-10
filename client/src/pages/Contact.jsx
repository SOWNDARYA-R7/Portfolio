
export default function Contact() {
  return (
    <div className="fade-page" style={{ textAlign: 'center' }}>
      <h2 className="page-title">Get In Touch</h2>
      <p style={{ color: 'var(--text-sub)', fontSize: '1.1rem' }}>
        Feel free to connect with me for full-stack, data analytics, or software engineering roles!
      </p>
      <div className="detail-card" style={{ maxWidth: '450px', margin: '2rem auto 0 auto', textAlign: 'left' }}>
        <p style={{ marginBottom: '0.8rem', color: 'var(--text-main)' }}><strong>Email:</strong> kit28.24cs165@gmail.com</p>
        <p style={{ marginBottom: '0.8rem', color: 'var(--text-main)' }}><strong>Phone:</strong> +91 7550332156</p>
        <p style={{ color: 'var(--text-main)' }}><strong>Location:</strong> Coimbatore, Tamil Nadu, India</p>
      </div>
    </div>
  );
}