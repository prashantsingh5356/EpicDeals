import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AllProductsPage from "./pages/AllProductsPage";
import CategoriesPage from "./pages/CategoriesPage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import CartPage from "./pages/CartPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Navbar>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<HomePage />} />;
          <Route path={"/products"} element={<AllProductsPage />} />;
          <Route path={"/categories"} element={<CategoriesPage />} />;
          <Route path={"/signup"} element={<SignUpPage />} />;
          <Route path={"/login"} element={<LoginPage />} />;
          <Route path={"/cart"} element={<CartPage />} />;
        </Routes>
      </BrowserRouter>
    </Navbar>
  );
}

export default App;
