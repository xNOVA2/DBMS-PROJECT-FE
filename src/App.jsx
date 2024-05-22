import React from "react";
import Navbar from "./components/navbar";
import Signup from "./components/signup";
import Footer from "./components/footer";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Signup />
      <Footer />
    </React.Fragment>
  );
}

export default App;
