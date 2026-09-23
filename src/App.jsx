const navItems = ['Home', 'About', 'Work', 'Scholarship', 'Contact'];

const publications = [
  {
    title: 'The Architecture of Repair',
    meta: 'Harvard Law Review, 2024',
    summary:
      'On institutional trust, procedural dignity, and the design of restorative processes in public life.',
  },
  {
    title: 'Mediation in the Public Square',
    meta: 'Oxford University Press, 2023',
    summary:
      'A study of how democratic institutions can foster durable conflict resolution without abandoning principle.',
  },
  {
    title: 'Listening as a Legal Practice',
    meta: 'Journal of Dispute Resolution, 2022',
    summary:
      'An argument for hearing as a central, underappreciated feature of equitable conflict work.',
  },
];

const workHighlights = [
  'Mediation and restorative processes for complex institutional disputes',
  'Facilitated training for legal and civic leaders navigating conflict',
  'Keynote lectures and workshops on dialogue, trust, and collective repair',
  'Advisory work for organizations building more humane decision systems',
];

const stats = [
  { value: '18+', label: 'years teaching law and conflict resolution' },
  { value: '60+', label: 'facilitated workshops and public dialogues' },
  { value: '12', label: 'books, articles, and major essays' },
];

function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand-block">
          <span className="eyebrow">Elena Hartwell</span>
          <span className="brand-subtitle">Law • Mediation • Scholarship</span>
        </div>

        <nav className="main-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-copy">
            <p className="kicker">Professor • Mediator • Speaker</p>
            <h1>Helping institutions and communities navigate conflict with clarity and dignity.</h1>
            <p className="lede">
              Elena Hartwell is a legal scholar and mediator whose work sits at the intersection of law,
              public trust, and restorative practice. She teaches, advises, and speaks on conflict,
              procedural fairness, and the ethics of listening.
            </p>
            <div className="cta-row">
              <a className="button primary" href="#contact">
                Book a consultation
              </a>
              <a className="button secondary" href="#scholarship">
                Read scholarship
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-label="Portrait of Elena Hartwell">
            <div className="photo-card">
              <div className="photo-texture" />
            </div>
          </div>
        </section>

        <section className="intro-band">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-item">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </section>

        <section id="about" className="content-section split-layout">
          <div className="section-heading">
            <p className="kicker">About</p>
            <h2>Public-facing scholarship grounded in practice.</h2>
          </div>

          <div className="section-copy">
            <p>
              Elena Hartwell is a law professor whose work explores how institutions can respond to conflict
              without eroding trust, legitimacy, or human dignity. Her research and teaching draw from legal
              theory, mediation practice, and democratic governance.
            </p>
            <p>
              She advises organizations, universities, and civic leadership groups on dialogue, disagreement,
              and repair—bringing a practical lens to difficult questions about power, process, and procedural
              fairness.
            </p>
          </div>
        </section>

        <section id="work" className="content-section">
          <div className="section-heading narrow">
            <p className="kicker">Work</p>
            <h2>Conflict expertise informed by law, dialogue, and public trust.</h2>
          </div>

          <div className="work-grid">
            <div className="feature-panel">
              <div className="panel-label">Focus areas</div>
              <ul>
                {workHighlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="quote-panel">
              <p>
                “The most durable forms of justice are not only legally defensible—they are also intelligible,
                human, and repair-oriented.”
              </p>
            </div>
          </div>
        </section>

        <section id="scholarship" className="content-section">
          <div className="section-heading narrow">
            <p className="kicker">Scholarship</p>
            <h2>Recent writing and research.</h2>
          </div>

          <div className="publication-list">
            {publications.map((paper) => (
              <article key={paper.title} className="publication-item">
                <p className="publication-meta">{paper.meta}</p>
                <h3>{paper.title}</h3>
                <p>{paper.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="content-section contact-section">
          <div className="section-heading narrow">
            <p className="kicker">Contact</p>
            <h2>Start a conversation.</h2>
          </div>

          <form className="contact-form">
            <div className="field-row">
              <label>
                Name
                <input type="text" name="name" placeholder="Your name" />
              </label>
              <label>
                Email
                <input type="email" name="email" placeholder="Your email" />
              </label>
            </div>
            <label>
              Inquiry type
              <select name="type">
                <option>Speaking engagement</option>
                <option>Mediation</option>
                <option>Research collaboration</option>
                <option>Teaching or workshop</option>
              </select>
            </label>
            <label>
              Message
              <textarea name="message" placeholder="Tell me a little about your request..." rows="5" />
            </label>
            <button type="submit" className="button primary">
              Send inquiry
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}

export default App;
