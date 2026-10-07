import { useEffect, useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  CarFront,
  Check,
  HeartPulse,
  Mail,
  Menu,
  Phone,
  Plane,
  ShieldCheck,
  Ship,
} from "lucide-react";

import familyHome from "../assets/sama-family-home.jpg";
import samaLogo from "../assets/sama-logo-transparent.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sama Insurance Brokers | Insurance with Clarity" },
      {
        name: "description",
        content:
          "Independent insurance advice for life, health, motor, corporate, travel, fire and marine cover from Sama Insurance Brokers.",
      },
      { property: "og:title", content: "Sama Insurance Brokers | Insurance with Clarity" },
      {
        property: "og:description",
        content: "Protecting what matters most, with clarity and confidence.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const quoteUrl = "https://pi.policysearch.in/car";

const coverageGroups = [
  {
    icon: CarFront,
    eyebrow: "On the road",
    title: "Car & Two-wheeler",
    description: "Policy comparisons, renewals and claim guidance for private cars, motorcycles and scooters.",
  },
  {
    icon: HeartPulse,
    eyebrow: "For your people",
    title: "Health & Life",
    description: "Individual, family and long-term protection aligned with health needs and financial goals.",
  },
  {
    icon: Building2,
    eyebrow: "For your business",
    title: "Corporate & Fire",
    description: "Asset, liability, employee and property cover built around the risks your organisation carries.",
  },
  {
    icon: Plane,
    eyebrow: "Wherever you go",
    title: "Travel & Marine",
    description: "Practical protection for journeys, cargo and goods moving across borders and trade routes.",
  },
];

function BrandMark() {
  return (
    <img
      className="brand-logo"
      src={samaLogo}
      alt="Sama Insurance"
      width={299}
      height={176}
    />
  );
}

function Index() {
  const heroRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const [headerFixed, setHeaderFixed] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const hero = heroRef.current;
    const header = headerRef.current;
    if (!hero || !header) return;

    // Reserve the original header space when it reappears above later sections.
    const measureHeader = () => setHeaderHeight(header.getBoundingClientRect().height);
    measureHeader();
    const resizeObserver = new ResizeObserver(measureHeader);
    resizeObserver.observe(header);

    const updateHeader = () => setHeaderFixed(hero.getBoundingClientRect().bottom <= 0);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    window.addEventListener("resize", updateHeader);
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("scroll", updateHeader);
      window.removeEventListener("resize", updateHeader);
    };
  }, []);

  return (
    <main className="site-shell">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <div className="ambient ambient-three" aria-hidden="true" />

      <div className="page-frame">
        <div className="header-space" style={{ height: headerHeight || undefined }}>
        <header ref={headerRef} className={`glass-panel site-header${headerFixed ? " site-header-fixed" : ""}`}>
          <a className="brand" href="#top" aria-label="Sama Insurance Brokers home">
            <BrandMark />
            <span>
              <small>IRDAI-registered direct broker</small>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Primary navigation">
            <a href="#coverage">Coverages</a>
            <a href="#why-sama">Why Sama</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="header-actions">
            <a className="button button-ghost header-call" href="tel:+917600032197">
              <Phone size={15} /> Call us
            </a>
            <a className="button button-light" href={quoteUrl}>
              Get a quote <ArrowUpRight size={16} />
            </a>
            <details className="mobile-menu">
              <summary aria-label="Open navigation"><Menu size={20} /></summary>
              <nav aria-label="Mobile navigation">
                <a href="#coverage">Coverages</a>
                <a href="#why-sama">Why Sama</a>
                <a href="#contact">Contact</a>
              </nav>
            </details>
          </div>
        </header>
        </div>

        <section ref={heroRef} id="top" className="hero-section">
          <div className="hero-copy">
            <p className="signal-pill"><span />15+ years · Protecting what matters</p>
            <h1>Reliable insurance <em>for any purpose.</em></h1>
            <p className="hero-intro">
              Protecting what matters most, with clarity and confidence. Independent advice for individuals, families and businesses.
            </p>
            <div className="hero-actions">
              <a className="button button-light button-large" href={quoteUrl}>
                Get a quote <ArrowUpRight size={18} />
              </a>
              <a className="button button-ghost button-large" href="tel:+917600032197">
                <Phone size={17} /> Talk to a broker
              </a>
            </div>
            <div className="proof-strip" aria-label="Sama at a glance">
              <div><strong className="warm-text">15+</strong><span>Years of experience</span></div>
              <div><strong className="accent-text">8</strong><span>Coverage types</span></div>
              <div><strong>1:1</strong><span>Personal advice</span></div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="glass-panel portrait-frame">
              <img
                src={familyHome}
                alt="An Indian family spending time together at home"
                width={1024}
                height={1280}
              />
              <div className="glass-panel floating-note note-auto">
                <span>Motor</span>
                <strong>Confident on every road</strong>
                <small>Car & two-wheeler guidance</small>
              </div>
              <div className="glass-panel floating-note note-family">
                <span>Health & life</span>
                <strong>Family-first protection</strong>
                <small>Cover for every life stage</small>
              </div>
            </div>
          </div>
        </section>

        <section id="coverage" className="content-section coverage-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Coverage</p>
              <h2>One broker, every layer of protection.</h2>
            </div>
            <p>Clear comparisons. Thoughtful recommendations. Support from selection through claims.</p>
          </div>
          <div className="coverage-grid">
            {coverageGroups.map((item) => {
              const Icon = item.icon;
              return (
                <article className="glass-panel coverage-card" key={item.title}>
                  <div className="coverage-icon"><Icon size={21} strokeWidth={1.7} /></div>
                  <p>{item.eyebrow}</p>
                  <h3>{item.title}</h3>
                  <span>{item.description}</span>
                  <a href={quoteUrl} aria-label={`Get a quote for ${item.title}`}>
                    Explore cover <ArrowUpRight size={16} />
                  </a>
                </article>
              );
            })}
          </div>
        </section>

        <section id="why-sama" className="content-section advisory-section">
          <div className="advisory-copy">
            <p className="eyebrow">Why Sama</p>
            <h2>Advice designed around your risk, not a sales target.</h2>
            <p>
              We take time to understand what you are protecting, explain the trade-offs and stay with you when a claim needs attention.
            </p>
          </div>
          <div className="advisory-list">
            <div><Check size={18} /><span><strong>Independent guidance</strong>Comparisons across insurers, shaped around your needs.</span></div>
            <div><Check size={18} /><span><strong>Risk-led approach</strong>Coverage chosen after understanding the real exposure.</span></div>
            <div><Check size={18} /><span><strong>Claim assistance</strong>Responsive support when the policy matters most.</span></div>
          </div>
          <div className="experience-seal">
            <ShieldCheck size={34} strokeWidth={1.4} />
            <strong>15+</strong>
            <span>years of insurance experience</span>
          </div>
        </section>

        <section id="how-we-help" className="content-section process-section">
          <div className="section-heading">
            <div><p className="eyebrow">How we help</p><h2>A clear path to the right cover.</h2></div>
            <p>Start with a conversation. We help you understand your options and choose protection around your priorities.</p>
          </div>
          <div className="process-grid">
            {[
              ["01", "Understand your needs", "Tell us about your family, business and existing policies. We begin with what you want to protect."],
              ["02", "Compare with clarity", "We consider options across insurers and explain cover, exclusions and costs in plain language."],
              ["03", "Choose with confidence", "Make an informed choice, with guidance on the next steps and a team you can contact afterwards."],
            ].map(([number, title, description]) => (
              <article className="glass-panel process-card" key={number}>
                <span className="process-number">{number}</span><h3>{title}</h3><p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="ongoing-support" className="content-section support-section">
          <div className="section-heading">
            <div><p className="eyebrow">Beyond the policy</p><h2>Here for the moments that follow.</h2></div>
            <p>A policy is the beginning of our relationship. Reach out when your needs change or you need help understanding what comes next.</p>
          </div>
          <div className="glass-panel support-panel">
            <div className="support-item"><ShieldCheck size={25} strokeWidth={1.5} /><div><h3>Policy reviews & renewals</h3><p>Review your existing cover as your circumstances change, and get guidance when it is time to renew.</p></div></div>
            <div className="support-item"><Check size={25} strokeWidth={1.5} /><div><h3>Changes & servicing</h3><p>Help understanding policy details, requesting updates and navigating the paperwork involved.</p></div></div>
            <div className="support-item"><HeartPulse size={25} strokeWidth={1.5} /><div><h3>Claims guidance</h3><p>Support with the process, documents and follow-ups. Claim decisions remain subject to your insurer and policy terms.</p></div></div>
            <a className="button button-ghost" href="tel:+917600032197"><Phone size={16} />Talk to our team <ArrowUpRight size={16} /></a>
          </div>
        </section>

        <section id="questions" className="content-section questions-section">
          <div className="questions-heading"><p className="eyebrow">Common questions</p><h2>A little more clarity.</h2><p>Have something else on your mind? Our team is a phone call away.</p><a className="button button-ghost" href="tel:+917600032197"><Phone size={16} />Ask a broker</a></div>
          <div className="questions-list">
            {[
              ["Why work with an independent broker?", "An independent broker helps you consider options across multiple insurers. We explain the differences and guide you based on your requirements, rather than representing a single insurer."],
              ["Can you review a policy I already have?", "Yes. Share your current policy and any changes in your needs with our team. We can help you understand your cover and consider options for your next renewal."],
              ["What should I have ready for a conversation?", "Your current policy, if you have one, and a brief idea of what you want to protect are a useful start. Our advisor will explain which further details are needed for your chosen type of insurance."],
              ["Can you help when I need to make a claim?", "We can guide you on notifying your insurer, preparing documents and following up. The insurer assesses and settles claims according to the policy's terms and conditions."],
            ].map(([question, answer]) => (
              <details className="glass-panel question" key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>
            ))}
          </div>
        </section>

        <section id="contact" className="glass-panel contact-panel">
          <div>
            <p className="eyebrow">Your next step</p>
            <h2>Ready when you are.</h2>
            <p>Speak to a broker in Ahmedabad for cover that fits your real life.</p>
          </div>
          <div className="contact-actions">
            <a className="button button-light button-large" href="tel:+917600032197"><Phone size={17} />+91 76000 32197</a>
            <a className="button button-ghost button-large" href="mailto:po@samainsurance.com"><Mail size={17} />Email us</a>
          </div>
        </section>

        <footer className="site-footer">
          <div className="footer-brand"><BrandMark /><span><small>Securing your today.<br />Safeguarding your tomorrow.</small></span></div>
          <p>Registered Office: 101, Dev Shrusti, beside Ashoka Chambers, near Nalanda Hotel, Navrangpura, Ahmedabad, Gujarat 380009</p>
          <p>© 2026 Sama Insurance Brokers Private Limited</p>
        </footer>
      </div>

      <a className="mobile-quote" href={quoteUrl}><BriefcaseBusiness size={17} />Get a quote</a>
      <div className="sr-only"><Ship /> Marine insurance</div>
    </main>
  );
}