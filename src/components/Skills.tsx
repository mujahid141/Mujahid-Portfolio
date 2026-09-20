import { levelLabels, skillGroups, type Level } from "@/data/portfolio";

function Dots({ level }: { level: Level }) {
  return (
    <span className="dots" role="img" aria-label={levelLabels[level]}>
      {[1, 2, 3].map((n) => (
        <i key={n} className={n <= level ? "on" : undefined} />
      ))}
    </span>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container split">
        <div className="split-head">
          <h2>Skills</h2>
          <p className="section-intro">The tools I reach for, grouped by the kind of work they do.</p>
          <ul className="legend" aria-label="What the dots mean">
            {([3, 2, 1] as Level[]).map((l) => (
              <li key={l}>
                <Dots level={l} /> {levelLabels[l]}
              </li>
            ))}
          </ul>
        </div>

        <div className="split-body">
          {skillGroups.map((group) => (
            <div key={group.title} className="skill-group">
              <div className="skill-group-head">
                <h3>{group.title}</h3>
                <p>{group.description}</p>
              </div>
              <ul className="skill-list">
                {group.skills.map((s) => (
                  <li key={s.name}>
                    <span>{s.name}</span>
                    <Dots level={s.level} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
