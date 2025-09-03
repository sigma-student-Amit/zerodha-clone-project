import React from 'react';
import { Link } from 'react-router-dom';


function Team() {
    return ( 
        <>
             <div className="container">
        <div className="row mt-5">
          <h1
            className="fs-4 text-center"
       
          >
          People
          </h1>
        </div>

        <div className="row mt-5" style={{padding:'0px 120px 150px'}}>
            <div className="col-6 text-center">
               <img src='media/images/nithinKamath.jpg' alt='CEo Image' style={{width:'60%', borderRadius:'100%'}}/>
               <h6 className='mt-3 b-100'>Nithin Kamath</h6>
               <h7 className='text-muted mt-5'>Founder, CEO</h7>
            </div>
            <div className="col-6 text-muted" style={{lineHeight:'1.5'}}>
                <p>
                   Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
                </p>
                <p>
                   He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
                </p>
                <p>
                    Playing basketball is his zen.
                </p>
                <p>
                    Connect on <Link style={{textDecoration:'none'}} to='/'> Homepage </Link> / <Link style={{textDecoration:'none'}}>TradingQnA</Link> / <Link style={{textDecoration:'none'}}>Twitter</Link>
                </p>
            </div>
        </div>
      </div>




        </>
     );
}

export default Team;