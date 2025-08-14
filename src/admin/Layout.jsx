import { useState } from "react";
import { Outlet } from "react-router-dom";
import { SidebarContent } from "../components/sidebar/SidebarContent";
import { FiMenu, FiX } from "react-icons/fi";
import Sidebar from "../components/sidebar/Sidebar";
import "./Layout.css";

const DashboardLayout = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="main">
      <Sidebar />

      {menuOpen && (
        <div
          className="mobile-container"
          onClick={() => setMenuOpen(false)}
        >
          <div
            className="mobile-sidebar"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="close">
              <button onClick={() => setMenuOpen(false)}>
                <FiX size={24} className="icon" />
              </button>
            </div>
            <SidebarContent onNavigate={() => setMenuOpen(false)} />
          </div>
        </div>
      )}

      <main className="outlet">
        <div className="outlet-button">
          <button onClick={() => setMenuOpen(true)}>
            <FiMenu size={24} />
          </button>
        </div>

        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
