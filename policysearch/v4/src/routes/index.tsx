import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sama Insurance — For the life you live" },
      {
        name: "description",
        content:
          "Independent insurance advice for Indian families and businesses. Explore cover, meet Sama, and get help with policies, renewals and claims.",
      },
    ],
  }),
  component: Home,
});
const quoteUrl = "https://pi.policysearch.in/car";
const stages = [
  {
    id: "beginning",
    label: "A familiar morning",
    image: "morning",
    x: 87,
    y: 81,
    rotation: -5,
    scale: 1,
  },
  {
    id: "family",
    label: "The people at home",
    image: "morning",
    x: 84,
    y: 80,
    rotation: 2,
    scale: 0.94,
  },
  {
    id: "coverage",
    label: "Out in your world",
    image: "street",
    x: 80,
    y: 73,
    rotation: -4,
    scale: 0.92,
  },
  {
    id: "about",
    label: "A conversation with Sama",
    image: "advisor",
    x: 81,
    y: 66,
    rotation: 0,
    scale: 0.86,
  },
  {
    id: "further",
    label: "Plans beyond the familiar",
    image: "travel",
    x: 84,
    y: 73,
    rotation: 5,
    scale: 0.9,
  },
  {
    id: "stories",
    label: "The people behind the policies",
    image: "evening",
    x: 89,
    y: 85,
    rotation: -2,
    scale: 0.83,
  },
  {
    id: "support",
    label: "Here after the signature",
    image: "evening",
    x: 85,
    y: 84,
    rotation: 1,
    scale: 0.8,
  },
  {
    id: "contact",
    label: "Home, with a little more clarity",
    image: "evening",
    x: 89,
    y: 85,
    rotation: 0,
    scale: 0.8,
  },
];
const clamp = (n: number) => Math.max(0, Math.min(1, n));
const interpolate = (field: "x" | "y" | "rotation" | "scale", p: number) => {
  const i = Math.min(6, Math.floor(p));
  return stages[i]![field] + (stages[i + 1]![field] - stages[i]![field]) * clamp(p - i);
};
function Home() {
  const refs = useRef<(HTMLElement | null)[]>([]);
  const [progress, setProgress] = useState(0);
  const [reduced, setReduced] = useState(false);
  const [menu, setMenu] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(media.matches);
    const update = (e: MediaQueryListEvent) => setReduced(e.matches);
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  useEffect(() => {
    let frame = 0;
    const measure = () => {
      frame = 0;
      const offsets = refs.current
        .filter((n): n is HTMLElement => !!n)
        .map((n) => n.getBoundingClientRect().top + window.scrollY);
      let raw = 0;
      for (let i = 0; i < offsets.length - 1; i++) {
        if (window.scrollY >= offsets[i]!)
          raw = i + clamp((window.scrollY - offsets[i]!) / (offsets[i + 1]! - offsets[i]!));
      }
      if (window.scrollY >= offsets[7]!) raw = 7;
      const i = Math.floor(raw);
      const t = clamp((raw - i - 0.58) / 0.4);
      setProgress(reduced ? Math.round(raw) : Math.min(7, i + t * t * (3 - 2 * t)));
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };
    measure();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [reduced]);
  const active = Math.round(progress);
  const carried = Math.sin((progress % 1) * Math.PI);
  const sceneStyle = {
    "--bag-x": `${interpolate("x", progress) - carried * 15}%`,
    "--bag-y": `${interpolate("y", progress) - carried * 9}%`,
    "--bag-angle": `${interpolate("rotation", progress) + carried * 12}deg`,
    "--bag-scale": interpolate("scale", progress) + carried * 0.04,
    "--bag-light": progress < 4 ? 1 : 1 - Math.min(1, (progress - 4) / 2) * 0.28,
  } as CSSProperties;
  const sectionProps = (i: number) => ({
    id: stages[i]!.id,
    ref: (el: HTMLElement | null) => {
      refs.current[i] = el;
    },
  });
  function CoverLink({ label, href }: { label: string; href: string }) {
    return (
      <a className="text-link" href={href}>
        {label}
        <span className="link-underline" aria-hidden="true" />
      </a>
    );
  }
  return (
    <main id="top" className={reduced ? "reduce-motion" : ""}>
      <a className="skip-link" href="#coverage">
        Skip to coverage
      </a>
      <header className="site-header">
        <a href="#beginning" aria-label="Sama Insurance home">
          <img
            className="original-logo"
            src="/sama-logo.png"
            alt="Sama Insurance"
            width="299"
            height="176"
          />
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#coverage">Coverage</a>
          <a href="#about">About Sama</a>
          <a href="#stories">Customer stories</a>
          <a href="#support">Support</a>
        </nav>
        <div className="header-actions">
          <a href="tel:+917600032197" className="header-contact">
            Let’s talk
          </a>
          <button
            className="menu-control"
            onClick={() => setMenu(!menu)}
            aria-expanded={menu}
            aria-controls="mobile-nav"
          >
            {menu ? "Close" : "Menu"}
          </button>
        </div>
      </header>
      {menu && (
        <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation">
          {[
            ["coverage", "Coverage"],
            ["about", "About Sama"],
            ["stories", "Customer stories"],
            ["support", "Support"],
            ["contact", "Contact"],
          ].map(([id, label]) => (
            <a key={id} onClick={() => setMenu(false)} href={`#${id}`}>
              {label}
            </a>
          ))}
        </nav>
      )}
      <div className="story-world">
        <div className="world-stage" style={sceneStyle} aria-hidden="true">
          <div
            className="world-panorama"
            style={{ transform: `translate3d(${-progress * 12.5}%,0,0)` }}
          >
            {stages.map((stage, i) => (
              <div className={`world-frame frame-${i}`} key={stage.id}>
                <img
                  src={`/scenes/${stage.image}.webp`}
                  alt=""
                  fetchPriority={i === 0 ? "high" : "auto"}
                  loading="eager"
                  draggable="false"
                />
                <div className="scene-atmosphere" />
              </div>
            ))}
          </div>
          <div className="reading-shade" />
          <div className="world-grain" />
          <div className="moving-bag">
            <img src="/scenes/bag.webp" alt="" draggable="false" />
            <span className="bag-shadow" />
          </div>
          <div className="scene-name">
            <span className="scene-dot" />
            {stages[active]!.label}
          </div>
        </div>
        <div className="story-chapters">
          <section {...sectionProps(0)} className="chapter chapter-hero">
            <div className="chapter-content">
              <p className="eyebrow">SAMA INSURANCE BROKERS / AHMEDABAD</p>
              <h1>
                For the life
                <br />
                you <em>live.</em>
              </h1>
              <p className="intro">
                The family at your table. The business you’ve built. The plans still ahead.
              </p>
              <p className="supporting-copy">
                Independent insurance advice that starts with understanding your world.
              </p>
              <div className="hero-actions">
                <a className="primary-action" href={quoteUrl}>
                  Get a motor quote
                </a>
                <CoverLink label="Talk to a broker" href="tel:+917600032197" />
              </div>
              <div className="hero-proof">
                <span>
                  <strong>15+</strong>Years of combined experience
                </span>
                <span>
                  <strong>1:1</strong>Personal guidance
                </span>
              </div>
              <p className="scroll-invitation">
                A day in your world.<span>Continue down the page.</span>
              </p>
            </div>
          </section>
          <section {...sectionProps(1)} className="chapter chapter-family">
            <div className="chapter-content">
              <p className="eyebrow">01 / THE PEOPLE AT HOME</p>
              <h2>
                Care begins
                <br />
                <em>here.</em>
              </h2>
              <p className="intro">
                Health needs change. Families grow. The right cover deserves a conversation about
                both.
              </p>
              <div className="coverage-lines">
                <article>
                  <h3>Health insurance</h3>
                  <p>
                    Explore individual and family options. Understand waiting periods, exclusions
                    and the cover you already have.
                  </p>
                </article>
                <article>
                  <h3>Life insurance</h3>
                  <p>
                    Consider protection around your dependants, commitments and long-term financial
                    priorities.
                  </p>
                </article>
              </div>
              <CoverLink
                label="Discuss health & life cover"
                href="mailto:po@samainsurance.com?subject=Health%20and%20life%20insurance"
              />
            </div>
          </section>
          <section {...sectionProps(2)} className="chapter chapter-cover">
            <div className="chapter-content">
              <p className="eyebrow">02 / OUT IN YOUR WORLD</p>
              <h2>
                For the road.
                <br />
                For <em>your work.</em>
              </h2>
              <p className="intro">
                Different parts of your day carry different risks. We help you see the distinctions.
              </p>
              <div className="coverage-ledger">
                {[
                  {
                    id: "motor",
                    title: "Car & two-wheeler",
                    sub: "Daily journeys, covered thoughtfully.",
                    text: "Compare motor cover for private cars, motorcycles and scooters. Get guidance on own damage, third-party cover, renewals and claims.",
                    href: quoteUrl,
                    link: "Compare motor cover",
                  },
                  {
                    id: "business",
                    title: "Corporate & fire",
                    sub: "Protecting what you’ve worked to build.",
                    text: "Start with your premises, stock, equipment and team. We help explore property, fire, employee and liability cover around your actual business exposures.",
                    href: "mailto:po@samainsurance.com?subject=Business%20insurance",
                    link: "Discuss business cover",
                  },
                ].map((c) => (
                  <article key={c.id}>
                    <button
                      onClick={() => setExpanded(expanded === c.id ? null : c.id)}
                      aria-expanded={expanded === c.id}
                      aria-controls={`detail-${c.id}`}
                    >
                      <span>
                        <strong>{c.title}</strong>
                        <small>{c.sub}</small>
                      </span>
                      <span className="ledger-action">{expanded === c.id ? "Less" : "Read"}</span>
                    </button>
                    <div id={`detail-${c.id}`} hidden={expanded !== c.id}>
                      <p>{c.text}</p>
                      <CoverLink label={c.link} href={c.href} />
                    </div>
                  </article>
                ))}
              </div>
              <p className="section-note">
                New policy, existing cover or an upcoming renewal—we can start where you are.
              </p>
            </div>
          </section>
          <section {...sectionProps(3)} className="chapter chapter-about">
            <div className="chapter-content">
              <p className="eyebrow">03 / MEET SAMA</p>
              <h2>
                A broker.
                <br />A listener.
                <br />
                <em>Your advisor.</em>
              </h2>
              <p className="intro">
                Founded by Imran Sama in Ahmedabad, our independent broking team brings over 15
                years of combined insurance experience.
              </p>
              <p className="body-copy">
                Sama was founded to help people understand their insurance before a claim. We work
                across insurers, explain policies in plain language and support clients beyond the
                purchase.
              </p>
              <div className="about-principles">
                <div>
                  <span>We begin with you.</span>
                  <p>Your needs and existing policies shape the conversation.</p>
                </div>
                <div>
                  <span>We explain the details.</span>
                  <p>Benefits, costs and exclusions deserve equal attention.</p>
                </div>
                <div>
                  <span>We stay available.</span>
                  <p>A familiar team for reviews, servicing and claim guidance.</p>
                </div>
              </div>
              <CoverLink label="Meet us through a conversation" href="tel:+917600032197" />
            </div>
          </section>
          <section {...sectionProps(4)} className="chapter chapter-travel">
            <div className="chapter-content">
              <p className="eyebrow">04 / BEYOND THE FAMILIAR</p>
              <h2>
                Your plans
                <br />
                can go <em>further.</em>
              </h2>
              <p className="intro">
                A family trip abroad. Goods travelling to a new market. Protection begins before
                departure.
              </p>
              <div className="coverage-lines">
                <article>
                  <h3>Travel</h3>
                  <p>
                    Share your destination and dates. We’ll explain suitable options, conditions and
                    exclusions.
                  </p>
                </article>
                <article>
                  <h3>Marine & transit</h3>
                  <p>
                    Cover for cargo and goods on the move, considered around the route and shipment.
                  </p>
                </article>
              </div>
              <CoverLink
                label="Discuss travel & marine cover"
                href="mailto:po@samainsurance.com?subject=Travel%20and%20marine%20insurance"
              />
            </div>
          </section>
          <section {...sectionProps(5)} className="chapter chapter-stories">
            <div className="chapter-content">
              <p className="eyebrow">05 / CUSTOMER STORIES</p>
              <h2>
                Advice that
                <br />
                fits <em>real life.</em>
              </h2>
              <p className="intro">
                Every conversation starts differently. Here is what thoughtful guidance can look
                like in everyday situations.
              </p>
              <div className="client-stories">
                <article>
                  <h3>A family preparing for change.</h3>
                  <p>
                    A couple expecting their first child needs to understand their existing health
                    cover. A useful conversation examines waiting periods, maternity conditions and
                    the choices for their next renewal.
                  </p>
                </article>
                <article>
                  <h3>A business looking beyond the premium.</h3>
                  <p>
                    A shop owner reviewing fire cover needs more than a price comparison. The
                    discussion considers stock, equipment, insured values and exclusions before a
                    policy is chosen.
                  </p>
                </article>
              </div>
              <p className="scenario-label">
                Illustrative client scenarios, written for this site—not accounts of actual
                customers.
              </p>
              <CoverLink
                label="Share your experience with Sama"
                href="mailto:po@samainsurance.com?subject=My%20experience%20with%20Sama"
              />
            </div>
          </section>
          <section {...sectionProps(6)} className="chapter chapter-support">
            <div className="chapter-content">
              <p className="eyebrow">06 / AFTER THE SIGNATURE</p>
              <h2>
                Life changes.
                <br />
                We <em>stay in touch.</em>
              </h2>
              <p className="intro">
                A policy is the start of our relationship. Come back when you need a review, a
                renewal or help with the next step.
              </p>
              <div className="support-notes">
                <span>Policy reviews & renewals</span>
                <span>Changes & servicing</span>
                <span>Claims guidance & follow-ups</span>
              </div>
              <div className="story-questions">
                {[
                  [
                    "Can you review a policy I already have?",
                    "Yes. Share your policy and any changes in your circumstances. We can help you understand your cover and consider options for your next renewal.",
                  ],
                  [
                    "What happens when I need to make a claim?",
                    "We can guide you on notifying your insurer, preparing documents and following up. Your insurer assesses and settles the claim according to the policy terms.",
                  ],
                  [
                    "What should I bring to our first conversation?",
                    "An idea of what you want to protect, and your current policy if you have one. We’ll explain which further details are needed.",
                  ],
                ].map(([q, a]) => (
                  <details key={q}>
                    <summary>
                      {q}
                      <span>Read</span>
                    </summary>
                    <p>{a}</p>
                  </details>
                ))}
              </div>
              <p className="section-note">
                Policy benefits and claim decisions remain subject to your insurer’s terms.
              </p>
            </div>
          </section>
          <section {...sectionProps(7)} className="chapter chapter-contact">
            <div className="chapter-content">
              <p className="eyebrow">07 / A LITTLE MORE CLARITY</p>
              <h2>
                Let’s begin
                <br />
                with <em>hello.</em>
              </h2>
              <p className="intro">
                Tell us what you want to protect. Our Ahmedabad team will help you understand the
                options.
              </p>
              <p className="contact-person">
                Speak with Nilesh Darji · Client Relations & Operations
              </p>
              <div className="contact-details">
                <a href="tel:+917600032197">+91 76000 32197</a>
                <a href="mailto:po@samainsurance.com">po@samainsurance.com</a>
              </div>
              <address>
                101, Dev Shrusti, beside Ashoka Chambers,
                <br />
                near Nalanda Hotel, Navrangpura,
                <br />
                Ahmedabad, Gujarat 380009
              </address>
              <p className="contact-signoff">
                Securing your today.
                <br />
                Safeguarding your tomorrow.
              </p>
            </div>
          </section>
        </div>
      </div>
      <footer>
        <img src="/sama-logo.png" alt="Sama Insurance" width="299" height="176" />
        <p>© 2026 Sama Insurance Brokers Private Limited</p>
        <button onClick={() => setReduced(!reduced)} aria-pressed={!reduced}>
          Animation {reduced ? "off" : "on"}
        </button>
        <a href="#beginning">Back to the beginning</a>
      </footer>
    </main>
  );
}
