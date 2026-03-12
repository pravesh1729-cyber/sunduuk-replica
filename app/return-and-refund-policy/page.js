import ScrollAnimator from "../components/ScrollAnimator";

export const metadata = {
  title: "Return & Refund Policy — Sunduuk",
  description: "Return and Refund Policy for Sunduuk",
};

export default function ReturnRefundPolicyPage() {
  return (
    <div className="policy-page">
      <ScrollAnimator />

      <h1 data-animate="0">Return &amp; Refund Policy</h1>
      <p className="policy-version" data-animate="50">
        Version 1.0 | Last Updated: 03/02/2026
      </p>

      <p className="policy-intro" data-animate="100">
        Thank you for exploring our curated collection of antique and heritage
        artifacts. Each piece is unique, and we take great care to represent it
        accurately. Because of the one-of-a-kind nature of these items, our
        policy is designed to balance fairness for our customers with the
        realities of handling and transporting delicate, aged pieces.
      </p>

      <div className="policy-content" data-animate="0">
        <h2>1) Returns for Change of Mind / Natural Characteristics</h2>
        <p>
          We understand that selecting the perfect piece for your space can be a
          personal decision.
        </p>
        <p>
          However, due to the distinct character and age-related features of
          antique and handmade artifacts, we do not accept returns or exchanges
          for:
        </p>
        <ul>
          <li>Change of mind or preference after purchase</li>
          <li>Differences in how a piece may look in your space</li>
          <li>
            Natural variations such as patina, color tones, texture, minor wear,
            small imperfections, or signs of age
          </li>
        </ul>
        <p>
          These traits are part of what makes each artifact unique and are not
          considered defects.
        </p>

        <h2>2) When a Remedy May Be Considered</h2>
        <p>
          We want you to be delighted with your purchase. In rare cases where an
          item is:
        </p>
        <ul>
          <li>Significantly damaged during transit,</li>
          <li>
            Substantially different from what was described or confirmed
          </li>
        </ul>
        <p>We will gladly review your request for a resolution.</p>

        <h2>3) How to Submit a Claim</h2>
        <p>
          To help us evaluate any issue quickly and fairly, please follow these
          steps:
        </p>
        <ul>
          <li>
            Record a clear unboxing video from the sealed package showing the
            item and the specific issue.
          </li>
          <li>
            Share the unboxing video and detailed photos within 24 hours of
            delivery
          </li>
          <li>Include your order confirmation details.</li>
        </ul>
        <p>
          Because antiques are fragile and travel long distances, we cannot
          accept claims submitted after 24 hours.
        </p>

        <h2>4) Possible Resolutions</h2>
        <p>
          If your claim is approved, we will work with you to find the best
          possible outcome. Depending on what is feasible, this may include:
        </p>
        <ul>
          <li>Support for professional repair</li>
          <li>Replacement with a comparable item (if available)</li>
          <li>Full or partial refund</li>
        </ul>
        <p>
          We choose the option that ensures quality and fairness for both you
          and SUNDUUK.
        </p>

        <h2>5) Return Coordination (When Applicable)</h2>
        <p>If a physical return is necessary:</p>
        <ul>
          <li>
            We will assist in arranging return pickup where possible.
          </li>
          <li>
            Please pack the item securely - ideally in its original packaging or
            with equivalent protection.
          </li>
        </ul>
        <p>
          Because of the fragile and unique nature of these items, secure
          packaging is essential.
        </p>

        <h2>6) Refund Processing Time</h2>
        <p>Once a refund is approved:</p>
        <ul>
          <li>
            We process it to your original payment method when available.
          </li>
          <li>
            Refunds typically take 5-10 business days to reflect in your
            account, depending on your bank or payment provider&rsquo;s
            timelines.
          </li>
        </ul>

        <h2>7) International Orders</h2>
        <p>For international shipments:</p>
        <ul>
          <li>
            Due to customs and logistical limitations, returning items may not
            always be possible.
          </li>
          <li>
            In those instances, we focus on repair support or partial refunds,
            based on feasibility and the evidence provided.
          </li>
        </ul>

        <h2>8) Support</h2>
        <p>For return and refund support:</p>
        <p>
          <a href="mailto:help@sunduuk.com">help@sunduuk.com</a>
        </p>
        <p>
          WhatsApp:{" "}
          <a
            href="https://wa.me/c/919902253378"
            target="_blank"
            rel="noopener noreferrer"
          >
            whatsapp.sunduuk.com
          </a>
        </p>
        <p>
          We truly appreciate your understanding and your trust in SUNDUUK.
          Every artifact we share has a history - we treat them with care, and
          we&rsquo;re here to support you every step of the way.
        </p>
      </div>
    </div>
  );
}
