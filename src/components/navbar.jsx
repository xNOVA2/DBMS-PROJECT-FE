import { useRef } from "react";
import { FaBars, FaTimes, FaUser } from "react-icons/fa";
import "./navbar.css";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <img src="./src/assets/logo.jpg" alt="logo" />
      <nav ref={navRef}>
        <a href="/#">Home</a>
        <a href="/#">Products</a>
        <a href="/#">Order</a>
        <a href="/#">Payment</a>
        <a href="/#">
          <FaUser />
        </a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
