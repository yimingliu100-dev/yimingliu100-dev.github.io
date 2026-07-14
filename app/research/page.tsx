import type { Metadata } from "next";
import { researchAreas } from "../site-data";
import { SiteFooter, SiteHeader } from "../site-shell";

export const metadata: Metadata = { title: "Research | Yiming Liu", description: "Research on selective resource recovery, water–material interfaces, and circular brine systems." };

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
        <p className="eyebrow light"><span /> How I work</p>
        <h2>From molecular insight<br />to systems impact.</h2>
        <div className="method-grid">
          <article><span>01</span><h3>Understand</h3><p>Reveal the mechanisms that govern nucleation, transport, selectivity, and surface behavior.</p></article>
          <article><span>02</span><h3>Design</h3><p>Translate those mechanisms into functional membranes, sorbents, electrodes, and thermal interfaces.</p></article>
          <article><span>03</span><h3>Integrate</h3><p>Connect material performance to practical processes for water, energy, and resource circularity.</p></article>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
