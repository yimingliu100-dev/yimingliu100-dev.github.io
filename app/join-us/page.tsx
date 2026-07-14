import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../site-shell";

export const metadata: Metadata = { title: "Join Us | Yiming Liu Research Group", description: "Opportunities to study, research, and collaborate with the Yiming Liu Research Group." };

const opportunities = [
  ["01", "Graduate researchers", "Students interested in environmental engineering, membrane science, electrochemistry, materials, and resource recovery are encouraged to get in touch."],
  ["02", "Undergraduate researchers", "Motivated undergraduate students can contribute to experiments, data analysis, simulations, and interdisciplinary research projects."],
  ["03", "Collaborators", "We welcome partnerships with academic, government, and industry researchers working toward circular water, mineral, and energy systems."],
];

export default function JoinUsPage() {
  return (
    <main>
      <SiteHeader />
      <section className="section join-opportunities">
        <div className="join-grid">
          {opportunities.map(([number, title, text]) => <article key={title}><span>{number}</span><h2>{title}</h2><p>{text}</p></article>)}
        </div>
      </section>
      <section className="section join-contact">
        <div><p className="eyebrow light"><span /> Start a conversation</p><h2>Tell us what you want to explore.</h2></div>
        <div><p>Please include your background, research interests, and the kind of opportunity or collaboration you are seeking.</p><a className="button ivory" href="mailto:yimingliu@rice.edu">yimingliu@rice.edu <span>↗</span></a></div>
      </section>
      <SiteFooter />
    </main>
  );
}
