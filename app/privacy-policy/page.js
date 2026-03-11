import ScrollAnimator from "../components/ScrollAnimator";

export const metadata = {
  title: "Privacy Policy — Sunduuk",
  description: "Privacy Policy for Sunduuk",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="policy-page">
      <ScrollAnimator>
        <h1>Privacy Policy</h1>
        <p className="policy-version">Version 1.0 | Last Updated: 03/02/2026</p>
      </ScrollAnimator>

      <ScrollAnimator>
        <div className="policy-content">
          <h2>1. Introduction</h2>
          <p>
            Welcome to Sunduuk (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting the privacy and security of your personal information. This Privacy Policy describes how we collect, use, disclose, and safeguard your information when you visit our website or make a purchase.
          </p>

          <h2>2. Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul>
            <li>Personal identification information (name, email address, phone number, shipping address)</li>
            <li>Payment information (processed securely through third-party payment gateways)</li>
            <li>Browsing data (IP address, browser type, pages visited, time spent on pages)</li>
            <li>Communication data (messages sent through WhatsApp, email, or contact forms)</li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>We use the information we collect for the following purposes:</p>
          <ul>
            <li>To process and fulfill your orders</li>
            <li>To communicate with you about your purchases and inquiries</li>
            <li>To send you updates, newsletters, and marketing communications (with your consent)</li>
            <li>To improve our website, products, and services</li>
            <li>To comply with legal obligations</li>
          </ul>

          <h2>4. Information Sharing</h2>
          <p>
            We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website, processing payments, and delivering products, provided they agree to keep your information confidential.
          </p>

          <h2>5. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2>6. Cookies</h2>
          <p>
            Our website may use cookies and similar tracking technologies to enhance your browsing experience. You can control cookie preferences through your browser settings.
          </p>

          <h2>7. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your personal information</li>
            <li>Opt out of marketing communications</li>
          </ul>

          <h2>8. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
          </p>

          <h2>9. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at help@sunduuk.com or call us at +91 70221 40225.
          </p>
        </div>
      </ScrollAnimator>
    </div>
  );
}
