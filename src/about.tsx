import "./about.css";
import { Link } from "react-router-dom";


export default function AboutPage() {
  return (
    <div className="about-page">

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
      <section className="about-hero">
        <div className="hero-text">
          <h1>About RL Explorer</h1>
          <p>
            We build intuitive tools for reinforcement learning — focused on
            robotics, autonomy, and real-world intelligence.
          </p>
        </div>

        <div className="hero-image-placeholder">
          Product / Diagram / Visual
        </div>
      </section>

      {/* STATS */}
      <section className="about-stats">
        <div className="stat">
          <h3>120+</h3>
          <p>Students Taught</p>
        </div>
        <div className="stat">
          <h3>2,500+</h3>
          <p>Training Hours</p>
        </div>
        <div className="stat">
          <h3>$75K</h3>
          <p>Research Funding Raised</p>
        </div>
        <div className="stat">
          <h3>14</h3>
          <p>Active Projects</p>
        </div>
      </section>

      {/* CONTENT (Improved) */}
      <section className="about-content">
        <div className="content-card modern-card">
          <h2>Our Mission</h2>
          <p>
            We aim to make reinforcement learning intuitive and accessible. Our
            tools empower engineers, students, and researchers to see AI in
            action, test scenarios, and innovate confidently.
          </p>
          <ul>
            <li>Interactive simulations for learning and research</li>
            <li>Clear visualizations of agent decisions</li>
            <li>Easy-to-use interfaces with real-world focus</li>
          </ul>
        </div>

        <div className="content-card modern-card outlined">
          <h2>What We Focus On</h2>
          <ul className="focus-list">
            <li>
              <strong>Robotics & Autonomy:</strong> Tools for real and simulated robots.
            </li>
            <li>
              <strong>Visualization:</strong> Understand AI behavior in real-time.
            </li>
            <li>
              <strong>Accessibility:</strong> Complex systems, simplified for everyone.
            </li>
            <li>
              <strong>Innovation:</strong> Cutting-edge methods for modern research.
            </li>
          </ul>
        </div>
      </section>

      {/* TEAM (Improved) */}
      <section className="about-team">
        <h2>Meet the Team</h2>

        <div className="team-grid">
          {Array.from({ length: 8 }).map((_, i) => (
            <div className="team-card" key={i}>
              <div className="team-image-placeholder">
                {/* Replace with real image */}
                <img
                  src={`/team/member${i + 1}.jpg`}
                  alt={`Team member ${i + 1}`}
                  className="team-image"
                />
              </div>
              <h4>Member {i + 1}</h4>
              <p className="role-badge">Role / Specialty</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
