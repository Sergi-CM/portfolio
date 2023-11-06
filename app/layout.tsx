import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/resetStyles.scss";
import styles from "./layout.module.scss";
import { Header } from "@/components";

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
      <body className={`${inter.className} ${styles.body}`}>
        <div className={styles["bg-gradient-1"]}></div>
        <div className={styles["bg-gradient-2"]}></div>

        <Header />
        {children}
      </body>
    </html>
  );
}
