import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/app/components/Footer";
import { Inter, Heebo } from "next/font/google";
import Navbar from "@/app/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const heebo = Heebo({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={heebo.className}>
        <Navbar fontFamily={inter.className} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
