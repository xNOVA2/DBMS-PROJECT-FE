import "./vieworder.css";

function ViewOrders() {
  const orders = [
    {
      id: 1,
      username: "Shah",
      email: "shah@gmail.com",
      address: "Malir",
      country: "Pakistan",
      city: "Karachi",
      contact: "03001234567",
      postalcode: "74500",
    },
  ];

  return (
    <div className="main-content">
      <div className="orders-table-container">
        <p>View Orders</p>
        <table className="orders-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Email</th>
              <th>Address</th>
              <th>Country</th>
              <th>City</th>
              <th>Contact</th>
              <th>Postal Code</th>
              <th>Order</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>
                  <input
                    type="text"
                    value={order.id}
                    readOnly
                    className="input-field"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={order.username}
                    readOnly
                    className="input-field"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={order.email}
                    readOnly
                    className="input-field"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={order.address}
                    readOnly
                    className="input-field"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={order.country}
                    readOnly
                    className="input-field"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={order.city}
                    readOnly
                    className="input-field"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={order.contact}
                    readOnly
                    className="input-field"
                  />
                </td>
                <td>
                  <input type="text" value={order.postalcode} readOnly />
                </td>
                <td>
                  <button className="submit-btn">Order Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewOrders;
