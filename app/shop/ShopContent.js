"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "../data/products";
import ScrollAnimator from "../components/ScrollAnimator";

export default function ShopContent() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProducts = products.filter((p) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "recent") return true;
    if (activeFilter === "curations") return true;
    if (activeFilter === "saanjh") return p.collection === "saanjh";
    if (activeFilter === "samagra") return p.collection === "samagra";
    return true;
  });

  const isCurationActive =
    activeFilter === "curations" ||
    activeFilter === "saanjh" ||
    activeFilter === "samagra";

  return (
    <>
      <ScrollAnimator />

      <section className="shop-hero">
        <h1 data-animate="0">
          Explore <em>our</em>
          <br />
          finds
        </h1>
        <p data-animate="100">
          Discover handpicked products made just for you.
        </p>
      </section>

      <div className="shop-filters">
        <button
          className={`filter-tab ${activeFilter === "all" ? "active" : ""}`}
          onClick={() => setActiveFilter("all")}
        >
          All
        </button>
        <button
          className={`filter-tab ${activeFilter === "recent" ? "active" : ""}`}
          onClick={() => setActiveFilter("recent")}
        >
          Recent Finds
        </button>
        <button
          className={`filter-tab ${isCurationActive ? "active" : ""}`}
          onClick={() => setActiveFilter("curations")}
        >
          Curations
        </button>
        {isCurationActive && (
          <>
            <button
              className={`filter-tab filter-sub ${activeFilter === "saanjh" ? "active" : ""}`}
              onClick={() => setActiveFilter("saanjh")}
            >
              Saanjh
            </button>
            <button
              className={`filter-tab filter-sub ${activeFilter === "samagra" ? "active" : ""}`}
              onClick={() => setActiveFilter("samagra")}
            >
              Samagra
            </button>
          </>
        )}
      </div>

      <div className="shop-grid">
        {filteredProducts.map((product, i) => (
          <Link
            key={product.slug}
            href={`/shop/${product.slug}`}
            className="product-card"
            data-animate={i * 80}
          >
            <Image
              src={product.mainImage}
              alt={product.name}
              width={800}
              height={600}
              quality={85}
              sizes="(max-width: 810px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="product-card-overlay">
              <h3>{product.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
