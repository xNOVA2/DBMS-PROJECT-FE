import "./newsletter.css";

function Newsletter() {
  return (
    <div className="newsletter">
      <h2>Stay updated with our latest news</h2>
      <p>
        Subscribe to our newsletter to receive exclusive updates and offers.
      </p>
      <form>
        <input type="email" placeholder="Your email address" />
        <button>Subscribe</button>
      </form>
    </div>
  );
}

export default Newsletter;
