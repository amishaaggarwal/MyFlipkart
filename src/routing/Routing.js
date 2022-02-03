import Cart from "pages/Cart/Cart";
import Notfound from "pages/NotFound/NotFound";
import ProductList from "pages/ProductList/ProductList";
import ViewProduct from "pages/ViewProduct/ViewProduct";
import { Route, Routes } from "react-router-dom";

function Routing() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/product/:id" element={<ViewProduct/>} />
        <Route path="*" element={<Notfound/>} />
      </Routes>
    </div>
  );
}

export default Routing;
