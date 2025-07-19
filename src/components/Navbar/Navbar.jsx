import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg secondary-bg py-4">
        <div class="container">
          <Link
            className="navbar-brand fs-2 fw-bold text-white text-uppercase"
            aria-current="page"
            to={"/"}
          >
            Start Framework
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto gap-4">
              <li class="nav-item">
                <NavLink
                  className="nav-link text-white fs-5 fw-semibold px-1"
                  to={"/about"}
                >
                  About
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink
                  className="nav-link text-white fs-5 fw-semibold px-1"
                  to={"/portfolio"}
                >
                  Portfolio
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink
                  className="nav-link text-white fs-5 fw-semibold px-1"
                  to={"/contact"}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
