import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Prediction Dashboard",
  description: "AI Prediction Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-[#374151] bg-[#3B82F6]`}
      >
        <div className="nav-div flex  justify-center items-center my-9">
          <nav className="w-[60%] h-16 text-lg font-semibold bg-white shadow-upper rounded-full flex justify-center items-center gap-6">
            <Link className="hover:text-[#3B82F6]/50" href={"/chat"}>
              Analyzer
            </Link>
            <Link className="hover:text-[#3B82F6]/50" href={"/chat/chat-bot"}>
              Chat Bot
            </Link>
          </nav>
        </div>
        {children}
      </body>
    </html>
  );
}