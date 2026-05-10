import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Zory.info - local city portal",
    template: "%s | Zory.info",
  },
  description:
    "A responsive city portal for Zory with events, a service directory, sector search, and an editorial admin panel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
