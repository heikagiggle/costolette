import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Sidebar.css";
import { useContext } from "react";
import { AuthContext } from "../../hooks/context";

const navItems = [
  { label: "Category", path: "/admin/category" },
  { label: "Products", path: "/admin/products" },
];

export default function Sidebar() {
  const location = useLocation();
  const { setToken } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setToken(null);
    navigate("/");
  };

  return (
    <aside className="admin-sidebar">
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
                className={`sidebar-link ${isActive ? "active" : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      <p className="logout" onClick={handleLogout}>
        Log out
      </p>
    </aside>
  );
}
