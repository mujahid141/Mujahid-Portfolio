"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navItems, site } from "@/data/portfolio";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  // Highlight the nav link for the section currently in view.
  useEffect(() => {
    const ids = ["top", ...navItems.map((n) => n.id)];
    const els = ids.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => !!el);
    if (!els.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id === "top" ? "" : entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          {site.name}
        </Link>

        <nav className="nav" aria-label="Main">
          <ul id="nav-list" className={open ? "nav-list is-open" : "nav-list"}>
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={`/#${item.id}`}
                  className="nav-link"
                  aria-current={active === item.id ? "true" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <a className="btn btn-primary btn-sm" href={site.cv.file} download={site.cv.downloadName}>
            Download CV
          </a>
          <ThemeToggle />
          <button
            type="button"
            className="icon-btn menu-toggle"
            aria-expanded={open}
            aria-controls="nav-list"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
