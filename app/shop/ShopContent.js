"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "../data/products";
import ScrollAnimator from "../components/ScrollAnimator";

export default function ShopContent() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All" },
    { id: "recent", label: "Recent Finds" },
    { id: "curations", label: "Curations" },
  ];

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
        {filters.map((filter) => (
          <button
            key={filter.id}
            className={`filter-tab ${activeFilter === filter.id ? "active" : ""}`}
            onClick={() => setActiveFilter(filter.id)}
          >
            {filter.label}
          </button>
        ))}
        {activeFilter === "curations" && (
          <>
            <button
              className="filter-tab filter-sub"
              onClick={() => setActiveFilter("curations")}
            >
              Saanjh
            </button>
            <button
              className="filter-tab filter-sub"
              onClick={() => setActiveFilter("curations")}
            >
              Samagra
            </button>
          </>
        )}
      </div>

      <div className="shop-grid">
        {products.map((product, i) => (
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
              quality={90}
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
