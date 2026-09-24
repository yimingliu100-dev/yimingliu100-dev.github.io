import type { Metadata } from "next";
import "./globals.css";

const title = "The Liu Group — EMACS Lab";
const description = "Electrical and Materials Modulation for Circular Water Separations at South Dakota State University.";

export const metadata: Metadata = {
  metadataBase: new URL("https://yimingliu100-dev.github.io"),
  title,
  description,
  openGraph: { title, description, type: "website", images: [{ url: "/og.png", width: 1736, height: 907, alt: title }] },
  twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
