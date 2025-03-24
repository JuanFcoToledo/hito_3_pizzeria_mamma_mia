import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Registro from "./components/Registro";
import Login from "./components/Login";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <div className="pagina">
        <Navbar />
        {/* <Home /> */}
        {/* <Registro /> */}
        {/* <Login /> */}
        <Cart />
        <Footer />
      </div>
    </>
  );
}

export default App;
