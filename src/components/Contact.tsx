import { site } from "@/data/portfolio";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container split">
        <div className="split-head">
          <h2>Contact</h2>
          <p className="section-intro">
            Have a role, a project, or a question? Send a message and I&apos;ll reply within two working days.
          </p>
          <p className="contact-direct">
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
          <ul className="social-list">
            {site.socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noopener noreferrer">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="split-body">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
