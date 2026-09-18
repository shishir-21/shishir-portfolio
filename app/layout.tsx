import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shishir Mahato — Full Stack Developer",
  description:
    "Portfolio of Shishir Mahato — Full Stack Developer and AI Engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
