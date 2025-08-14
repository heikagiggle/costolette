import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../../Home";
import { AboutPage, Menupage, Registration, ChatBox } from "../../pages";
import DashboardLayout from "../../admin/Layout";
import Auth from "../../admin/auth/Auth";
import AllProducts from "../../admin/products/all/AllProducts";
import ProductId from "../../admin/products/id/ProductId";
import EditProduct from "../../admin/products/edit/EditProduct";
import AddProduct from "../../admin/products/new/AddProduct";
import Category from "../../admin/category/Category";
import ForgotPassword from "../../admin/auth/forgot-password/ForgotPassword";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutpage" element={<AboutPage />} />
        <Route path="/menupage" element={<Menupage />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/order" element={<ChatBox />} />
        <Route path="/admin/auth" element={<Auth />} />
        <Route path="/admin/auth/forgot-password" element={<ForgotPassword />} />
        <Route path="/admin" element={<DashboardLayout />}>
          <Route index element={<Navigate to="/admin/category" replace />} />
          <Route path="category" element={<Category />} />
          <Route path="products" element={<AllProducts />} />
          <Route path="/admin/products/new" element={<AddProduct />} />
          <Route path="/admin/products/product/:id" element={<ProductId />} />
          <Route path="/admin/products/edit/:id" element={<EditProduct />} />
        </Route>
      </Routes>
    </>
  );
};

export default Routing;
