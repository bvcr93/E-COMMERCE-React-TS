import { Route, Routes } from "react-router-dom";
import "./App.css";
import Announcment from "./components/Announcment";
import Navbar from "./components/Navbar";
import { Cart } from "./pages/Cart";
import Home from "./pages/Home";
import { Login } from "./pages/Login";
import { Product } from "./pages/Product";
import { ProductList } from "./pages/ProductList";
import { Register } from "./pages/Register";

function App() {
  return (
    <>
      <Announcment />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
