import type { Metadata } from "next";
import Image from "next/image";
import { education, postdoctoralTraining, profileLinks } from "../site-data";
import { SiteFooter, SiteHeader } from "../site-shell";

export const metadata: Metadata = {
  title: "Team | The Liu Group — EMACS Lab",
  description: "Meet Yiming Liu, principal investigator of the EMACS Lab.",
};

export default function TeamPage() {
  return (
    <main>
      <SiteHeader />
      <section className="section pi-section">
        <div className="pi-portrait">
          <Image src="/yiming-liu-headshot.jpg" alt="Portrait of Yiming Liu" width={1600} height={2135} className="pi-photo" priority />
        </div>
        <div className="pi-profile">
          <p className="eyebrow"><span /> Principal Investigator</p>
          <h2>Yiming Liu, Ph.D.</h2>
          <p className="pi-role">Assistant Professor · South Dakota State University</p>
          <div className="pi-links" aria-label="Yiming Liu researcher profiles">
            {profileLinks.map(([label, href]) => <a key={label} href={href} target="_blank" rel="noreferrer">{label} <span>↗</span></a>)}
          </div>
          <div className="profile-section">
            <h3>Postdoctoral training</h3>
            <div className="profile-timeline">
              {postdoctoralTraining.map(([year, role, institution]) => <div key={role}><span>{year}</span><strong>{role}</strong><small>{institution}</small></div>)}
            </div>
          </div>
          <div className="profile-section">
            <h3>Education</h3>
            <div className="profile-timeline">
              {education.map(([year, degree, school]) => <div key={degree}><span>{year}</span><strong>{degree}</strong><small>{school}</small></div>)}
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
