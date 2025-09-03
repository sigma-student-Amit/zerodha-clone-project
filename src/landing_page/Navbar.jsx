import React from "react";
import {Link} from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav 
        class="navbar navbar-expand-lg border-bottom sticky-top"
        style={{ backgroundColor: "#FFF" }}
      >
        <div class="container">
          <a class="navbar-brand" href="/">
            <img src="media/images/logo.svg" style={{ width: "20%" }} />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex">
              <ul class="navbar-nav mb-2 mb-lg-0">
                <li class="nav-item">
                  <a
                    class="nav-link active text-muted"
                    aria-current="page"
                    href="#"
                    style={{ marginLeft: "20px" }}
                  >
                  <Link to="/signup" style={{textDecoration:'none', color:'#6c6a6aff'}}>Signup</Link>
                  
                  </a>
                </li>
                <li class="nav-item">
                  <Link to='/about'
                    class="nav-link active text-muted"
                    href="#"
                    style={{ marginLeft: "20px" }}
                  >
                    About
                  </Link>
                </li>

                <li class="nav-item">
                  <Link to='/products'
                    class="nav-link active text-muted"
                    href="#"
                    style={{ marginLeft: "20px" }}
                  >
                    Products
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to='/pricing'
                    class="nav-link active text-muted"
                    href="#"
                    style={{ marginLeft: "20px" }}
                  >
                    Pricing
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to='/support'
                    class="nav-link active text-muted"
                    href="#"
                    style={{ marginLeft: "20px" }}
                  >
                    Support
                  </Link>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link active text-muted"
                    href="#"
                    style={{ marginLeft: "20px" }}
                  >
                    <div>
                      <i class="fa-solid fa-bars"></i>
                    </div>
                  </a>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
