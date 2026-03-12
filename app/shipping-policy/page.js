import ScrollAnimator from "../components/ScrollAnimator";

export const metadata = {
  title: "Shipping Policy — Sunduuk",
  description: "Shipping Policy for Sunduuk",
};

export default function ShippingPolicyPage() {
  return (
    <div className="policy-page">
      <ScrollAnimator />

      <h1 data-animate="0">Shipping Policy</h1>
      <p className="policy-version" data-animate="50">
        Version 1.0 | Last Updated: 03/02/2026
      </p>

      <p className="policy-intro" data-animate="100">
        This Shipping Policy explains how SUNDUUK ships Products within India
        and internationally.
      </p>

      <div className="policy-content" data-animate="0">
        <h2>1) Shipping coverage</h2>
        <p>We ship across India.</p>
        <p>
          We also support international shipping for selected Products, subject
          to feasibility based on product size, fragility, and destination.
        </p>

        <h2>2) Logistics partners</h2>
        <p>
          We deliver via third-party logistics and delivery partners. The
          partner may vary by destination and handling requirements.
        </p>

        <h2>3) Dispatch and delivery timelines</h2>
        <p>
          Dispatch and delivery timelines vary depending on the Product,
          packaging needs, destination, and logistics partner schedules.
        </p>
        <p>
          For international shipments, customs clearance may affect delivery
          time.
        </p>
        <p>
          The estimated dispatch and delivery timeline will be confirmed over
          WhatsApp or email during order confirmation.
        </p>

        <h2>4) Shipping and packing charges</h2>
        <p>
          Shipping, packing, and handling charges (if applicable) will be
          communicated during order confirmation based on the Product and
          destination.
        </p>

        <h2>5) International customs and duties</h2>
        <p>
          For international deliveries, customs duties, import taxes, clearance
          fees, and local levies (if any) are typically payable by the customer
          unless confirmed otherwise in writing.
        </p>

        <h2>6) Delivery access and receiving</h2>
        <p>
          Please ensure adequate access for large items (doorway width, lift
          capacity, staircase turns, building entry permissions).
        </p>
        <p>Inspect the outer packaging at delivery.</p>
        <p>
          Do not discard the packaging until the Product has been fully
          inspected.
        </p>

        <h2>7) Transit damage</h2>
        <p>
          If an item arrives damaged, follow the process in our Return and
          Refund Policy. Claims require an unboxing video and must be reported
          within the stated timeline.
        </p>

        <h2>8) Support</h2>
        <p>For shipping support:</p>
        <p>
          <a href="mailto:help@sunduuk.com">help@sunduuk.com</a>
        </p>
        <p>
          WhatsApp:{" "}
          <a
            href="https://wa.me/message/ZH7U2D3F7TIWM1"
            target="_blank"
            rel="noopener noreferrer"
          >
            whatsapp.sunduuk.com
          </a>
        </p>
      </div>
    </div>
  );
}
