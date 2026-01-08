import React from "react";
import "./index.css";
import { Link } from "react-router-dom";


const LandingPage: React.FC = () => {
  return (
    <div className="page">

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
      <section className="hero">
        <div className="hero-text">
          <h1>
            Build Smarter <span>Reinforcement Learning</span> Agents
          </h1>
          <p>
            A modern platform to train, visualize, and deploy reinforcement
            learning agents with real-time insights and intuitive workflows.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary">Get Started</button>
            <button className="btn-secondary">View Demo</button>
          </div>
        </div>

        <div className="hero-card">
          <div className="card-glow" />
          <h3>Live Agent Monitor</h3>
          <p>Reward · Policy · State</p>
          <div className="fake-graph" />
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <h2>Why RL Explorer?</h2>

        <div className="feature-grid">
          <div className="feature-card">
            <h3>Visual Training</h3>
            <p>
              Watch agents learn in real time with trajectory and reward
              overlays.
            </p>
          </div>

          <div className="feature-card">
            <h3>Research-Grade Tools</h3>
            <p>
              PPO, SAC, DQN pipelines with full experiment tracking.
            </p>
          </div>

          <div className="feature-card">
            <h3>Custom Environments</h3>
            <p>
              Plug in your own simulators, robotics stacks, or game worlds.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Start Training in Minutes</h2>
        <p>Build intelligent agents without fighting your tooling.</p>
        <button className="btn-primary large">Launch App</button>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        © {new Date().getFullYear()} RL Explorer — Reinforcement Learning, Reimagined.
      </footer>

    </div>
  );
};

export default LandingPage;
