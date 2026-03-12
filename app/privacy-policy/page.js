import ScrollAnimator from "../components/ScrollAnimator";

export const metadata = {
  title: "Privacy Policy — Sunduuk",
  description: "Privacy Policy for Sunduuk",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="policy-page">
      <ScrollAnimator />

      <h1 data-animate="0">Privacy Policy</h1>
      <p className="policy-version" data-animate="50">
        Version 1.0 | Last Updated: 03/02/2026
      </p>

      <p className="policy-intro" data-animate="100">
        This Privacy Policy describes how Levelgrid Software Development Private
        Limited (&ldquo;SUNDUUK&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;,
        &ldquo;our&rdquo;) collects, uses, shares, and protects personal data
        when you use sunduuk.com or communicate with us via WhatsApp, email,
        phone, or our official social media channels.
      </p>

      <div className="policy-content" data-animate="0">
        <h2>1) Information we collect</h2>
        <p>We may collect:</p>
        <ul>
          <li>Name, phone number, email address</li>
          <li>Delivery and billing address</li>
          <li>Order details and preferences</li>
          <li>
            Communications you send us (WhatsApp messages, emails, social media
            DMs)
          </li>
          <li>
            Technical information like IP address, browser type, device details,
            and website usage data
          </li>
          <li>Cookies and similar tracking data (see Cookies section)</li>
        </ul>

        <h2>2) How we use your information</h2>
        <p>We use your information to:</p>
        <ul>
          <li>Respond to enquiries and provide support</li>
          <li>Confirm orders and fulfill purchases</li>
          <li>Coordinate packing, logistics, and delivery</li>
          <li>
            Send transactional updates (order confirmation, dispatch, delivery
            updates)
          </li>
          <li>Improve the Website and customer experience</li>
          <li>Comply with legal, accounting, and regulatory requirements</li>
        </ul>

        <h2>3) Sharing of information</h2>
        <p>We may share limited information with:</p>
        <ul>
          <li>Logistics and delivery partners for shipping and delivery</li>
          <li>Payment partners for payment processing</li>
          <li>
            Service providers that help us operate the Website and support
            systems (hosting, analytics, customer support tools)
          </li>
        </ul>
        <p>We do not sell your personal data.</p>

        <h2>4) Communication channels</h2>
        <p>
          If you contact us via WhatsApp or social media platforms, your messages
          may be processed through those platforms&rsquo; systems. We use these
          channels for customer support and order coordination.
        </p>

        <h2>5) Cookies</h2>
        <p>We may use cookies and similar technologies to:</p>
        <ul>
          <li>Ensure basic Website functionality</li>
          <li>Understand usage and improve performance</li>
          <li>Support analytics</li>
        </ul>
        <p>
          You can control cookies through your browser settings. Disabling
          cookies may affect some Website features.
        </p>

        <h2>6) Data retention</h2>
        <p>
          We retain personal data only as long as necessary for order
          fulfillment, support, legal compliance, and legitimate business
          purposes. When no longer needed, we delete or anonymize it where
          reasonable.
        </p>

        <h2>7) Data security</h2>
        <p>
          We use reasonable administrative, technical, and physical safeguards to
          protect personal data. No online method of transmission or storage is
          fully secure, and we cannot guarantee absolute security.
        </p>

        <h2>8) Your choices</h2>
        <p>
          You may request access, correction, or deletion of your data, subject
          to applicable law. You may also opt out of marketing communications if
          you receive any.
        </p>
        <p>
          To make a request, email:{" "}
          <a href="mailto:help@sunduuk.com">help@sunduuk.com</a>
        </p>

        <h2>9) Privacy and grievance contact</h2>
        <p>For privacy questions or grievances, contact:</p>
        <div className="policy-contact-block">
          <p>
            <strong>Privacy and Grievance Contact:</strong>
          </p>
          <p>Name: Prabesh Goyal</p>
          <p>
            Email:{" "}
            <a href="mailto:grievanceofficer@sunduuk.com">
              grievanceofficer@sunduuk.com
            </a>
          </p>
          <p>
            WhatsApp:{" "}
            <a
              href="https://wa.me/919902253378"
              target="_blank"
              rel="noopener noreferrer"
            >
              whatsapp.sunduuk.com
            </a>
          </p>
          <p>
            Address: Om Chambers, 648/A, 4th Floor, Binnamangala 1st Stage,
            Indiranagar, Bangalore - 560038, India
          </p>
        </div>

        <h2>10) Third party links</h2>
        <p>
          The Website may contain links to third-party sites. We are not
          responsible for their privacy practices.
        </p>

        <h2>11) Updates to this policy</h2>
        <p>
          We may update this Privacy Policy from time to time. The &ldquo;Last
          updated&rdquo; date reflects the latest version.
        </p>
      </div>
    </div>
  );
}
