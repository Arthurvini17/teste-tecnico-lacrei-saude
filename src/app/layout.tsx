import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', "100", "200", "300", "500", "600", "700", "800", "900"],
  style: "normal",
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Lacrei Saúde",
  description: "Lacrei Saúde - Cuidado de saúde que respeita e acolhe todas as pessoas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
