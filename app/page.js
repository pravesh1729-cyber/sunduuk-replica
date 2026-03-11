import Image from "next/image";
import SubscribeForm from "./subscribe-form";
import ScrollAnimator from "./scroll-animator";

const ArrowIcon = () => (
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
);

export default function Home() {
  return (
    <>
      <ScrollAnimator />

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
        <p className="hero-label fade-up">Timeless Craft</p>
        <h1 className="fade-up fade-up-delay-1">
          Each piece we uncover has lived a life before it found you
        </h1>
        <a href="/shop" className="hero-cta fade-up fade-up-delay-2">
          View all finds
          <ArrowIcon />
        </a>
      </section>

      {/* Featured Collections */}
      <section className="featured-row">
        <div className="featured-grid">
          {[
            {
              title: "The Last Oar",
              src: "https://framerusercontent.com/images/IVivzN6Ol0LRAxxwFavYSLNWYDI.png",
              w: 1200,
              h: 896,
            },
            {
              title: "Virasat in Brass",
              src: "https://framerusercontent.com/images/VqCA4d4WxFboQ7Dz8fbXPbu5dic.png",
              w: 2400,
              h: 1792,
            },
            {
              title: "The Bullcart Archive",
              src: "https://framerusercontent.com/images/UXCjuijIvcozwf372xAODbL5TE.png",
              w: 2400,
              h: 1792,
            },
          ].map((item, i) => (
            <div
              key={item.title}
              className={`featured-card fade-up fade-up-delay-${i + 1}`}
            >
              <Image
                src={item.src}
                alt={item.title}
                width={item.w}
                height={item.h}
                quality={90}
                priority={i === 0}
              />
              <div className="featured-card-overlay">
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
        <a href="/shop" className="view-all-link fade-up">
          View all finds
          <ArrowIcon />
        </a>
      </section>

      {/* Values */}
      <section className="values-section">
        <div className="values-grid">
          {[
            {
              num: "01",
              title: "Chosen with Care",
              desc: "Every Find is selected slowly, guided by history, and craftsmanship. We don\u2019t collect in bulk \u2014 we choose pieces that feel meaningful, and made to last.",
            },
            {
              num: "02",
              title: "Objects with Presence",
              desc: "Our pieces aren\u2019t designed to impress at first glance. They\u2019re meant to grow on you \u2014 through form, detail, and the way they quietly change a space.",
            },
            {
              num: "03",
              title: "Curated with Taste",
              desc: "Nothing here is ordinary or repeatable. Each Find is handpicked, one of a kind, and chosen because it belongs somewhere \u2014 not everywhere.",
            },
          ].map((item, i) => (
            <div
              key={item.num}
              className={`value-item fade-up fade-up-delay-${i + 1}`}
            >
              <p className="value-number">{item.num}</p>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Collections */}
      <section className="collections-section">
        <div className="collections-header fade-up">
          <p className="collections-label">Collection of distinctive pieces</p>
        </div>
        <div className="collections-grid">
          {[
            {
              title: "Saanjh",
              desc: "A shared language of rare craft and form.",
              src: "https://framerusercontent.com/images/Pg9dihypbqjYboSe5zrlozgbQ.png",
            },
            {
              title: "Samagra",
              desc: "A curation of objects chosen for presence and longevity.",
              src: "https://framerusercontent.com/images/wpO1atbjWmn0ceYZFNuBMgQ24iU.png",
            },
          ].map((item, i) => (
            <div
              key={item.title}
              className={`collection-card fade-up fade-up-delay-${i + 1}`}
            >
              <Image
                src={item.src}
                alt={`${item.title} Collection`}
                width={1136}
                height={944}
                quality={90}
              />
              <div className="collection-info">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <h2 className="fade-up">
          Objects rooted in Indian craft, heritage, and lived history
        </h2>
        <a
          href="mailto:help@sunduuk.com"
          className="cta-banner-btn fade-up fade-up-delay-1"
        >
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
                <li><a href="/">Home</a></li>
                <li><a href="/shop">Shop</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/support">Support</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Legal</h4>
              <ul>
                <li><a href="/privacy-policy">Privacy Policy</a></li>
                <li><a href="/terms">Terms &amp; Conditions</a></li>
                <li><a href="/shipping-policy">Shipping Policy</a></li>
                <li><a href="/refund-policy">Refund &amp; Return Policy</a></li>
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
