"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/about", label: "About" },
    { href: "/support", label: "Support" },
  ];

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-inner">
        <Link href="/" className="header-logo">
          <Image
            src="https://framerusercontent.com/images/UcvGDEYEOie274SzmAWm8Mspk.png"
            alt="Sunduuk"
            width={142}
            height={28}
            style={{ height: 28, width: "auto" }}
            priority
          />
        </Link>

        <nav className="header-nav desktop-nav">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${pathname === link.href ? "active" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <button className="search-btn" aria-label="Search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              width="24"
              height="24"
            >
              <path
                d="M232.49,215.51,185,168a92.12,92.12,0,1,0-17,17l47.53,47.54a12,12,0,0,0,17-17ZM44,112a68,68,0,1,1,68,68A68.07,68.07,0,0,1,44,112Z"
                fill="currentColor"
              />
            </svg>
          </button>
          <a
            href="https://wa.me/919902253378"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-enquire header-enquire"
          >
            Enquire now
          </a>
          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`hamburger-line ${menuOpen ? "open" : ""}`}></span>
            <span className={`hamburger-line ${menuOpen ? "open" : ""}`}></span>
            <span className={`hamburger-line ${menuOpen ? "open" : ""}`}></span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          <nav className="mobile-nav">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`mobile-nav-link ${pathname === link.href ? "active" : ""}`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/919902253378"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-enquire mobile-enquire"
              onClick={() => setMenuOpen(false)}
            >
              Enquire now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
