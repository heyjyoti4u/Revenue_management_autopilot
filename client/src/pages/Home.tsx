/**
 * SignalStay homepage — Signal Navy / Electric Violet Operations Desk.
 * Editorial fintech precision meets boutique-hospitality warmth: asymmetry, signal rails,
 * selective violet emphasis, and operational surfaces over generic SaaS cards.
 */
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BellRing,
  CalendarRange,
  Check,
  Command,
  Hotel,
  Layers3,
  ListTree,
  MessageCircle,
  SlidersHorizontal,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/SiteShell";

const heroImage = "/manus-storage/signalstay-hero_ba6d1dbc.jpg";
const analyticsImage = "/manus-storage/signalstay-analytics_9510ba1f.jpg";
const commsImage = "/manus-storage/signalstay-comms_d7b29c13.jpg";
const closingImage = "/manus-storage/signalstay-closing_8add029d.jpg";
const markImage = "/manus-storage/signalstay-mark_2126229d.png";

const metrics = [
  { value: "25k+", label: "listings watched globally", note: "Illustrative portfolio data" },
  { value: "+28%", label: "average booking lift", note: "Illustrative portfolio data" },
  { value: "+15%", label: "average RevPAR movement", note: "Illustrative portfolio data" },
  { value: "70%", label: "see rank change in 30 days", note: "Illustrative portfolio data" },
];

const loopSteps: { number: string; title: string; description: string; icon: LucideIcon; tags: string[] }[] = [
  {
    number: "01",
    title: "Visibility",
    description: "We watch where every listing sits in its comp set—across the platforms that decide whether guests see you first.",
    icon: Activity,
    tags: ["Rank monitoring", "Algorithm signals", "Performance alerts"],
  },
  {
    number: "02",
    title: "Pricing",
    description: "Rates, minimum stays, promotions, and restrictions respond to demand, booking pace, and the rank you have earned.",
    icon: SlidersHorizontal,
    tags: ["Dynamic pricing", "Gap-night rules", "Rate architecture"],
  },
  {
    number: "03",
    title: "Distribution",
    description: "Titles, photos, channel mix, and parity are tuned to each OTA's playbook so every channel pulls its weight.",
    icon: Layers3,
    tags: ["Listing content", "Channel mix", "Cross-platform sync"],
  },
];

const services: { title: string; description: string; icon: LucideIcon }[] = [
  { title: "Dynamic rate management", description: "Nightly rates calibrated to demand signals, seasonality, and comp-set movement across every OTA.", icon: TrendingUp },
  { title: "Availability & min. stays", description: "MinLOS, gap-night, advance-purchase, and cancellation rules tuned to local demand windows.", icon: CalendarRange },
  { title: "OTA rank & visibility", description: "Active management of ranking factors and the levers that decide where your listing appears.", icon: BarChart3 },
  { title: "Channel mix & parity", description: "Rate differentials and channel weight managed without triggering algorithmic suppression.", icon: Command },
  { title: "Performance reporting", description: "Structured reporting on occupancy, ADR, RevPAR, rank trends, and comp-set position.", icon: ListTree },
  { title: "Anomaly alerts", description: "Booking pace, rank drops, channel issues, and parity breaks flagged with an action attached.", icon: BellRing },
  { title: "New listing onboarding", description: "Every new listing arrives with a consistent revenue and distribution operation from day one.", icon: Hotel },
  { title: "Listing content optimization", description: "Titles, descriptions, photos, amenities, and attributes tuned per platform.", icon: Sparkles },
  { title: "Promotional channel strategy", description: "Genius, Mobile, Last-Minute, Early-Booker, and partner promos calibrated to yield.", icon: ArrowUpRight },
];

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function HeroOrbit() {
  return (
    <div className="hero-orbit" aria-label="The SignalStay revenue loop: visibility, pricing, and distribution">
      <div className="orbit-glow" />
      <div className="orbit-ring orbit-ring--outer" />
      <div className="orbit-ring orbit-ring--inner" />
      <div className="orbit-core"><span>rank</span><strong>→</strong><small>moves first</small></div>
      <div className="orbit-node orbit-node--top"><span className="node-icon"><TrendingUp size={16} /></span><b>Visibility</b><small>ranking</small></div>
      <div className="orbit-node orbit-node--right"><span className="node-icon"><SlidersHorizontal size={16} /></span><b>Pricing</b><small>rate strategy</small></div>
      <div className="orbit-node orbit-node--left"><span className="node-icon"><ListTree size={16} /></span><b>Distribution</b><small>channel mix</small></div>
      <span className="orbit-dot orbit-dot--one" /><span className="orbit-dot orbit-dot--two" /><span className="orbit-dot orbit-dot--three" />
      <p className="orbit-caption">Three levers. One operating rhythm.</p>
    </div>
  );
}

