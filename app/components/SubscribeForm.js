"use client";

import { useState } from "react";

export default function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <form className="subscribe-form" onSubmit={handleSubmit}>
      <div className="subscribe-input-wrap">
        <input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="btn-subscribe">
          Subscribe
        </button>
      </div>
      {submitted && <p className="subscribe-thanks">Thank you for subscribing!</p>}
    </form>
  );
}
