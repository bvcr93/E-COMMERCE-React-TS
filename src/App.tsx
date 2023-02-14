import { Route, Routes } from "react-router-dom";
import "./App.css";
import Announcment from "./components/Announcment";
import Navbar from "./components/Navbar";
import { SharedLayout } from "./components/SharedLayout";
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
    
      <Routes>
        <Route element = {<SharedLayout/>}path="/">
        <Route  index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product" element={<Product />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
