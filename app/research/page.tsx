import type { Metadata } from "next";
import { researchAreas } from "../site-data";
import { SiteFooter, SiteHeader } from "../site-shell";

export const metadata: Metadata = { title: "Research | EMACS Lab", description: "EMACS Lab research in electrical and materials modulation for circular water separations." };

export default function ResearchPage() {
  return (
    <main>
      <SiteHeader />
      <section className="section research-section inner-section">
        <div className="research-grid">
          {researchAreas.map((item) => (
            <article className="research-card" key={item.number}>
              <div className="card-top"><span>{item.number}</span><span>Research area</span></div>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
              <ul>{item.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
              <div className="research-publications">
                <strong>Associated publications</strong>
                {item.publications.map((publication) => (
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
      <section className="section method-section">
        <p className="eyebrow light"><span /> How we work</p>
        <h2>Modulate. Separate.<br />Circulate.</h2>
        <div className="method-grid">
          <article><span>01</span><h3>Modulate</h3><p>Apply electrical inputs and material chemistry to direct nucleation, transport, selectivity, and surface behavior.</p></article>
          <article><span>02</span><h3>Separate</h3><p>Translate interfacial control into functional membranes, sorbents, electrodes, and thermal separation platforms.</p></article>
          <article><span>03</span><h3>Circulate</h3><p>Integrate technologies that recover water and critical resources while reducing residual waste and energy demand.</p></article>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
