import React from 'react';
import PricingComponent from './PricingComponent';

function HeroPricing() {
    return ( 
        <>
            <div className='container'>
                <div className='row text-center' style={{marginTop:'2em', padding:'2em'}}>
                    <h3>Charges</h3>
                    <p className='fs-5 text-muted' style={{marginBottom:'9em'}}>List of all charges and taxes</p>

                    <div className='col-4'>
                        <PricingComponent imgUrl="media/images/pricing0.svg" paraforhead="Free equity delivery" parafordes="All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage."/>
                    </div>
                    <div className='col-4'>
                        <PricingComponent imgUrl="media/images/intradayTrades.svg" paraforhead="Intraday and F&O trades" parafordes="Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades."/>
                    </div>
                     <div className='col-4'>
                       <PricingComponent imgUrl="media/images/pricing0.svg" paraforhead="Free direct MF" parafordes="All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges."/>
                    </div>

                </div>
            </div>
        </>
     );
}

export default HeroPricing;