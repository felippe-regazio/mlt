import Home from "./pages/Home/";
import NotFound from "./pages/404/";
import SignIn from "./pages/SignIn/";
import SignOut from "./pages/SignOut/";
import Register from "./pages/Register/";
import Login from "./pages/Login/";
import Product from "./pages/Product/";
import Checkout from "./pages/Checkout/";
import Buyings from "./pages/Buyings/";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default (
  <Router>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/signin" element={<SignIn />}></Route>
      <Route path="/signout" element={<SignOut />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/product" element={<Product />}></Route>
      <Route path="/Checkout" element={<Checkout />}></Route>
      <Route path="/Buyings" element={<Buyings />}></Route>
      <Route path="/*" element={<NotFound />}></Route>
    </Routes>
  </Router>
);