import Image from "next/image";
import Link from "next/link";
import ScrollAnimator from "../../../components/ScrollAnimator";
import { products } from "../../../data/products";

export const metadata = {
  title: "Samagra Collection",
  description:
    "A curation of objects chosen for presence and longevity. Explore the Samagra collection at Sunduuk.",
};

const samagraSlugs = ["thecamelsrest", "virasatinbrass"];

export default function SamagraPage() {
  const samagraProducts = samagraSlugs
    .map((s) => products.find((p) => p.slug === s))
    .filter(Boolean);

  return (
    <>
      <ScrollAnimator />

      <section className="curation-hero" data-animate="0">
        <div className="curation-hero-image">
          <Image
            src="https://framerusercontent.com/images/wpO1atbjWmn0ceYZFNuBMgQ24iU.png"
            alt="Samagra Collection"
            width={1136}
            height={944}
            quality={90}
            priority
          />
          <div className="curation-hero-overlay">
            <h1>Samagra</h1>
            <p>A curation of objects chosen for presence and longevity.</p>
          </div>
        </div>
      </section>

      <section className="curation-grid-section">
        <div className="shop-grid">
          {samagraProducts.map((product, i) => (
            <Link
              key={product.slug}
              href={`/shop/${product.slug}`}
              className="product-card"
              data-animate={i * 100}
            >
              <Image
                src={product.mainImage}
                alt={product.name}
                width={800}
                height={600}
                quality={90}
              />
              <div className="product-card-overlay">
                <h3>{product.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
