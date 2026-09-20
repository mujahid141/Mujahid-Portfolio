import { site } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
        <ul className="social-list social-inline">
          {site.socials.map((s) => (
            <li key={s.label}>
              <a href={s.href} target="_blank" rel="noopener noreferrer">
                {s.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#main">Back to top</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
