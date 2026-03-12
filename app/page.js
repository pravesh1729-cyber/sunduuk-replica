import Image from "next/image";
import Link from "next/link";
import ScrollAnimator from "./components/ScrollAnimator";

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
  const featuredItems = [
    {
      title: "The Last Oar",
      slug: "thelastoar",
      src: "https://framerusercontent.com/images/VqCA4d4WxFboQ7Dz8fbXPbu5dic.png",
    },
    {
      title: "Virasat in Brass",
      slug: "virasatinbrass",
      src: "https://framerusercontent.com/images/UXCjuijIvcozwf372xAODbL5TE.png",
    },
    {
      title: "The Bullcart Archive",
      slug: "thebullcartarchive",
      src: "https://framerusercontent.com/images/IVivzN6Ol0LRAxxwFavYSLNWYDI.png",
    },
  ];

  const values = [
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
  ];

  const collections = [
    {
      title: "Saanjh",
      desc: "A shared language of rare craft and form.",
      href: "/shop/curations/saanjh",
      src: "https://framerusercontent.com/images/Pg9dihypbqjYboSe5zrlozgbQ.png",
    },
    {
      title: "Samagra",
      desc: "A curation of objects chosen for presence and longevity.",
      href: "/shop/curations/samagra",
      src: "https://framerusercontent.com/images/wpO1atbjWmn0ceYZFNuBMgQ24iU.png",
    },
  ];

  return (
    <>
      <ScrollAnimator />

      {/* Cinematic Full-Bleed Hero */}
      <section className="home-hero">
        <div className="home-hero-media">
          <video
            src="https://framerusercontent.com/assets/nZiBLl79JrYZ9Uwg3nBt0vTzrA.mp4"
            loop
            muted
            autoPlay
            playsInline
            preload="metadata"
          />
          <div className="home-hero-overlay" />
        </div>
        <div className="home-hero-content">
          <p className="home-hero-label" data-animate="0">Timeless Craft</p>
          <h1 data-animate="200">
            Each piece we uncover has lived a life before it found you
          </h1>
          <Link href="/shop" className="home-hero-cta" data-animate="400">
            View all finds
            <ArrowIcon />
          </Link>
        </div>
      </section>

      {/* Featured */}
      <section className="featured-row">
        <div className="featured-grid">
          {featuredItems.map((item, i) => (
            <Link
              key={item.slug}
              href={`/shop/${item.slug}`}
              className="featured-card"
              data-animate={i * 100}
            >
              <Image
                src={item.src}
                alt={item.title}
                width={1200}
                height={900}
                quality={85}
                priority={i === 0}
                sizes="(max-width: 810px) 100vw, 33vw"
              />
              <div className="featured-card-overlay">
                <h3>{item.title}</h3>
              </div>
            </Link>
          ))}
        </div>
        <Link href="/shop" className="view-all-link" data-animate="0">
          View all finds
          <ArrowIcon />
        </Link>
      </section>

      {/* Values */}
      <section className="values-section">
        <div className="values-grid">
          {values.map((item, i) => (
            <div className="value-item" key={item.num} data-animate={i * 100}>
              <p className="value-number">{item.num}</p>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Full-width statement image */}
      <section className="statement-section" data-animate="0">
        <div className="statement-image">
          <Image
            src="https://framerusercontent.com/images/1KzMAgKZmCezGI6685JSUysnsAE.png"
            alt="Sunduuk heritage craftsmanship"
            width={2400}
            height={1792}
            quality={85}
            sizes="(max-width: 810px) 100vw, 1200px"
          />
        </div>
      </section>

      {/* Collections */}
      <section className="collections-section">
        <div className="collections-header" data-animate="0">
          <p className="collections-label">
            Collection of distinctive pieces
          </p>
        </div>
        <div className="collections-grid">
          {collections.map((item, i) => (
            <Link
              key={item.title}
              href={item.href}
              className="collection-card"
              data-animate={i * 100}
            >
              <Image
                src={item.src}
                alt={`${item.title} Collection`}
                width={1136}
                height={944}
                quality={85}
                sizes="(max-width: 810px) 100vw, 50vw"
              />
              <div className="collection-info">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <h2 data-animate="0">
          Objects rooted in Indian craft, heritage, and lived history
        </h2>
        <a
          href="https://wa.me/message/ZH7U2D3F7TIWM1"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-banner-btn"
          data-animate="100"
        >
          Enquire now
        </a>
      </section>
    </>
  );
}
