import React from 'react'


function Universe({imgUrlZerodhaFund, imgUrlZerodhaSensibul, imgUrlZerodhaTijori, paraforfund, paraforsensibul, parafortijori}) {
    return ( 
        <>
            <div className='container'>
                <div className='row text-center'>
                    <div className='col-4 mt-5'>
                        <img src={imgUrlZerodhaFund} style={{width:'55%'}} />
                        <pre style={{fontSize:'14px', fontFamily:'sans-serif' , fontWeight:'bold-800', wordSpacing:'-1px'}} className='text-muted'>{paraforfund}</pre>
                    </div>
                    <div className='col-4 mt-5'>
                        <img src={imgUrlZerodhaSensibul}  style={{width:'40%', height:'30px'}} className='mb-5'/>
                        <pre style={{fontSize:'14px', fontWeight:'bold-800', wordSpacing:'-1px', fontFamily:'sans-serif'}} className='text-muted'>{paraforsensibul}</pre>
                    </div>
                    <div className='col-4 mt-5'>
                        <img src={imgUrlZerodhaTijori}  style={{width:'35%'}} />
                        <pre style={{fontSize:'14px',wordSpacing:'-1px', fontWeight:'bold-800', fontFamily:'sans-serif'}} className='text-muted mt-3'>{parafortijori}</pre>

                    </div>
                </div>
                    
            </div>
        </>
     );
}

export default Universe;