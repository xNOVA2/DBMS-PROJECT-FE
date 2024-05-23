import React from "react";
import Navbar from "./components/navbar/navbar";
import Signup from "./pages/signup/signup";
// import Login from "./pages/login/login";
// import ForgotPassword from "./pages/forgotpassword/forgotpassword";
import Footer from "./components/footer/footer";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Signup />
      {/* <Login /> */}
      {/* <ForgotPassword /> */}
      <Footer />
    </React.Fragment>
  );
}

export default App;
