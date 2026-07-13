import type { Metadata } from "next";
import { awards, education } from "../site-data";
import { PageHero, SiteFooter, SiteHeader } from "../site-shell";

export const metadata: Metadata = { title: "About | Yiming Liu", description: "Background, education, recognition, teaching, mentoring, and professional service of Yiming Liu." };

export default function AboutPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero eyebrow="About Yiming" title="Environmental engineering, from fundamentals to impact." text="I work across water, critical-mineral, and energy circularity—connecting interfacial science with technologies that recover value and redesign systems." />
      <section className="section about-section inner-section">
        <div className="about-quote"><blockquote>“The best environmental technologies don’t just remove a problem—they recover value and redesign the system around it.”</blockquote></div>
        <div className="about-copy">
          <p>Yiming Liu is a Rice Academy Postdoctoral Fellow advised by Professor Qilin Li and mentored by Professor Pedro J. J. Alvarez. He develops selective electrodialysis for lithium extraction and ligand-functionalized metal-organic frameworks for rare earth recovery.</p>
          <p>He earned his Ph.D. and M.S. in Civil and Environmental Engineering from UCLA and his B.E. in Environmental Engineering from Tsinghua University. His doctoral work combined membrane process engineering, heat and mass transfer, electrochemistry, and water chemistry to advance sustainable brine management.</p>
          <div className="education">
            {education.map(([year, degree, school]) => <div key={degree}><span>{year}</span><strong>{degree}</strong><small>{school}</small></div>)}
          </div>
        </div>
      </section>
      <section className="section recognition-section">
        <div><p className="eyebrow"><span /> Recognition</p><h2>Ideas backed<br />by momentum.</h2></div>
        <div className="awards">{awards.map(([year, award, source]) => <div key={award}><span>{year}</span><strong>{award}</strong><small>{source}</small></div>)}</div>
      </section>
      <section className="section academic-life-section">
        <article><p className="eyebrow"><span /> Teaching & mentoring</p><h2>Growing the next generation of researchers.</h2><p>Guest lecturer at Rice University and UCLA, with research mentoring experience spanning Ph.D., master’s, undergraduate, and high-school researchers.</p><div className="metric-row"><strong>7</strong><span>research mentees<br />across Rice & UCLA</span></div></article>
        <article><p className="eyebrow"><span /> Service & leadership</p><h2>Science is a shared enterprise.</h2><p>Early-career professionals’ chair for the International Water Association Nano & Water Specialist Group, conference organizer, grant reviewer, poster judge, and technical adviser.</p><div className="metric-row"><strong>5+</strong><span>professional societies<br />and service communities</span></div></article>
      </section>
      <SiteFooter />
    </main>
  );
}
