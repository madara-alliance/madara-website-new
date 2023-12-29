import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";

// Font files can be colocated inside of `app`
const Geist = localFont({
  src: [
    { path: "../assets/fonts/Geist-Medium.woff2", weight: "500" },
    { path: "../assets/fonts/Geist-SemiBold.woff2", weight: "600" },
    { path: "../assets/fonts/Geist-Bold.woff2", weight: "700" },
    { path: "../assets/fonts/Geist-Regular.woff2", weight: "400" },
  ],
  display: "block",
});

export const metadata: Metadata = {
  title: "Madara: Building the world integrity web",
  description: "Madara is an open source framework that allows you to build app chains powered by Cairo and Starknet technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0"
        />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Madara is an open source framework that allows you to build app chains
          powered by Cairo and Starknet technology"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Madara is an open source framework that allows you to build app chains
          powered by Cairo and Starknet technology"
          key="og:title"
        />
        <meta
          property="og:description"
          content="Madara: Building the world integrity web"
          key="og:description"
        />
        <link rel="icon" href="/favicon.ico" />
        <title>Madara: Building the world integrity web</title>
      </Head>
      <body className={Geist.className}>{children}</body>
    </html>
  );
}
