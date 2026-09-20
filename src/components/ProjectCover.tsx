import Image from "next/image";
import type { Project } from "@/data/portfolio";

/** Uses the project's screenshot when provided, otherwise draws a simple geometric cover. */
export default function ProjectCover({ project, priority = false }: { project: Project; priority?: boolean }) {
  const { bg, fg, variant } = project.cover;

  if (project.image) {
    return (
      <div className="cover">
        <Image
          src={project.image}
          alt={`Screenshot of ${project.title}`}
          fill
          sizes="(max-width: 800px) 100vw, 50vw"
          priority={priority}
          className="cover-img"
        />
      </div>
    );
  }

  return (
    <div className="cover" style={{ background: bg }} aria-hidden="true">
      <svg viewBox="0 0 400 250" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
        {variant === 0 && (
          <g fill="none" stroke={fg} strokeWidth="10">
            <circle cx="290" cy="125" r="34" fill={fg} stroke="none" />
            <circle cx="290" cy="125" r="78" opacity=".7" />
            <circle cx="290" cy="125" r="122" opacity=".4" />
            <circle cx="290" cy="125" r="166" opacity=".2" />
          </g>
        )}
        {variant === 1 && (
          <g fill={fg}>
            {[40, 90, 60, 130, 100, 170, 140].map((h, i) => (
              <rect key={i} x={50 + i * 48} y={230 - h} width="30" height={h} rx="4" opacity={0.35 + i * 0.09} />
            ))}
          </g>
        )}
        {variant === 2 && (
          <g fill={fg}>
            {Array.from({ length: 6 }).flatMap((_, r) =>
              Array.from({ length: 10 }).map((__, c) => (
                <circle key={`${r}-${c}`} cx={40 + c * 36} cy={40 + r * 34} r={(r + c) % 3 === 0 ? 11 : 5} opacity={(r + c) % 3 === 0 ? 1 : 0.5} />
              )),
            )}
          </g>
        )}
        {variant === 3 && (
          <g stroke={fg} strokeWidth="12" strokeLinecap="round" opacity=".9">
            {Array.from({ length: 9 }).map((_, i) => (
              <line key={i} x1={i * 60 - 60} y1="270" x2={i * 60 + 100} y2="-20" opacity={0.25 + (i % 3) * 0.3} />
            ))}
          </g>
        )}
        {variant === 4 && (
          <g fill="none" stroke={fg} strokeWidth="14" strokeLinecap="round">
            <path d="M40 200 A110 110 0 0 1 260 200" opacity=".9" />
            <path d="M90 200 A60 60 0 0 1 210 200" opacity=".6" />
            <path d="M140 200 A10 10 0 0 1 160 200" opacity=".4" />
            <circle cx="320" cy="70" r="26" fill={fg} stroke="none" />
          </g>
        )}
      </svg>
    </div>
  );
}
