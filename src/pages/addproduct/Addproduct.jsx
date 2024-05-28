import "./addproduct.css";

function AddProduct() {
  return (
    <div className="container">
      <div className="header">
        <div className="text">Add Product</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <input type="text" placeholder="ID" />
        </div>
        <div className="input">
          <input type="text" placeholder="Product Name" />
        </div>
        <div className="input">
          <input type="file" />
        </div>
        <div className="input">
          <input type="text" placeholder="Product Description" />
        </div>
        <div className="input">
          <input type="text" placeholder="Price" />
        </div>
      </div>
      <div className="submit-container">
        <div className="submit">Add</div>
      </div>
    </div>
  );
}

export default AddProduct;
