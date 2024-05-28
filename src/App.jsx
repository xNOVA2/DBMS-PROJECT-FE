import React from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import ForgotPassword from "./pages/forgotpassword/forgotpassword";
import Herosection from "./pages/herosection/Herosection";
import Newsletter from "./components/newsletter/Newsletter";
import Footer from "./components/footer/Footer";
import ProductPage from "./pages/productpage/Productpage";
import Cart from "./pages/cart/Cart";
import Sidebar from "./components/sidebar/Sidebar";
import AdminHome from "./pages/adminhome/Adminhome";
import AddProduct from "./pages/addproduct/Addproduct";
import ViewProducts from "./pages/viewproducts/Viewproducts";
import ViewOrders from "./pages/vieworder/Vieworder";
import ViewOrderItem from "./pages/vieworderitem/Vieworderitem";
import TotalSales from "./pages/totalsales/Totalsales";

function App() {
  return (
    <React.Fragment>
      <div className="main-container">
        <Navbar />
        {/* <Sidebar /> */}
        {/* <AdminHome /> */}
        <Signup />
        {/* <Login /> */}
        {/* <ForgotPassword /> */}
        {/* <Herosection /> */}
        {/* <ProductPage /> */}
        {/* <Cart /> */}
        {/* <AddProduct /> */}
        {/* <ViewProducts /> */}
        {/* <ViewOrders /> */}
        {/* <ViewOrderItem /> */}
        {/* <TotalSales /> */}
        <Newsletter />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
