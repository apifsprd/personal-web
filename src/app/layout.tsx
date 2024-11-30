import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const montserrat = localFont({
  src: "./fonts/Montserrat-VariableFont_wght.ttf",
  variable: "--font-montserrat",
  weight: "100 900",
});
const lora = localFont({
  src: "./fonts/Lora-VariableFont_wght.ttf",
  variable: "--font-lora",
  weight: "100 900",
});
const hind = localFont({
  src: "./fonts/HindMadurai-Regular.ttf",
  variable: "--font-hind",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Apif Supriadi - Personal Web",
  description: "Apif Supriadi - Personal Web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${lora.variable} ${hind.variable}  antialiased bg-slate-50`}
      >
        {children}
      </body>
    </html>
  );
}
