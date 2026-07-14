import type { Metadata } from "next";
import "./globals.css";

const title = "Yiming Liu — Interfacial Science for Circular Water Systems";
const description = "Yiming Liu develops materials and processes for critical mineral recovery, material-water interfaces, and brine concentration processes.";

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
