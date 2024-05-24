import "./herosection.css";

function Herosection() {
  return (
    <div className="herosection">
      <img src="./src/assets/hero-section-img.png" alt="" />

      <p className="featured">Featured Shirts</p>
      <div className="carts">
        <div className="cart">
          <img src="./src/assets/fshirt1.jpg" alt="" />
        </div>
        <div className="cart">
          <img src="./src/assets/fshirt2.jpg" alt="" />
        </div>
        <div className="cart">
          <img src="./src/assets/fshirt3.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Herosection;
