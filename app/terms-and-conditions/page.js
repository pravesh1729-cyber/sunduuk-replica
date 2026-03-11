import ScrollAnimator from "../components/ScrollAnimator";

export const metadata = {
  title: "Terms & Conditions — Sunduuk",
  description: "Terms and Conditions for Sunduuk",
};

export default function TermsPage() {
  return (
    <div className="policy-page">
      <ScrollAnimator>
        <h1>Terms &amp; Conditions</h1>
        <p className="policy-version">Version 1.0 | Last Updated: 03/02/2026</p>
      </ScrollAnimator>

      <ScrollAnimator>
        <div className="policy-content">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using the Sunduuk website, you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our website or services.
          </p>

          <h2>2. Products and Availability</h2>
          <p>
            All products listed on our website are unique, handcrafted, and one-of-a-kind. Product availability is subject to change without notice. We reserve the right to limit the quantity of any product and to discontinue any product at any time.
          </p>

          <h2>3. Ordering Process</h2>
          <p>
            Orders are placed through WhatsApp by clicking the &quot;Enquire Now&quot; button on any product page. An order is considered confirmed only after we verify availability and receive payment. We reserve the right to refuse any order.
          </p>

          <h2>4. Pricing</h2>
          <p>
            All prices are listed in Indian Rupees (INR) unless otherwise stated. Prices are subject to change without prior notice. Shipping charges are calculated separately based on the delivery location and are communicated at the time of order confirmation.
          </p>

          <h2>5. Payment</h2>
          <p>
            We accept payments via UPI, debit cards, credit cards, and net banking. Cash on Delivery (COD) is not available. All payments are processed through secure third-party payment gateways.
          </p>

          <h2>6. Shipping and Delivery</h2>
          <p>
            Orders are typically delivered within 4-6 weeks from the date of order confirmation. International deliveries may require an additional 7-8 business days. Delivery charges are calculated separately based on the delivery location.
          </p>

          <h2>7. Returns and Refunds</h2>
          <p>
            Due to the unique nature of our products, we do not accept returns or exchanges. If a product arrives damaged, please contact us within 48 hours of delivery with an unboxing video for resolution.
          </p>

          <h2>8. Intellectual Property</h2>
          <p>
            All content on this website, including text, images, logos, and design, is the property of Sunduuk and is protected by intellectual property laws. You may not reproduce, distribute, or use any content without our prior written consent.
          </p>

          <h2>9. Limitation of Liability</h2>
          <p>
            Sunduuk shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our website or products. Our total liability shall not exceed the amount paid for the specific product in question.
          </p>

          <h2>10. Governing Law</h2>
          <p>
            These Terms and Conditions are governed by the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in India.
          </p>

          <h2>11. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on our website. Continued use of the website after changes constitutes acceptance of the modified terms.
          </p>

          <h2>12. Contact Us</h2>
          <p>
            If you have any questions about these Terms and Conditions, please contact us at help@sunduuk.com or call us at +91 70221 40225.
          </p>
        </div>
      </ScrollAnimator>
    </div>
  );
}
