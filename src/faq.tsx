import { useState } from "react";
import "./faq.css";
import { Link } from "react-router-dom";


const faqs = [
  {
    question: "What is RL Explorer?",
    answer:
      "RL Explorer is a platform for learning and experimenting with reinforcement learning agents in real-time.",
  },
  {
    question: "Who can use this platform?",
    answer:
      "Anyone interested in AI, robotics, or reinforcement learning, from students to professionals.",
  },
  {
    question: "Do I need prior AI knowledge?",
    answer:
      "No prior knowledge is required. Our platform provides intuitive tools and visualizations to learn step by step.",
  },
  {
    question: "Can I track my learning progress?",
    answer:
      "Yes! Users can track which modules they’ve explored and monitor agent experiments over time.",
  },
  {
    question: "Which programming languages are supported?",
    answer:
      "Currently, our platform is language-agnostic but integrates easily with Python-based RL scripts and simulations.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-page">
      {/* NAVBAR */}
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
      <section className="faq-hero">
        <h1>Frequently Asked Questions</h1>
        <p>Got questions? We’ve got answers. Click each item to learn more.</p>
      </section>

      {/* FAQ List */}
      <section className="faq-list">
        {faqs.map((faq, i) => (
          <div
            className={`faq-item ${openIndex === i ? "open" : ""}`}
            key={i}
            onClick={() => toggleFaq(i)}
          >
            <div className="faq-question">
              {faq.question}
              <span className="faq-arrow">{openIndex === i ? "▲" : "▼"}</span>
            </div>
            {openIndex === i && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </section>
    </div>
  );
}
