// hooks/useCategory.js

import { useContext } from "react";
import { AuthContext } from "./context";
import apiClient from "./api";

export function useCategory() {
  const { token } = useContext(AuthContext);

  // Get all categories
  const getAllCategories = async () => {
    const response = await apiClient.get("/api/category", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const { categories, message } = response.data;

    return { categories, message };
  };

  // Add a new category
  const addCategory = async (category) => {
    const { data, message } = await apiClient.post("/api/category", category, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return { data, message };
  };

  // Update category by ID
  const updateCategory = async (id, updatedData) => {
    const { data } = await apiClient.put(`/api/category/${id}`, updatedData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  };

  // Delete category by ID
  const deleteCategory = async (id) => {
    const { data } = await apiClient.delete(`/api/category/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  };

  return {
    getAllCategories,
    addCategory,
    updateCategory,
    deleteCategory,
  };
}
