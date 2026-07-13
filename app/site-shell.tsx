import Link from "next/link";

const navigation = [
  ["Research", "/research/"],
  ["Publications", "/publications/"],
  ["About", "/about/"],
  ["CV", "/cv/"],
  ["Connect", "/connect/"],
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Yiming Liu, home">
        <span className="brand-mark">YL</span>
        <span>Yiming Liu</span>
      </Link>
      <nav className="main-nav" aria-label="Main navigation">
        {navigation.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
      </nav>
      <a className="header-cta" href="mailto:yimingliu@rice.edu">Let’s talk <span>↗</span></a>
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
