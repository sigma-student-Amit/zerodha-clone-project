import React from "react";

function Hero() {
  return (
    <>
      <div className="container">
        <div className="row text-center border-bottom">
          <h4 style={{marginTop:'4em'}}>Zerodha Products</h4>
          <h6
            className="text-center text-muted"
            style={{ marginTop: "15px", marginBottom: "1em" }}
          >
            Sleek, modern, and intuitive trading platforms
          </h6>
          <p className="mt-2" style={{ marginBottom: "110px" }}>
            Check out our&nbsp;
            <a href="#" style={{ textDecoration: "none" }}>
              investment offerings <i class="fa-solid fa-arrow-right-long"></i>
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Hero;
