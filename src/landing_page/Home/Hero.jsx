import React from 'react'


function Hero() {
    return ( 
        <>
            <div className='container p-6 text-center'>
            <div className='row'>
            <div className='d-flex justify-content-center' >
                <img src='media/images/homeHero.png' className='mb-3 mt-5 text-center' style={{width:'55%'}}/>
            </div>
                                 <h1 className='mt-5 fs-4 mb-4' style={{color:'#585757ff'}}>Invest in everything</h1>
            <p className='mb-5'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
            <button className='btn btn-primary p-2 fs-5 mb-5' style={{margin:'0 auto', width:'17%'}}>Sign up for free</button>
            </div>
           
            </div>
        </>
     );
}

export default Hero;