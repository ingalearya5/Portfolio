import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#080C14",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Arya Ingale | Full-Stack & AI Engineer",
  description: "Portfolio of Arya Ingale – Full-Stack & AI Engineer building GenAI products with Next.js, React, FastAPI, LangChain and Gemini, deployed on GCP & AWS (Google Cloud ACE Certified).",
  keywords: [
    "Full-Stack Engineer", "AI Engineer", "Generative AI", "LLM", "RAG", "Next.js", "React", "FastAPI", "DevOps",
    "Platform Engineer",
    "Cloud Engineer",
    "Terraform",
    "Kubernetes",
    "GKE",
    "Amazon ECS",
    "AWS",
    "Google Cloud",
    "Associate Cloud Engineer",
    "Arya Ingale",
    "CI/CD"
  ],
  authors: [{ name: "Arya Ingale", url: "https://github.com/ingalearya5" }],
  creator: "Arya Ingale",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/ingalearya5",
    title: "Arya Ingale | Full-Stack & AI Engineer",
    description: "Full-Stack & AI Engineer building GenAI apps with Next.js, FastAPI, LangChain and Gemini, deployed on GCP & AWS.",
    siteName: "Arya Ingale Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arya Ingale | Full-Stack & AI Engineer",
    description: "Full-Stack & AI Engineer: Next.js, FastAPI, LangChain, Gemini, GCP & AWS.",
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark h-full antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
      <body className="min-h-full flex flex-col bg-[#080C14] text-slate-100 font-sans">{children}</body>
    </html>
  );
}
