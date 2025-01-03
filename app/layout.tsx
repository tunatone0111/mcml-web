import type { Metadata } from "next";
import localFont from "next/font/local";
import "./styles/bootstrap.min.css";
import "./styles/globals.css";
import "./styles/font-awesome.min.css";
import Script from "next/script";
import Nav from "./nav";
import Footer from "./footer";

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "MCML Group",
  description: "MCML Group",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pretendard.variable}`}>
        <Nav />
        {children}
        <br />
        <Footer />
        &nbsp;
      </body>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossOrigin="anonymous"
      ></Script>
    </html>
  );
}
