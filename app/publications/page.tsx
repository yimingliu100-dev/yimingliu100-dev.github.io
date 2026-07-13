import type { Metadata } from "next";
import { publications, scholar } from "../site-data";
import { PageHero, SiteFooter, SiteHeader } from "../site-shell";

export const metadata: Metadata = { title: "Publications | Yiming Liu", description: "Selected publications by Yiming Liu in water, materials, energy, and circularity." };

export default function PublicationsPage() {
  return (
    <main className="dark-page">
      <SiteHeader />
      <PageHero eyebrow="Selected work" title="Research with real-world reach." text="Peer-reviewed work spanning interfacial science, selective separations, desalination, carbon management, and low-carbon materials processing." />
      <section className="section publication-section inner-section">
        <div className="publication-toolbar"><p>Selected publications</p><a className="button outline-light" href={scholar} target="_blank" rel="noreferrer">Complete profile <span>↗</span></a></div>
        <div className="publication-list">
          {publications.map((pub) => (
            <a className="publication" key={pub.title} href={pub.href} target="_blank" rel="noreferrer">
              <div className="pub-meta"><span>{pub.year}</span><strong>{pub.journal}</strong></div>
              <div className="pub-title"><h2>{pub.title}</h2><p>{pub.note}</p></div>
              <span className="pub-arrow">↗</span>
            </a>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
