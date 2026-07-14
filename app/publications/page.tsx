import type { Metadata } from "next";
import { publications, scholar } from "../site-data";
import { PageHero, SiteFooter, SiteHeader } from "../site-shell";

export const metadata: Metadata = { title: "Publications | Yiming Liu", description: "Associated publications and presentations from the Liu Group's three research areas." };

export default function PublicationsPage() {
  return (
    <main className="dark-page">
      <SiteHeader />
      <PageHero eyebrow="Research outputs" title="Research with real-world reach." text="Associated publications and presentations spanning critical mineral recovery, material-water interfaces, and brine concentration processes." />
      <section className="section publication-section inner-section">
        <div className="publication-toolbar"><p>Associated publications</p><a className="button outline-light" href={scholar} target="_blank" rel="noreferrer">Complete publication list <span>↗</span></a></div>
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
