import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LanguageSelectionDialog from "./components/language-picker";
import { LanguageProvider } from "@/context/LanguageContext";
import { SheetDemo } from "./components/sidesheet";
import { RsvpDialog } from "./components/rsvp";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Evagianny & Mitchell Wedding",
  description: "The wedding of Evagianny and Mitchell",
  icons:"/monograma1.jpeg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <LanguageProvider>

        <body
          className={`${geistSans.variable} ${geistMono.variable} relative antialiased`}
        >
          <SheetDemo />
          <LanguageSelectionDialog />
          <div className="fixed z-50 bottom-5 left-1/2 -translate-x-1/2 animate-bounce duration-[2000ms]">
            <RsvpDialog />
          </div>

          {children}
        </body>
      </LanguageProvider>

    </html>
  );
}
