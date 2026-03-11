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
      src: "https://framerusercontent.com/images/IVivzN6Ol0LRAxxwFavYSLNWYDI.png",
    },
    {
      title: "Virasat in Brass",
      slug: "virasatinbrass",
      src: "https://framerusercontent.com/images/VqCA4d4WxFboQ7Dz8fbXPbu5dic.png",
    },
    {
      title: "The Bullcart Archive",
      slug: "thebullcartarchive",
      src: "https://framerusercontent.com/images/UXCjuijIvcozwf372xAODbL5TE.png",
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
      {/* Hero */}
      <section className="hero">
        <ScrollAnimator>
          <p className="hero-label">Timeless Craft</p>
        </ScrollAnimator>
        <ScrollAnimator delay={100}>
          <h1>Each piece we uncover has lived a life before it found you</h1>
        </ScrollAnimator>
        <ScrollAnimator delay={200}>
          <Link href="/shop" className="hero-cta">
            View all finds
            <ArrowIcon />
          </Link>
        </ScrollAnimator>
      </section>

      {/* Featured */}
      <section className="featured-row">
        <div className="featured-grid">
          {featuredItems.map((item, i) => (
            <ScrollAnimator key={item.slug} delay={i * 100}>
              <Link href={`/shop/${item.slug}`} className="featured-card">
                <Image
                  src={item.src}
                  alt={item.title}
                  width={1200}
                  height={900}
                  quality={90}
                  priority={i === 0}
                />
                <div className="featured-card-overlay">
                  <h3>{item.title}</h3>
                </div>
              </Link>
            </ScrollAnimator>
          ))}
        </div>
        <ScrollAnimator>
          <Link href="/shop" className="view-all-link">
            View all finds
            <ArrowIcon />
          </Link>
        </ScrollAnimator>
      </section>

      {/* Values */}
      <section className="values-section">
        <div className="values-grid">
          {values.map((item, i) => (
            <ScrollAnimator key={item.num} delay={i * 100}>
              <div className="value-item">
                <p className="value-number">{item.num}</p>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </ScrollAnimator>
          ))}
        </div>
      </section>

      {/* Collections */}
      <section className="collections-section">
        <ScrollAnimator>
          <div className="collections-header">
            <p className="collections-label">Collection of distinctive pieces</p>
          </div>
        </ScrollAnimator>
        <div className="collections-grid">
          {collections.map((item, i) => (
            <ScrollAnimator key={item.title} delay={i * 100}>
              <Link href={item.href} className="collection-card">
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
              </Link>
            </ScrollAnimator>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <ScrollAnimator>
          <h2>Objects rooted in Indian craft, heritage, and lived history</h2>
        </ScrollAnimator>
        <ScrollAnimator delay={100}>
          <a
            href="https://wa.me/message/ZH7U2D3F7TIWM1"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-banner-btn"
          >
            Enquire now
          </a>
        </ScrollAnimator>
      </section>
    </>
  );
}
