import "./totalsales.css";
import "chart.js/auto";

function TotalSales() {
  return (
    <div className="main-content">
      <div className="totalsales-container">
        <p>Total Sales Dashboard</p>
        <div className="metrics">
          <div className="metric-card">
            <h2>Total Sales Revenue</h2>
            <p>RS 140,000</p>
          </div>
          <div className="metric-card">
            <h2>Total Orders</h2>
            <p>50</p>
          </div>
          <div className="metric-card">
            <h2>Top Selling Products</h2>
            <p>Shirts</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TotalSales;
