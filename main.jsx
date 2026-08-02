import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const profile = {
  name: "SWASTIK SENGUPTA",
  role: "UNDERGRADUATE RESEARCHER // AI / ML // SOFTWARE",
  location: "PLEASANTON, CALIFORNIA",
  email: "swastik.sngpta@gmail.com",
  github: "https://github.com/SwastikSengupta",
  linkedin: "https://www.linkedin.com/in/swastiksngpta",
  orcid: "https://orcid.org/0009-0002-9414-7443",
};

const featured = [
  {
    name: "MonteCarloBenchmarkResol",
    type: "RESEARCH / PYTHON",
    description: "An active computational research project exploring Monte Carlo benchmarking and reproducibility.",
    url: "https://github.com/SwastikSengupta/MonteCarloBenchmarkResol",
  },
  {
    name: "TMLR",
    type: "RESEARCH / REPRODUCTION",
    description: "A reproduction-focused research project investigating machine-learning evaluation and benchmark behavior.",
    url: "https://github.com/SwastikSengupta/TMLR",
  },
  {
    name: "AISec2026Submission",
    type: "AI SECURITY / PYTHON",
    description: "Research code connected to AI security and evaluation.",
    url: "https://github.com/SwastikSengupta/AISec2026Submission",
  },
  {
    name: "Genesis-BioMed-CS",
    type: "AI / BIOMEDICAL / PYTHON",
    description: "A computational project at the intersection of biomedical questions and computer science.",
    url: "https://github.com/SwastikSengupta/Genesis-BioMed-CS",
  },
  {
    name: "NATO-financing-data",
    type: "DATA / RESEARCH / TEX",
    description: "A data-oriented research project focused on NATO financing.",
    url: "https://github.com/SwastikSengupta/NATO-financing-data",
  },
  {
    name: "GradeVue",
    type: "AI PRODUCT / PRIVATE",
    description: "An AI-powered web platform for students to track coursework and grades using LLMs, Python, APIs, and a client-server architecture.",
    url: "https://github.com/SwastikSengupta/gradevueapp",
  },
];

const archive = [
  ["AstroProjectWork", "HTML"],
  ["swastiksengupta.github.io", "HTML"],
  ["SwastikSengupta", "PROFILE"],
  ["openworker", "PYTHON / FORK"],
];

function App() {
  const [channel, setChannel] = useState("home");
  const [noise, setNoise] = useState(0);
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const a = setInterval(() => setNow(new Date()), 1000);
    const b = setInterval(() => setNoise((n) => (n + 1) % 100), 80);
    return () => { clearInterval(a); clearInterval(b); };
  }, []);

  const timecode = useMemo(() => {
    const hh = String(now.getHours()).padStart(2, "0");
    const mm = String(now.getMinutes()).padStart(2, "0");
    const ss = String(now.getSeconds()).padStart(2, "0");
    return `${hh}:${mm}:${ss}`;
  }, [now]);

  const go = (id) => {
    setChannel(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="crt">
      <div className="scanlines" />
      <div className="noise" style={{ transform: `translateX(${noise / 5}px)` }} />
      <header className="hud">
        <div><span className="rec">● REC</span> <span>SP</span></div>
        <div>CH-{channel === "home" ? "00" : channel === "projects" ? "01" : channel === "research" ? "02" : channel === "archive" ? "03" : "04"}</div>
        <div>{timecode}</div>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="tiny">PLAYBACK // PERSONAL ARCHIVE // 2026</div>
          <h1>{profile.name}</h1>
          <div className="role">{profile.role}</div>
          <p className="lead">
            I build and investigate systems at the intersection of <b>AI/ML</b>,
            <b> cybersecurity</b>, and <b>software engineering</b>.
            Undergraduate researcher. Coding for fun.
          </p>
          <div className="status">
            <span>TRACKING</span>
            <span className="bars">██████████░░░░</span>
            <span>OK</span>
          </div>
          <nav className="channels" aria-label="Main navigation">
            <button onClick={() => go("projects")}>[01] PROJECTS</button>
            <button onClick={() => go("research")}>[02] RESEARCH</button>
            <button onClick={() => go("archive")}>[03] GITHUB</button>
            <button onClick={() => go("contact")}>[04] CONTACT</button>
          </nav>
        </section>

        <section id="projects" className="section">
          <div className="section-label">CHANNEL 01 // PROJECTS</div>
          <h2>SELECTED WORK</h2>
          <div className="grid">
            {featured.map((p, i) => (
              <a className="card" href={p.url} target="_blank" rel="noreferrer" key={p.name}>
                <div className="card-top"><span>TAPE {String(i + 1).padStart(2, "0")}</span><span>▶</span></div>
                <h3>{p.name}</h3>
                <div className="tag">{p.type}</div>
                <p>{p.description}</p>
                <div className="open">OPEN ARCHIVE →</div>
              </a>
            ))}
          </div>
        </section>

        <section id="research" className="section split">
          <div>
            <div className="section-label">CHANNEL 02 // RESEARCH</div>
            <h2>WHY I BUILD</h2>
            <p>
              My work is centered on the gap between what machine-learning
              systems appear to achieve and what they actually generalize to.
              I am particularly interested in reproducibility, distribution
              shift, benchmark validity, intrusion detection, and applied AI.
            </p>
            <p>
              I like research that can be tested, reproduced, broken, and
              improved. The goal is not simply a better number — it is a
              better understanding of why the number exists.
            </p>
          </div>
          <aside className="terminal">
            <div className="terminal-head">RESEARCH.LOG</div>
            <div>&gt; loading interests...</div>
            <div>&gt; machine_learning ........ OK</div>
            <div>&gt; cybersecurity ........... OK</div>
            <div>&gt; reproducibility .......... OK</div>
            <div>&gt; distribution_shift ........ OK</div>
            <div>&gt; applied_ai ............... OK</div>
            <div>&gt; curiosity ................ ALWAYS</div>
            <div className="cursor">█</div>
          </aside>
        </section>

        <section id="archive" className="section">
          <div className="section-label">CHANNEL 03 // GITHUB ARCHIVE</div>
          <h2>THE REPOSITORY SHELF</h2>
          <p className="muted">
            A living archive of experiments, research, prototypes, and things
            that started as "I wonder if I can build this."
          </p>
          <div className="archive-list">
            {archive.map(([name, type]) => (
              <a href={`https://github.com/SwastikSengupta/${name}`} target="_blank" rel="noreferrer" key={name}>
                <span>{name}</span><span>{type}</span><span>VIEW →</span>
              </a>
            ))}
          </div>
          <a className="big-link" href={profile.github} target="_blank" rel="noreferrer">
            VIEW FULL GITHUB PROFILE ↗
          </a>
        </section>

        <section id="contact" className="section contact">
          <div className="section-label">CHANNEL 04 // CONTACT</div>
          <h2>LET'S TALK.</h2>
          <p>
            If you're working on something interesting in AI, security,
            research, or software, I'm always open to a conversation.
          </p>
          <div className="contact-links">
            <a href={`mailto:${profile.email}`}>EMAIL ↗</a>
            <a href={profile.github} target="_blank" rel="noreferrer">GITHUB ↗</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LINKEDIN ↗</a>
            <a href={profile.orcid} target="_blank" rel="noreferrer">ORCID ↗</a>
          </div>
          <div className="email">{profile.email}</div>
        </section>
      </main>

      <footer>
        <span>SWASTIK SENGUPTA // PERSONAL BROADCAST</span>
        <span>NO SIGNAL IS FINAL.</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);