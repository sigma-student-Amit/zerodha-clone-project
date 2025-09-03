import React from 'react';



function PricingComponent({imgUrl, paraforhead, parafordes}) {
    return ( 
        <>
        <div className='container'>
            <div className='row'>
                <img src={imgUrl} style={{width:'85%'}}/>
                <h3 className='mt-3'>{paraforhead}</h3>
                <p className='mt-3 text-muted'>{parafordes}</p>
            </div>
        </div>

        </>
     )
}

export default PricingComponent;