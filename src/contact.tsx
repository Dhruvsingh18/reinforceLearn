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
      <nav className="flex justify-between items-center px-10 py-6 border-b border-slate-200">
        <div className="text-2xl font-extrabold tracking-tight">
          Reinforce<span className="text-purple-600">Learn</span>
        </div>

        <div className="flex gap-8 items-center text-sm font-medium">
          <Link to="/" className="hover:text-purple-600 transition">Home</Link>
          <Link to="/about" className="hover:text-purple-600 transition">About</Link>
          <Link to="/curriculum" className="text-purple-600 font-semibold">Curriculum</Link>
          <Link to="/faq" className="hover:text-purple-600 transition">FAQ</Link>
          <Link to="/contact" className="hover:text-purple-600 transition">Contact</Link>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfg_XnvHbtXL7DIj9r5IzR5sFTLEaBDjG_36csNadD_ZBGS8g/viewform?usp=sharing&ouid=115457538230363493907"
            className="bg-purple-600 text-white px-5 py-2 rounded-full shadow hover:bg-purple-700 transition"
          >
            Register
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
          <h1>Reach us directly</h1>
          <p>Email: contact@rlexplorer.com</p>
          <p>Phone: +1 555-123-4567</p>
          <p>Address: 123 AI Street, Tech City, USA</p>
        </div>
      </section>

      <footer className="about-footer">
        © {new Date().getFullYear()} ReinforceLearn — Reinforcement Learning, Reimagined.
      </footer>
    </div>
  );
}
