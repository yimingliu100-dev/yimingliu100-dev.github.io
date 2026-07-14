import type { Metadata } from "next";
import { profileLinks } from "../site-data";
import { PageHero, SiteFooter, SiteHeader } from "../site-shell";

export const metadata: Metadata = { title: "Connect | Yiming Liu", description: "Connect with Yiming Liu about research, collaboration, mentoring, and future opportunities." };

export default function ConnectPage() {
  return (
    <main className="connect-page">
      <SiteHeader />
      <PageHero eyebrow="Build what’s next" title="Let’s make water work in circles." text="I welcome conversations with researchers, students, and partners working on water–material interfaces, selective separations, and circular resource systems." />
      <section className="section connect-directory">
        <div className="connect-primary"><p>For research collaborations, speaking invitations, mentoring, and professional opportunities:</p><a className="button ivory" href="mailto:yiming.liu@sdstate.edu">yiming.liu@sdstate.edu <span>↗</span></a></div>
        <div className="connect-links">
          {profileLinks.map(([label, href]) => <a key={label} href={href} target="_blank" rel="noreferrer"><span>{label}</span><b>↗</b></a>)}
          <a href="mailto:yiming.liu@sdstate.edu"><span>Email</span><b>↗</b></a>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
