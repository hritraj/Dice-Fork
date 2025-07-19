import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/components/AuthProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dice & Fork - Where Great Food Meets Great Games",
  description: "A unique café experience where delicious food, artisan coffee, and board games come together. Enjoy our cozy atmosphere while playing your favorite games with friends.",
  keywords: "café, board games, coffee, food, gaming café, social dining, tabletop games, restaurant",
  authors: [{ name: "Dice & Fork" }],
  openGraph: {
    title: "Dice & Fork - Where Great Food Meets Great Games",
    description: "A unique café experience where delicious food, artisan coffee, and board games come together.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dice & Fork - Where Great Food Meets Great Games",
    description: "A unique café experience where delicious food, artisan coffee, and board games come together.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
