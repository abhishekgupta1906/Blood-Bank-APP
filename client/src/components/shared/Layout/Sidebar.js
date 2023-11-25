import React from "react";
import { userMenu } from "./Menus/userMenu";
import { useLocation, Link } from "react-router-dom";
import "../../../styles/Layout.css";

const Sidebar = () => {
  const location = useLocation();
  return (
    <div className="sidebar">
      <div className="menu">
        {userMenu.map((menu, index) => {
          const isActive = location.pathname === menu.path;

          return (
            <div
              key={index}
              className={`menu-item ${isActive && "active"}`}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "10px 20px",
                margin: "5px 0",
                borderRadius: "5px",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
                backgroundColor: isActive ? "#e0e0e0" : "transparent",
              }}
            >
              <i
                className={menu.icon}
                style={{ marginRight: "10px", fontSize: "18px" }}
              ></i>
              <Link
                to={menu.path}
                style={{
                  textDecoration: "none",
                  color: "#333",
                  fontWeight: isActive ? "bold" : "normal",
                }}
              >
                {menu.name}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
