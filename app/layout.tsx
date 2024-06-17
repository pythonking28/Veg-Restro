import type { Metadata } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "./component/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

const barlow_Condensed = Barlow_Condensed({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Veg Restro",
  description: "A resturant to enjoy veg delicacies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="16x16" />
      </head>
      <body className={barlow_Condensed.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
