import Image from "next/image";

export default function Services() {
  return (
    <section id="services" className="section bg-soft">
      <div className="container">
        <h2 className="section-title">Our Specialized Services</h2>
        <p className="section-subtitle">
          Comprehensive geriatric care designed to assist seniors at every stage of their life journey.
        </p>
        
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">🏠</div>
            <h3>In-Home Care</h3>
            <p style={{ color: "var(--color-text-muted)", marginBottom: "24px" }}>
              Dedicated nursing support right at home, helping with daily activities and medical needs.
            </p>
            <Image src="/service.png" alt="Home Care" width={300} height={200} style={{ objectFit: "cover", width: "100%", height: "200px" }} />
            <a href="#booking" style={{ fontWeight: "600", color: "var(--color-secondary)" }}>Learn More &rarr;</a>
          </div>

          <div className="service-card">
            <div className="service-icon">💊</div>
            <h3>Medication Management</h3>
            <p style={{ color: "var(--color-text-muted)", marginBottom: "24px" }}>
              Ensuring prescriptions are managed safely and taken correctly on time, every time.
            </p>
            <div style={{ backgroundColor: "#e2e8f0", width: "100%", height: "200px", borderRadius: "12px", marginBottom: "24px", display: "flex", alignItems: "center", justifyContent: "center", color: "#64748b" }}>
              [Medication Image]
            </div>
            <a href="#booking" style={{ fontWeight: "600", color: "var(--color-secondary)" }}>Learn More &rarr;</a>
          </div>

          <div className="service-card">
            <div className="service-icon">🧠</div>
            <h3>Memory & Cognitive</h3>
            <p style={{ color: "var(--color-text-muted)", marginBottom: "24px" }}>
              Compassionate assistance for dementia and Alzheimer's patients to maintain quality of life.
            </p>
            <div style={{ backgroundColor: "#e2e8f0", width: "100%", height: "200px", borderRadius: "12px", marginBottom: "24px", display: "flex", alignItems: "center", justifyContent: "center", color: "#64748b" }}>
              [Therapy Image]
            </div>
            <a href="#booking" style={{ fontWeight: "600", color: "var(--color-secondary)" }}>Learn More &rarr;</a>
          </div>
        </div>
      </div>
    </section>
  );
}
