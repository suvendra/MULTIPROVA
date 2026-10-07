import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, ArrowDown, Phone, Mail, Plus, Minus, Menu } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sama — The policy starts with you" },
      {
        name: "description",
        content:
          "Independent insurance advice for the life you actually live. Explore motor, health, life, business, travel and marine cover with Sama Insurance Brokers.",
      },
    ],
  }),
  component: Index,
});
const covers = [
  {
    name: "My everyday journeys",
    sub: "Car & two-wheeler",
    clause: "The road ahead. And the unexpected turns.",
    text: "Your daily commute, weekend detours and the vehicle that makes them possible. We help compare motor cover, understand the details and prepare for renewals.",
    notes: [
      "Own damage & third-party options",
      "Car, motorcycle & scooter cover",
      "Renewal and claim guidance",
    ],
    quote: true,
  },
  {
    name: "The people I love",
    sub: "Health & life",
    clause: "For the people who make it all matter.",
    text: "A growing family. Changing health needs. Plans that stretch beyond today. We help you understand health and life insurance, with your people at the centre of the conversation.",
    notes: [
      "Individual & family health options",
      "Life cover for long-term priorities",
      "A review of the cover you already have",
    ],
  },
  {
    name: "What I’m building",
    sub: "Corporate & fire",
    clause: "Behind every business is someone’s everything.",
    text: "Your team, your premises, your equipment and the work you put into them. We begin with your actual business risks, then help explore property, employee and liability protection.",
    notes: [
      "Property & fire protection",
      "Employee and business cover",
      "Advice shaped around your exposure",
    ],
  },
  {
    name: "Where life takes me",
    sub: "Travel & marine",
    clause: "Some plans cross borders. So should the conversation.",
    text: "A journey abroad or goods on the move. We help you consider travel and marine insurance, understand the exclusions and choose cover for the route ahead.",
    notes: [
      "Cover for your travel plans",
      "Cargo & goods in transit",
      "Guidance on conditions and documents",
    ],
  },
];
function Index() {
  const [selected, setSelected] = useState(0);
  const [menu, setMenu] = useState(false);
  const [openQuestion, setOpenQuestion] = useState<number | null>(0);
  const cover = covers[selected]!;
  return (
    <main id="top">
      <div className="desk-label">
        <span>SAMA INSURANCE BROKERS</span>
        <span>INDEPENDENT ADVICE / AHMEDABAD</span>
        <span className="edition">A MORE HUMAN POLICY — VOL. 02</span>
      </div>
      <div className="document">
        <header className="masthead">
          <a href="#top" className="wordmark" aria-label="Sama home">
            sama<span>insurance brokers</span>
          </a>
          <nav aria-label="Primary navigation">
            <a href="#coverage">
              Your cover <sup>01</sup>
            </a>
            <a href="#approach">
              Our approach <sup>02</sup>
            </a>
            <a href="#contact">
              Let’s talk <ArrowUpRight size={15} />
            </a>
          </nav>
          <button
            className="menu-button"
            aria-label="Toggle navigation"
            aria-expanded={menu}
            onClick={() => setMenu(!menu)}
          >
            <Menu />
          </button>
        </header>
        {menu && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            <a onClick={() => setMenu(false)} href="#coverage">
              Your cover
            </a>
            <a onClick={() => setMenu(false)} href="#approach">
              Our approach
            </a>
            <a onClick={() => setMenu(false)} href="#contact">
              Let’s talk
            </a>
          </nav>
        )}
        <section className="hero">
          <div className="document-meta">
            <span>DOCUMENT NO. S / 001</span>
            <span>SUBJECT: WHAT MATTERS TO YOU</span>
            <span className="draft">Always a conversation. Never a template.</span>
          </div>
          <div className="hero-main">
            <div className="hero-title">
              <p className="clause-label">PREAMBLE / LET’S START AGAIN</p>
              <h1>
                Before we talk
                <br />
                <span className="crossed">policies.</span>
                <br />
                Let’s talk{" "}
                <span className="you">
                  you.
                  <svg viewBox="0 0 260 25" aria-hidden="true">
                    <path d="M5 15 Q125 -5 250 12 M18 23 Q130 7 240 21" />
                  </svg>
                </span>
              </h1>
              <span className="hand hero-edit">
                less paperwork.
                <br />
                more real life.
              </span>
            </div>
            <aside className="hero-aside">
              <div className="policy-slip">
                <div className="slip-top">
                  STANDARD POLICY LANGUAGE <span>×</span>
                </div>
                <p>
                  “The insured shall be
                  <br />
                  subject to the terms
                  <br />
                  and conditions…”
                </p>
                <svg className="scribble" viewBox="0 0 300 50" aria-hidden="true">
                  <path d="M5 13 L285 32 M15 37 L275 9 M28 47 L265 21" />
                </svg>
                <span className="hand">
                  Can we say this
                  <br />
                  like humans?
                </span>
                <div className="slip-bottom">REVISED BY SAMA ↙</div>
              </div>
              <p className="hero-description">
                Insurance is a promise on paper.
                <br />
                We help make it mean something
                <br />
                in your life.
              </p>
              <p className="small-copy">
                Independent guidance for your family, your business and everything in between.
              </p>
              <a className="ink-button" href="#coverage">
                Find your starting point <ArrowDown size={18} />
              </a>
            </aside>
          </div>
          <div className="hero-foot">
            <span>
              <b>15+</b> years of listening first
            </span>
            <span>
              <b>8</b> types of protection
            </span>
            <span>
              <b>1:1</b> advice, always personal
            </span>
            <span className="hand">The fine print can wait. ↓</span>
          </div>
        </section>
        <section id="coverage" className="document-section coverage">
          <div className="margin">
            <span className="section-no">01</span>
            <span className="vertical-label">THE SUBJECT OF THIS POLICY</span>
            <p className="hand">
              Start with life.
              <br />
              Then find cover.
            </p>
          </div>
          <div className="section-body">
            <div className="section-title">
              <p className="clause-label">PART ONE / YOUR WORLD</p>
              <h2>
                What’s on
                <br />
                your mind?
              </h2>
              <p className="section-intro">
                You don’t need to know the policy name.
                <br />
                Just tell us what you want to protect.
              </p>
            </div>
            <div className="coverage-workspace">
              <div className="coverage-index" role="tablist" aria-label="Insurance categories">
                {covers.map((item, i) => (
                  <button
                    role="tab"
                    id={`cover-tab-${i}`}
                    aria-controls={`cover-panel-${i}`}
                    aria-selected={selected === i}
                    className={selected === i ? "selected" : ""}
                    key={item.name}
                    onClick={() => setSelected(i)}
                  >
                    <span className="checkbox">{selected === i && <span>✓</span>}</span>
                    <span>
                      <strong>{item.name}</strong>
                      <small>{item.sub}</small>
                    </span>
                    <span className="index-number">0{i + 1}</span>
                  </button>
                ))}
              </div>
              <div
                className="coverage-note"
                role="tabpanel"
                id={`cover-panel-${selected}`}
                aria-labelledby={`cover-tab-${selected}`}
                key={selected}
              >
                <span className="note-reference">RE: {cover.sub.toUpperCase()}</span>
                <h3>{cover.clause}</h3>
                <p>{cover.text}</p>
                <ul>
                  {cover.notes.map((note) => (
                    <li key={note}>
                      <span>↳</span>
                      {note}
                    </li>
                  ))}
                </ul>
                <a
                  href={
                    cover.quote
                      ? "https://pi.policysearch.in/car"
                      : `mailto:po@samainsurance.com?subject=${encodeURIComponent(`I'd like to discuss ${cover.sub} insurance`)}`
                  }
                >
                  {cover.quote ? "Compare motor cover" : "Discuss this cover"}{" "}
                  <ArrowUpRight size={18} />
                </a>
                <span className="hand note-annotation">We’ll explain the exclusions, too.</span>
              </div>
            </div>
          </div>
        </section>
        <section id="approach" className="document-section approach">
          <div className="margin">
            <span className="section-no">02</span>
            <span className="vertical-label">TERMS OF OUR RELATIONSHIP</span>
          </div>
          <div className="section-body">
            <p className="clause-label">PART TWO / OUR PROMISE</p>
            <h2>
              We read the fine print.
              <br />
              <span className="hand heading-hand">You live the big picture.</span>
            </h2>
            <div className="promise-lines">
              {[
                [
                  "a",
                  "Listen before recommending.",
                  "Your circumstances come first. We ask about your needs, your existing policies and the things you’re concerned about.",
                ],
                [
                  "b",
                  "Make the differences make sense.",
                  "We compare options across insurers and explain cover, costs and exclusions in language you can actually use.",
                ],
                [
                  "c",
                  "Stay after the signature.",
                  "Reviews, renewals, policy changes and claim guidance. A familiar team to call when life moves on.",
                ],
              ].map(([letter, title, text]) => (
                <article key={letter}>
                  <span className="letter">({letter})</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
            <div className="amendment">
              <span>AMENDMENT 001</span>
              <p>A policy is the beginning of our relationship.</p>
              <span className="hand">not the end.</span>
            </div>
          </div>
        </section>
        <section id="questions" className="document-section questions">
          <div className="margin">
            <span className="section-no">03</span>
            <span className="vertical-label">NOTES & CLARIFICATIONS</span>
            <span className="hand">
              Good questions
              <br />
              deserve clear answers.
            </span>
          </div>
          <div className="section-body">
            <p className="clause-label">PART THREE / NOTHING LEFT IN THE MARGINS</p>
            <h2>Let’s clear that up.</h2>
            <div className="question-list">
              {[
                [
                  "Why an independent broker?",
                  "We help you consider options across multiple insurers. Our guidance starts with your requirements and the differences between policies, so you can make an informed choice.",
                ],
                [
                  "Already have a policy?",
                  "That’s a useful place to start. Share your current cover and what has changed in your life. We can help you understand it and consider options for your next renewal.",
                ],
                [
                  "What happens when I need to claim?",
                  "We help with the process, the documents and follow-ups. Your insurer assesses and settles claims according to the policy terms and conditions.",
                ],
                [
                  "What do I bring to the first conversation?",
                  "A brief idea of what you want to protect and your current policy, if you have one. We’ll explain what further information is needed for your chosen cover.",
                ],
              ].map(([q, a], i) => (
                <article key={q} className={openQuestion === i ? "question-open" : ""}>
                  <button
                    aria-expanded={openQuestion === i}
                    aria-controls={`answer-${i}`}
                    onClick={() => setOpenQuestion(openQuestion === i ? null : i)}
                  >
                    <span className="question-number">0{i + 1}</span>
                    {q}
                    {openQuestion === i ? <Minus size={18} /> : <Plus size={18} />}
                  </button>
                  <div id={`answer-${i}`} hidden={openQuestion !== i}>
                    <p>{a}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section id="contact" className="contact">
          <div className="contact-meta">
            <span>FINAL PAGE / FIRST CONVERSATION</span>
            <span>NO OBLIGATION. JUST CLARITY.</span>
          </div>
          <div className="contact-content">
            <div>
              <h2>
                The next line
                <br />
                is <em>yours.</em>
              </h2>
              <p>
                Tell us a little about your life.
                <br />
                We’ll help you make sense of the cover.
              </p>
            </div>
            <div className="signature">
              <span className="hand">Let’s begin here.</span>
              <a href="tel:+917600032197">
                <Phone size={20} />
                +91 76000 32197
                <ArrowUpRight size={24} />
              </a>
              <a href="mailto:po@samainsurance.com">
                <Mail size={20} />
                po@samainsurance.com
                <ArrowUpRight size={24} />
              </a>
              <small>YOUR SAMA TEAM · AHMEDABAD</small>
            </div>
          </div>
          <div className="contact-bottom">
            <span className="wordmark">
              sama<span>insurance brokers</span>
            </span>
            <p>
              Securing your today.
              <br />
              Safeguarding your tomorrow.
            </p>
            <div className="stamp">
              PEOPLE
              <br />
              BEFORE
              <br />
              POLICIES<span>SAMA / SINCE DAY ONE</span>
            </div>
          </div>
        </section>
        <footer>
          <p>
            Registered Office: 101, Dev Shrusti, beside Ashoka Chambers, near Nalanda Hotel,
            <br />
            Navrangpura, Ahmedabad, Gujarat 380009
          </p>
          <p>
            © 2026 Sama Insurance Brokers Private Limited
            <br />
            <span>END OF DOCUMENT. START OF A RELATIONSHIP.</span>
          </p>
        </footer>
      </div>
      <div className="desk-bottom">
        <span>FILE UNDER: A LITTLE MORE PEACE OF MIND</span>
        <a href="#top">BACK TO THE FIRST PAGE ↑</a>
      </div>
    </main>
  );
}
