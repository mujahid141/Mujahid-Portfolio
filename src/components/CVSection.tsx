import { site } from "@/data/portfolio";
import { DownloadIcon } from "./Hero";

export default function CVSection() {
  return (
    <section id="cv" className="cv-band" aria-labelledby="cv-title">
      <div className="container cv-inner">
        <div>
          <h2 id="cv-title">Want the full picture?</h2>
          <p>My CV covers my experience, education, and certifications in full.</p>
          <p className="cv-meta">
            PDF, {site.cv.pages}. Updated {site.cv.updated}.
          </p>
        </div>
        <div className="cv-actions">
          <a className="btn btn-dark" href={site.cv.file} download={site.cv.downloadName}>
            <DownloadIcon /> Download CV
          </a>
          <a className="btn btn-outline-dark" href={site.cv.file} target="_blank" rel="noopener noreferrer">
            Preview in browser
          </a>
        </div>
      </div>
    </section>
  );
}
