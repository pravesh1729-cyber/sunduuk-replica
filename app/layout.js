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
  metadataBase: new URL('https://sunduuk-replica.vercel.app'),
  title: {
    default: 'Sunduuk | Authentic Indian Antiques & Handcrafted Heritage Furniture',
    template: '%s | Sunduuk',
  },
  description: 'Sunduuk curates authentic Indian antiques, handcrafted furniture, and rare heritage objects shaped by time and tradition. Each piece is rare, original and chosen slowly, and meant to live on.',
  keywords: [
    'Indian antiques', 'handcrafted furniture', 'heritage furniture', 'antique furniture India',
    'vintage furniture', 'artisan furniture', 'reclaimed wood furniture', 'brass furniture',
    'Indian craft', 'heritage objects', 'antique home decor', 'handmade furniture India',
    'luxury antiques', 'curated furniture', 'one of a kind furniture', 'Indian heritage',
    'traditional Indian furniture', 'antique bookshelf', 'vintage home decor',
    'Sunduuk', 'sunduuk.com', 'antique collectibles India', 'heritage art India',
    'Bangalore furniture', 'India furniture online', 'handpicked antiques'
  ],
  authors: [{ name: 'Sunduuk', url: 'https://sunduuk-replica.vercel.app' }],
  creator: 'Sunduuk',
  publisher: 'Levelgrid Software Development Private Limited',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://sunduuk-replica.vercel.app',
    siteName: 'Sunduuk',
    title: 'Sunduuk | Authentic Indian Antiques & Handcrafted Heritage Furniture',
    description: 'Sunduuk curates authentic Indian antiques, handcrafted furniture, and rare heritage objects shaped by time and tradition.',
    images: [
      {
        url: 'https://framerusercontent.com/images/IVivzN6Ol0LRAxxwFavYSLNWYDI.png',
        width: 1200,
        height: 896,
        alt: 'Sunduuk - Authentic Indian Antiques',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sunduuk | Authentic Indian Antiques & Handcrafted Heritage Furniture',
    description: 'Curated heritage furniture and antiques from India. Each piece is rare, original, and chosen slowly.',
    images: ['https://framerusercontent.com/images/IVivzN6Ol0LRAxxwFavYSLNWYDI.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://sunduuk-replica.vercel.app',
  },
  icons: {
    icon: [
      { url: 'https://framerusercontent.com/images/SU7nWf96j7W2ahCfFJa1OXSeeQ.png', media: '(prefers-color-scheme: light)' },
      { url: 'https://framerusercontent.com/images/lrq972OtmwEpejaB1IaneRpTzV8.png', media: '(prefers-color-scheme: dark)' },
    ],
    apple: 'https://framerusercontent.com/images/VVqD5ePHopBw0AG0KaaPp30oQI.png',
  },
  verification: {
    google: 'placeholder-google-verification',
  },
  category: 'furniture',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://sunduuk-replica.vercel.app/#organization',
      name: 'Sunduuk',
      url: 'https://sunduuk-replica.vercel.app',
      logo: 'https://framerusercontent.com/images/UcvGDEYEOie274SzmAWm8Mspk.png',
      description: 'Sunduuk curates authentic Indian antiques, handcrafted furniture, and rare heritage objects shaped by time and tradition.',
      email: 'help@sunduuk.com',
      telephone: '+917022140225',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Om Chambers, 648/A, 4th Floor, Binnamangala 1st Stage, Indiranagar',
        addressLocality: 'Bangalore',
        addressRegion: 'Karnataka',
        postalCode: '560038',
        addressCountry: 'IN',
      },
      sameAs: ['https://wa.me/919902253378'],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://sunduuk-replica.vercel.app/#website',
      url: 'https://sunduuk-replica.vercel.app',
      name: 'Sunduuk',
      publisher: { '@id': 'https://sunduuk-replica.vercel.app/#organization' },
      description: 'Authentic Indian Antiques & Handcrafted Heritage Furniture',
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://sunduuk-replica.vercel.app/#localbusiness',
      name: 'Sunduuk',
      image: 'https://framerusercontent.com/images/UcvGDEYEOie274SzmAWm8Mspk.png',
      email: 'help@sunduuk.com',
      telephone: '+917022140225',
      url: 'https://sunduuk-replica.vercel.app',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Om Chambers, 648/A, 4th Floor, Binnamangala 1st Stage, Indiranagar',
        addressLocality: 'Bangalore',
        addressRegion: 'Karnataka',
        postalCode: '560038',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 12.9784,
        longitude: 77.6408,
      },
      openingHours: 'Mo-Sa 09:00-20:00',
      priceRange: '$$$$',
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
        <Header />
        <main className="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
