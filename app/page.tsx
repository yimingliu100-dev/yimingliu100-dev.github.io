import Image from "next/image";
import Link from "next/link";
import { newsItems } from "./site-data";
import { SiteFooter, SiteHeader } from "./site-shell";

export default function Home() {
  return (
    <main>
      <div className="home-masthead">
        <SiteHeader overlay />
        <Image className="masthead-photo" src="/yiming-liu.png" alt="Yiming Liu in a natural landscape" fill priority sizes="100vw" />
        <div className="masthead-wash" />
        <div className="masthead-content">
          <p>Yiming Liu Research Group</p>
          <h1>Interfacial science for<br />circular water systems</h1>
          <div className="masthead-rule" />
          <span>Water · Materials · Energy · Circularity</span>
        </div>
        <a className="scroll-cue" href="#welcome" aria-label="Scroll to introduction">↓</a>
      </div>

      <section className="lab-welcome" id="welcome">
        <div className="section-label">Welcome</div>
        <div>
          <h2>About our research</h2>
          <p className="lead">We work at the intersection of environmental engineering, interfacial science, and materials design to advance selective separations and circular water systems.</p>
          <p>Our research seeks to understand and control the moments where matter meets water. By connecting molecular-scale mechanisms with membrane, electrochemical, and thermal processes, we develop technologies for critical-mineral recovery, high-recovery desalination, and sustainable chemical production.</p>
          <Link className="lab-link" href="/research/">Explore our research <span>→</span></Link>
        </div>
      </section>

      <section className="lab-focus">
        <div className="focus-heading"><span>Research directions</span><h2>Science designed<br />for circularity.</h2></div>
        <div className="focus-grid">
          <Link href="/research/"><span>01</span><h3>Selective resource recovery</h3><p>Recovering lithium and rare earth elements from complex water streams using selective membranes and functional materials.</p></Link>
          <Link href="/research/"><span>02</span><h3>Water–material interfaces</h3><p>Controlling nucleation, scaling, and molecular transport at membranes, electrodes, and heat-transfer surfaces.</p></Link>
          <Link href="/research/"><span>03</span><h3>Circular brine systems</h3><p>Transforming hypersaline water into a source of water, energy, and materials through efficient process design.</p></Link>
        </div>
      </section>

      <section className="lab-news">
        <div className="news-heading"><div><span>Latest</span><h2>News & highlights</h2></div><Link href="/news/">All news →</Link></div>
        <div className="news-list">
          {newsItems.map(([year, title, detail]) => <article key={title}><time>{year}</time><div><h3>{title}</h3><p>{detail}</p></div></article>)}
        </div>
      </section>

      <section className="lab-join">
        <div><span>Collaboration</span><h2>Interested in working together?</h2></div>
        <p>I welcome conversations with researchers, students, and partners working on water–material interfaces, selective separations, and circular resource systems.</p>
        <Link href="/join-us/">Join the group <span>→</span></Link>
      </section>
      <SiteFooter />
    </main>
  );
}
