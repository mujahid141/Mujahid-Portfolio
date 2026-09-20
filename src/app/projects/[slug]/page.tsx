import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProjectCover from "@/components/ProjectCover";
import { getProject, projects } from "@/data/portfolio";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    openGraph: { title: project.title, description: project.summary },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <article className="project-page">
      <div className="container">
        <Link href="/#projects" className="back-link">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M19 12H5m0 0l6-6m-6 6l6 6" />
          </svg>
          All projects
        </Link>

        <header className="project-head">
          <h1>{project.title}</h1>
          <p className="project-lead">{project.summary}</p>
          <dl className="facts facts-compact">
            <div>
              <dt>Type</dt>
              <dd>{project.category}</dd>
            </div>
            <div>
              <dt>Year</dt>
              <dd>{project.year}</dd>
            </div>
            <div>
              <dt>My role</dt>
              <dd>{project.role}</dd>
            </div>
          </dl>
          {(project.links.live || project.links.repo) && (
            <div className="hero-actions">
              {project.links.live && (
                <a className="btn btn-primary" href={project.links.live} target="_blank" rel="noopener noreferrer">
                  Visit live site
                </a>
              )}
              {project.links.repo && (
                <a className="btn btn-secondary" href={project.links.repo} target="_blank" rel="noopener noreferrer">
                  View source code
                </a>
              )}
            </div>
          )}
        </header>

        <div className="project-hero-cover">
          <ProjectCover project={project} priority />
        </div>

        <div className="project-content">
          <section>
            <h2>The problem</h2>
            <p>{project.problem}</p>
          </section>
          <section>
            <h2>What I built</h2>
            <ul className="bullets">
              {project.built.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </section>
          <section>
            <h2>The result</h2>
            <p>{project.outcome}</p>
          </section>
          <section>
            <h2>Built with</h2>
            <ul className="tags tags-lg">
              {project.stack.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </section>
        </div>

        <Link href={`/projects/${next.slug}`} className="next-project">
          <span>Next project</span>
          <strong>{next.title}</strong>
        </Link>
      </div>
    </article>
  );
}
