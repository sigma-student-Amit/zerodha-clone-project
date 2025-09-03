import React from 'react'

function Pricing() {
    return (  

        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-4 mt-5'>
                        <h4>Unbeatable pricing</h4>
                        <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                         <a href="#" style={{textDecoration:'none'}} className='mb-5'>
                               See pricing <i class="fa fa-long-arrow-right fa-1x" aria-hidden="true"></i>
                          </a>
                    </div>
                    <div className='col-2'></div>
                    <div className='col-6 mt-5'>
                        <div className='row'>
                            <div className='col border text-center p-3 mb-5'>
                                <h2>&#x20B9;0</h2>
                                <p>Free equity delievery and <br />direct mutual funds</p>
                            </div>
                            <div className='col border text-center p-3 mb-5'>
                                 <h2>&#x20B9;20</h2>
                                <p>Intraday and F&0</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Pricing;