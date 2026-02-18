import React from "react";
import { Link } from "react-router-dom";

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900">

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
      <section className="grid md:grid-cols-2 items-center px-10 md:px-20 pt-20 pb-28 gap-10">
        <div>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Learn <br />
            Reinforcement <br />
            <span className="text-purple-600">Learning</span>
          </h1>

          <p className="text-slate-600 text-lg max-w-lg mb-8">
            Shape the future of AI. Build, visualize, and train intelligent agents
            with a modern learning platform designed for students and developers.
          </p>

          <div className="flex gap-4">
            <button className="bg-purple-600 text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-purple-700 transition">
              Get Started
            </button>

            <button className="border border-slate-300 px-6 py-3 rounded-xl font-semibold hover:bg-slate-100 transition">
              View Demo
            </button>
          </div>
        </div>

        {/* CARD */}
        <div className="bg-white rounded-2xl shadow-xl p-6 border border-slate-200">
          <h3 className="font-semibold mb-2">Live Agent Monitor</h3>
          <p className="text-sm text-slate-500 mb-4">Reward · Policy · State</p>

          <div className="h-40 rounded-lg bg-slate-100 border border-slate-200"></div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-10 md:px-20 pb-24">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why ReinforceLearn?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Visual Training",
              desc: "Watch agents learn in real time with reward and trajectory overlays.",
            },
            {
              title: "Research Tools",
              desc: "Built-in PPO, SAC, and DQN pipelines with experiment tracking.",
            },
            {
              title: "Custom Environments",
              desc: "Plug in your own robotics simulators or game environments.",
            },
          ].map((f, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-md border border-slate-200 hover:-translate-y-1 transition"
            >
              <h3 className="font-semibold text-lg mb-2 text-purple-600">
                {f.title}
              </h3>
              <p className="text-slate-600 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center pb-24 border-t border-slate-200 pt-20">
        <h2 className="text-4xl font-bold mb-4">
          Start Training in Minutes
        </h2>
        <p className="text-slate-600 mb-6">
          Build intelligent agents without fighting your tooling.
        </p>

        <button className="bg-purple-600 text-white px-8 py-4 rounded-xl font-semibold shadow hover:bg-purple-700 transition">
          Launch App
        </button>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-sm text-slate-500 pb-8 border-t border-slate-200 pt-6">
        © {new Date().getFullYear()} ReinforceLearn — Reinforcement Learning, Reimagined.
      </footer>
    </div>
    
  );
};

export default LandingPage;