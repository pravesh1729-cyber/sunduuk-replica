import ScrollAnimator from "../components/ScrollAnimator";

export const metadata = {
  title: "Shipping Policy — Sunduuk",
  description: "Shipping Policy for Sunduuk",
};

export default function ShippingPolicyPage() {
  return (
    <div className="policy-page">
      <ScrollAnimator>
        <h1>Shipping Policy</h1>
        <p className="policy-version">Version 1.0 | Last Updated: 03/02/2026</p>
      </ScrollAnimator>

      <ScrollAnimator>
        <div className="policy-content">
          <h2>1. Shipping Coverage</h2>
          <p>
            We offer shipping across India and internationally. Delivery is available to most locations worldwide. For remote or restricted areas, additional time or charges may apply.
          </p>

          <h2>2. Delivery Timelines</h2>
          <ul>
            <li>Domestic orders (within India): Typically delivered within 4-6 weeks from the date of order confirmation.</li>
            <li>International orders: May require an additional 7-8 business days beyond the standard delivery timeline.</li>
          </ul>
          <p>
            Please note that delivery timelines are estimates and may vary depending on the product, location, and external factors such as weather or customs clearance.
          </p>

          <h2>3. Shipping Charges</h2>
          <p>
            Shipping charges are calculated separately based on the delivery location, product dimensions, and weight. The exact shipping cost will be communicated at the time of order confirmation via WhatsApp.
          </p>

          <h2>4. Order Tracking</h2>
          <p>
            Once your order is shipped, we will share tracking details with you via WhatsApp. You can use the provided tracking link or number to monitor your delivery status in real time.
          </p>

          <h2>5. Packaging</h2>
          <p>
            All products are carefully packaged to ensure safe delivery. Due to the nature of our handcrafted products, we take extra care in packaging to minimize any risk of damage during transit.
          </p>

          <h2>6. Customs and Duties (International Orders)</h2>
          <p>
            For international shipments, customs duties, taxes, and other import charges may apply. These charges are the responsibility of the buyer and are not included in the product price or shipping charges.
          </p>

          <h2>7. Delivery Issues</h2>
          <p>
            If your order is delayed, damaged, or lost during transit, please contact us immediately at help@sunduuk.com or via WhatsApp. We will work with the shipping partner to resolve the issue as quickly as possible.
          </p>

          <h2>8. Undeliverable Packages</h2>
          <p>
            If a package is returned to us due to an incorrect address, refused delivery, or inability to deliver, we will contact you to arrange redelivery. Additional shipping charges may apply for redelivery.
          </p>

          <h2>9. Contact Us</h2>
          <p>
            For any shipping-related queries, please reach out to us at help@sunduuk.com or call us at +91 70221 40225.
          </p>
        </div>
      </ScrollAnimator>
    </div>
  );
}
