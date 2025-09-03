import React from 'react'

function RightSection({productTitle, productDescription, link, imgUrl}) {
    return ( 
        <>
            <div className='container'>
                <div className='row' style={{marginTop:'2em', padding:'2em', marginBottom:'0px', paddingBottom:'0px'}}>
                    <div className='col-4' style={{ marginTop: "7em"}}>
                        <h3>{productTitle}</h3>
                        <p className='mt-4 text-muted'>{productDescription}</p>
                            {link}
                    </div>
                    <div className='col-1'></div>
                    <div className='col-7 mb-5' style={{marginTop:'-5em'}}>
                    <img src={imgUrl}/>
                    </div>
                </div>
            </div>
        </>
     );
}

export default RightSection;