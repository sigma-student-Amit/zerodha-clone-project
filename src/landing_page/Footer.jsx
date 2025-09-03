import React from "react";

function Footer() {
  return (
    <>
      <hr/>
      <div className="container">
        <div className="row">
          <div className="col">
            <img
              src="media/images/logo.svg"
              alt="Logo Image"
              style={{ width: "50%" }}
            />
            <p style={{ color: "#6d6a6aff", fontSize:'13px'}} className="mt-3">
              &#169;2010 - 2025, Zerodha Broking Ltd. <br /> All rights reserved.
            </p>

            {/* <div> */}
                {/* <i class="fa-brands fa-x-twitter"></i>
                <i class="fa-brands fa-square-facebook"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-linkedin"></i> */}
            {/* </div> */}

          </div>
          <div className="col">
            <p>Account</p>
           <a href="#" style={{textDecoration:'none', color:'#747272ff', fontSize:'14px'}}>  Open demat account</a> <br />
           <a href="#" style={{textDecoration:'none', color:'#747272ff', fontSize:'14px'}}>  Minor demat account</a>  <br />
           <a href="#" style={{textDecoration:'none', color:'#747272ff', fontSize:'14px'}}>  NRI demat account</a><br />
           <a href="#" style={{textDecoration:'none', color:'#747272ff', fontSize:'14px'}}>  Commodity</a><br />
           <a href="#" style={{textDecoration:'none', color:'#747272ff', fontSize:'14px'}}>  Dematerialisation</a><br />
           <a href="#" style={{textDecoration:'none', color:'#747272ff', fontSize:'14px'}}>  Fund transfer </a><br />
           <a href="#" style={{textDecoration:'none', color:'#747272ff', fontSize:'14px'}}>   MTF </a><br />
           <a href="#" style={{textDecoration:'none', color:'#747272ff', fontSize:'14px'}}>  Referral program</a>
          </div>
          <div className="col">
            <p>Support</p>

                <a href="#"  style={{textDecoration:'none', color:'#747272ff', fontSize:'14px'}}>Contact us</a> <br />
           <a href="#"  style={{textDecoration:'none', color:'#747272ff', fontSize:'14px'}}>Support portal</a>  <br />
           <a href="#"  style={{textDecoration:'none', color:'#747272ff', fontSize:'14px'}}> How to file a complaint?</a><br />
           <a href="#"  style={{textDecoration:'none', color:'#747272ff', fontSize:'14px'}}> Status of your complaints</a><br />
           <a href="#"  style={{textDecoration:'none', color:'#747272ff', fontSize:'14px'}}> Bulletin</a><br />
           <a href="#"  style={{textDecoration:'none', color:'#747272ff', fontSize:'14px'}}> Circular </a><br />
           <a href="#"  style={{textDecoration:'none', color:'#747272ff', fontSize:'14px'}}>  Z-Connect blog</a><br />
           <a href="#"  style={{textDecoration:'none', color:'#747272ff', fontSize:'14px'}}> Downloads</a>



          </div>
          <div className="col">
            <p>Company</p>

                 <a href="#"  style={{textDecoration:'none', color:'#747272ff', fontSize:'14px'}}>About</a> <br />
           <a href="#"  style={{textDecoration:'none', color:'#747272ff', fontSize:'14px'}}>Philosophy</a>  <br />
           <a href="#"  style={{textDecoration:'none', color:'#747272ff', fontSize:'14px'}}>Press & media</a><br />
           <a href="#"  style={{textDecoration:'none', color:'#747272ff', fontSize:'14px'}}>Careers</a><br />
           <a href="#"  style={{textDecoration:'none', color:'#747272ff', fontSize:'14px'}}> Zerodha Cares (CSR)</a><br />
           <a href="#"  style={{textDecoration:'none', color:'#747272ff', fontSize:'14px'}}>Zerodha.tech </a><br />
           <a href="#"  style={{textDecoration:'none', color:'#747272ff', fontSize:'14px'}}> Open source</a><br />




          </div>
        </div>
        <div className="mt-5" style={{ color: "#9e9a9aff", fontSize:'11px' }}>

<p>
    Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF </p>

<p> Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances </p>

<p> Smart Online Dispute Resolution | Grievances Redressal Mechanism </p>

<p> Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>

<p> Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>

<p> India's largest broker based on networth as per NSE. NSE broker factsheet </p>

<p>
"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.
</p>

</div>

      </div>
    </>
  );
}

export default Footer;
