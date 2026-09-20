import Image from "next/image";
import { initials, site } from "@/data/portfolio";

export default function Hero() {
  const [first, ...rest] = site.name.split(" ");
  const last = rest.join(" ");

  return (
    <section id="top" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="hero-role">{site.role}</p>
          <h1 className="hero-name" aria-label={site.name}>
            <span aria-hidden="true">{first}</span>
            {last && <span aria-hidden="true">{last}</span>}
          </h1>
          <p className="hero-lead">{site.lead}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={site.cv.file} download={site.cv.downloadName}>
              <DownloadIcon /> Download CV
            </a>
            <a className="btn btn-secondary" href="#projects">
              See my projects
            </a>
          </div>
        </div>

        <figure className="portrait">
          {site.photo ? (
            <Image
              src={site.photo}
              alt={`Portrait of ${site.name}`}
              width={480}
              height={600}
              priority
              className="portrait-img"
            />
          ) : (
            <span className="portrait-mono" aria-hidden="true">
              {initials(site.name)}
            </span>
          )}
        </figure>
      </div>

      <div className="container">
        <dl className="facts">
          <div>
            <dt>Based in</dt>
            <dd>{site.location}</dd>
          </div>
          <div>
            <dt>Availability</dt>
            <dd>{site.availability}</dd>
          </div>
          <div>
            <dt>Email</dt>
            <dd>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </dd>
          </div>
        </dl>

        <div className="about">
          <h2 className="about-title">About me</h2>
          <div className="about-body">
            {site.about.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 20h16" />
    </svg>
  );
}
