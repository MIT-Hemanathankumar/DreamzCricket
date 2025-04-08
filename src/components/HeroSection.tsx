// src/components/HeroSection.tsx
import './css/HeroSection.css';
export default function HeroSection() {
    return (
      <section className="hero-section position-relative text-white text-center bg-dark" style={{ backgroundImage: `url('/assets/img/hero-1.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', padding: '100px 0' }}>
        <div className="container">
          <h1 className="display-4 fw-bold">Join DreamzCricket Today</h1>
          <p className="lead hero-subtext">Play Fantasy Cricket & Win Real Cash Daily</p>

          <a href="#download" className="btn btn-danger btn-lg mt-3 px-4">Download the App</a>
        </div>
      </section>
    );
  }
  