import type { Metadata } from "next";
import Image from "next/image";
import { education, postdoctoralTraining, profileLinks } from "../site-data";
import { PageHero, SiteFooter, SiteHeader } from "../site-shell";

export const metadata: Metadata = {
  title: "Team | Yiming Liu Research Group",
  description: "Meet Yiming Liu, principal investigator of the Yiming Liu Research Group.",
};

export default function TeamPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero eyebrow="Team" title="People advancing circular water systems." text="Our group brings together interfacial science, materials design, and environmental engineering to recover resources and rethink water systems." />
      <section className="section pi-section">
        <div className="pi-portrait">
          <Image src="/yiming-liu.png" alt="Portrait of Yiming Liu" width={900} height={1125} className="pi-photo" priority />
        </div>
        <div className="pi-profile">
          <p className="eyebrow"><span /> Principal Investigator</p>
          <h2>Yiming Liu, Ph.D.</h2>
          <p className="pi-role">Environmental engineer and interfacial scientist</p>
          <p className="pi-bio">Yiming Liu develops materials and processes that control the moments where matter meets water. His work connects selective separations, electrochemistry, membrane science, and water chemistry to advance critical-mineral recovery, scale prevention, and circular brine management.</p>
          <div className="pi-links" aria-label="Yiming Liu researcher profiles">
            {profileLinks.map(([label, href]) => <a key={label} href={href} target="_blank" rel="noreferrer">{label} <span>↗</span></a>)}
          </div>
          <div className="profile-section">
            <h3>Postdoctoral training</h3>
            <div className="profile-timeline">
              {postdoctoralTraining.map(([year, role, institution, detail]) => <div key={role}><span>{year}</span><strong>{role}</strong><small>{institution}</small><p>{detail}</p></div>)}
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
