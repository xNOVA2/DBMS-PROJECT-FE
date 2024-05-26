import React, { useState } from "react";
import "./cart.css";

const Cartitem = ({ item }) => {
  return (
    <div className="cart-item-container">
      <div className="item-details">
        <img className="item-image" src={item.image} alt={item.name} />
        <div className="item-info">
          <div className="item-name">{item.name}</div>
          <div className="item-quantity">{item.quantity}</div>
        </div>
      </div>
      <div className="item-price">RS. {item.price}</div>
    </div>
  );
};

const CollapsibleSection = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapsible-section">
      <div className="collapsible-header" onClick={() => setIsOpen(!isOpen)}>
        <span>{title}</span>
        <span className="arrow">{isOpen ? "▲" : "▼"}</span>
      </div>
      {isOpen && <div className="collapsible-content">{children}</div>}
    </div>
  );
};

const Cart = () => {
  const items = [
    {
      name: "Blue Shirt",
      image: "./src/assets/shirt1.png",
      quantity: 1,
      price: 3500,
    },
    {
      name: "Black Shirt",
      image: "./src/assets/shirt11.jpg",
      quantity: 1,
      price: 4000,
    },
    {
      name: "White Shirt",
      image: "./src/assets/shirt12.jpg",
      quantity: 1,
      price: 3200,
    },
    {
      name: "White Shirt",
      image: "./src/assets/shirt2.png",
      quantity: 1,
      price: 2800,
    },
  ];

  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-container">
      <div className="item-list">
        {items.map((item, index) => (
          <Cartitem key={index} item={item} />
        ))}
      </div>
      <div className="summary">
        <CollapsibleSection title="Contact Information">
          <div>
            <input type="text" placeholder="Full Name" />
          </div>
          <div>
            <input type="email" placeholder="Email" />
          </div>
        </CollapsibleSection>
        <CollapsibleSection title="Shipping Information">
          <div>
            <input type="text" placeholder="Street Address, Line" />
          </div>
          <div>
            <input type="text" placeholder="Country" />
          </div>
          <div>
            <input type="text" placeholder="State" />
          </div>
          <div>
            <input type="text" placeholder="City" />
          </div>
          <div>
            <input type="text" placeholder="Phone Number" />
          </div>
          <div>
            <input type="text" placeholder="Postal Code" />
          </div>
        </CollapsibleSection>
        <CollapsibleSection title="Payment Method">
          <div>
            <label>
              <input type="radio" name="payment" value="cash" /> Cash on
              Delivery
            </label>
          </div>
        </CollapsibleSection>
        <div className="total">Order Total: RS. {total}</div>
        <div className="place-order">Place Order</div>
      </div>
    </div>
  );
};

export default Cart;
