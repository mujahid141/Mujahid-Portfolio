"use client";

import Link from "next/link";
import { useState } from "react";
import { projects } from "@/data/portfolio";
import ProjectCover from "./ProjectCover";

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

export default function Projects() {
  const [category, setCategory] = useState("All");
  const visible = projects.filter((p) => category === "All" || p.category === category);
  const featuredSlug = visible.find((p) => p.featured)?.slug;

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-head">
          <div>
            <h2>Projects</h2>
            <p className="section-intro">A selection of things I&apos;ve designed and built. Open one to see the full story.</p>
          </div>
          <div className="filters" role="group" aria-label="Filter projects by type">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                className="chip"
                aria-pressed={category === c}
                onClick={() => setCategory(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <p className="sr-only" aria-live="polite">
          Showing {visible.length} {visible.length === 1 ? "project" : "projects"}
        </p>

        <ul className="project-grid">
          {visible.map((p) => (
            <li key={p.slug} className={p.slug === featuredSlug ? "project is-featured" : "project"}>
              <Link href={`/projects/${p.slug}`} className="project-link">
                <ProjectCover project={p} />
                <div className="project-body">
                  <div className="project-meta">
                    <span>{p.category}</span>
                    <span>{p.year}</span>
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.summary}</p>
                  <ul className="tags" aria-label="Technologies">
                    {p.stack.slice(0, 4).map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
