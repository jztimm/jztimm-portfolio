import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jzavier's Portfolio",
  description:
    "Welcome to Jzavier Timm's professional portfolio. Explore my work in front-end development with technologies like React, Next.js, and JavaScript, as well as my experience with back-end solutions using Node.js and .NET. Discover my projects, skills, and experience in delivering performant and user-friendly web solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
