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
  title: "Dice & Fork - Café • Games • Community",
  description: "Where amazing coffee meets epic board games. Join our warm, welcoming community for great food, incredible games, and unforgettable experiences in our social gaming hub.",
  keywords: "board games, café, coffee, gaming, community, events, food, social, strategy games, family games",
  authors: [{ name: "Dice & Fork" }],
  creator: "Dice & Fork",
  publisher: "Dice & Fork",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://diceandfork.com",
    siteName: "Dice & Fork",
    title: "Dice & Fork - Café • Games • Community",
    description: "Where amazing coffee meets epic board games. Join our warm, welcoming community for great food, incredible games, and unforgettable experiences.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dice & Fork - Board Game Café",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dice & Fork - Café • Games • Community",
    description: "Where amazing coffee meets epic board games. Join our warm, welcoming community for great food, incredible games, and unforgettable experiences.",
    images: ["/og-image.png"],
    creator: "@diceandfork",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#8B4513",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
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
