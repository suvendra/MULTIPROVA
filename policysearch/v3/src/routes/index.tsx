import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sama — A day worth protecting" },
      {
        name: "description",
        content:
          "From the morning commute to the people waiting at home. Independent insurance advice for your everyday life, from Sama Insurance Brokers.",
      },
    ],
  }),
  component: Home,
});
const moments = [
  {
    time: "07:00",
    period: "A HOUSE WAKES UP",
    title: "The day starts\nwith your people.",
    text: "The kettle’s on. Someone’s looking for a school bag. A whole world lives under this roof.",
    label: "Health & life",
    note: "Protection for the people who make an ordinary morning extraordinary.",
    scene: "morning",
  },
  {
    time: "09:00",
    period: "THE CITY FINDS ITS RHYTHM",
    title: "A familiar road.\nA fresh beginning.",
    text: "School runs, office commutes, the long way home. Your wheels carry more than just you.",
    label: "Car & two-wheeler",
    note: "Motor cover, renewals and claim guidance for the journeys you make every day.",
    scene: "commute",
  },
  {
    time: "13:00",
    period: "SOMETHING GOOD IS GROWING",
    title: "Built with care.\nWorth protecting.",
    text: "The shutters go up. The team gets to work. Behind every business is someone’s big idea.",
    label: "Corporate & fire",
    note: "Property, employee and liability cover shaped around your actual business risks.",
    scene: "work",
  },
  {
    time: "18:00",
    period: "THE BEST PART OF COMING HOME",
    title: "Back to the things\nthat matter most.",
    text: "A walk together. A story from school. Life’s richest moments rarely make the calendar.",
    label: "Health & life",
    note: "Personal advice for changing health needs and the future you’re planning together.",
    scene: "evening",
  },
  {
    time: "21:00",
    period: "TOMORROW IS ALREADY TAKING SHAPE",
    title: "Some dreams\ngo a little further.",
    text: "A ticket booked. A shipment on its way. A new chapter somewhere beyond the familiar.",
    label: "Travel & marine",
    note: "Thoughtful cover for journeys, cargo and goods travelling across borders.",
    scene: "night",
  },
];
function Sun({ className = "" }: { className?: string }) {
  return (
    <span className={`sun-symbol ${className}`} aria-hidden="true">
      <svg viewBox="0 0 64 64">
        <circle cx="32" cy="32" r="14" />
        {Array.from({ length: 12 }, (_, i) => (
          <path key={i} d="M32 4v7" transform={`rotate(${i * 30} 32 32)`} />
        ))}
      </svg>
    </span>
  );
}
function Tree({
  x,
  y,
  scale = 1,
  type = 0,
}: {
  x: number;
  y: number;
  scale?: number;
  type?: number;
}) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <path d="M0 5V-75" stroke="#485448" strokeWidth="4" />
      {type === 0 ? (
        <>
          <ellipse cx="-17" cy="-60" rx="28" ry="42" fill="#657b53" />
          <ellipse cx="17" cy="-79" rx="30" ry="46" fill="#859360" />
          <path d="M0 4v-77m0 24-17-18m17 5 18-20" stroke="#45543c" strokeWidth="2" fill="none" />
        </>
      ) : (
        <>
          <path d="M-35-17 0-110 35-17Z" fill="#7e8d5b" />
          <path d="M-28-5 0-84 28-5Z" fill="#63784f" />
        </>
      )}
    </g>
  );
}
function Person({
  x,
  y,
  shirt = "#c36a40",
  scale = 1,
  walk = false,
}: {
  x: number;
  y: number;
  shirt?: string;
  scale?: number;
  walk?: boolean;
}) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <circle cx="0" cy="-46" r="6" fill="#9a5a3b" />
      <path d="M-7-49q1-9 11-5l3 5" fill="#363c32" />
      <path d="M-6-37h12l5 25h-21Z" fill={shirt} />
      <path
        d={walk ? "M-5-12-12 2m17-14 10 14" : "M-5-12-5 3m10-15 1 15"}
        stroke="#3d4942"
        strokeWidth="5"
      />
      <path d="M-7-33-15-17m22-16 11 11" fill="none" stroke="#9a5a3b" strokeWidth="4" />
    </g>
  );
}
function House({ x, y, small = false }: { x: number; y: number; small?: boolean }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${small ? 0.72 : 1})`}>
      <path d="M-78 0v-111h146V0" fill="#e9be83" />
      <path d="M68 0v-111l38 19V0" fill="#cc925e" />
      <path d="m-94-105 87-71 89 71Z" fill="#a95138" />
      <path d="m-7-176 41 2 87 73H82Z" fill="#8b4835" />
      <path d="M-62-129h21v-31h-21Z" fill="#bf7150" />
      <path
        d="m-80-113 73-57 72 57M-60-113-7-155 46-113M-40-113-7-139 26-113"
        stroke="#d18458"
        strokeWidth="2"
        fill="none"
      />
      <path d="M-15 0v-53a16 16 0 0 1 32 0V0Z" fill="#677665" />
      <circle cx="9" cy="-26" r="2" fill="#f4cc85" />
      <g className="house-window">
        <path d="M-59-78h29v32h-29Zm94 0h22v32H35Z" fill="#f7db95" />
        <path d="M-45-78v32m-14-16h29m75-16v32m-10-16h22" stroke="#9c6e4d" strokeWidth="2" />
      </g>
      <path d="M-15-65q16-10 32 0" stroke="#bb8155" fill="none" />
      <rect x="-73" y="-13" width="23" height="13" fill="#7f8f53" />
      <path d="M-62-13v-14m0 8-7-5m7 1 8-6" stroke="#576b42" strokeWidth="3" />
    </g>
  );
}
function Car({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <path d="M-63-13v-20l25-8 14-24h44l21 24 22 6v22Z" fill="#bc623d" />
      <path d="m-21-59-13 20H-2v-20Zm27 0v20h28L17-59Z" fill="#d6ddd1" />
      <path d="M-61-23h8m105 0h9" stroke="#f9d59b" strokeWidth="5" />
      <path d="M-7-32h9" stroke="#8e472f" strokeWidth="3" />
      <circle cx="-37" cy="-11" r="12" fill="#39483e" />
      <circle cx="37" cy="-11" r="12" fill="#39483e" />
      <circle cx="-37" cy="-11" r="5" fill="#aaa995" />
      <circle cx="37" cy="-11" r="5" fill="#aaa995" />
    </g>
  );
}
function Landscape({ active }: { active: number }) {
  return (
    <svg
      className="landscape"
      viewBox="0 0 1440 440"
      role="img"
      aria-label="An illustrated neighbourhood: a family home, a car on the road, a busy shop, a family in the park and a train setting off. The light changes as you move through the day."
    >
      <defs>
        <pattern id="roof-lines" width="8" height="8" patternUnits="userSpaceOnUse">
          <path d="M0 8 8 0" stroke="#915a43" strokeWidth="1" />
        </pattern>
      </defs>
      <g className="clouds" fill="currentColor">
        <path d="M90 78q0-18 23-16 13-33 39-8 27-7 28 18 14-1 18 12H85Z" />
        <path d="M980 40q4-17 24-13 11-24 31-9 20-6 24 14 17-4 23 15H975Z" />
        <path d="M1220 104q5-12 19-9 9-23 27-11 19-5 21 14 12-3 19 12h-90Z" />
      </g>
      <g className="birds" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M393 68q9-11 18 0 9-11 18 0m510 49q7-8 14 0 7-8 14 0m-517 4q7-8 14 0 7-8 14 0" />
      </g>
      <path d="M0 223Q190 125 350 194T695 198 1050 171 1440 194V440H0Z" className="far-hill" />
      <path d="M0 297Q210 210 380 257T735 248 1090 244 1440 222V440H0Z" className="near-hill" />
      <g className="scene-group" opacity={active === 0 ? 1 : 0.85}>
        <Tree x={57} y={291} scale={1.25} />
        <House x={211} y={297} />
        <Tree x={337} y={289} scale={0.8} type={1} />
        <path d="M200 300q-5 38 55 61" fill="none" stroke="#d8c4a1" strokeWidth="22" />
        <path d="M89 317v-32m30 32v-32m30 32v-32m-68 9h78" stroke="#eee1bc" strokeWidth="5" />
        <Person x={263} y={305} shirt="#f1d08b" />
        <Person x={286} y={311} shirt="#7a8b8d" scale={0.65} />
        <path
          className="chimney-smoke"
          d="M155 130q-14-17 0-32t0-30"
          fill="none"
          stroke="#eee2c8"
          strokeWidth="6"
          strokeLinecap="round"
        />
      </g>
      <path
        d="M-20 379Q265 300 508 336T906 345 1460 301"
        fill="none"
        className="road-edge"
        strokeWidth="73"
      />
      <path
        d="M-20 379Q265 300 508 336T906 345 1460 301"
        fill="none"
        className="road"
        strokeWidth="62"
      />
      <path
        d="M-20 379Q265 300 508 336T906 345 1460 301"
        fill="none"
        stroke="#eee1bd"
        strokeWidth="2"
        strokeDasharray="18 20"
      />
      <g className={active === 1 ? "car-active" : ""}>
        <Car x={449} y={345} />
      </g>
      <path d="M408 303v-52m-15 0h30v-18h-30Z" stroke="#526452" strokeWidth="3" fill="#e6ca94" />
      <path d="M400 241h16" stroke="#7d8c6f" strokeWidth="2" />
      <g>
        <path d="M623 292V168h155v124Z" fill="#d6b581" />
        <path d="M778 292V168l40 15v109Z" fill="#b19068" />
        <path d="M611 168h177v-16H611Z" fill="#637360" />
        <path d="M620 208h160v-24H620Z" fill="#f1ddaa" />
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <path key={i} d={`M${620 + i * 20} 184h10v24h-10Z`} fill="#aa6445" />
        ))}
        <path d="M639 292v-64h49v64m18 0v-64h48v64" fill="#677b70" />
        <path d="M644 233h39v39h-39m28-39v39" fill="#b9c6b3" stroke="#d5c392" strokeWidth="2" />
        <path d="M732 228v64" stroke="#d5c392" strokeWidth="2" />
        <text
          x="700"
          y="174"
          textAnchor="middle"
          fontFamily="Georgia"
          fontSize="12"
          letterSpacing="3"
          fill="#f4e5bd"
        >
          THE EVERYDAY STORE
        </text>
        <rect x="631" y="277" width="37" height="15" fill="#8e9a60" />
        <path d="M636 277v-9m9 9v-13m10 13v-9" stroke="#b0ad6e" strokeWidth="4" />
        <Person x={792} y={302} shirt="#a5573a" />
        <Person x={598} y={303} shirt="#f1d08b" walk />
        <path d="M564 307h18v-30h-18" fill="#7b8b65" />
        <path d="M555 282h33" stroke="#445943" strokeWidth="2" />
      </g>
      <g>
        <Tree x={903} y={288} scale={1.3} />
        <Tree x={1055} y={280} scale={1.05} />
        <path d="M927 280h82m-78 9h74m-68-9v27m60-27v27" stroke="#8c6546" strokeWidth="5" />
        <Person x={951} y={302} shirt="#d59b61" walk />
        <Person x={996} y={306} shirt="#6c8582" walk />
        <Person x={976} y={308} shirt="#b86741" scale={0.68} />
        <path
          d="M1012 315q9-12 21-3l6 9m-22-9-7-10m10 17v7m10-10v8"
          stroke="#805f43"
          strokeWidth="4"
          fill="none"
        />
        <circle cx="1040" cy="313" r="5" fill="#805f43" />
        <path d="M1041 309v-7" stroke="#805f43" strokeWidth="3" />
      </g>
      <g>
        <path d="M1140 233h278m-278 7h278" stroke="#637261" strokeWidth="3" />
        {Array.from({ length: 20 }, (_, i) => (
          <path key={i} d={`M${1140 + i * 14} 230v14`} stroke="#7d8566" strokeWidth="3" />
        ))}
        <g className={active === 4 ? "train-active" : ""}>
          <path d="M1170 229v-45q0-11 13-11h177q20 0 34 22l14 34Z" fill="#7e9281" />
          <path
            d="M1184 183h21v22h-21m32-22h21v22h-21m32-22h21v22h-21m32-22h21v22h-21m32-22h21v22h-21m33-22 17 22h-25v-22Z"
            fill="#f3d9a1"
          />
          <path d="M1170 215h230" stroke="#eacda0" strokeWidth="4" />
          <circle cx="1192" cy="231" r="6" fill="#3e4d41" />
          <circle cx="1242" cy="231" r="6" fill="#3e4d41" />
          <circle cx="1332" cy="231" r="6" fill="#3e4d41" />
          <circle cx="1378" cy="231" r="6" fill="#3e4d41" />
        </g>
        <path
          d="M1210 267h44v25h-44Zm17-20h37v20h-37"
          fill="#c18e58"
          stroke="#a8794c"
          strokeWidth="2"
        />
        <path d="M1234 247v20m-13 0v25" stroke="#e4bb7d" strokeWidth="3" />
        <Person x={1282} y={291} shirt="#b96542" />
        <Tree x={1410} y={286} scale={0.7} type={1} />
      </g>
      <path d="M0 427q145-73 317-29t375 9 310-5 438-16v54H0Z" className="foreground" />
      <g fill="none" stroke="#7c8b5c" strokeWidth="2">
        {[73, 106, 590, 855, 1084, 1337, 1380].map((x, i) => (
          <path key={x} d={`M${x} 413v-13m0 13-6-7m6 7 7-7`} />
        ))}
      </g>
      <g fill="#d4b270">
        <circle cx="85" cy="396" r="3" />
        <circle cx="854" cy="397" r="3" />
        <circle cx="1090" cy="399" r="3" />
      </g>
      <g
        className="scene-caption"
        fontFamily="monospace"
        fontSize="10"
        letterSpacing="2"
        fill="currentColor"
      >
        <text x="210" y="430" textAnchor="middle">
          A PLACE TO BELONG
        </text>
        <text x="449" y="430" textAnchor="middle">
          A ROAD TO TAKE
        </text>
        <text x="710" y="430" textAnchor="middle">
          A DREAM TO BUILD
        </text>
        <text x="978" y="430" textAnchor="middle">
          A REASON TO RETURN
        </text>
        <text x="1280" y="430" textAnchor="middle">
          A WORLD TO SEE
        </text>
      </g>
    </svg>
  );
}
function Home() {
  const [day, setDay] = useState(0);
  const [selectedCover, setSelectedCover] = useState<number | null>(0);
  const active = Math.min(4, Math.round(day / 25));
  const moment = moments[active]!;
  const coverage = [
    {
      hour: "07",
      word: "People",
      name: "Health & life",
      text: "The people at your breakfast table. The future you’re planning together. We help explore individual and family health policies and life cover, with advice shaped around your needs.",
      list: "Individual & family health · Life cover · Policy reviews",
    },
    {
      hour: "09",
      word: "Journeys",
      name: "Car & two-wheeler",
      text: "The vehicle that gets you to work, and back to the people waiting at home. Compare motor insurance options, understand what’s covered and get help with renewals and claims.",
      list: "Cars · Motorcycles & scooters · Renewal guidance",
    },
    {
      hour: "13",
      word: "Ambitions",
      name: "Corporate & fire",
      text: "Your premises, your team, your stock and everything you’ve worked to build. We consider your actual exposures and explain property, employee and liability cover.",
      list: "Property & fire · Employee protection · Business risks",
    },
    {
      hour: "21",
      word: "Possibilities",
      name: "Travel & marine",
      text: "A much-awaited trip. Goods moving to a new market. We help consider travel and cargo cover, with clear explanations of the conditions, documents and exclusions.",
      list: "Travel plans · Cargo · Goods in transit",
    },
  ];
  return (
    <main className={`day-page light-${moment.scene}`}>
      <header className="site-header">
        <a href="#day" className="brand" aria-label="Sama Insurance home">
          <span className="brand-word">
            sama
            <Sun />
          </span>
          <span>INSURANCE BROKERS</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#cover">Life & cover</a>
          <a href="#company">In good company</a>
          <a href="#hello" className="header-contact">
            Say hello
            <span className="contact-dot" />
          </a>
        </nav>
      </header>
      <section id="day" className="day-stage">
        <div
          className="sky-sun"
          style={{
            left: `${18 + day * 0.63}%`,
            top: `${day < 50 ? 30 - day * 0.3 : 15 + (day - 50) * 0.4}%`,
          }}
          aria-hidden="true"
        >
          <Sun />
        </div>
        <div className="sky-stars" aria-hidden="true">
          ✧<span>·</span>✧<span>·</span>✧
        </div>
        <div className="opening">
          <div className="opening-title">
            <p className="overline">SOME THINGS ARE WORTH WAKING UP FOR.</p>
            <h1>
              A day worth
              <br />
              <em>protecting.</em>
            </h1>
          </div>
          <div className="moment-copy" key={active}>
            <span className="moment-hour">
              {moment.time}
              <small>{active < 3 ? "DAYLIGHT" : "AFTER HOURS"}</small>
            </span>
            <h2>
              {moment.title.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </h2>
            <p>{moment.text}</p>
          </div>
        </div>
        <Landscape active={active} />
        <div className="day-instrument">
          <div className="instrument-instructions">
            <span className="overline">A LITTLE LIFE. A WHOLE LOT TO LOVE.</span>
            <span>Move the sun. Spend a day with us.</span>
          </div>
          <div className="sun-track">
            <div className="track-line" />
            <div className="track-progress" style={{ width: `${day}%` }} />
            <div className="track-sun" style={{ left: `${day}%` }}>
              <Sun />
            </div>
            <input
              type="range"
              min="0"
              max="100"
              step="1"
              value={day}
              onChange={(e) => setDay(Number(e.target.value))}
              aria-label="Move the sun through the day"
              aria-valuetext={`${moment.time}: ${moment.label}`}
            />
          </div>
          <div className="time-stops">
            {moments.map((m, i) => (
              <button
                className={active === i ? "is-current" : ""}
                key={m.time}
                onClick={() => setDay(i * 25)}
                aria-pressed={active === i}
              >
                <span>{m.time}</span>
                <small>{["HOME", "ON THE ROAD", "AT WORK", "TOGETHER", "FURTHER AFIELD"][i]}</small>
              </button>
            ))}
          </div>
        </div>
        <div className="moment-cover" aria-live="polite">
          <span className="cover-thread">WOVEN INTO THIS MOMENT</span>
          <strong>{moment.label}</strong>
          <p>{moment.note}</p>
          <a href="#cover" onClick={() => setSelectedCover([0, 1, 2, 0, 3][active]!)}>
            Let’s make sense of it
            <span className="text-stitch" aria-hidden="true" />
          </a>
        </div>
      </section>
      <section className="ordinary" id="company">
        <div className="ordinary-margin">
          <span>01 / THE WAY WE SEE IT</span>
          <Sun />
        </div>
        <div className="ordinary-body">
          <h2>
            It’s never <em>just</em>
            <br />
            an ordinary day.
          </h2>
          <div className="ordinary-copy">
            <p>
              It’s your life, happening.
              <br />
              And that’s a lot to protect.
            </p>
            <p>
              At Sama, we start with the things that make your day yours. Then we help you
              understand the insurance that fits around them. Independent advice. Clear
              explanations. A real person at the other end of the phone.
            </p>
            <div className="experience-line">
              <span>
                15<span className="years-plus">+</span>
              </span>
              <p>
                years of helping people
                <br />
                take tomorrow in their stride.
              </p>
            </div>
          </div>
        </div>
        <div className="daily-promise">
          <span>WE LISTEN FIRST.</span>
          <span>WE EXPLAIN THE DETAILS.</span>
          <span>WE STAY IN TOUCH.</span>
          <span>THAT’S THE SAMA WAY.</span>
        </div>
      </section>
      <section id="cover" className="life-cover">
        <div className="coverage-heading">
          <p className="overline">02 / COVER THAT MEETS YOU WHERE YOU ARE</p>
          <h2>
            For every part
            <br />
            of <em>your day.</em>
          </h2>
          <p>
            Start with what matters.
            <br />
            We’ll help with the policy names.
          </p>
        </div>
        <div className="coverage-timetable">
          {coverage.map((c, i) => (
            <article key={c.word} className={selectedCover === i ? "cover-open" : ""}>
              <button
                className="coverage-toggle"
                onClick={() => setSelectedCover(selectedCover === i ? null : i)}
                aria-expanded={selectedCover === i}
                aria-controls={`cover-detail-${i}`}
              >
                <span className="cover-time">
                  {c.hour}
                  <small>:00</small>
                </span>
                <span className="coverage-word">{c.word}</span>
                <span className="cover-name">{c.name}</span>
                <span className="cover-action">
                  {selectedCover === i ? "A LITTLE LESS" : "A LITTLE MORE"}
                  <span className="custom-toggle" aria-hidden="true">
                    {selectedCover === i ? "⌒" : "◡"}
                  </span>
                </span>
              </button>
              <div hidden={selectedCover !== i} id={`cover-detail-${i}`} className="cover-detail">
                <p>{c.text}</p>
                <div>
                  <small>{c.list}</small>
                  <a
                    className="stitched-link"
                    href={
                      i === 1
                        ? "https://pi.policysearch.in/car"
                        : `mailto:po@samainsurance.com?subject=${encodeURIComponent(`Let's talk about ${c.name}`)}`
                    }
                  >
                    {i === 1 ? "Compare motor cover" : "Talk this through with Sama"}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className="coverage-footnote">
          The right cover starts with understanding your circumstances. Policy benefits and claims
          remain subject to your insurer’s terms.
        </p>
      </section>
      <section className="accompany">
        <div className="accompany-title">
          <p className="overline">03 / FROM FIRST HELLO TO WHAT COMES NEXT</p>
          <h2>
            Life goes on.
            <br />
            <em>So do we.</em>
          </h2>
        </div>
        <div className="accompany-path">
          <svg
            className="path-curve"
            viewBox="0 0 40 340"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d="M20 5C-8 52 45 70 19 113S-3 167 21 219 42 279 20 335" />
          </svg>
          {[
            [
              "First, a conversation",
              "Tell us about your people, your plans and any policies you already have. We listen before recommending.",
            ],
            [
              "Then, a clearer picture",
              "We compare options across insurers and explain costs, cover and exclusions in language you can use.",
            ],
            [
              "And someone to call",
              "For renewals, changes and claim guidance. A policy is the beginning of our relationship.",
            ],
          ].map(([title, text]) => (
            <article key={title}>
              <svg className="path-footsteps" viewBox="0 0 30 40" aria-hidden="true">
                <ellipse cx="8" cy="12" rx="4" ry="8" transform="rotate(-18 8 12)" />
                <ellipse cx="23" cy="29" rx="4" ry="8" transform="rotate(15 23 29)" />
              </svg>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <svg className="walking-pair" viewBox="0 0 180 140" aria-hidden="true">
          <ellipse cx="90" cy="120" rx="75" ry="7" fill="#d8c9a9" />
          <Person x={58} y={117} scale={1.7} shirt="#c4734d" walk />
          <Person x={112} y={117} scale={1.65} shirt="#697c63" walk />
        </svg>
      </section>
      <section className="questions">
        <div>
          <p className="overline">04 / A FEW THINGS YOU MAY BE WONDERING</p>
          <h2>
            Before
            <br />
            <em>tomorrow.</em>
          </h2>
          <p>
            There’s no such thing as
            <br />a small insurance question.
          </p>
        </div>
        <div className="questions-list">
          {[
            [
              "Why speak to an independent broker?",
              "An independent broker helps you consider policies across multiple insurers. We explain the differences and guide you based on your requirements.",
            ],
            [
              "Can you look at a policy I already have?",
              "Yes. Share your current policy and what has changed in your circumstances. We can help you understand your cover and consider options at renewal.",
            ],
            [
              "Will you help if I need to make a claim?",
              "We can guide you on notifying the insurer, documents and follow-ups. Your insurer assesses and settles the claim according to the policy terms.",
            ],
            [
              "What do I need for our first conversation?",
              "A little about what you want to protect, and your current policy if you have one. We’ll explain which other details are needed for your chosen cover.",
            ],
          ].map(([q, a], i) => (
            <details key={q}>
              <summary>
                <span className="question-index">{i + 1}.</span>
                {q}
                <span className="question-read">READ</span>
                <span className="question-close">CLOSE</span>
              </summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </section>
      <section id="hello" className="night-contact">
        <div className="night-speckles" aria-hidden="true">
          <span>✧</span>
          <span>·</span>
          <span>✧</span>
          <span>·</span>
          <span>✧</span>
        </div>
        <div className="contact-intro">
          <p className="overline">A GOOD TOMORROW BEGINS WITH A CONVERSATION.</p>
          <h2>
            Let’s call it
            <br />
            <em>a beginning.</em>
          </h2>
          <div className="contact-lines">
            <span>YOUR SAMA TEAM · AHMEDABAD</span>
            <a href="tel:+917600032197">+91 76000 32197</a>
            <a href="mailto:po@samainsurance.com">po@samainsurance.com</a>
            <p>
              Tell us what’s on your mind.
              <br />
              We’ll take it from there.
            </p>
          </div>
        </div>
        <svg className="night-houses" viewBox="0 0 1440 220" aria-hidden="true">
          <path d="M0 140Q300 55 620 140t820-10v90H0Z" fill="#344a43" />
          <g transform="translate(0 75)">
            <House x={185} y={140} small />
            <House x={1050} y={140} small />
            <House x={1220} y={145} small />
            <Tree x={60} y={148} scale={0.8} />
            <Tree x={950} y={150} scale={0.9} />
            <Tree x={1380} y={156} scale={1.1} />
          </g>
          <path d="M0 205q300-20 560 0t880-5v20H0Z" fill="#263a36" />
        </svg>
      </section>
      <footer>
        <div className="footer-brand">
          <span className="brand-word">sama</span>
          <p>
            Securing your today.
            <br />
            Safeguarding your tomorrow.
          </p>
        </div>
        <p>
          101, Dev Shrusti, beside Ashoka Chambers,
          <br />
          near Nalanda Hotel, Navrangpura,
          <br />
          Ahmedabad, Gujarat 380009
        </p>
        <p>
          © 2026 Sama Insurance Brokers
          <br />
          Private Limited
        </p>
        <a href="#day" className="another-day">
          <Sun />
          <span>
            ANOTHER DAY
            <br />
            WORTH PROTECTING
          </span>
        </a>
      </footer>
    </main>
  );
}
