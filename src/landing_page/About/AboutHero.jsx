import React from "react";

function AboutHero() {
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <h1
            className="fs-4 text-center"
            style={{ marginTop: "40px", marginBottom: "4em" }}
          >
            We pioneered the discount broking model in India.
            <br />
            Now, we are breaking ground with our technology.
          </h1>
          <hr />
        </div>

        <div className="row mt-5" style={{padding:'0 120px 150px', paddingBottom:'10px'}}>
            <div className="col-6 text-muted" style={{lineHeight:'1.8'}}>
                <p>
                    We kick-started operations on the 15th of August, 2010<br /> with the goal of breaking all barriers that traders and <br />investors face in India in terms of cost, support, and <br /> technology. We named the company Zerodha, a <br /> combination of Zero and "Rodha", the Sanskrit word for <br />barrier.
                </p>
                <p>
                    Today, our disruptive pricing models and in-house <br /> technology have made us the biggest stock broker in <br /> India.
                </p>
                <p>
                    Over 1.6+ crore clients place billions of orders every year <br /> through our powerful ecosystem of investment <br /> platforms, contributing over 15% of all Indian retail <br /> trading volumes.
                </p>
            </div>
            <div className="col-6 text-muted" style={{lineHeight:'1.8'}}>
                <p>
                    In addition, we run a number of popular open online <br /> educational and community initiatives to empower retail <br /> traders and investors.
                </p>
                <p>
                   <a href="#" style={{textDecoration:'none'}}>Rainmatter</a>, our fintech fund and incubator, has invested <br /> in several fintech startups with the goal of growing the <br /> Indian capital markets.
                </p>
                <p>
                    And yet, we are always up to something new every day.<br /> Catch up on the latest updates on our  <a href="#" style={{textDecoration:'none'}}> blog </a>or see what <br /> the media is  <a href="#" style={{textDecoration:'none'}}>saying about us </a> or learn more about our <br /> business and product  <a href="#" style={{textDecoration:'none'}}> philosophies.</a>
                </p>
            </div>
        </div>
      </div>
    </>
  );
}

export default AboutHero;
