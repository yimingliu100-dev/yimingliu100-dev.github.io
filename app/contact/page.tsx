import type { Metadata } from "next";
import { profileLinks } from "../site-data";
import { SiteFooter, SiteHeader } from "../site-shell";

export const metadata: Metadata = { title: "Contact | Yiming Liu Research Group", description: "Contact Yiming Liu about research, collaboration, mentoring, and opportunities." };

export default function ContactPage() {
  return (
    <main>
      <SiteHeader />
      <section className="section contact-section">
        <div className="contact-identity">
          <p className="eyebrow"><span /> Contact</p>
          <h1>Yiming Liu, Ph.D.</h1>
          <p>Assistant Professor</p>
          <p>Department of Civil and Environmental Engineering</p>
          <p>Jerome J. Lohr College of Engineering</p>
        </div>
        <div className="contact-details">
          <div><span>Email</span><a href="mailto:yiming.liu@sdstate.edu">yiming.liu@sdstate.edu</a></div>
          <div><span>University</span><p>South Dakota State University</p></div>
          <div><span>Location</span><p>Brookings, South Dakota 57007</p></div>
          <div className="contact-profile-links">
            {profileLinks.map(([label, href]) => <a key={label} href={href} target="_blank" rel="noreferrer">{label} <b>↗</b></a>)}
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
