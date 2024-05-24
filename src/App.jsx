import React from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import ForgotPassword from "./pages/forgotpassword/forgotpassword";
import Herosection from "./pages/herosection/Herosection";
import Newsletter from "./components/newsletter/Newsletter";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <React.Fragment>
      <div className="main-container">
        <Navbar />
        {/* <Signup /> */}
        {/* <Login /> */}
        {/* <ForgotPassword /> */}
        <Herosection />
        <Newsletter />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
