import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import "./Category.css";
import { useCategory } from "../../hooks/useCategory";

const schema = z.object({
  name: z.string().min(3, "Category name must be at least 3 characters"),
});

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formLoading, setFormLoading] = useState(false);
  const [editCategory, setEditCategory] = useState(null);
  const [formError, setFormError] = useState("");
  const { getAllCategories, addCategory, updateCategory, deleteCategory } =
    useCategory();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: { name: "" },
  });

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { categories } = await getAllCategories();
        setCategories(categories);
        toast.success("Categories fetched successfully");
      } catch (error) {
        toast.error("Failed to fetch categories");
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    if (editCategory) {
      setValue("name", editCategory.name);
    } else {
      reset();
    }
  }, [editCategory, reset, setValue]);

  const onSubmit = async (data) => {
    setFormLoading(true);
    setFormError("");

    try {
      if (editCategory) {
        await updateCategory(editCategory._id, { name: data.name });
        toast.success("Category updated successfully");
      } else {
        await addCategory({ name: data.name });
        toast.success("Category created successfully");
      }

      // ✅ Fix: Get fresh categories
      const { categories: updatedCategories } = await getAllCategories();
      setCategories(updatedCategories);
      setEditCategory(null);
      reset();
    } catch (err) {
      console.error(err);
      setFormError("Something went wrong");
    } finally {
      setFormLoading(false);
    }
  };

  const handleEdit = (category) => {
    setEditCategory(category);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (_id) => {
    try {
      await deleteCategory(_id);
      toast.success("Category deleted");

      // ✅ Fix: Refresh category list
      const { categories: updatedCategories } = await getAllCategories();
      setCategories(updatedCategories);
    } catch (err) {
      console.error(err);
      toast.error("Failed to delete category");
    }
  };

  const handleCancelEdit = () => {
    setEditCategory(null);
    reset();
  };

  return (
    <div className="category-container">
      <form className="category-form" onSubmit={handleSubmit(onSubmit)}>
        <h2>{editCategory ? "Edit Category" : "Add Category"}</h2>

        <div className="form_inputs">
          <div>
            <label htmlFor="name">Category Name</label>
            <input
              type="text"
              id="name"
              className="form_text_input"
              placeholder="Enter name of category"
              {...register("name")}
            />
            {errors.name && (
              <em className="form_error">{errors.name.message}</em>
            )}
          </div>

          {formError && <em className="form_error">{formError}</em>}

          <div className="form_buttons">
            <button
              type="submit"
              className={`search_button form_submit hover:bg-[#d46b9e] ${
                formLoading ? "opacity-60 cursor-not-allowed" : ""
              }`}
              disabled={formLoading}
            >
              {formLoading ? "Loading..." : editCategory ? "Update" : "Create"}
            </button>
            {editCategory && (
              <button
                type="button"
                className="cancel_button"
                onClick={handleCancelEdit}
              >
                Cancel
              </button>
            )}
          </div>
        </div>
      </form>

      <h3 className="category-title">Category List</h3>

      {loading ? (
        <div className="loader">Loading...</div>
      ) : categories.length ? (
        categories.map((cat) => (
          <div key={cat._id} className="category-item">
            <p className="category-name">{cat.name}</p>
            <div className="category-actions">
              <button onClick={() => handleEdit(cat)} title="Edit">
                <FiEdit size={18} />
              </button>
              <button onClick={() => handleDelete(cat._id)} title="Delete">
                <FiTrash2 size={18} />
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="no-categories">No categories found</p>
      )}
    </div>
  );
};

export default Category;
