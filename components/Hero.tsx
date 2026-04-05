import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <h1>Compassionate Care for Your Loved Ones.</h1>
          <p>
            We provide professional, high-end geriatric care tailored to the needs of the elderly and aged parents. Experience peace of mind with our dedicated medical team.
          </p>
          <div style={{ display: "flex", gap: "16px" }}>
            <a href="#booking" className="btn btn-primary">Make Appointment</a>
            <a href="#services" className="btn btn-secondary">Our Services</a>
          </div>
          
          <div style={{ marginTop: "40px", display: "flex", gap: "16px", alignItems: "center" }}>
            <div style={{ display: "flex", margin: "-8px" }}>
              {["#10b981", "#0ea5e9", "#f59e0b"].map((color, i) => (
                <div key={i} style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: color, border: "2px solid #fff", marginLeft: i === 0 ? "8px" : "-10px", zIndex: 3 - i }}></div>
              ))}
            </div>
            <div style={{ fontWeight: "600", color: "var(--color-primary)" }}>Over 500+ Happy Families</div>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <Image
            src="/hero.png"
            alt="Doctor interacting with elderly patient"
            width={600}
            height={500}
            priority
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </div>
      </div>
    </section>
  );
}
