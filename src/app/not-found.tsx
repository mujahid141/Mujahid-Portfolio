import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container not-found">
      <h1>Page not found</h1>
      <p>That page doesn&apos;t exist or has moved. Head back to the homepage to keep browsing.</p>
      <Link className="btn btn-primary" href="/">
        Go to homepage
      </Link>
    </section>
  );
}
