/**
 * SignalStay structural redesign — Field Ledger revenue board.
 * This page intentionally avoids the reference's hero/stat-strip/card-loop rhythm.
 */
import { ArrowUpRight, CalendarDays, Check, ChevronRight, CircleDot, Gauge, LineChart, MessageSquareText, MoveUpRight, Radar, Rows3, ScanLine } from "lucide-react";
import { Link } from "wouter";
import { SiteFooter, SiteHeader } from "@/components/SiteShell";
import Reveal from "@/components/Reveal";

const calls = [
  { time: "09:00", label: "Weekend compression", value: "Protect Fri / Sat", tone: "coral" },
  { time: "11:30", label: "Rank movement", value: "2 listings up", tone: "mint" },
  { time: "14:00", label: "Gap-night review", value: "3 nights open", tone: "brass" },
];

const ledgerRows = [
  ["Nashville / 18 units", "#04", "+12", "Hold"],
  ["Austin / 07 units", "#11", "−03", "Refresh"],
  ["Palm Springs / 12", "#07", "+06", "Open"],
  ["Savannah / 09 units", "#15", "+02", "Watch"],
];

export default function StructuralHome() {
  return (
    <div className="signalstay-site structural-home">
      <SiteHeader />
      <main>
        <Reveal className="board-reveal"><section className="board-hero"><div className="board-hero-grid" /><div className="content-frame board-hero-layout"><aside className="board-rail"><span>SS / 01</span><span>Revenue field notes</span><span>Daily operator view</span></aside><div className="board-intro"><p className="eyebrow"><CircleDot size={12} /> SignalStay / revenue operations</p><h1>Make the next<br /><em>commercial call</em><br />with context.</h1><p className="board-lede">A living revenue desk for teams who need to see the pressure in the calendar before it becomes a problem.</p><div className="board-actions"><Link className="button button--violet" href="/book-a-call-with-our-experts">Open the field guide <ArrowUpRight size={16} /></Link><Link className="board-text-link" href="/str/revenue-management">View rate decisions <ChevronRight size={15} /></Link></div></div><div className="board-index"><div className="index-top"><span>Today / 08 Mar</span><span className="index-live"><i />live</span></div><div className="index-number">03</div><p>decisions waiting for an owner</p><div className="index-rule" /><span className="mono-note">rank → pace → price</span></div></div></section></Reveal>

        <Reveal className="board-reveal"><section className="today-section"><div className="content-frame today-layout"><div className="today-heading"><p className="eyebrow">The morning board</p><h2>What deserves<br /><em>attention today?</em></h2><p>Not every movement needs a new rate. This is the short list your team can act on before the first stand-up.</p><Link className="text-link" href="/str/revenue-management">Open full revenue desk <ArrowUpRight size={15} /></Link></div><div className="call-list">{calls.map((item) => <article className="call-row" key={item.time}><span className="call-time">{item.time}</span><span className={`call-mark call-mark--${item.tone}`} /><div><strong>{item.label}</strong><small>{item.value}</small></div><ChevronRight size={16} /></article>)}</div></div></section></Reveal>

        <Reveal className="board-reveal"><section className="ledger-section"><div className="content-frame ledger-layout"><div className="ledger-heading"><span className="section-number">02</span><p className="eyebrow">A portfolio, read clearly</p><h2>The useful view<br /><em>isn't a dashboard.</em></h2><p>It is a sequence of decisions: where rank changed, what caused it, and which lever has the least destructive next move.</p></div><div className="ledger-card"><div className="ledger-card-top"><span><Rows3 size={15} /> Portfolio ledger</span><span>last synced 08:42</span></div><div className="ledger-head"><span>Portfolio</span><span>Rank</span><span>7d</span><span>Next</span></div>{ledgerRows.map((row) => <div className="ledger-row" key={row[0]}><span>{row[0]}</span><strong>{row[1]}</strong><b className={row[2].startsWith("−") ? "down" : "up"}>{row[2]}</b><span className="ledger-next">{row[3]} <ChevronRight size={13} /></span></div>)}<div className="ledger-footer"><span><ScanLine size={13} /> 46 signals reviewed</span><Link href="/case-studies">See operator notes <ArrowUpRight size={13} /></Link></div></div></div></section></Reveal>

        <Reveal className="board-reveal"><section className="method-section"><div className="content-frame method-layout"><div className="method-title"><p className="eyebrow">How SignalStay thinks</p><h2>Less dashboard.<br /><em>More handoff.</em></h2></div><div className="method-steps"><article><span>01</span><Radar size={22} /><h3>Locate pressure</h3><p>Rank, pace, parity, and gaps get read together—not as isolated KPIs.</p></article><article><span>02</span><Gauge size={22} /><h3>Choose the lever</h3><p>Every recommendation names the trade-off so the team knows what it protects.</p></article><article><span>03</span><MessageSquareText size={22} /><h3>Leave a clear note</h3><p>The decision travels to the person who owns the next move, with context attached.</p></article></div></div></section></Reveal>

        <Reveal className="board-reveal"><section className="evidence-section"><div className="content-frame evidence-layout"><div className="evidence-copy"><p className="eyebrow">Evidence, not theatre</p><h2>Every alert should<br /><em>earn its interruption.</em></h2><p>SignalStay turns noisy market movement into a small, reviewable trail: what changed, why it matters, and what happens if you wait.</p><div className="evidence-checks"><span><Check size={14} />Reason attached</span><span><Check size={14} />Owner attached</span><span><Check size={14} />Review window attached</span></div></div><div className="evidence-chart"><div className="chart-label"><span><LineChart size={14} /> Booking pace / rank</span><span>28 day read</span></div><svg viewBox="0 0 620 230" preserveAspectRatio="none" aria-label="Illustrative booking pace and rank chart"><path className="chart-axis" d="M0 205H620 M0 150H620 M0 95H620 M0 40H620" /><path className="chart-area-fill" d="M0 184 C74 169 91 181 145 150 S224 156 272 128 S345 137 396 93 S478 105 522 72 S578 66 620 38 V205 H0Z" /><path className="chart-coral" d="M0 184 C74 169 91 181 145 150 S224 156 272 128 S345 137 396 93 S478 105 522 72 S578 66 620 38" /><path className="chart-brass" d="M0 199 C85 195 111 188 163 179 S242 184 302 156 S382 157 439 142 S520 144 620 112" /></svg><div className="chart-note"><span>Decision point</span><strong>Open Fri / protect Sat</strong><MoveUpRight size={15} /></div></div></div></section></Reveal>

        <section className="board-cta"><div className="content-frame board-cta-layout"><div><p className="eyebrow">A calmer revenue operation</p><h2>Bring the messy<br /><em>part of the calendar.</em></h2></div><div><p>We will map the pressure, name the trade-off, and show you the operating rhythm that fits your team.</p><Link className="button button--violet" href="/book-a-call-with-our-experts">Book a working session <ArrowUpRight size={16} /></Link></div></div></section>
      </main>
      <SiteFooter />
    </div>
  );
}
