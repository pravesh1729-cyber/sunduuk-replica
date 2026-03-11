import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Sunduuk | Authentic Indian Antiques & Handcrafted Heritage Furniture",
  description:
    "Sunduuk curates authentic Indian antiques, handcrafted furniture, and rare heritage objects shaped by time and tradition. Each piece is rare, original and chosen slowly, and meant to live on.",
  icons: {
    icon: "https://framerusercontent.com/images/SU7nWf96j7W2ahCfFJa1OXSeeQ.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
