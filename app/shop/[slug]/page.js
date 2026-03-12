import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "../../data/products";
import ScrollAnimator from "../../components/ScrollAnimator";

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return { title: "Product Not Found" };
  return {
    title: `${product.name} — Sunduuk`,
    description: product.tagline,
    openGraph: {
      title: `${product.name} — Sunduuk`,
      description: product.tagline,
      images: [{ url: product.heroImage, width: 1200, height: 630 }],
    },
  };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = product.related
    .map((s) => products.find((p) => p.slug === s))
    .filter(Boolean);

  const bestPairedProduct = product.bestPaired
    ? products.find((p) => p.slug === product.bestPaired.slug)
    : null;

  const allGalleryImages = [
    product.mainImage,
    product.secondaryImage,
    ...product.galleryImages,
  ];

  return (
    <div className="product-detail">
      <ScrollAnimator />

      {/* Full-bleed Hero Image */}
      <div className="product-hero-fullbleed" data-animate="0">
        <Image
          src={product.heroImage}
          alt={product.name}
          width={2400}
          height={1792}
          quality={85}
          priority
          sizes="100vw"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div className="product-hero-name">
          <h1>{product.name}</h1>
        </div>
      </div>

      {/* Product Info Section */}
      <div className="product-info-section" data-animate="0">
        <p className="product-tagline">{product.tagline}</p>
        <a
          href="https://wa.me/message/ZH7U2D3F7TIWM1"
          target="_blank"
          rel="noopener noreferrer"
          className="product-enquire"
        >
          Enquire now
        </a>
      </div>

      {/* Image Gallery */}
      <div className="product-gallery" data-animate="0">
        {allGalleryImages.map((src, i) => (
          <div className="product-gallery-item" key={i}>
            <Image
              src={src}
              alt={`${product.name} — view ${i + 1}`}
              width={1200}
              height={900}
              quality={85}
              sizes="(max-width: 810px) 100vw, 50vw"
            />
          </div>
        ))}
      </div>

      {/* Product Story */}
      <div className="product-story" data-animate="0">
        <h2>Product Story</h2>
        {product.story.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      {/* Best Paired With */}
      {product.bestPaired && (
        <div className="product-best-paired" data-animate="0">
          <div className="best-paired-card">
            <h3>Best Paired With</h3>
            <p>
              <strong>{product.bestPaired.name}</strong> &mdash;{" "}
              {product.bestPaired.note}
            </p>
            {bestPairedProduct && (
              <Link href={`/shop/${product.bestPaired.slug}`}>
                View {product.bestPaired.name}
              </Link>
            )}
          </div>
        </div>
      )}

      {/* Specifications */}
      <div className="product-specs" data-animate="0">
        <h2>Specifications</h2>
        <table className="specs-table">
          <tbody>
            <tr>
              <td>Length</td>
              <td>{product.specs.length}</td>
            </tr>
            <tr>
              <td>Breadth</td>
              <td>{product.specs.breadth}</td>
            </tr>
            <tr>
              <td>Height</td>
              <td>{product.specs.height}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Delivery + Payment Cards */}
      <div className="product-info-cards" data-animate="0">
        <div className="info-card">
          <h3>Delivery</h3>
          <ul>
            <li>
              Orders are typically delivered within 4–6 weeks from the date of
              order confirmation.
            </li>
            <li>
              Deliveries to locations outside India may require an additional
              7–8 business days.
            </li>
            <li>
              Shipping is available worldwide. Delivery charges are calculated
              separately based on the delivery location.
            </li>
          </ul>
        </div>
        <div className="info-card">
          <h3>Payment</h3>
          <ul>
            <li>We accept payments via Cards and UPI.</li>
            <li>
              Cash on Delivery (COD) is not available for this product.
            </li>
          </ul>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="product-related" data-animate="0">
          <h2>You may also like</h2>
          <div className="related-grid">
            {relatedProducts.map((rp) => (
              <Link
                key={rp.slug}
                href={`/shop/${rp.slug}`}
                className="product-card"
              >
                <Image
                  src={rp.mainImage}
                  alt={rp.name}
                  width={800}
                  height={600}
                  quality={85}
                  sizes="(max-width: 810px) 100vw, 50vw"
                />
                <div className="product-card-overlay">
                  <h3>{rp.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
