import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Sidebar.css";
import { useContext } from "react";
import { AuthContext } from "../../hooks/context";

const navItems = [
  { label: "Category", path: "/admin/category" },
  { label: "Products", path: "/admin/products" },
];

export const SidebarContent = ({ onNavigate }) => {
  const location = useLocation();
  const { setToken } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setToken(null);
    navigate("/");
  };

  return (
    <div className="content">
      <div>
        <h1 className="app__navbar-logo header-text">Costolette</h1>
        <nav className="sidebar-nav">
          {navItems.map((item) => {
            const isActive =
              item.path === "/"
                ? location.pathname === item.path
                : location.pathname.startsWith(item.path);

            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={onNavigate}
                className={`sidebar-link ${isActive ? "active" : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      <p onClick={handleLogout} className="logout">
        Log out
      </p>
    </div>
  );
};
