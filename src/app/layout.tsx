import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import DarkModeToggle from "@/components/DarkModeToggle";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Joel Garcia | Full-Stack Developer",
  description:
    "Full-stack developer building web applications with React, Next.js, Django, and AI tools. Based in Miami, FL.",
  icons: {
    icon: "/jglogo.ico", // Customize with your favicon path
  },
  metadataBase: new URL("https://joellgarcia.com"), // replace with your domain
  keywords: [
    "full-stack developer",
    "React developer",
    "Next.js portfolio",
    "Django developer",
    "Miami web developer",
    "AI developer portfolio",
  ],
  openGraph: {
    title: "Joel Garcia | Full-Stack Developer",
    description:
      "Showcasing full-stack projects built with React, Next.js, Django, and OpenAI.",
    url: "https://joelgarcia.dev",
    siteName: "Joel Garcia Portfolio",
    images: [
      {
        url: "https://joelgarcia.dev/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Joel Garcia Full-Stack Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joel Garcia | Full-Stack Developer",
    description:
      "Explore Joel Garcia's portfolio with modern web projects and AI-powered tools.",
    images: ["https://joelgarcia.dev/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                const theme = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (theme === 'dark' || (!theme && prefersDark)) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body>
        <div className="fixed top-4 right-4 z-50">
          <DarkModeToggle />
        </div>
        {children}
      </body>
    </html>
  );
}
