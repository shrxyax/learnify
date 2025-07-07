import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div className="contact-page dark-theme">
      <Header />
      <section className="section">
        <h1 className="section-heading neon-text">Contact Us</h1>
        <p className="contact-text">
          We'd love to hear from you! If you have any questions, feedback, or just want to say hi, feel free to reach out.
        </p>
        <div className="contact-info">
          <p>Email: <a href="mailto:support@learnify.com">support@learnify.com</a></p>
          <p>Phone: +91 98765 43210</p>
          <p>Address: Learnify HQ, Tech Park, Bengaluru, India</p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
