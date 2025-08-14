import { useContext } from "react";
import { AuthContext } from "./context";
import apiClient from "./api";

export function useProduct() {
  const { token } = useContext(AuthContext);

  // Get all products
  const getAllProducts = async () => {
    const response = await apiClient.get("/api/products", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const { products, message } = response.data;

    return { products, message };
  };

  const getProductById = async (id) => {
    const response = await apiClient.get(`/api/products/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data; 
  };

  // Add a new Product
  const createProduct = async (Product) => {
    const { data, message } = await apiClient.post("/api/products", Product, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return { data, message };
  };

  // Update Product by ID
  const updateProduct = async (id, updatedData) => {
    const { data } = await apiClient.put(`/api/products/${id}`, updatedData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  };

  // Delete Product by ID
  const deleteProduct = async (id) => {
    const { data } = await apiClient.delete(`/api/products/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  };

  return {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
  };
}
