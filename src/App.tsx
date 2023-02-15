import { Route, Routes } from "react-router-dom";
import "./App.css";
import Announcment from "./components/Announcment";
import Navbar from "./components/Navbar";
import { SharedLayout } from "./components/SharedLayout";
import { CartProvider } from "./context/CartContext";
import { Cart } from "./pages/Cart";
import Home from "./pages/Home";
import { Login } from "./pages/Login";
import { Product } from "./pages/ProductDetail";
import { ProductList } from "./pages/ProductList";
import { Register } from "./pages/Register";

function App() {
  return (
    <>
    <CartProvider>
      <Announcment />
    
      <Routes>
        <Route element = {<SharedLayout/>}path="/">
        <Route  index element={<Home />} />
     
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
      </CartProvider>
    </>
  );
}

export default App;
