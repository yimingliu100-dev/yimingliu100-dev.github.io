import type { Metadata } from "next";
import { PageHero, SiteFooter, SiteHeader } from "../site-shell";

export const metadata: Metadata = { title: "CV | Yiming Liu", description: "Curriculum vitae of Yiming Liu." };

export default function CvPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero eyebrow="Curriculum vitae" title="Research, education, and service at a glance." text="View the complete curriculum vitae below or download a copy for offline reference." />
      <section className="section cv-section">
        <div className="cv-toolbar">
          <div><strong>Yiming Liu — Curriculum Vitae</strong><small>PDF · Updated June 2026</small></div>
          <a className="button primary" href="/Yiming-Liu-CV.pdf" download>Download CV <span>↓</span></a>
        </div>
        <iframe className="cv-frame" src="/Yiming-Liu-CV.pdf" title="Yiming Liu curriculum vitae" />
        <p className="cv-fallback">If the document viewer is unavailable, <a href="/Yiming-Liu-CV.pdf">open the CV directly</a>.</p>
      </section>
      <SiteFooter />
    </main>
  );
}
