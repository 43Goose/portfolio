import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navbar/Navbar";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const kanit = Kanit({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Owen Edwards",
  description: "Developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ scrollBehavior: 'smooth' }} suppressHydrationWarning>
      <body className={`${kanit.className} bg-primary text-light`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
