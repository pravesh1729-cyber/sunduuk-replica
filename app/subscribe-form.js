"use client";

export default function SubscribeForm() {
  return (
    <form
      className="subscribe-form"
      onSubmit={(e) => e.preventDefault()}
    >
      <input type="email" placeholder="Your email" />
      <button type="submit">Subscribe</button>
    </form>
  );
}
