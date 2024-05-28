import "./adminhome.css";
import { GoArchive } from "react-icons/go";
import { FcSalesPerformance } from "react-icons/fc";

function AdminHome() {
  return (
    <main className="main-container1">
      <div className="main-title">
        <h3>DASHBOARD</h3>
      </div>

      <div className="main-cards">
        <button className="card">
          <div className="card-inner">
            <h3>VIEW ORDERS</h3>
            <GoArchive className="card_icon" />
          </div>
        </button>
        <button className="card">
          <div className="card-inner">
            <h3>TOTAL SALES</h3>
            <FcSalesPerformance className="card_icon" />
          </div>
        </button>
      </div>
    </main>
  );
}

export default AdminHome;
