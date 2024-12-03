import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";



export const metadata: Metadata = {
  title: "Code & Connect",
  description: "At Code & Connect, we turn ideas into reality with innovative software and seamless connectivity solutions. Let’s build the future together.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
