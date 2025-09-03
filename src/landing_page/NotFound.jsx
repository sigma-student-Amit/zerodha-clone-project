import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {

    return ( 
        <>
        <div className='container mt-5'>
        <div className='row d-flex justify-content-center'>
            <img  style={{width:'50%'}} src='media/images/page-not-found.svg' alt="Sorry, the page you are looking does not exist" />
<Link to='/' style={{textAlign:'center', marginTop:'10px'}}>Go to Home</Link>
            
        </div>
        </div>

        </>
     );
}

export default NotFound;