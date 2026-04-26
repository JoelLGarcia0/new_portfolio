import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Joel Garcia | Backend API Engineer",
  description:
    "Backend API Engineer building reliable APIs, scalable systems, and production services with Python, Django, and PostgreSQL.",
  icons: {
    icon: "/jglogo.ico",
  },
  metadataBase: new URL("https://joellgarcia.com"),
  keywords: [
    "backend engineer",
    "API engineer",
    "Python developer",
    "Django developer",
    "PostgreSQL",
    "Miami software engineer",
  ],
  openGraph: {
    title: "Joel Garcia | Backend API Engineer",
    description:
      "Backend API Engineer building reliable APIs and scalable systems with Python, Django, and PostgreSQL.",
    url: "https://joellgarcia.com",
    siteName: "Joel Garcia",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joel Garcia | Backend API Engineer",
    description:
      "Backend API Engineer building reliable APIs and scalable systems with Python, Django, and PostgreSQL.",
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
                if (theme === 'light') return;
                if (theme === 'dark' || prefersDark) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className={`${mono.variable} font-mono antialiased`}>
        {children}
      </body>
    </html>
  );
}
