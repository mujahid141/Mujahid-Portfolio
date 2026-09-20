"use client";

import { useState } from "react";
import { site } from "@/data/portfolio";

type Status = "idle" | "sending" | "sent" | "error" | "unconfigured";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok) {
        setStatus("sent");
        form.reset();
        return;
      }
      if (json.error === "not_configured") {
        setStatus("unconfigured");
        return;
      }
      const messages: Record<string, string> = {
        invalid_name: "Enter your name.",
        invalid_email: "Enter a valid email address.",
        invalid_message: "Write a message of at least 10 characters.",
      };
      setError(messages[json.error] ?? "Something went wrong sending your message. Please try again.");
      setStatus("error");
    } catch {
      setError("Couldn't reach the server. Check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="form-notice form-success" role="status">
        <h3>Message sent</h3>
        <p>Thanks for reaching out. I&apos;ll reply to your email within two working days.</p>
        <button type="button" className="btn btn-secondary btn-sm" onClick={() => setStatus("idle")}>
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate={false}>
      <div className="field">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" autoComplete="name" required maxLength={100} />
      </div>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" autoComplete="email" required maxLength={200} />
      </div>
      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={6} required minLength={10} maxLength={5000} />
      </div>
      {/* Honeypot: hidden from people, tempting to bots */}
      <div className="hp" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="form-footer">
        <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send message"}
        </button>
        <p className="form-status" role="alert">
          {status === "error" && error}
          {status === "unconfigured" && (
            <>
              The contact form isn&apos;t set up yet. Email me at{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a> instead.
            </>
          )}
        </p>
      </div>
    </form>
  );
}
