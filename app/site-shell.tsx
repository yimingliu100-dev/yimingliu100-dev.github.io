import Link from "next/link";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Research", href: "/research/" },
  { label: "Publications", href: "/publications/" },
  { label: "Team", href: "/team/" },
  { label: "News", href: "/news/" },
  { label: "Join Us", href: "/join-us/" },
  { label: "Contact", href: "/contact/" },
];

export function SiteHeader({ overlay = false }: { overlay?: boolean }) {
  return (
    <header className={`site-header${overlay ? " site-header-overlay" : ""}`}>
      <Link className="brand" href="/" aria-label="Yiming Liu, home">
        <span className="brand-institution-mark" aria-hidden="true">
          <img src="/sdstate-logo.svg" alt="" />
        </span>
        <span className="brand-copy"><strong>Yiming Liu Research Group</strong><small>Interfacial Science · Circular Water Systems</small></span>
      </Link>
      <nav className="main-nav" aria-label="Main navigation">
        {navigation.map(({ label, href }) => <Link key={href} href={href}>{label}</Link>)}
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <Link className="brand" href="/"><span className="brand-mark">YL</span><span>Yiming Liu</span></Link>
      <p>Interfacial science for circular water systems.</p>
      <p>© 2026 Yiming Liu</p>
    </footer>
  );
}

export function PageHero({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <section className="page-hero">
      <p className="eyebrow"><span /> {eyebrow}</p>
      <h1>{title}</h1>
      <p>{text}</p>
    </section>
  );
}
