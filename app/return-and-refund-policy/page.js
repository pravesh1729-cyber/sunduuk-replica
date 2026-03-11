import ScrollAnimator from "../components/ScrollAnimator";

export const metadata = {
  title: "Return & Refund Policy — Sunduuk",
  description: "Return and Refund Policy for Sunduuk",
};

export default function ReturnRefundPolicyPage() {
  return (
    <div className="policy-page">
      <ScrollAnimator>
        <h1>Return &amp; Refund Policy</h1>
        <p className="policy-version">Version 1.0 | Last Updated: 03/02/2026</p>
      </ScrollAnimator>

      <ScrollAnimator>
        <div className="policy-content">
          <h2>1. Unique and One-of-a-Kind Products</h2>
          <p>
            All products sold by Sunduuk are unique, handcrafted, and one-of-a-kind. Due to the nature of these items, we do not offer standard returns or exchanges. Each piece is carefully selected, and once purchased, it cannot be returned simply due to a change of mind.
          </p>

          <h2>2. Damaged Products</h2>
          <p>
            If your product arrives damaged during transit, please follow these steps:
          </p>
          <ul>
            <li>Contact us within 48 hours of delivery via email at help@sunduuk.com or through WhatsApp.</li>
            <li>Provide an unboxing video as evidence of the damage. This is mandatory for processing any damage claim.</li>
            <li>We will assess the damage and work with you to find an appropriate resolution, which may include repair, replacement (subject to availability), or a refund.</li>
          </ul>

          <h2>3. Unboxing Video Requirement</h2>
          <p>
            We strongly recommend recording the unboxing of every order. An unboxing video serves as essential proof in case of any damage claims and helps us resolve issues quickly and fairly.
          </p>

          <h2>4. Non-Returnable Items</h2>
          <p>The following items are not eligible for return or exchange:</p>
          <ul>
            <li>Products that have been used, altered, or modified after delivery</li>
            <li>Products with minor variations in texture, color, or finish (these are characteristics of handcrafted items and are not considered defects)</li>
            <li>Products without an unboxing video as proof of condition at delivery</li>
          </ul>

          <h2>5. Refund Process</h2>
          <p>
            If a refund is approved, it will be processed within 7-10 business days. The refund will be credited to the original payment method used at the time of purchase. Shipping charges are non-refundable.
          </p>

          <h2>6. Cancellations</h2>
          <p>
            Order cancellations may be requested before the order has been shipped. Once an order is shipped, it cannot be cancelled. To request a cancellation, please contact us immediately via WhatsApp or email.
          </p>

          <h2>7. Contact Us</h2>
          <p>
            For any questions regarding returns, refunds, or damaged products, please contact us at help@sunduuk.com or call us at +91 70221 40225.
          </p>
        </div>
      </ScrollAnimator>
    </div>
  );
}
