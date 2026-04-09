import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Althof Rafaella Ramdhan — Fullstack Engineer",
  description:
    "Fullstack developer with 3+ years experience in Golang, Node.js & Java. Passionate about blockchain and building decentralized apps.",
  keywords: [
    "fullstack engineer",
    "golang",
    "nodejs",
    "blockchain",
    "backend engineer",
    "portfolio",
  ],
  authors: [{ name: "Althof Rafaella Ramdhan" }],
  openGraph: {
    title: "Althof Rafaella Ramdhan — Fullstack Engineer",
    description:
      "Fullstack developer with 3+ years experience in Golang, Node.js & Java.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
