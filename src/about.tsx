import "./about.css";
import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <div className="about-page">

     
           {/* NAVBAR */}
           <nav className="flex justify-between items-center px-10 py-6 border-b border-slate-200">
             <div className="text-2xl font-extrabold tracking-tight">
               Reinforce<span className="text-purple-600">Learn</span>
             </div>
     
             <div className="flex gap-8 items-center text-sm font-medium">
               <Link to="/" className="hover:text-purple-600 transition">Home</Link>
               <Link to="/about" className="hover:text-purple-600 transition">About</Link>
               <Link to="/curriculum" className="hover:text-purple-600 transition">Curriculum</Link>
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
      <section className="about-hero">
        <div className="hero-text">
          <h1>
            About <span>ReinforceLearn</span>
          </h1>
          <p>
            We design modern tools that make reinforcement learning intuitive,
            visual, and accessible for students, engineers, and researchers.
          </p>
        </div>

        <div className="hero-image-placeholder">
          Platform Preview
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
          <p>Research Funding</p>
        </div>
        <div className="stat">
          <h3>14</h3>
          <p>Active Projects</p>
        </div>
      </section>
      
      {/* CONTENT */}
      <section className="about-content">

        <div className="content-card">
          <h2>Our Mission</h2>
          <p>
            Our goal is to simplify reinforcement learning and make it accessible
            to the next generation of innovators.
          </p>
          <ul>
            <li>Visual simulations of intelligent agents</li>
            <li>Hands-on learning for students</li>
            <li>Real-world robotics applications</li>
          </ul>
        </div>

        <div className="content-card outlined">
          <h2>What We Focus On</h2>
          <ul>
            <li><strong>Robotics</strong> — real + simulated systems</li>
            <li><strong>Visualization</strong> — understand AI behavior</li>
            <li><strong>Accessibility</strong> — beginner-friendly tools</li>
            <li><strong>Research</strong> — modern RL pipelines</li>
          </ul>
        </div>

      </section>

      {/* WORK */}
      <section className="about-work">
        <h2>Our Work</h2>
        <p className="work-subtitle">
          Projects that combine education, AI, and real-world impact.
        </p>

        <div className="work-grid">

          <div className="work-card">
            <div className="work-icon"></div>
            <h3>RL Explorer</h3>
            <p>
              A live RL platform where users can train, visualize, and debug agents.
            </p>
            <ul>
              <li>Real-time visualization</li>
              <li>Custom environments</li>
              <li>Simple UI</li>
            </ul>
            <a href="#" className="work-btn">View Project</a>
          </div>

          <div className="work-card featured">
            <div className="work-icon"></div>
            <h3>Gear Forward</h3>
            <p>
              Expanding robotics and AI education access to underserved students.
            </p>
            <ul>
              <li>STEM education</li>
              <li>Community outreach</li>
              <li>Global impact</li>
            </ul>
            <a href="#" className="work-btn outline">Learn More</a>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="about-footer">
        © {new Date().getFullYear()} ReinforceLearn — Reinforcement Learning, Reimagined.
      </footer>

    </div>
  );
}