export default function Home() {
  const go = (id: string) => {
    scrollToSection(id);
  };

  return (
    <div id="top" className="signalstay-site">
      <SiteHeader />

      <main>
        <section className="hero-section" style={{ backgroundImage: `linear-gradient(90deg, rgba(8, 13, 34, .96) 0%, rgba(8, 13, 34, .86) 42%, rgba(8, 13, 34, .35) 100%), url(${heroImage})` }}>
          <div className="hero-grid-lines" />
          <div className="content-frame hero-content">
            <div className="hero-copy">
              <p className="eyebrow eyebrow--violet"><span className="eyebrow-pulse" />Hospitality revenue operations</p>
              <h1>Your calendar is late.<br /><em>Your rank is early.</em></h1>
              <p className="hero-intro">SignalStay manages the signals behind your bookings—visibility, pricing, and distribution—as one connected operation.</p>
              <div className="hero-actions">
                <button className="button button--violet" onClick={() => go("contact")}>See the signal behind your next booking <ArrowUpRight size={17} /></button>
                <button className="button button--ghost-light" onClick={() => go("loop")}>Explore the operating model <ArrowRight size={17} /></button>
              </div>
              <div className="hero-footnote"><span className="status-dot" /> Built for short-term rental portfolios & independent hotels</div>
            </div>
            <HeroOrbit />
          </div>
        </section>

        <section className="metrics-section" aria-label="Illustrative portfolio metrics">
          <div className="content-frame metrics-grid">
            {metrics.map((metric) => <div className="metric" key={metric.value + metric.label}><strong>{metric.value}</strong><span>{metric.label}</span><small>{metric.note}</small></div>)}
          </div>
        </section>

        <section className="model-section" id="model">
          <div className="content-frame model-grid">
            <div className="section-kicker"><span className="section-number">01</span><span>The point of view</span></div>
            <div className="model-main">
              <p className="eyebrow">Most revenue teams run on the calendar</p>
              <h2>We run on <em>what moves it.</em></h2>
              <p className="section-lede">When weekends look soft, most systems cut rates. Occupancy rises, ADR falls, and the team calls it a win. SignalStay watches rank—because rank moves before bookings do.</p>
              <div className="comparison-panel">
                <div className="comparison-column comparison-column--muted">
                  <p className="comparison-label">The usual setup</p>
                  {['Set and forget', 'Default to cutting rates', 'One person, five tabs', 'Find out when bookings stop'].map((item) => <div className="comparison-row" key={item}><span className="row-mark row-mark--muted">—</span>{item}</div>)}
                </div>
                <div className="comparison-column comparison-column--active">
                  <p className="comparison-label">The SignalStay method</p>
                  {['Monitored and managed daily', 'Strategy tuned to channel rank', 'One operation, one team', 'Act before the calendar feels it'].map((item) => <div className="comparison-row" key={item}><span className="row-mark"><Check size={13} /></span>{item}</div>)}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="loop-section" id="loop">
          <div className="content-frame">
            <div className="loop-heading">
              <div><p className="eyebrow eyebrow--violet">How it works</p><h2>The revenue loop,<br /><em>kept in motion.</em></h2></div>
              <p className="loop-summary">Three connected layers. Every factor managed daily. No dashboard to learn, no lever left unattended.</p>
            </div>
            <div className="loop-track">
              <div className="track-line" />
              {loopSteps.map((step, index) => {
                const Icon = step.icon;
                return <article className={`loop-card loop-card--${index + 1}`} key={step.number}>
                  <div className="loop-card-top"><span className="step-number">{step.number}</span><span className="loop-icon"><Icon size={20} /></span></div>
                  <h3>{step.title}</h3><p>{step.description}</p>
                  <div className="tag-list">{step.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </article>;
              })}
            </div>
          </div>
        </section>

        <section className="signal-section" id="about">
          <div className="content-frame signal-grid">
            <div className="signal-copy">
              <div className="section-kicker section-kicker--violet"><span className="section-number">02</span><span>Behind the numbers</span></div>
              <p className="eyebrow">Lead time is a revenue lever</p>
              <h2>See the shift<br /><em>before the month does.</em></h2>
              <p className="section-lede">Rank signals move days before booking pace moves. We surface the change, connect it to the right lever, and help your team act while the answer is still small.</p>
              <ul className="check-list">
                <li><span><Check size={14} /></span>Daily visibility monitoring across every listing</li>
                <li><span><Check size={14} /></span>Pricing decisions calibrated to rank data</li>
                <li><span><Check size={14} /></span>Anomaly alerts with an action attached</li>
              </ul>
              <button className="text-link" onClick={() => scrollToSection("contact")}>Check your rank trajectory <ArrowUpRight size={16} /></button>
            </div>
            <div className="analytics-frame">
              <div className="image-meta"><span>Nashville · this weekend</span><span className="live-chip"><span /> live view</span></div>
              <img src={analyticsImage} alt="Abstract analytics workspace with a hospitality performance chart" />
              <div className="analytics-overlay">
                <div className="analytics-top"><span>Search rank</span><strong>#04 <small>↑ 12 positions</small></strong></div>
                <div className="chart-area"><span className="chart-label chart-label--top">rank</span><span className="chart-label chart-label--bottom">booking pace</span><svg viewBox="0 0 500 160" preserveAspectRatio="none" aria-hidden="true"><path className="chart-grid" d="M0 30H500 M0 80H500 M0 130H500" /><path className="chart-line chart-line--violet" d="M0 96 C45 86, 56 115, 92 87 S138 69, 177 82 S220 48, 260 68 S310 38, 350 52 S401 28, 445 43 S470 25, 500 16" /><path className="chart-line chart-line--copper" d="M0 142 C40 138, 68 140, 100 125 S165 132, 202 105 S255 110, 290 89 S352 100, 380 73 S440 67, 500 42" /></svg></div>
                <div className="alert-strip"><BellRing size={14} /><span>Rank drop detected</span><strong>caught 18 days early</strong></div>
              </div>
            </div>
          </div>
        </section>

        <section className="comms-section">
          <div className="content-frame comms-grid">
            <div className="comms-image" style={{ backgroundImage: `linear-gradient(90deg, rgba(8, 13, 34, .85), rgba(8, 13, 34, .18)), url(${commsImage})` }}>
              <div className="image-caption"><span className="caption-dot" /> The operating rhythm</div>
            </div>
            <div className="comms-copy">
              <div className="section-kicker section-kicker--violet"><span className="section-number">03</span><span>Your new revenue teammate</span></div>
              <h2>No new dashboard.<br /><em>Just better answers.</em></h2>
              <p className="section-lede">SignalStay lives in the channels your team already uses. Ask what changed, ask what to push, or ask what to look at today. We answer, then act.</p>
              <div className="chat-window">
                <div className="chat-header"><div className="chat-avatar"><img src={markImage} alt="" /></div><div><strong>SignalStay</strong><span><i /> online</span></div><span className="chat-menu">•••</span></div>
                <div className="chat-message chat-message--bot">Morning, Tim. We saw a <b>ranking drop</b> on 3 listings overnight. We applied 3 fixes and are projecting recovery in ~14 days.</div>
                <div className="chat-message chat-message--user">Nice. Thanks for jumping on it.</div>
                <div className="chat-input">Ask SignalStay anything <MessageCircle size={14} /></div>
              </div>
              <div className="channel-row"><span>Works where you work</span><b>Slack</b><b>WhatsApp</b><b>Email</b></div>
            </div>
          </div>
        </section>

        <section className="services-section" id="services">
          <div className="content-frame">
            <div className="services-heading"><div><p className="eyebrow">What's included</p><h2>Every lever that moves revenue.<br /><em>One team that owns it.</em></h2></div><p className="services-summary">One subscription. No bolt-ons. No surprise fees. Just the daily operation most teams need but rarely have time to run.</p></div>
            <div className="services-grid">{services.map((service, index) => { const Icon = service.icon; return <article className="service-item" key={service.title}><span className="service-index">0{index + 1}</span><span className="service-icon"><Icon size={18} /></span><h3>{service.title}</h3><p>{service.description}</p><ArrowUpRight className="service-arrow" size={16} /></article>; })}</div>
          </div>
        </section>

        <section className="closing-section" id="contact" style={{ backgroundImage: `linear-gradient(90deg, rgba(8, 13, 34, .98) 0%, rgba(8, 13, 34, .78) 58%, rgba(8, 13, 34, .22) 100%), url(${closingImage})` }}>
          <div className="content-frame closing-inner"><p className="eyebrow eyebrow--violet">A clearer way to run revenue</p><h2>Stop reacting to the calendar.<br /><em>Start reading the signal.</em></h2><p>Bring us the portfolio, the market, or the listing that is keeping you up. We will show you what is moving—and what to do next.</p><button className="button button--violet" onClick={() => window.alert("Thanks — the signal review request is ready for your team to connect.")}>Book a signal review <ArrowUpRight size={17} /></button></div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
