import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Sunduuk — Curated Finds Rooted in Indian Craft",
  description:
    "Sunduuk curates authentic Indian antiques, handcrafted furniture, and rare heritage objects shaped by time and tradition.",
  icons: {
    icon: "https://framerusercontent.com/images/SU7nWf96j7W2ahCfFJa1OXSeeQ.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Header />
        <main className="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
