"use client";

import { useState } from "react";
import ScrollAnimator from "../components/ScrollAnimator";
import SubscribeForm from "../components/SubscribeForm";

const faqs = [
  {
    question: "How do I place an order?",
    answer:
      "You can place an order by browsing our collection on the website and clicking the \"Enquire Now\" button on any product page. This will connect you with us directly via WhatsApp, where we'll guide you through the ordering process, confirm availability, and help with any customization or queries.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept payments via UPI, debit cards, credit cards, and net banking. All transactions are processed securely. Cash on Delivery (COD) is currently not available.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Shipping timelines vary depending on the product and delivery location. Typically, orders are delivered within 4\u20136 weeks from the date of order confirmation. For deliveries outside India, an additional 7\u20138 business days may be required. Exact timelines will be communicated at the time of order confirmation.",
  },
  {
    question: "Can I return or exchange a Find?",
    answer:
      "Since each of our Finds is unique and one of a kind, we do not offer returns or exchanges. However, if a product arrives damaged, please contact us within 48 hours of delivery with an unboxing video, and we will work to resolve the issue. We recommend recording the unboxing of every order for your reference.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order is shipped, we\u2019ll share the tracking details with you via WhatsApp. You can use the provided tracking link or number to monitor your delivery status in real time.",
  },
  {
    question: "How does the finish look like?",
    answer:
      "Each piece is handcrafted and carries natural variations in texture, tone, and finish. These are not flaws \u2014 they are part of the character and story of the object. Minor differences between the product photo and the actual item are expected and reflect the authenticity of handmade craft.",
  },
];

export default function SupportPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <section className="support-hero">
        <ScrollAnimator>
          <h1>
            We&rsquo;re here
            <br />
            help
          </h1>
        </ScrollAnimator>
        <ScrollAnimator delay={100}>
          <p>
            Questions? Concerns? Let&rsquo;s make your shopping experience seamless
            and enjoyable.
          </p>
        </ScrollAnimator>
      </section>

      <section className="faq-section">
        {faqs.map((faq, index) => (
          <ScrollAnimator key={index} delay={index * 60}>
            <div className={`faq-item ${openIndex === index ? "open" : ""}`}>
              <button className="faq-question" onClick={() => toggleFaq(index)}>
                {faq.question}
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          </ScrollAnimator>
        ))}
      </section>

      <div className="support-contact">
        <ScrollAnimator>
          <div className="support-contact-item">
            <h3>Call us</h3>
            <a href="tel:+917022140225">+91 70221 40225</a>
          </div>
        </ScrollAnimator>
        <ScrollAnimator delay={100}>
          <div className="support-contact-item">
            <h3>Email us</h3>
            <a href="mailto:help@sunduuk.com">help@sunduuk.com</a>
          </div>
        </ScrollAnimator>
        <ScrollAnimator delay={200}>
          <div className="support-contact-item">
            <h3>Business hours</h3>
            <p>9am - 8pm IST</p>
          </div>
        </ScrollAnimator>
      </div>

      <section className="about-newsletter">
        <ScrollAnimator>
          <h2>Stay ahead with exclusive deals!</h2>
          <p>
            Be the first to know about special offers, new finds, and insider
            updates. Join our newsletter and get exclusive perks delivered straight
            to your inbox!
          </p>
          <SubscribeForm />
        </ScrollAnimator>
      </section>
    </>
  );
}
