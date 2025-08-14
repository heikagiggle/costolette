import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import "./ProductForm.css";
import { FiTrash2 } from "react-icons/fi";
import { useCategory } from "../../hooks/useCategory";
import { useEffect } from "react";
import { useProduct } from "../../hooks/useProduct";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().optional(),
  category: z.string().min(3, "Category must be at least 3 characters"),
  price: z.string().min(1, "Price is required"),
  images: z.array(z.string()).optional(),
});

const ProductForm = ({ product, isEditMode = false }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [existingImages, setExistingImages] = useState([]);
  const { getAllCategories } = useCategory();
  const { createProduct, updateProduct } = useProduct();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    if (product && isEditMode) {
      reset({
        title: product.title,
        description: product.description || "",
        category: product.category?._id || "",
        price: product.price?.toString() || "",
        images: product.images || [],
      });
      setExistingImages(product.images || []);
      setImagePreviews(product.images || []);
    }
  }, [product, isEditMode, reset]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { categories } = await getAllCategories();
        setCategories(categories);
      } catch (err) {
        console.error("Failed to fetch categories:", err);
      }
    };
    fetchCategories();
  }, []);

  const uploadImageToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "unsigned_preset_1");
    formData.append("cloud_name", "dbxecbiso");

    const response = await fetch(
      "https://api.cloudinary.com/v1_1/dbxecbiso/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error("Cloudinary upload failed");
    }

    const data = await response.json();
    return data.secure_url;
  };

  const onImageChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles((prev) => [...prev, ...files]);
    setImagePreviews((prevPreviews) => [
      ...prevPreviews,
      ...files.map((file) => URL.createObjectURL(file)),
    ]);
  };

  const handleRemoveImage = (indexToRemove) => {
    setImagePreviews((prev) =>
      prev.filter((_, index) => index !== indexToRemove)
    );
    setSelectedFiles((prev) =>
      prev.filter((_, index) => index !== indexToRemove)
    );
  };

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      const uploadedImageUrls = await Promise.all(
        selectedFiles.map((file) => uploadImageToCloudinary(file))
      );

      const finalImages = [...existingImages, ...uploadedImageUrls];

      const payload = {
        title: data.title,
        description: data.description,
        category: data.category,
        images: finalImages,
        price: data.price,
      };
      if (isEditMode) {
        await updateProduct(product._id, payload);
        toast.success("Product updated successfully");
      } else {
        await createProduct(payload);
        toast.success("Product created successfully");
      }
      navigate("/admin/products");
    } catch (error) {
      console.error("Product creation failed:", error);
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="arrow-left">
        <FaArrowLeft
          size={20}
          onClick={() => navigate(-1)}
          className="clickable-icon"
        />
      </div>

      <div className="form-wrapper">
        <form className="product-form" onSubmit={handleSubmit(onSubmit)}>
          <h2> {isEditMode ? "Edit Product" : "Add Product"} </h2>

          <div className="form-group">
            <label>Product Title</label>
            <input
              type="text"
              {...register("title")}
              placeholder="Enter product title"
            />

            {errors.title && <p className="error">{errors.title.message}</p>}
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              {...register("description")}
              placeholder="Enter product description"
            />
            {errors.desc && <p className="error">{errors.desc.message}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
              {...register("category")}
              className="form_text_input border border-gray-400 h-[40px] w-full"
            >
              <option value="">-- Select a Category --</option>
              {categories.map((cat) => (
                <option key={cat._id} value={cat._id}>
                  {cat.name}
                </option>
              ))}
            </select>
            {errors.category && (
              <em className="form_error">{errors.category.message}</em>
            )}
          </div>

          <div className="form-group">
            <label>Price ($)</label>
            <input
              type="text"
              {...register("price")}
              placeholder="Enter price"
            />
            {errors.price && <p className="error">{errors.price.message}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="images">Product Images</label>
            <input
              type="file"
              id="images"
              multiple
              className="image-input"
              accept="image/*"
              onChange={onImageChange}
            />
            {errors.images && (
              <em className="form_error">{errors.images.message}</em>
            )}
          </div>

          {imagePreviews.length > 0 && (
            <div className="images-grid">
              {imagePreviews.map((preview, index) => (
                <div key={index} className="image-group">
                  <img
                    src={preview}
                    alt="product.png"
                    className="image-preview"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveImage(index)}
                    className="delete-button"
                  >
                    <FiTrash2 size={20} />
                  </button>
                </div>
              ))}
            </div>
          )}

          <div className="form-actions">
            <button type="submit" disabled={loading} className="submit-btn">
              {loading
                ? "Submitting..."
                : isEditMode
                ? "Update Product"
                : "Create Product"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ProductForm;
