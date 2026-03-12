import Link from "next/link";
import Image from "next/image";
import SubscribeForm from "./SubscribeForm";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-col footer-brand">
            <Link href="/">
              <Image
                src="https://framerusercontent.com/images/UcvGDEYEOie274SzmAWm8Mspk.png"
                alt="Sunduuk"
                width={120}
                height={24}
                style={{ height: 24, width: "auto" }}
              />
            </Link>
            <div className="footer-contact">
              <a href="mailto:help@sunduuk.com">help@sunduuk.com</a>
              <a href="tel:+917022140225">+91 70221 40225</a>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Pages</h4>
            <Link href="/">Home</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/about">About</Link>
            <Link href="/support">Support</Link>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Legal</h4>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-and-conditions">Terms &amp; Conditions</Link>
            <Link href="/shipping-policy">Shipping Policy</Link>
            <Link href="/return-and-refund-policy">Refund &amp; Return Policy</Link>
          </div>

          <div className="footer-col footer-subscribe">
            <h4 className="footer-heading">Stay connected</h4>
            <SubscribeForm />
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 - Levelgrid Software Development Private Limited</p>
        </div>
      </footer>

      <a
        href="https://wa.me/919902253378"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Chat on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="56" height="56">
          <circle cx="24" cy="24" r="24" fill="#25D366"/>
          <path d="M34.6 13.4C32.3 11.1 29.3 9.8 26 9.8c-6.8 0-12.3 5.5-12.3 12.3 0 2.2.6 4.3 1.6 6.1L13.5 34.5l6.5-1.7c1.8.9 3.8 1.5 5.9 1.5h0c6.8 0 12.3-5.5 12.3-12.3.1-3.3-1.2-6.4-3.6-8.6zM26 32.3c-1.8 0-3.6-.5-5.2-1.4l-.4-.2-3.8 1 1-3.7-.3-.4c-1-1.6-1.5-3.5-1.5-5.4 0-5.6 4.6-10.2 10.2-10.2 2.7 0 5.3 1.1 7.2 3 1.9 1.9 3 4.5 3 7.2 0 5.7-4.6 10.1-10.2 10.1zm5.6-7.6c-.3-.2-1.8-.9-2.1-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7.1c-.3-.2-1.3-.5-2.5-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.2.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.8-.7 2-1.4.2-.7.2-1.2.2-1.4-.1 0-.3-.1-.6-.3z" fill="#fff"/>
        </svg>
      </a>
    </>
  );
}
