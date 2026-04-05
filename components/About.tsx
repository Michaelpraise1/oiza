import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="section container">
      <div className="about-grid">
        <div className="about-image">
           <Image
            src="/doctor.png"
            alt="Portrait of Doctor"
            width={400}
            height={500}
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </div>
        <div>
          <h2 className="section-title" style={{ textAlign: "left" }}>Dedicated to Golden Years</h2>
          <p style={{ color: "var(--color-text-muted)", fontSize: "1.25rem", marginBottom: "24px" }}>
            With over 15 years of experience in geriatric medicine, Doctor Sarah Williams understands the unique health challenges faced by seniors. Our clinic combines high-quality medical expertise with a warm, empathetic approach, ensuring your parents receive the comfort and dignity they deserve.
          </p>
          <div className="about-features">
            <div className="feature-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              Personalized Care Plans
            </div>
            <div className="feature-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              24/7 Support & Monitoring
            </div>
            <div className="feature-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              Family Guidance & Counseling
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
