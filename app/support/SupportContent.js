"use client";

import { useState } from "react";
import ScrollAnimator from "../components/ScrollAnimator";
import SubscribeForm from "../components/SubscribeForm";

const faqs = [
  {
    question: "How do I place an order?",
    answer:
      "We currently accept orders exclusively through WhatsApp. This allows us to walk you through each Find personally, share additional details or images if needed, and make sure the piece is right for you before confirming the order.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept secure online payments, including UPI, debit cards, credit cards, and net banking. Cash on Delivery is not available, as each Find is handled and shipped with special care.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "We curate one-of-a-kind pieces, not made-to-order products. Shipping timelines vary depending on the Find and destination, and will be clearly communicated to you at the time of order confirmation.",
  },
  {
    question: "Can I return or exchange a Find?",
    answer:
      "Each Find is unique and sourced individually, which means returns or exchanges are not supported. In the rare event of damage during transit, we require an unboxing video shared within 24 hours of delivery so we can review and assist appropriately.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your Find is shipped, tracking details will be shared with you directly via WhatsApp. You can also check in with us anytime, we stay available until your piece reaches you safely.",
  },
  {
    question: "How does the finish look like?",
    answer:
      "Every Find carries a finish that reflects its history, material, and handwork. Variations in colour, texture, grain, or patina are not flaws but part of the piece\u2019s character. Subtle marks, irregularities, or signs of age may be present and are intentionally left visible. We believe these details are what give each Find its depth and individuality.",
  },
];

export default function SupportContent() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <ScrollAnimator />

      <section className="support-hero">
        <h1 data-animate="0">
          We&rsquo;re here
          <br />
          to help
        </h1>
        <p data-animate="100">
          Questions? Concerns? Let&rsquo;s make your shopping experience
          seamless and enjoyable.
        </p>
      </section>

      <section className="faq-section">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? "open" : ""}`}
            data-animate={index * 60}
          >
            <button className="faq-question" onClick={() => toggleFaq(index)}>
              {faq.question}
              <span className="faq-icon">+</span>
            </button>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </section>

      <div className="support-contact">
        <div className="support-contact-item" data-animate="0">
          <h3>Call us</h3>
          <a href="tel:+917022140225">+91 70221 40225</a>
        </div>
        <div className="support-contact-item" data-animate="100">
          <h3>Email us</h3>
          <a href="mailto:help@sunduuk.com">help@sunduuk.com</a>
        </div>
        <div className="support-contact-item" data-animate="200">
          <h3>Business hours</h3>
          <p>9am - 8pm IST</p>
        </div>
      </div>

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
