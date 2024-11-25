import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Food Zone",
  description: "Are your hungry? Let's eat together !!",
};

import { Inter } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="bg-white2 h-[100vh]">
          <div className="max-w-[1920px] mx-auto ml-4 md:ml-16 lg:ml-28">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
