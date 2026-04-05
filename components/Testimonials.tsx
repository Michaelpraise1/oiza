export default function Testimonials() {
  return (
    <section id="testimonials" className="section container">
      <h2 className="section-title">Hear From Our Happy Families</h2>
      <p className="section-subtitle">
        We treat every patient like our own family. Read what our clients have to say about our care.
      </p>

      <div className="testimonials-grid">
        <div className="testimonial-card">
          <p className="testimonial-text">
            "The compassion and professionalism of Doctor Williams completely changed our lives. My father is finally happy, comfortable, and we have ultimate peace of mind."
          </p>
          <div className="testimonial-author">
            <div className="author-avatar">MS</div>
            <div>
              <strong style={{ display: "block", color: "var(--color-primary)" }}>Margaret Smith</strong>
              <span style={{ fontSize: "0.875rem", color: "var(--color-text-muted)" }}>Daughter of Patient</span>
            </div>
          </div>
        </div>
        
        <div className="testimonial-card">
          <p className="testimonial-text">
            "Their at-home care staff are reliable, polite, and so kind. We couldn't have navigated the dementia process without their consistent guidance and therapy."
          </p>
          <div className="testimonial-author">
            <div className="author-avatar" style={{ backgroundColor: "var(--color-accent)" }}>RJ</div>
            <div>
              <strong style={{ display: "block", color: "var(--color-primary)" }}>Robert Jones</strong>
              <span style={{ fontSize: "0.875rem", color: "var(--color-text-muted)" }}>Husband of Patient</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
