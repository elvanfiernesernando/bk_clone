import React, { useEffect } from "react";
import { Routes, Route, useNavigate} from "react-router-dom";
import Home from "./pages/main/home/Home";
import Layouts from "./components/layouts/Layouts";
import News from "./pages/main/news/News";
import LargeOrders from "./pages/main/large-orders/LargeOrders";
import NewsDetails from "./pages/main/news/NewsDetails";
import Menus from "./pages/main/menus/Menus";
import ProductDetails from "./pages/main/menus/ProductDetails";
import CartPreview from "./pages/main/cart/CartPreview";

function App() {

  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.pathname === "/large-orders") {
      navigate("/large-orders/create");
    }
  }, [navigate]);

  return (
    <Routes>

      {/* layouts wrapper */}
      <Route element={<Layouts />}>

        {/* main */}
        <Route index path="/" element={<Home />}/>
        <Route path="/menus" element={<Menus />}/>
        <Route path="/menus/:slug" element={<Menus />}/>
        <Route path="/products/:slug" element={<ProductDetails />}/>
        <Route path="/news-v1" element={<News />}/>
        <Route path="/news-v1/:slug" element={<NewsDetails />}/>
        <Route index path="/large-orders/create" element={<LargeOrders />}/>

        {/* cart */}
        <Route index path="/cart/preview" element={<CartPreview />}/>
        <Route index path="/cart/delivery" element={<h1>Step 2: Lokasi Pengantaran</h1>}/>
        <Route index path="/cart/payment" element={<h1>Step 3: Pilihan Pembayaran</h1>}/>

        {/* auth */}
        <Route path="/accounts/login" element={<h1>Login</h1>}/>
        <Route path="/accounts/validate-phone-register" element={<h1>Register</h1>}/>
        <Route path="/accounts/reset-password" element={<h1>Forget Password</h1>}/>

        {/* additionals */}
        <Route path="/privacy-policy" element={<h1>Kebijakan privasi</h1>}/>
        <Route path="/terms-and-conditions" element={<h1>Syarat dan ketentuan</h1>}/>

      </Route>

      {/* additionals #2 */}
      <Route path="/about-us" element={<h1>About us</h1>}/>

      {/* not found */}
      <Route path="*" element={<h1>Not found</h1>}/>
    </Routes>
  );
}

export default App;
