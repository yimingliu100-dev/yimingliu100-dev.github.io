import type { Metadata } from "next";
import { profileLinks } from "../site-data";
import { SiteFooter, SiteHeader } from "../site-shell";

export const metadata: Metadata = { title: "Contact | Yiming Liu Research Group", description: "Contact Yiming Liu about research, collaboration, mentoring, and opportunities." };

export default function ContactPage() {
  return (
    <main className="connect-page">
      <SiteHeader />
      <section className="section connect-directory">
        <div className="connect-primary"><p>For research, collaboration, mentoring, and professional opportunities:</p><a className="button ivory" href="mailto:yiming.liu@sdstate.edu">yiming.liu@sdstate.edu <span>↗</span></a></div>
        <div className="connect-links">
          {profileLinks.map(([label, href]) => <a key={label} href={href} target="_blank" rel="noreferrer"><span>{label}</span><b>↗</b></a>)}
          <a href="/cv/"><span>Curriculum vitae</span><b>→</b></a>
          <a href="mailto:yiming.liu@sdstate.edu"><span>Email</span><b>↗</b></a>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
