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

      <footer className="about-footer">
        © {new Date().getFullYear()} ReinforceLearn — Reinforcement Learning, Reimagined.
      </footer>
    </div>
  );
}
