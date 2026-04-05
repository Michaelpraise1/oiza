"use client";

import { FormEvent } from "react";

export default function AppointmentForm() {
  
  // This function is triggered when the user clicks 'Request Appointment'
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    // Prevent the default browser page reload
    event.preventDefault();
    
    // Extract everything using FormData (this relies on the 'name' attributes on inputs)
    const formData = new FormData(event.currentTarget);
    
    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      serviceType: formData.get("serviceType"),
      message: formData.get("message"),
    };

    // Here is where you would typically send 'data' to a database or email API
    console.log("Form successfully submitted! User data:", data);
    
    // Just a quick visual confirmation for testing
    alert("Thank you! Your information has been collected. Check your browser's Developer Console to see the data.");
  }

  return (
    <section id="booking" className="section bg-soft">
      <div className="container">
        <h2 className="section-title">Schedule a Consultation</h2>
        <p className="section-subtitle">
          Take the first step towards better care. Contact us today to discuss your family's needs.
        </p>

        <form className="appointment-card" onSubmit={handleSubmit}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
            <div className="form-group">
              <label className="form-label" htmlFor="first-name">First Name</label>
              {/* Note: I added name="firstName" so we can read it easily */}
              <input type="text" id="first-name" name="firstName" className="form-control" placeholder="Jane" required />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="last-name">Last Name</label>
              <input type="text" id="last-name" name="lastName" className="form-control" placeholder="Doe" required />
            </div>
          </div>
          
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
            <div className="form-group">
              <label className="form-label" htmlFor="email">Email</label>
              <input type="email" id="email" name="email" className="form-control" placeholder="jane@example.com" required />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" className="form-control" placeholder="(555) 123-4567" required />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="service-type">Interest or Service</label>
            <select id="service-type" name="serviceType" className="form-control" required>
              <option value="">Select a service...</option>
              <option value="in_home">In-Home Care</option>
              <option value="medical_consultation">Medical Consultation</option>
              <option value="memory_care">Memory & Cognitive Care</option>
              <option value="other">Other / General Inquiry</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="message">Any Specific Requirements?</label>
            <textarea id="message" name="message" className="form-control" rows={4} placeholder="Please tell us a bit about your loved one's current needs..."></textarea>
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: "100%", padding: "18px", fontSize: "1.25rem" }}>
            Request Appointment
          </button>
        </form>
      </div>
    </section>
  );
}
