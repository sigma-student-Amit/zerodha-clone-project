import React from 'react'

function Education() {
    return (  

        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-6 mt-5'>
                    <img src='media/images/education.svg' />
                        
                    </div>
                   
                    <div className='col-6 mt-5'>
                        <h4 className='mb-4 mt-5'>Free and open market education</h4>
                        <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                         <a href="#" style={{textDecoration:'none'}} className='mb-5'>
                               Varsity<i class="fa fa-long-arrow-right fa-1x" aria-hidden="true"></i>
                          </a>
                           <p className='mt-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                         <a href="#" style={{textDecoration:'none'}} className='mb-5'>
                               TradingQ&A<i class="fa fa-long-arrow-right fa-1x" aria-hidden="true"></i>
                          </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Education;