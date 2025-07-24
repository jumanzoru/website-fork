import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://jumanzor.vercel.app"),
  alternates: {
    canonical: "https://jumanzor.vercel.app",
  },
  title: "Jefferson Umanzor - Software Engineer & Math-CS Student at UCSD",
  description:
    "Jefferson Umanzor is a Mathematics–Computer Science student at UCSD passionate about AI, software development, and impactful tech.",
  keywords:
    "Jefferson Umanzor, Software Engineer, UCSD, AI, Machine Learning, Backend Development, Full Stack, MERN, Research, Environmental Tech",
  openGraph: {
    locale: "en_US",
    siteName: "Jefferson Umanzor",
    type: "website",
    title: "Jefferson Umanzor",
    description:
      "Jefferson Umanzor is a Mathematics–Computer Science student at UCSD passionate about AI, software development, and impactful tech.",
    url: "https://jumanzor.vercel.app",
    images: [
      {
        url: "./og-jumanzor.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jefferson Umanzor",
  },
  icons: {
    icon: "/favicon.ico", // 👈 Make sure this exists in the public folder
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
