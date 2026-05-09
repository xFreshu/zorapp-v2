import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Żory.info - lokalny portal miasta",
    template: "%s | Żory.info",
  },
  description:
    "Responsywny portal miejski dla Żor z wydarzeniami, katalogiem usług, wyszukiwarką branż i panelem redakcyjnym.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
