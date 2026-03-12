import Image from "next/image";
import Link from "next/link";
import ScrollAnimator from "../../../components/ScrollAnimator";
import { products } from "../../../data/products";

export const metadata = {
  title: "Saanjh Collection",
  description:
    "A shared language of rare craft and form. Explore the Saanjh collection at Sunduuk.",
};

const saanjhSlugs = ["thelastoar", "docksidedrift", "thebullcartarchive"];

export default function SaanjhPage() {
  const saanjhProducts = saanjhSlugs
    .map((s) => products.find((p) => p.slug === s))
    .filter(Boolean);

  return (
    <>
      <ScrollAnimator />

      <section className="curation-hero" data-animate="0">
        <div className="curation-hero-image">
          <Image
            src="https://framerusercontent.com/images/Pg9dihypbqjYboSe5zrlozgbQ.png"
            alt="Saanjh Collection"
            width={1136}
            height={944}
            quality={90}
            priority
          />
          <div className="curation-hero-overlay">
            <h1>Saanjh</h1>
            <p>A shared language of rare craft and form.</p>
          </div>
        </div>
      </section>

      <section className="curation-grid-section">
        <div className="shop-grid">
          {saanjhProducts.map((product, i) => (
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
