import ShopContent from "./ShopContent";

export const metadata = {
  title: 'Shop',
  description: 'Explore our curated collection of authentic Indian antiques, handcrafted heritage furniture, and rare objects. Each piece is one of a kind.',
  openGraph: {
    title: 'Shop — Sunduuk',
    description: 'Discover handpicked antique furniture and heritage objects from India.',
    images: ['https://framerusercontent.com/images/IVivzN6Ol0LRAxxwFavYSLNWYDI.png'],
  },
};

export default function ShopPage() {
  return <ShopContent />;
}
