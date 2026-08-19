import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://jorgen-konini.github.io";
const title = "Jorgen Konini — Software Engineer (React & React Native)";
const description =
  "Software Engineer building web & mobile products end to end — React/React Native frontends in TypeScript, Go/PostgreSQL backends. 5+ years shipping for US healthcare, HR, and legal companies. Based in Albania, open to remote.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "Jorgen Konini",
    "Software Engineer",
    "React Developer",
    "React Native Developer",
    "TypeScript",
    "Frontend Engineer",
    "Full Stack Developer",
    "Albania",
    "Remote Developer",
  ],
  authors: [{ name: "Jorgen Konini", url: siteUrl }],
  creator: "Jorgen Konini",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Jorgen Konini",
    title,
    description,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Jorgen Konini — Software Engineer, React & React Native",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jorgen Konini",
  url: siteUrl,
  jobTitle: "Software Engineer",
  description:
    "Software Engineer specialising in React, React Native, and TypeScript, with Go/PostgreSQL backend experience.",
  email: "mailto:jorgenkonini@gmail.com",
  address: { "@type": "PostalAddress", addressCountry: "AL" },
  sameAs: [
    "https://github.com/Jorgen-Konini",
    "https://www.linkedin.com/in/jorgen-konini-635722255",
  ],
  knowsAbout: [
    "React",
    "React Native",
    "TypeScript",
    "JavaScript",
    "Go",
    "PostgreSQL",
    "REST APIs",
    "LLM integration",
    "Agile software development",
  ],
  worksFor: { "@type": "Organization", name: "Ritech International AG" },
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Universiteti Mesdhetar i Shqipërisë",
    },
    { "@type": "CollegeOrUniversity", name: "Epoka University" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
        />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
