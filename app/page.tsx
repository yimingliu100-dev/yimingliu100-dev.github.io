import Image from "next/image";
import Link from "next/link";
import { newsItems, researchAreas } from "./site-data";
import { SiteFooter, SiteHeader } from "./site-shell";

export default function Home() {
  return (
    <main>
      <div className="home-masthead">
        <SiteHeader overlay />
        <Image className="masthead-photo" src="/sdstate-campus-hero.jpg" alt="Aerial view of the South Dakota State University campus at sunrise" fill priority sizes="100vw" />
        <div className="masthead-wash" />
        <div className="masthead-content">
          <p>The Liu Group</p>
          <h1 className="emacs-title"><strong>E</strong>lectrical and <strong>MA</strong>terials Modulation for <strong>C</strong>ircular Water <strong>S</strong>eparations</h1>
          <div className="masthead-rule" />
          <span>EMACS Lab · South Dakota State University</span>
        </div>
        <a className="scroll-cue" href="#welcome" aria-label="Scroll to introduction">↓</a>
      </div>

      <section className="lab-welcome" id="welcome">
        <div className="section-label">Welcome</div>
        <div>
          <h2>About our research</h2>
          <p className="lead">Welcome to the EMACS Lab at South Dakota State University, where we use electrical and materials modulation to advance circular water separations.</p>
          <p>We are a curious, collaborative research team working at the intersection of environmental engineering, interfacial science, and materials design. By linking molecular-scale mechanisms with electrochemical, membrane, and thermal processes, we control ions, minerals, and water at interfaces—enabling selective resource recovery, scaling-resistant systems, and high-recovery treatment of complex brines.</p>
          <div className="recruitment-note">
            <strong>We are recruiting.</strong>
            <p>We currently have openings for motivated Ph.D. students and are actively recruiting motivated M.S. and B.S. students. Interested students should email Dr. Yiming Liu at <a href="mailto:yiming.liu@sdstate.edu">yiming.liu@sdstate.edu</a> with a single PDF containing their CV and academic transcript, along with a brief statement of interest in the email.</p>
          </div>
          <Link className="lab-link" href="/research/">Explore our research <span>→</span></Link>
        </div>
      </section>

      <section className="lab-focus">
        <div className="focus-heading"><span>Research directions</span><h2>Modulating interfaces.<br />Closing water loops.</h2></div>
        <div className="focus-grid">
          {researchAreas.map((area) => (
            <article key={area.number}>
              <Link className="focus-area-link" href="/research/">
                <span>{area.number}</span>
                <h3>{area.title}</h3>
                <p>{area.text}</p>
              </Link>
              <div className="focus-publications">
                <strong>Associated publications</strong>
                {area.publications.map((publication) => (
                  <a key={publication.title} href={publication.href} target="_blank" rel="noreferrer">
                    <span>{publication.authorship}</span>
                    {publication.title}
                  </a>
                ))}
              </div>
            </article>
          ))}
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
        <p>We welcome conversations with researchers, students, and partners working on electrically controlled interfaces, selective materials, critical-mineral recovery, and circular treatment of challenging waters.</p>
        <Link href="/join-us/">Join the group <span>→</span></Link>
      </section>
      <SiteFooter />
    </main>
  );
}
