import React, { useState } from "react";
import "./contact.css";
import { Link } from "react-router-dom";


export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-page">

      {/* NAVBAR (original style) */}
      <nav className="about-nav">
        <div className="nav-logo">RL Explorer</div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/curriculum">Curriculum</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/contact">Contact</Link>
          <a href="/register" className="register-btn">
  <span>Register</span>
</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>
          Have questions or want to collaborate? Fill out the form below and we'll get back to you.
        </p>
      </section>

      {/* CONTENT */}
      <section className="contact-content">
        <div className="contact-form-wrapper">
          {submitted && (
            <div className="success-message">
              Thank you! Your message has been sent.
            </div>
          )}
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={5}
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        <div className="contact-info">
          <h3>Reach us directly</h3>
          <p>Email: contact@rlexplorer.com</p>
          <p>Phone: +1 555-123-4567</p>
          <p>Address: 123 AI Street, Tech City, USA</p>
        </div>
      </section>
    </div>
  );
}
