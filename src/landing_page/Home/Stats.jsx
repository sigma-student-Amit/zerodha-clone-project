import React from "react";

function Stats() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6 mt-5">
            <h1 className="fs-4 mb-5" style={{ color: "#4d4c4cff" }}>
              Trust with confidence
            </h1>
            <h2 className="fs-5" style={{ color: "#4d4c4cff" }}>
              Customer-first always
            </h2>
            <p className="mb-5 text-muted">
              That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh
              crores of equity investments, making us India’s largest broker;
              contributing to 15% of daily retail exchange volumes in India.
            </p>
            <h2 className="fs-5" style={{ color: "#4d4c4cff" }}>
              No spam or gimmicks
            </h2>
            <p className="mb-5 text-muted">
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like. Our
              philosophies.
            </p>
            <h2 className="fs-5" style={{ color: "#4d4c4cff" }}>
              The Zerodha universe
            </h2>
            <p className="mb-5 text-muted">
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>
            <h2 className="fs-5" style={{ color: "#4d4c4cff" }}>
              Do better with money
            </h2>
            <p className="mb-5 text-muted">
              With initiatives like Nudge and Kill Switch, we don't just
              facilitate transactions, but actively help you do better with your
              money.
            </p>
          </div>
          <div className="col-6 mt-5">
            <img src="media\images\ecosystem.png" style={{ width: "99%" }} />
            <div style={{display:'flex', justifyContent:'space-around'}}>
                <a href="#" style={{textDecoration:'none'}}>
              Explore our products <i class="fa fa-long-arrow-right fa-1x" aria-hidden="true"></i>
            </a>
            <a href="#" style={{textDecoration:'none'}}>
              Try Kite demo <i class="fa fa-long-arrow-right fa-1x" aria-hidden="true"></i>
            </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Stats;
