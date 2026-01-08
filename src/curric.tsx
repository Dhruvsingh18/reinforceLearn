import "./curric.css";
import { Link } from "react-router-dom";


export default function CurriculumPage() {
  const topics = [
    {
      title: "Robotics & Automation",
      description:
        "Learn how AI powers robots in factories, homes, and research labs.",
      link: "https://example.com/robotics",
    },
    {
      title: "Computer Vision",
      description:
        "Train AI systems to see and interpret the world using images and videos.",
      link: "https://example.com/computer-vision",
    },
    {
      title: "Reinforcement Learning",
      description:
        "Explore agents that learn by interacting with environments in real-time.",
      link: "https://example.com/rl",
    },
    {
      title: "Natural Language Processing",
      description:
        "Understand how AI interprets, generates, and responds to human language.",
      link: "https://example.com/nlp",
    },
    {
      title: "Autonomous Vehicles",
      description:
        "Learn how self-driving cars and drones navigate using AI decision-making.",
      link: "https://example.com/autonomous",
    },
    {
      title: "Healthcare AI",
      description:
        "Discover AI applications in diagnostics, treatment recommendations, and medical imaging.",
      link: "https://example.com/healthcare",
    },
  ];

  return (
    <div className="curriculum-page">

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
      <section className="curriculum-hero">
        <h1>Our AI Curriculum</h1>
        <p>
          Explore real-world applications of AI and choose the topics you want to dive into.
        </p>
      </section>

      {/* TOPICS GRID */}
      <section className="topics-grid">
        {topics.map((topic, i) => (
          <div className="topic-card" key={i}>
            <h3>{topic.title}</h3>
            <p>{topic.description}</p>
            <a href={topic.link} target="_blank" rel="noopener noreferrer" className="arrow-link">
              →
            </a>
          </div>
        ))}
      </section>

    </div>
  );
}
