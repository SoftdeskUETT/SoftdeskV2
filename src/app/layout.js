import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Softdesk",
  description: "Technical Society SoftDesk, Uet Taxila",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <html lang="en">
        <body className={inter.className}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
}
