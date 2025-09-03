import React from 'react'


function Hero() {
    return ( 
        <>
            <section className='container-fluid mb-5 p-5' style={{backgroundColor:'#5396e2'}}>
                <div className='mb-5 p-3 d-flex justify-content-around text-light'>
                <h6>Support Portal</h6>
                <h6>Track Tickets</h6>
                </div>

                <div className='row'>
                    <div className='col-6 mb-1 text-center text-light'>
                        <p className='fs-5'>Search for an option or browse help topics <br /> to create a ticket</p>
                        <input type='search' style={{width:'55%', height:'5.2em', borderRadius:'8px', outline:'none', border:'none', fontSize:'12px'}} className='p-4 text-center mb-3'  placeholder='Eg: how do i activate F&O, why is my order rejected...'/><br />
                       
                            <a href='#' className='text-light'>Track account opening </a>&nbsp;&nbsp;&nbsp;
                        <a href='#' className='text-light'>Track segment activation</a>&nbsp;&nbsp;&nbsp;
                        <a href='#' className='text-light'>Intraday</a><br />
                        <a href='#' className='text-light'>margins</a>&nbsp;&nbsp;&nbsp;
                        <a href='#' className='text-light'>Kite user manual</a>
                   

                    </div>
                    <div className='col-6 text-light'>
                        <h6 className='fs-5'>Featured</h6> 1.&nbsp; 
                                <a href='#' className='text-light'>
                                  Current Takeovers and Delisting - january2024
                                </a><br />
                           2.&nbsp;<a href='#' className='text-light'>
                                  Latest Intraday leverages - MIS & CO
                                </a>
                    </div>
                </div>
            </section>
        </>
     );
}

export default Hero;