/**
 * SignalStay shared shell — multi-page navigation for the Signal Navy / Electric Violet system.
 * The information architecture mirrors the reference category while the interaction model,
 * naming, colors, and component treatment remain independently branded.
 */
import { useState } from "react";
import { ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";
import { Link, useLocation } from "wouter";

const markImage = "/manus-storage/signalstay-mark_2126229d.png";

type NavLink = { label: string; href: string; description?: string };
type NavGroup = { label: string; href: string; links: NavLink[] };

const navGroups: NavGroup[] = [
  {
    label: "For STRs",
    href: "/str",
    links: [
      { label: "STR overview", href: "/str", description: "The complete operating model for property portfolios." },
      { label: "Revenue management", href: "/str/revenue-management", description: "Move rates with the signals that matter." },
      { label: "OTA optimization", href: "/str/ota-optimization", description: "Earn visibility across every major channel." },
      { label: "Ranking intelligence", href: "/str/ranking-intelligence", description: "Understand what moves before the calendar does." },
      { label: "Portfolio health check", href: "/str/revenue-health-check", description: "Find the leaks hiding in your current setup." },
      { label: "ROI calculator", href: "/str/revenue-leak-calculator", description: "Model the upside in a clear operating view." },
    ],
  },
  {
    label: "For Hotels",
    href: "/hotel",
    links: [
      { label: "Hotel overview", href: "/hotel", description: "A revenue operation designed for independent hotels." },
      { label: "Revenue management", href: "/hotel/revenue-management", description: "Turn demand movement into confident rate strategy." },
      { label: "OTA ranking", href: "/hotel/ota-optimization", description: "Make your direct and OTA mix pull together." },
    ],
  },
  { label: "Customers", href: "/case-studies", links: [
    { label: "Case studies", href: "/case-studies", description: "See the operating patterns behind portfolio growth." },
    { label: "Portfolio signals", href: "/case-studies/portfolio-signals", description: "A closer look at the metrics teams watch daily." },
  ] },
  {
    label: "Resources",
    href: "/resources",
    links: [
      { label: "Journal", href: "/resources", description: "Practical notes on rank, pricing, and distribution." },
      { label: "Guides", href: "/resources/guides", description: "Step-by-step operating playbooks." },
      { label: "Webinars", href: "/resources/webinars", description: "Live conversations for revenue operators." },
      { label: "Glossary", href: "/resources/glossary", description: "A plain-English lexicon for the revenue stack." },
    ],
  },
];

const companyLinks: NavLink[] = [
  { label: "About SignalStay", href: "/about", description: "The team and thinking behind the operating model." },
  { label: "Partners & integrations", href: "/partners", description: "Work on top of the tools you already have." },
  { label: "Contact", href: "/contact", description: "Bring us the signal you want to understand." },
  { label: "Careers", href: "/careers", description: "Help shape a better way to run hospitality revenue." },
];

function SignalMark({ compact = false }: { compact?: boolean }) {
  return (
    <Link className={`brand-lockup ${compact ? "brand-lockup--compact" : ""}`} href="/" aria-label="SignalStay home">
      <img src={markImage} alt="" className="brand-mark" />
      <span className="brand-name">Signal<span>Stay</span></span>
    </Link>
  );
}

function getSubnav(path: string): { eyebrow: string; title: string; links: NavLink[] } | null {
  if (path.startsWith("/str")) return { eyebrow: "STR operations", title: "Short-term rental portfolio intelligence", links: navGroups[0].links };
  if (path.startsWith("/hotel")) return { eyebrow: "Hotel operations", title: "Revenue systems for independent hotels", links: navGroups[1].links };
  if (path.startsWith("/resources")) return { eyebrow: "Signal library", title: "Useful thinking for revenue operators", links: navGroups[3].links };
  if (path.startsWith("/case-studies")) return { eyebrow: "Customer signals", title: "Patterns from portfolios like yours", links: navGroups[2].links };
  if (["/about", "/partners", "/contact", "/careers"].some((route) => path.startsWith(route))) return { eyebrow: "Company", title: "The people and systems behind the signal", links: companyLinks };
  return null;
}

export function SiteHeader() {
  const [location] = useLocation();
  const [menu, setMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const subnav = getSubnav(location);

  const close = () => { setMenu(null); setMobileOpen(false); };

  return (
    <>
      <header className="site-header site-header--shared">
        <div className="header-inner">
          <SignalMark />
          <nav className="desktop-nav desktop-nav--shared" aria-label="Main navigation">
            {navGroups.map((group) => <div className="nav-group" key={group.label}>
              <button className={`nav-trigger ${location.startsWith(group.href) ? "nav-trigger--active" : ""}`} onClick={() => setMenu(menu === group.label ? null : group.label)} aria-expanded={menu === group.label}>{group.label}<ChevronDown size={13} /></button>
              {menu === group.label && <div className="nav-popover">
                <div className="nav-popover-lead"><span className="eyebrow eyebrow--violet">{group.label}</span><p>Choose the operating layer you want to explore.</p></div>
                <div className="nav-popover-links">{group.links.map((link) => <Link key={link.href} href={link.href} onClick={close}><strong>{link.label}</strong><span>{link.description}</span></Link>)}</div>
              </div>}
            </div>)}
            <Link className={location.startsWith("/case-studies") ? "nav-link--active" : ""} href="/case-studies">Customers</Link>
            <div className="nav-group"><button className={`nav-trigger ${["/about", "/partners", "/contact", "/careers"].some((route) => location.startsWith(route)) ? "nav-trigger--active" : ""}`} onClick={() => setMenu(menu === "Company" ? null : "Company")} aria-expanded={menu === "Company"}>Company <ChevronDown size={13} /></button>{menu === "Company" && <div className="nav-popover nav-popover--company"><div className="nav-popover-lead"><span className="eyebrow eyebrow--violet">Company</span><p>Meet the people, partners, and principles behind SignalStay.</p></div><div className="nav-popover-links">{companyLinks.map((link) => <Link key={link.href} href={link.href} onClick={close}><strong>{link.label}</strong><span>{link.description}</span></Link>)}</div></div>}</div>
          </nav>
          <Link className="header-cta" href="/book-a-call-with-our-experts" onClick={close}><span>Book a signal review</span><ArrowUpRight size={15} /></Link>
          <button className="menu-toggle menu-toggle--shared" aria-label={mobileOpen ? "Close menu" : "Open menu"} aria-expanded={mobileOpen} onClick={() => setMobileOpen(!mobileOpen)}>{mobileOpen ? <X size={21} /> : <Menu size={21} />}</button>
        </div>
        {mobileOpen && <div className="mobile-nav-panel">
          {navGroups.map((group) => <details key={group.label}><summary>{group.label}<ChevronDown size={15} /></summary><div>{group.links.map((link) => <Link key={link.href} href={link.href} onClick={close}>{link.label}</Link>)}</div></details>)}
          <details><summary>Company<ChevronDown size={15} /></summary><div>{companyLinks.map((link) => <Link key={link.href} href={link.href} onClick={close}>{link.label}</Link>)}</div></details>
          <Link className="mobile-nav-cta" href="/book-a-call-with-our-experts" onClick={close}>Book a signal review <ArrowUpRight size={15} /></Link>
        </div>}
      </header>
      {subnav && <div className="subnav-wrap"><div className="content-frame subnav-inner"><div className="subnav-title"><span>{subnav.eyebrow}</span><strong>{subnav.title}</strong></div><nav className="subnav-links" aria-label={`${subnav.eyebrow} sub-navigation`}>{subnav.links.map((link) => <Link key={link.href} className={location === link.href ? "subnav-link--active" : ""} href={link.href}>{link.label}</Link>)}</nav></div></div>}
    </>
  );
}

export function SiteFooter() {
  return <footer className="site-footer"><div className="content-frame footer-inner"><SignalMark compact /><div className="footer-note">Revenue operations for hospitality teams<br />who want to see around the corner.</div><div className="footer-links"><Link href="/str">For STRs</Link><Link href="/hotel">For Hotels</Link><Link href="/case-studies">Customers</Link><Link href="/resources">Resources</Link><Link href="/about">Company</Link><Link href="/book-a-call-with-our-experts">Book a call</Link></div><div className="footer-legal">© 2026 SignalStay <span>·</span> Built for better signals</div></div></footer>;
}

export { getSubnav };
