import "./viewproducts.css";

function ViewProducts() {
  const products = [
    {
      id: 1,
      name: "Blue Shirt",
      image: "./src/assets/shirt1.png",
      description: "Blue Shirt, 100% cotton by WH.",
      price: 3200,
    },
    {
      id: 2,
      name: "Sky Shirt",
      image: "./src/assets/shirt2.png",
      description: "Sky dotted Shirt by WH.",
      price: 2800,
    },
  ];

  return (
    <div className="main-content">
      <div className="products-table-container">
        <p>View Products</p>
        <table className="products-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Id</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={product.id}
                    readOnly
                    className="input-field"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={product.name}
                    readOnly
                    className="input-field"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={product.description}
                    readOnly
                    className="input-field"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={product.price}
                    readOnly
                    className="input-field"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewProducts;
