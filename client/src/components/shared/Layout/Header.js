import React from "react";
import { BiDonateBlood, BiUserCircle } from "react-icons/bi";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const location = useLocation();

  // Logout handler
  const handleLogout = () => {
    localStorage.clear();
    alert("Logged out successfully");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <BiDonateBlood color="red" size={20} /> Blood Bank App
        </Link>
        <ul className="navbar-nav ms-auto align-items-center">
          <li className="nav-item">
            <p className="nav-link m-0 d-flex align-items-center">
              <BiUserCircle size={18} className="me-2" />
              Welcome{" "}
              {user?.name || user?.hospitalName || user?.organisationName}
              &nbsp;
              <span className="badge bg-secondary">{user?.role}</span>
            </p>
          </li>
          <li className="nav-item mx-3">
            {location.pathname === "/" ||
            location.pathname === "/donar" ||
            location.pathname === "/hospital" ? (
              <Link to="/analytics" className="nav-link">
                Analytics
              </Link>
            ) : (
              <Link to="/" className="nav-link">
                Home
              </Link>
            )}
          </li>
          <li className="nav-item">
            <button className="btn btn-danger" onClick={handleLogout}>
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
