import type { Metadata } from "next";
import localFont from "next/font/local";
import { StoreProvider } from "./stores";
import "./global.scss";
import RootLayoutProvider from "./rootLayoutProvider";

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
const pingfang = localFont({
  src: './fonts/PingFang_Medium_downcc.otf',
  variable: "--font-pingfang",
  weight: "100 900",
})

export const metadata: Metadata = {
  title: "SVIWO",
  description: "SVIWO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pingfang.variable} antialiased`}
      >
        <StoreProvider>
          <RootLayoutProvider>
            {children}
          </RootLayoutProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
