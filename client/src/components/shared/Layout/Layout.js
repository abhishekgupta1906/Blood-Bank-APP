import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar"; // Corrected component name

const Layout = ({ children }) => {
  // Corrected prop name to start with a lowercase letter
  return (
    <>
      <div className="header">
        <Header />
      </div>

      <div className="row g-0">
        <div className="col-md-3">
          <Sidebar /> {/* Corrected component name */}
        </div>
        <div className="col-md-9">{children}</div> {/* Corrected prop name */}
      </div>
    </>
  );
};

export default Layout;
