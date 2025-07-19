import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/components/AuthProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dice & Fork - Premier Board Game Social Club",
  description: "Join our vibrant community of 500+ board game enthusiasts. Experience weekly meetups, tournaments, and social events where strategy meets fun. Discover your next favorite game today!",
  keywords: "board games, social club, gaming community, tournaments, meetups, strategy games, tabletop gaming, board game events",
  authors: [{ name: "Dice & Fork Team" }],
  creator: "Dice & Fork",
  publisher: "Dice & Fork",
  openGraph: {
    title: "Dice & Fork - Premier Board Game Social Club",
    description: "Join our vibrant community of 500+ board game enthusiasts. Experience weekly meetups, tournaments, and social events.",
    url: "https://diceandfork.com",
    siteName: "Dice & Fork",
    type: "website",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Dice & Fork Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dice & Fork - Premier Board Game Social Club",
    description: "Join our vibrant community of 500+ board game enthusiasts.",
    images: ["/logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo.jpg" />
        <meta name="theme-color" content="#7c3aed" />
        <meta name="msapplication-TileColor" content="#7c3aed" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
      >
        <AuthProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1 pt-20">
              {children}
            </main>
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
