import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/resetStyles.scss";
import styles from "./layout.module.scss";
import { Header } from "@/components";
import { ActiveSectionContextProvider } from "@/context/activeSectionContext";

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
    <html lang="en" className={styles.html}>
      <body className={`${inter.className} ${styles.body}`}>
        <ActiveSectionContextProvider>
          <Header />
          {children}
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
