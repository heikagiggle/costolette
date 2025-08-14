import { FaSearch, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Topbar.css";

const TopBar = ({ searchTerm, setSearchTerm }) => {
  const navigate = useNavigate();

  return (
    <div className="topbar-container">
      <div className="back-button">
        <FaArrowLeft
          size={20}
          onClick={() => navigate(-1)}
          className="clickable-icon"
        />
      </div>

      <div className="search-container">
        <div className="search-icon-wrapper">
          <FaSearch />
        </div>

        <input
          type="search"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>
      
      <button
        className="add_button"
        onClick={() => navigate("/admin/products/new")}
      >
        Add products
      </button>
    </div>
  );
};

export default TopBar;
