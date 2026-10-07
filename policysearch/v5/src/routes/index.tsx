import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  HeartPulse,
  Users,
  ShieldCheck,
  CarFront,
  ClipboardCheck,
  Flame,
  Store,
  Plane,
  Ship,
  SearchCheck,
  Headset,
  CalendarClock,
  FileText,
  Phone,
  Mail,
  Handshake,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sama Insurance — A whole life at the table" },
      {
        name: "description",
        content:
          "Explore independent insurance advice for your family, journeys and business with Sama Insurance Brokers, Ahmedabad.",
      },
    ],
  }),
  component: Home,
});
const stops = [
  { id: "beginning", name: "Overview", x: 800, y: 500 },
  { id: "family", name: "Health & life", x: 600, y: 270 },
  { id: "motor", name: "Motor insurance", x: 1030, y: 280 },
  { id: "business", name: "Business insurance", x: 1320, y: 485 },
  { id: "travel", name: "Travel & marine", x: 530, y: 780 },
  { id: "about", name: "About Sama", x: 990, y: 655 },
  { id: "stories", name: "Client scenarios", x: 490, y: 655 },
  { id: "support", name: "Policy support", x: 990, y: 655 },
  { id: "contact", name: "Contact", x: 800, y: 500 },
];
const clamp = (x: number) => Math.max(0, Math.min(1, x));
const smooth = (x: number) => {
  const t = clamp(x);
  return t * t * (3 - 2 * t);
};
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const quote = "https://pi.policysearch.in/car";
const email = "mailto:po@samainsurance.com";
function PaperLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a className="paper-link" href={href}>
      {children}
    </a>
  );
}
function Detail({
  icon: Icon,
  label,
  children,
}: {
  icon: LucideIcon;
  label: string;
  children?: ReactNode;
}) {
  return (
    <div className="detail">
      <Icon aria-hidden="true" size={18} strokeWidth={1.7} />
      <span>
        <strong>{label}</strong>
        {children && <small>{children}</small>}
      </span>
    </div>
  );
}
function Home() {
  const anchors = useRef<(HTMLElement | null)[]>([]);
  const topsRef = useRef<number[]>([]);
  const [position, setPosition] = useState(0);
  const [size, setSize] = useState({ w: 1440, h: 900 });
  const [reduced, setReduced] = useState(false);
  const [menu, setMenu] = useState(false);
  const supportRef = useRef<HTMLElement | null>(null);
  const [supportHeight, setSupportHeight] = useState(390);
  useEffect(() => {
    const element = supportRef.current;
    if (!element) return;
    const observer = new ResizeObserver(() =>
      setSupportHeight(element.offsetHeight),
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const changed = () => setReduced(mq.matches);
    mq.addEventListener("change", changed);
    return () => mq.removeEventListener("change", changed);
  }, []);
  useEffect(() => {
    let raf = 0;
    const getTops = () => {
      topsRef.current = reduced
        ? stops.map((stop) => {
            const el = document.getElementById(stop.id);
            return el ? el.getBoundingClientRect().top + window.scrollY : 0;
          })
        : anchors.current.map((el) =>
            el ? el.getBoundingClientRect().top + window.scrollY : 0,
          );
    };
    const measure = () => {
      raf = 0;
      const tops = topsRef.current;
      let p = 0;
      for (let i = 0; i < tops.length - 1; i++)
        if (window.scrollY >= tops[i]!)
          p =
            i + clamp((window.scrollY - tops[i]!) / (tops[i + 1]! - tops[i]!));
      if (window.scrollY >= tops[8]!) p = 8;
      setPosition(reduced ? Math.floor(p) : p);
    };
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(measure);
    };
    const resize = () => {
      setSize((old) =>
        old.w === window.innerWidth && old.h === window.innerHeight
          ? old
          : { w: window.innerWidth, h: window.innerHeight },
      );
      getTops();
      schedule();
    };
    resize();
    measure();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", resize);
    };
  }, [reduced]);
  const mobile = size.w < 760;
  const i = Math.min(7, Math.floor(position));
  // Pull back, cross the whole table, then push in.
  const q = clamp(position - i);
  const out = smooth(q / 0.3);
  const cross = smooth((q - 0.29) / 0.42);
  const into = smooth((q - 0.7) / 0.3);
  const active = q < 0.5 ? i : i + 1;
  const wide = mobile
    ? Math.min(size.w / 1600, (size.h - 330) / 1000)
    : Math.max(size.w / 1600, size.h / 1000);
  const heights = mobile
    ? [0, 510, 430, 400, 470, 450, 540, supportHeight, 0]
    : [0, 280, 280, 250, 340, 320, 345, supportHeight, 0];
  const scaleAt = (n: number) => {
    if (n === 0 || n === 8) return wide;
    return Math.min(
      (size.w - (mobile ? 30 : 70)) / (mobile ? 380 : 510),
      (size.h - (mobile ? 145 : 105)) /
        ((heights[n] || 390) + (mobile ? 50 : 20)),
    );
  };
  const scale = lerp(lerp(scaleAt(i), wide, out), scaleAt(i + 1), into);
  const mobileX = [800, 580, 1010, 1300, 510, 930, 550, 930, 800];
  const mobileY = [500, 385, 355, 560, 855, 745, 765, 745, 500];
  const pointX = (n: number) => (mobile ? mobileX[n]! : stops[n]!.x);
  const pointY = (n: number) =>
    n === 7 ? 495 + supportHeight / 2 : mobile ? mobileY[n]! : stops[n]!.y;
  const cx = lerp(pointX(i), pointX(i + 1), cross);
  const cy = lerp(pointY(i), pointY(i + 1), cross);
  const screenY = lerp(
    i === 0 || i === 8 ? (mobile ? size.h * 0.72 : size.h / 2) : size.h * 0.56,
    i + 1 === 8 ? (mobile ? size.h * 0.72 : size.h / 2) : size.h * 0.56,
    cross,
  );
  const desiredX = size.w / 2 - cx * scale;
  const desiredY = screenY - cy * scale;
  const coverX =
    mobile && (i === 0 || i === 7)
      ? desiredX
      : Math.min(0, Math.max(size.w - 1600 * scale, desiredX));
  const coverY = mobile
    ? desiredY
    : Math.min(0, Math.max(size.h - 1000 * scale, desiredY));
  const worldStyle = {
    transform: `translate3d(${coverX}px,${coverY}px,0) scale(${scale})`,
  } as CSSProperties;
  // Objects fold back into their resting shapes as the camera leaves. All stay on the same table.
  const reveal = (n: number) => {
    if (position < n - 1) return 0;
    if (position < n) return smooth((position - (n - 0.3)) / 0.3);
    if (position < n + 1) return 1 - smooth((position - n) / 0.28);
    return 0;
  };
  const fold =
    smooth((position - 4.72) / 0.28) * (1 - smooth((position - 7.72) / 0.28));
  const family = reveal(1),
    motor = reveal(2),
    business = reveal(3),
    travel = reveal(4),
    stories = reveal(6),
    support = reveal(7);
  const variables = {
    "--family-open": family,
    "--family-x": `${(1 - family) * -190}px`,
    "--family-y": `${(1 - family) * 50}px`,
    "--family-scale": 0.24 + 0.76 * family,
    "--left-fold": `${-178 * (1 - family)}deg`,
    "--right-fold": `${178 * (1 - family)}deg`,
    "--motor-open": motor,
    "--motor-text": smooth((motor - 0.76) / 0.24),
    "--wallet-fold": `${-165 * motor}deg`,
    "--motor-x": `${(1 - motor) * 355}px`,
    "--motor-y": `${(1 - motor) * 55}px`,
    "--motor-scale": 0.18 + 0.82 * motor,
    "--business-open": business,
    "--business-x": `${(1 - business) * 195}px`,
    "--business-y": `${(1 - business) * 315}px`,
    "--business-scale": 0.2 + 0.8 * business,
    "--travel-open": travel,
    "--travel-fold": `${-175 * (1 - travel)}deg`,
    "--travel-x": `${(1 - travel) * -115}px`,
    "--travel-y": `${(1 - travel) * 55}px`,
    "--travel-scale": 0.2 + 0.8 * travel,
    "--folder-open": fold,
    "--about-ink": fold * reveal(5),
    "--cover-fold": `${-170 * fold}deg`,
    "--stories-open": stories,
    "--support-open": support,
  } as CSSProperties;
  const navigate = () => setMenu(false);
  const toggleMotion = () => {
    const destination = stops[active]!.id;
    setReduced(!reduced);
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        document
          .getElementById(destination)
          ?.scrollIntoView({ behavior: "instant", block: "start" });
      }),
    );
  };
  return (
    <main className={reduced ? "static-mode" : ""}>
      <a className="skip-link" href="#family">
        Skip to insurance cover
      </a>
      <header className="site-header">
        <a href="#beginning" aria-label="Sama Insurance home">
          <img
            src="/sama-logo.png"
            alt="Sama Insurance"
            width="299"
            height="176"
          />
        </a>
        <nav aria-label="Main navigation">
          <a href="#family">Your cover</a>
          <a href="#about">Meet Sama</a>
          <a href="#stories">Client scenarios</a>
          <a href="#support">Ongoing support</a>
        </nav>
        <a className="header-call" href="tel:+917600032197">
          Talk to Sama
        </a>
        <button
          className="menu-button"
          aria-expanded={menu}
          aria-controls="mobile-menu"
          onClick={() => setMenu(!menu)}
        >
          {menu ? "Close" : "Menu"}
        </button>
      </header>
      {menu && (
        <nav
          className="mobile-menu"
          id="mobile-menu"
          aria-label="Mobile navigation"
        >
          {[
            ["family", "Your cover"],
            ["about", "Meet Sama"],
            ["stories", "Client scenarios"],
            ["support", "Ongoing support"],
            ["contact", "Contact"],
          ].map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={() => navigate()}>
              {label}
            </a>
          ))}
        </nav>
      )}
      <div className="journey">
        <div className="camera-viewport" style={variables}>
          <div className="table-world" style={worldStyle}>
            <img
              className="table-image"
              src="/table/table-spacious.webp"
              width="1600"
              height="1000"
              alt="An Indian family's dining table with a family photograph, school notebook, scooter keys, tiffin, chai, shop ledger and passport."
              fetchPriority="high"
            />
            <article
              className="family-document document"
              aria-label="Health and life insurance"
              id={reduced ? "family" : undefined}
              inert={!reduced && family < 0.96}
            >
              <div className="family-spine">
                <span>SAMA / PERSONAL COVER</span>
              </div>
              <div className="paper-flap flap-left">
                <div className="flap-back" aria-hidden="true" />
                <div className="flap-inside">
                  <p className="document-kicker">PERSONAL COVER</p>
                  <h2>Health insurance</h2>
                  <div className="detail-list">
                    <Detail icon={HeartPulse} label="Individual or family" />
                    <Detail
                      icon={ShieldCheck}
                      label="Waiting periods & exclusions"
                    />
                  </div>
                  <PaperLink href={`${email}?subject=Health%20insurance`}>
                    Discuss health cover
                  </PaperLink>
                </div>
              </div>
              <div className="paper-flap flap-right">
                <div className="flap-back" aria-hidden="true" />
                <div className="flap-inside">
                  <h2>Life insurance</h2>
                  <div className="detail-list">
                    <Detail icon={Users} label="People who rely on you" />
                    <Detail icon={FileText} label="Cover and policy terms" />
                  </div>
                  <PaperLink href={`${email}?subject=Life%20insurance`}>
                    Discuss life cover
                  </PaperLink>
                </div>
              </div>
            </article>
            <article
              className="motor-document document"
              aria-label="Motor insurance"
              id={reduced ? "motor" : undefined}
              inert={!reduced && motor < 0.96}
            >
              <div className="wallet-interior">
                <p className="document-kicker">MOTOR COVER</p>
                <h2>Motor insurance</h2>
                <div className="detail-grid">
                  <Detail icon={CarFront} label="Car or two-wheeler" />
                  <Detail icon={ShieldCheck} label="Own damage & third-party" />
                  <Detail icon={CalendarClock} label="Renewals & add-ons" />
                </div>
                <PaperLink href={quote}>Get a motor quote</PaperLink>
              </div>
              <div className="wallet-flap">
                <img src="/sama-logo.png" alt="" />
                <span>MOTOR DOCUMENTS</span>
              </div>
            </article>
            <article
              className="business-document document"
              aria-label="Business insurance"
              id={reduced ? "business" : undefined}
              inert={!reduced && business < 0.96}
            >
              <div className="ledger-annotations">
                <p className="document-kicker">BUSINESS COVER</p>
                <h2>Business insurance</h2>
                <div className="ledger-details">
                  <Detail icon={Store} label="Premises & stock" />
                  <Detail icon={Flame} label="Fire & equipment" />
                  <Detail icon={Users} label="People & liability" />
                </div>
                <PaperLink href={`${email}?subject=Business%20insurance`}>
                  Discuss your business
                </PaperLink>
              </div>
              <div className="ledger-sheet" aria-hidden="true">
                <div className="sheet-lines" />
              </div>
            </article>
            <article
              className="travel-document document"
              aria-label="Travel and marine insurance"
              id={reduced ? "travel" : undefined}
              inert={!reduced && travel < 0.96}
            >
              <div className="itinerary">
                <p className="document-kicker">TRAVEL & MARINE</p>
                <h2>Travel & marine</h2>
                <div className="itinerary-routes">
                  <div className="travel-entry">
                    <Plane aria-hidden="true" size={25} strokeWidth={1.5} />
                    <h3>Going away?</h3>
                    <p>
                      Tell us where and when. We’ll explain travel cover and
                      exclusions.
                    </p>
                  </div>
                  <div className="travel-entry">
                    <Ship aria-hidden="true" size={25} strokeWidth={1.5} />
                    <h3>Sending goods?</h3>
                    <p>
                      Discuss cargo, routes and transit risks before dispatch.
                    </p>
                  </div>
                </div>
                <PaperLink
                  href={`${email}?subject=Travel%20and%20marine%20insurance`}
                >
                  Discuss travel or marine cover
                </PaperLink>
              </div>
              <div className="itinerary-cover" aria-hidden="true" />
            </article>
            <div className="sama-folder">
              <div className="folder-underlay" />
              <article
                className="about-document document"
                aria-label="About Sama"
                id={reduced ? "about" : undefined}
                inert={!reduced && (active !== 5 || fold < 0.96)}
              >
                <p className="document-kicker">INDEPENDENT BROKING</p>
                <h2>About Sama</h2>
                <p className="about-founder">
                  Founded by Imran Sama in Ahmedabad.
                </p>
                <div className="about-facts">
                  <Detail icon={SearchCheck} label="Compare insurers" />
                  <Detail icon={FileText} label="Explain the terms" />
                  <Detail icon={Handshake} label="Help after purchase" />
                </div>
                <p className="about-experience">
                  15+ years of combined team experience
                </p>
                <PaperLink href="tel:+917600032197">Talk to our team</PaperLink>
              </article>
              <div className="folder-cover">
                <img src="/sama-logo.png" alt="" />

                <span className="folder-stitch" />
              </div>
              <article
                className="stories-document document"
                aria-label="Illustrative client scenarios"
                id={reduced ? "stories" : undefined}
                inert={!reduced && stories < 0.96}
              >
                <p className="document-kicker">ILLUSTRATIVE SCENARIOS</p>
                <h2>Cover in context</h2>
                <div className="case-note">
                  <HeartPulse aria-hidden="true" size={24} strokeWidth={1.5} />
                  <span>FAMILY HEALTH</span>
                  <h3>Health cover before a new arrival</h3>
                  <p>
                    Check maternity conditions and waiting periods before the
                    next renewal.
                  </p>
                </div>
                <div className="case-note">
                  <Store aria-hidden="true" size={24} strokeWidth={1.5} />
                  <span>SHOP COVER</span>
                  <h3>Reviewing a shop’s fire cover</h3>
                  <p>
                    Check stock values, equipment and exclusions alongside the
                    price.
                  </p>
                </div>
                <p className="fine-print">
                  Illustrative scenarios written for this site; not actual
                  customer reviews.
                </p>
              </article>
              <div className="folder-pocket"></div>
              <article
                className="support-document document"
                ref={supportRef}
                aria-label="Ongoing support and questions"
                id={reduced ? "support" : undefined}
                inert={!reduced && support < 0.96}
              >
                <p className="document-kicker">POLICY SUPPORT</p>
                <h2>
                  Renewals, changes
                  <br />& claims
                </h2>
                <div className="support-services">
                  <Detail icon={CalendarClock} label="Renewals" />
                  <Detail icon={ClipboardCheck} label="Changes" />
                  <Detail icon={Headset} label="Claims" />
                </div>

                <div className="questions">
                  <details name="sama-questions">
                    <summary>Can you review my existing policy?</summary>
                    <p>
                      Yes. Share your policy and what has changed. We can
                      explain your existing cover and renewal options.
                    </p>
                  </details>
                  <details name="sama-questions">
                    <summary>What happens when I need to claim?</summary>
                    <p>
                      We help with notification, documents and follow-ups. Your
                      insurer decides and settles the claim under its policy
                      terms.
                    </p>
                  </details>
                  <details name="sama-questions">
                    <summary>What should I bring?</summary>
                    <p>
                      Bring your existing policy, if any, and tell us what you
                      want to protect.
                    </p>
                  </details>
                </div>
                <p className="fine-print">
                  Benefits and claims remain subject to insurer terms.
                </p>
                <PaperLink href="tel:+917600032197">
                  Speak to our team
                </PaperLink>
              </article>
            </div>
          </div>
          <div
            className="hero-copy"
            id={reduced ? "beginning" : undefined}
            style={{
              opacity: 1 - smooth(position / 0.22),
              pointerEvents: position < 0.12 ? "auto" : "none",
            }}
            aria-hidden={!reduced && position > 0.22}
          >
            <p className="eyebrow">SAMA INSURANCE BROKERS</p>
            <h1>
              Insurance,
              <br />
              <em>made clear.</em>
            </h1>
            <p>Independent advice for families and businesses.</p>
            <div className="hero-actions">
              <a href="#family">Explore insurance</a>
              <a href="tel:+917600032197">Call Sama</a>
            </div>
          </div>
          <section
            className="closing-copy"
            aria-label="Contact Sama"
            id={reduced ? "contact" : undefined}
            style={{
              opacity: smooth((position - 7.76) / 0.24),
              pointerEvents: position > 7.95 ? "auto" : "none",
            }}
            aria-hidden={!reduced && position < 7.95}
          >
            <p className="eyebrow">CONTACT SAMA</p>
            <h2>Talk to our team.</h2>
            <div className="closing-links">
              <a href="tel:+917600032197">
                <Phone aria-hidden="true" size={16} />
                +91 76000 32197
              </a>
              <a href={email}>
                <Mail aria-hidden="true" size={16} />
                po@samainsurance.com
              </a>
            </div>
            <p>Nilesh Darji · Client Relations & Operations</p>
            <address>
              101, Dev Shrusti, beside Ashoka Chambers, near Nalanda Hotel,
              <br />
              Navrangpura, Ahmedabad, Gujarat 380009
            </address>
          </section>
          <div className="journey-note">
            <button aria-pressed={reduced} onClick={toggleMotion}>
              {reduced ? "Explore with motion" : "Read without motion"}
            </button>
          </div>
        </div>
        <div className="scroll-stops" aria-hidden="true">
          {stops.map((stop, n) => (
            <section
              key={stop.id}
              id={reduced ? undefined : stop.id}
              ref={(el) => {
                anchors.current[n] = el;
              }}
              className="scroll-stop"
            >
              <span>{stop.name}</span>
            </section>
          ))}
        </div>
      </div>
      <footer>
        <img
          src="/sama-logo.png"
          alt="Sama Insurance"
          width="299"
          height="176"
        />
        <p>© 2026 Sama Insurance Brokers Private Limited</p>
        <a href="#beginning">Return to the table</a>
      </footer>
    </main>
  );
}
