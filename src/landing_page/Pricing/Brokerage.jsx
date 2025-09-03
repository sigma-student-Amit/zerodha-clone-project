import React from "react";

function Brokerage() {
  return (
    <>
      <div className="container">
        <div className="row border-top text-center">
          <div className="col-8 p-4">
            <h4>Brokerage Calculator</h4>
            <ul>
              <li style={{ fontSize: "10px", textIndent: "start" }}>
                Call & Trade and RMS auto-squareoff:Addtional charges of 50+GST per order.</li>

              <li style={{ fontSize: "10px", textIndent: "start" }}>Digital contract notes will be sent via e-mail.{" "}
              </li>
              <li style={{ fontSize: "10px", textIndent: "start" }}>
                {" "}
                Physical copy of contract notes, if required shall be charged 20
                per contract note.Courier charges apply.
              </li>
              <li style={{ fontSize: "10px", textIndent: "start" }}>
                {" "}
                For NRI account(non-PIS), 0.5% or 100 rupee per excuted order
                for equity (whichever is lower).
              </li>
              <li style={{ fontSize: "10px", textIndent: "start" }}>
                {" "}
                For NRI account(PIS), 0.5% or 200 rupee per excuted order for
                equity(whichever is lower).
              </li>
              <li style={{ fontSize: "10px", textIndent: "start" }}>
                {" "}
                If the account is in debit balance, any order placed will be
                charged 40 rupee per excuted order for instead of 20 rupee per
                order
              </li>
            </ul>
          </div>
          {/* <div className='col-1'></div> */}
          <div className="col-4 p-4">
            <h4>List of Charges</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default Brokerage;
