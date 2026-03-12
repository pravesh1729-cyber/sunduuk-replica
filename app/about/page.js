import Image from "next/image";
import ScrollAnimator from "../components/ScrollAnimator";
import SubscribeForm from "../components/SubscribeForm";

export const metadata = {
  title: "About — Sunduuk",
  description:
    "Get to know who we are, what we stand for, and why we love what we do.",
};

export default function AboutPage() {
  return (
    <>
      <ScrollAnimator />

      <section className="about-hero">
        <h1 data-animate="0">About</h1>
        <p data-animate="100">
          Get to know who we are, what we stand for, and why we love what we do.
        </p>
      </section>

      <section className="about-section">
        <div className="about-grid">
          <div className="about-text" data-animate="0">
            <h2>Shaped by tradition</h2>
            <p>
              Every Find carries traces of Indian craft and everyday life. These
              are pieces shaped by hands, habits, and ways of living that have
              existed for generations.
            </p>
          </div>
          <div className="about-image" data-animate="150">
            <Image
              src="https://framerusercontent.com/images/KTdlu1pYmhqE56fAzTcjvG8DT0o.png"
              alt="Shaped by tradition"
              width={800}
              height={600}
              quality={90}
            />
          </div>
        </div>

        <div className="about-grid reverse">
          <div className="about-text" data-animate="0">
            <h2>Rooted in culture and heritage</h2>
            <p>
              Indian culture holds its richness quietly, through form, ritual,
              and daily use. Our Finds reflect that depth. They come from
              traditions where beauty, utility, and meaning were never separate.
            </p>
          </div>
          <div className="about-image" data-animate="150">
            <Image
              src="https://framerusercontent.com/images/xxE7LH3Pg5vRjGTEaAIOGaSJk.png"
              alt="Rooted in culture and heritage"
              width={800}
              height={600}
              quality={90}
            />
          </div>
        </div>

        <div className="about-grid">
          <div className="about-text" data-animate="0">
            <h2>Honest in form</h2>
            <p>
              We believe in showing things as they are. Materials, marks,
              variations, and age are part of the story and are not hidden away.
              What you see is what you receive.
            </p>
          </div>
          <div className="about-image" data-animate="150">
            <Image
              src="https://framerusercontent.com/images/qB32IUGVIFQgIR7NmoIOiZhdW9E.png"
              alt="Honest in form"
              width={800}
              height={600}
              quality={90}
            />
          </div>
        </div>

        <div className="about-grid" style={{ marginBottom: 0 }} data-animate="0">
          <div className="about-text">
            <h2>Our Inspiration</h2>
            <p>
              Craftsmen, collectors, and communities who have carried skills and
              knowledge forward quietly over time. We choose thoughtfully and
              honour the hands and histories behind every piece.
            </p>
          </div>
        </div>
      </section>

      <section className="about-newsletter">
        <h2 data-animate="0">Stay ahead with exclusive deals!</h2>
        <p data-animate="100">
          Be the first to know about special offers, new finds, and insider
          updates. Join our newsletter and get exclusive perks delivered straight
          to your inbox!
        </p>
        <div data-animate="150">
          <SubscribeForm />
        </div>
      </section>
    </>
  );
}
