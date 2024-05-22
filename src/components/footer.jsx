import "./footer.css";

function Footer() {
  return (
    <footer>
      <div className="div-1">
        <p>
          <em>WH Closet</em>
        </p>
        <br />
        <a href="#">
          <button>Customer Feedback</button>
        </a>
      </div>
      <div className="footer-about">
        <p>ABOUT WH Closet</p>
        <a href="#">About us</a>
        <br />
        <a href="#">Company</a>
        <br />
        <a href="#">Store Locator</a>
      </div>
      <div className="footer-account">
        <p>MY ACCOUNT</p>
        <a href="#">Login</a>
        <br />
        <a href="#">Order History</a>
        <br />
        <a href="#">Order Status</a>
      </div>
      <div className="footer-care">
        <p>CUSTOMER CARE</p>
        <a href="#">Contact us</a>
        <br />
        <a href="#">Complaint/Inquiry form</a>
        <br />
        <a href="#">FAQ</a>
        <br />
        <a href="#">Shipping Policy</a>
        <br />
        <a href="#">Return Exchange</a>
        <br />
      </div>
    </footer>
  );
}

export default Footer;
