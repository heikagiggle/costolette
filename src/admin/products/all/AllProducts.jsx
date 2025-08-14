import "./AllProducts.css";
import { useEffect, useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import TopBar from "../components/Topbar";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useProduct } from "../../../hooks/useProduct";

const AllProducts = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const { getAllProducts, deleteProduct } = useProduct();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { products } = await getAllProducts();
        setProducts(products);
        toast.success("Products fetched successfully");
      } catch (error) {
        toast.error("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (_id) => {
    try {
      await deleteProduct(_id);
      toast.success("Product deleted");

      const { products: updatedProducts } = await getAllProducts();
      setProducts(updatedProducts);
    } catch (err) {
      console.error(err);
      toast.error("Failed to delete product");
    }
  };

  // 🔍 Filter products based on search term
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <TopBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <div className="product-container">
        <h3 className="product-title">All Products</h3>

        <div className="product-list">
          {loading ? (
            <div className="loader">Loading...</div>
          ) : filteredProducts.length ? (
            filteredProducts.map((product) => (
              <div key={product._id} className="product-card">
                <div className="product-images">
                  {product.images.map((imageUrl, index) => (
                    <img
                      key={index}
                      src={imageUrl}
                      alt={`${product.title} - ${index + 1}`}
                      className="product-image"
                    />
                  ))}
                </div>

                <div className="product-info">
                  <div className="product-header">
                    <h4 className="product-name">{product.title}</h4>
                    <div className="product-actions">
                      <button
                        onClick={() =>
                          navigate(`/admin/products/edit/${product._id}`)
                        }
                        title="Edit"
                      >
                        <FiEdit size={18} />
                      </button>
                      <button
                        onClick={() => handleDelete(product._id)}
                        title="Delete"
                      >
                        <FiTrash2 size={18} />
                      </button>
                    </div>
                  </div>

                  <p className="product-desc">{product.description}</p>

                  <div className="product-meta">
                    <span className="product-category">
                      {product.category?.name}
                    </span>
                    <span className="product-price">
                      ₦{parseFloat(product.price).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="no-products">No products found</p>
          )}
        </div>
      </div>
    </>
  );
};

export default AllProducts;
