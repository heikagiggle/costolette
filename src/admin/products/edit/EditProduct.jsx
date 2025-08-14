import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProduct } from "../../../hooks/useProduct";
import ProductForm from "../../components/ProductForm";
import { toast } from "react-toastify";

const EditProduct = () => {
  const { id } = useParams(); // get the product ID from the URL
  const { getProductById } = useProduct();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { product } = await getProductById(id);
        setProduct(product);
      } catch (error) {
        toast.error("Failed to load product");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <ProductForm product={product} isEditMode />
    </div>
  );
};

export default EditProduct;
