import Image from "next/image";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "./site-shell";

const destinations = [
  ["01", "Research", "Discover the questions, materials, and processes shaping circular water systems.", "/research/"],
  ["02", "Publications", "Explore selected peer-reviewed work across water, materials, energy, and circularity.", "/publications/"],
  ["03", "About", "Learn about Yiming’s background, recognition, teaching, mentoring, and service.", "/about/"],
  ["04", "Curriculum vitae", "View or download a detailed record of research, education, awards, and leadership.", "/cv/"],
  ["05", "Connect", "Start a conversation about research, collaboration, mentoring, or future opportunities.", "/connect/"],
];

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Environmental engineer · Interfacial scientist</p>
          <h1>Building circular<br />water systems<br /><em>from the interface up.</em></h1>
          <p className="hero-deck">I develop materials and processes that make selective resource recovery, high-recovery desalination, and sustainable chemical production possible.</p>
          <div className="hero-actions">
            <Link className="button primary" href="/research/">Explore the research <span>→</span></Link>
            <Link className="button text-link" href="/publications/">View publications <span>→</span></Link>
            <Link className="button text-link" href="/cv/">View CV <span>→</span></Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="photo-frame">
            <Image src="/yiming-liu.png" alt="Yiming Liu outdoors in spring" fill priority sizes="(max-width: 800px) 90vw, 38vw" />
          </div>
          <div className="status-card">
            <span className="pulse" />
            <div><strong>Rice Academy Postdoctoral Fellow</strong><small>Rice University · Houston, Texas</small></div>
          </div>
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
        </div>
      </section>

      <section className="signal-strip" aria-label="Research focus">
        <span>Water</span><i>×</i><span>Materials</span><i>×</i><span>Energy</span><i>×</i><span>Circularity</span>
      </section>

      <section className="section portal-section">
        <div className="portal-heading">
          <p className="eyebrow"><span /> Explore the site</p>
          <h2>One research program.<br />Five ways in.</h2>
        </div>
        <div className="portal-list">
          {destinations.map(([number, title, text, href]) => (
            <Link className="portal-row" href={href} key={href}>
              <span>{number}</span><h3>{title}</h3><p>{text}</p><b>↗</b>
            </Link>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
