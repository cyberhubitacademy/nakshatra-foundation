import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Nakshatra Foundation | Every future deserves a chance",
  description:
    "Discover education, skills, career opportunities and community initiatives with Nakshatra Foundation. A frontend demonstration of a brighter, more inclusive future.",
  robots: { index: false, follow: false },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
