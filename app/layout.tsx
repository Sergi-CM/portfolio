import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./resetStyles.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sergi | Portfolio",
  description: "A portfolio of my developer experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
