import "./vieworderitem.css";

function ViewOrderItem() {
  const items = [
    {
      image: "./src/assets/shirt2.png",
      orderid: 100,
      id: 2,
      name: "Sky Shirt",
      quantity: 1,
      price: 2800,
    },
  ];

  return (
    <div className="main-content">
      <div className="items-table-container">
        <p>Order Details</p>
        <table className="items-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>ID</th>
              <th>Order ID</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="item-image"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={item.id}
                    readOnly
                    className="input-field"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={item.orderid}
                    readOnly
                    className="input-field"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={item.name}
                    readOnly
                    className="input-field"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={item.quantity}
                    readOnly
                    className="input-field"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={item.price}
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

export default ViewOrderItem;
