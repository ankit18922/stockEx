import React from 'react';

function RightSection({imageURL, productName, productDescription, tryDemo, learnMore}) {
    return ( 
        
        <div className="container">
            <div className="row">
                <div className="col-6 mt-5 p-5">
                    <h2 className='mt-5 p-5'>{productName}</h2>
                    <p>{productDescription}</p>
                    <div className='mt-3 p-3'>
                        <a href={learnMore}>learnMore <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                   
                </div>
                <div className="col-6">
                    <img src={imageURL} />
                </div>
            </div>
        </div>
     );
}

export default RightSection;