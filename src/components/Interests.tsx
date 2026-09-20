import { interests } from "@/data/portfolio";

export default function Interests() {
  return (
    <section id="interests" className="section">
      <div className="container">
        <div className="section-head">
          <div>
            <h2>Interests</h2>
            <p className="section-intro">What I do away from the keyboard, and what it teaches me about my work.</p>
          </div>
        </div>
        <ul className="interest-grid">
          {interests.map((i) => (
            <li key={i.title} style={{ background: i.bg, color: i.fg }}>
              <h3>{i.title}</h3>
              <p>{i.note}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
