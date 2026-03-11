import Image from "next/image";
import SubscribeForm from "./subscribe-form";

export default function Home() {
  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="header-inner">
          <a href="/" className="logo">
            Sunduuk
          </a>
          <nav className="nav">
            <a href="/">Home</a>
            <a href="/shop">Shop</a>
            <a href="/about">About</a>
            <a href="/support">Support</a>
          </nav>
          <div className="header-right">
            <a href="mailto:help@sunduuk.com" className="enquire-btn">
              Enquire now
            </a>
            <button className="mobile-menu-btn" aria-label="Menu">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <p className="hero-label">Timeless Craft</p>
        <h1>Each piece we uncover has lived a life before it found you</h1>
        <a href="/shop" className="hero-cta">
          View all finds
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </a>
      </section>

      {/* Featured Collections Row */}
      <section className="featured-row">
        <div className="featured-grid">
          <div className="featured-card">
            <Image
              src="https://framerusercontent.com/images/IVivzN6Ol0LRAxxwFavYSLNWYDI.png"
              alt="The Last Oar"
              width={1200}
              height={896}
            />
            <div className="featured-card-overlay">
              <h3>The Last Oar</h3>
            </div>
          </div>
          <div className="featured-card">
            <Image
              src="https://framerusercontent.com/images/VqCA4d4WxFboQ7Dz8fbXPbu5dic.png"
              alt="Virasat in Brass"
              width={2400}
              height={1792}
            />
            <div className="featured-card-overlay">
              <h3>Virasat in Brass</h3>
            </div>
          </div>
          <div className="featured-card">
            <Image
              src="https://framerusercontent.com/images/UXCjuijIvcozwf372xAODbL5TE.png"
              alt="The Bullcart Archive"
              width={2400}
              height={1792}
            />
            <div className="featured-card-overlay">
              <h3>The Bullcart Archive</h3>
            </div>
          </div>
        </div>
        <a href="/shop" className="view-all-link">
          View all finds
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            width={16}
            height={16}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </a>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="values-grid">
          <div className="value-item">
            <p className="value-number">01</p>
            <h3>Chosen with Care</h3>
            <p>
              Every Find is selected slowly, guided by history, and
              craftsmanship. We don&apos;t collect in bulk &mdash; we choose
              pieces that feel meaningful, and made to last.
            </p>
          </div>
          <div className="value-item">
            <p className="value-number">02</p>
            <h3>Objects with Presence</h3>
            <p>
              Our pieces aren&apos;t designed to impress at first glance.
              They&apos;re meant to grow on you &mdash; through form, detail,
              and the way they quietly change a space.
            </p>
          </div>
          <div className="value-item">
            <p className="value-number">03</p>
            <h3>Curated with Taste</h3>
            <p>
              Nothing here is ordinary or repeatable. Each Find is handpicked,
              one of a kind, and chosen because it belongs somewhere &mdash; not
              everywhere.
            </p>
          </div>
        </div>
      </section>

      {/* Collections */}
      <section className="collections-section">
        <div className="collections-header">
          <p>Collection of distinctive pieces</p>
        </div>
        <div className="collections-grid">
          <div className="collection-card">
            <Image
              src="https://framerusercontent.com/images/Pg9dihypbqjYboSe5zrlozgbQ.png"
              alt="Saanjh Collection"
              width={1136}
              height={944}
            />
            <div className="collection-info">
              <h3>Saanjh</h3>
              <p>A shared language of rare craft and form.</p>
            </div>
          </div>
          <div className="collection-card">
            <Image
              src="https://framerusercontent.com/images/wpO1atbjWmn0ceYZFNuBMgQ24iU.png"
              alt="Samagra Collection"
              width={1136}
              height={944}
            />
            <div className="collection-info">
              <h3>Samagra</h3>
              <p>
                A curation of objects chosen for presence and longevity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <h2>
          Objects rooted in Indian craft, heritage, and lived history
        </h2>
        <a href="mailto:help@sunduuk.com" className="cta-banner-btn">
          Enquire now
        </a>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-top">
            <div className="footer-brand">
              <h3>Sunduuk</h3>
              <div className="footer-contact">
                <a href="mailto:help@sunduuk.com">help@sunduuk.com</a>
                <a href="tel:+917022140225">+91 70221 40225</a>
              </div>
            </div>
            <div className="footer-col">
              <h4>Pages</h4>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/shop">Shop</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/support">Support</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Legal</h4>
              <ul>
                <li>
                  <a href="/privacy-policy">Privacy Policy</a>
                </li>
                <li>
                  <a href="/terms">Terms &amp; Conditions</a>
                </li>
                <li>
                  <a href="/shipping-policy">Shipping Policy</a>
                </li>
                <li>
                  <a href="/refund-policy">Refund &amp; Return Policy</a>
                </li>
              </ul>
            </div>
            <div className="footer-subscribe">
              <h4>Stay connected</h4>
              <SubscribeForm />
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 - Levelgrid Software Development Private Limited</p>
          </div>
        </div>
      </footer>
    </>
  );
}
