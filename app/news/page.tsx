import type { Metadata } from "next";
import Link from "next/link";
import { newsItems } from "../site-data";
import { SiteFooter, SiteHeader } from "../site-shell";

export const metadata: Metadata = { title: "News | Yiming Liu Research Group", description: "Research news, publications, awards, and highlights from the Yiming Liu Research Group." };

export default function NewsPage() {
  return (
    <main>
      <SiteHeader />
      <section className="lab-news news-page-section">
        <div className="news-heading"><div><span>Highlights</span><h2>What is happening</h2></div><Link href="/publications/">Selected publications →</Link></div>
        <div className="news-list">
          {newsItems.map(([year, title, detail]) => <article key={title}><time>{year}</time><div><h3>{title}</h3><p>{detail}</p></div></article>)}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
