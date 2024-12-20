import type { Metadata } from "next";
import Coiny from "next/font/local";
import "./globals.css";

const coiny = Coiny({
  src: "./fonts/Coiny-Regular.ttf",
  display: "swap",
});

// const sonoMono = Sono({
//   src: "./fonts/Sono-VariableFont_MONO,wght.ttf",
//   display: "swap",
// });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link
          rel="icon"
          type="image/svg+xml"
          href="https://iplawusa.com/wp-content/uploads/2023/09/istockphoto-1396725757-612x612-1.jpg"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Today I Learned</title>
      </head>
      <body className={`${coiny.className} antialiased`}>{children}</body>
    </html>
  );
}
