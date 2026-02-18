import "./curric.css";
import { Link } from "react-router-dom";

export default function CurriculumPage() {
  const topics = [
    {
      title: "How AI Learns",
      description:
        "See how computers learn by trying things, making mistakes, and improving over time.",
    },
    {
      title: "Making Smart Choices",
      description:
        "Understand how agents decide what action to take in different situations.",
    },
    {
      title: "Learning From Rewards",
      description:
        "Teach agents to maximize rewards and avoid bad decisions.",
    },
    {
      title: "AI + Neural Networks",
      description:
        "Combine reinforcement learning with neural networks for complex tasks.",
    },
    {
      title: "Improving Strategies",
      description:
        "Train agents to refine behavior step-by-step using policy updates.",
    },
    {
      title: "Teamwork Between AIs",
      description:
        "Explore multi-agent systems where AIs cooperate or compete.",
    },
  ];

  return (
    <div className="curriculum-page">

      {/* NAVBAR (same as other pages) */}
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
      <section className="curriculum-hero">
        <h1>Reinforcement Learning Curriculum</h1>
        <p>
          Learn how intelligent agents think, adapt, and make decisions through
          experience, rewards, and environment interaction.
        </p>
      </section>

      {/* TOPICS */}
      <section className="topics-grid">
        {topics.map((topic, i) => (
          <div className="topic-card" key={i}>
            <h3>{topic.title}</h3>
            <p>{topic.description}</p>
            <span className="arrow">→</span>
          </div>
        ))}
      </section>

      {/* BUILD SECTION */}
      <section className="curriculum-build">
        <h2>What You’ll Build</h2>
        <p className="build-subtitle">
          You won’t just learn theory — you’ll create real intelligent systems.
        </p>

        <div className="build-grid">
          <div className="build-card">
            <div className="build-icon">🤖</div>
            <h3>Autonomous Agent</h3>
            <p>
              Train an agent to explore and navigate environments while improving
              through reward signals.
            </p>
          </div>

          <div className="build-card featured">
            <div className="build-icon">🧠</div>
            <h3>Deep RL System</h3>
            <p>
              Build neural network agents that solve advanced control tasks.
            </p>
          </div>

          <div className="build-card">
            <div className="build-icon">🏁</div>
            <h3>Multi-Agent System</h3>
            <p>
              Create competitive or cooperative AI environments with multiple agents.
            </p>
          </div>
        </div>
      </section>

      <footer className="about-footer">
        © {new Date().getFullYear()} ReinforceLearn — Reinforcement Learning, Reimagined.
      </footer>

    </div>
  );
}
