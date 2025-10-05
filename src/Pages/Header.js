// Header.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleNavClick = (path) => {
    const navCollapseEl = document.getElementById("navbarNav");

    // If Bootstrap JS is available, use its events so we navigate after the collapse finishes
    if (window.bootstrap && navCollapseEl) {
      // If already closed, go immediately
      if (!navCollapseEl.classList.contains("show")) {
        navigate(path);
        return;
      }

      // Wait for the collapse to finish, then navigate
      const onHidden = () => navigate(path);
      navCollapseEl.addEventListener("hidden.bs.collapse", onHidden, { once: true });

      // get or create the Bootstrap Collapse instance then hide
      const bsInst =
        window.bootstrap.Collapse.getInstance(navCollapseEl) ||
        new window.bootstrap.Collapse(navCollapseEl);
      bsInst.hide();
      return;
    }

    // Fallback (no bootstrap JS): try to click the toggler if visible and collapse is open
    const toggler = document.querySelector(".navbar-toggler");
    if (toggler && getComputedStyle(toggler).display !== "none") {
      if (navCollapseEl && navCollapseEl.classList.contains("show")) {
        toggler.click();
      }
    }

    // finally navigate
    navigate(path);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
      <div className="container-fluid p-1">
        <a className="navbar-brand fw-bold mx-2" href="/">
          Akilam Friends Trust
        </a>

        <button
          className="navbar-toggler mx-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse mx-2" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <button className="nav-link btn text-start" onClick={() => handleNavClick("/")}>
                Home
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn text-start" onClick={() => handleNavClick("/FounderDetails")}>
                About
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn text-start" onClick={() => handleNavClick("/Services")}>
                Services
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn text-start" onClick={() => handleNavClick("/Contact")}>
                Contact
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
