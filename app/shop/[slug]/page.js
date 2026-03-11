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

  return (
    <div className="product-detail">
      {/* Hero Section */}
      <div className="product-hero-section">
        <ScrollAnimator>
          <div className="product-hero-image">
            <Image
              src={product.heroImage}
              alt={product.name}
              width={800}
              height={1000}
              quality={90}
              priority
            />
          </div>
        </ScrollAnimator>
        <ScrollAnimator delay={150}>
          <div className="product-info">
            <h1>{product.name}</h1>
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
        </ScrollAnimator>
      </div>

      {/* Secondary Image */}
      <ScrollAnimator>
        <div className="product-secondary-image">
          <Image
            src={product.secondaryImage}
            alt={`${product.name} detail`}
            width={1200}
            height={500}
            quality={90}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </ScrollAnimator>

      {/* Product Story */}
      <ScrollAnimator>
        <div className="product-story">
          <h2>Product Story</h2>
          {product.story.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </ScrollAnimator>

      {/* Specifications */}
      <ScrollAnimator>
        <div className="product-specs">
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
      </ScrollAnimator>

      {/* Delivery Information */}
      <ScrollAnimator>
        <div className="product-delivery">
          <h2>Delivery Information</h2>
          <ul>
            <li>Orders are typically delivered within 4–6 weeks from the date of order confirmation.</li>
            <li>Deliveries to locations outside India may require an additional 7–8 business days.</li>
            <li>Shipping is available worldwide. Delivery charges are calculated separately based on the delivery location.</li>
          </ul>
        </div>
      </ScrollAnimator>

      {/* Payment Method */}
      <ScrollAnimator>
        <div className="product-payment">
          <h2>Payment Method</h2>
          <ul>
            <li>We accept payments via Cards and UPI.</li>
            <li>Cash on Delivery (COD) is not available for this product.</li>
          </ul>
        </div>
      </ScrollAnimator>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <ScrollAnimator>
          <div className="product-related">
            <h2>You may also like</h2>
            <div className="related-grid">
              {relatedProducts.map((rp) => (
                <Link key={rp.slug} href={`/shop/${rp.slug}`} className="product-card">
                  <Image
                    src={rp.mainImage}
                    alt={rp.name}
                    width={800}
                    height={600}
                    quality={90}
                  />
                  <div className="product-card-overlay">
                    <h3>{rp.name}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </ScrollAnimator>
      )}
    </div>
  );
}
