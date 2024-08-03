import React from 'react';

function LeftSection( {imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore}) {
    return ( 
        
        <div className="container p-5 mt-5">
            <div className="row">
                <div className="col-6 p-3">
                    <img src={imageURL} />
                </div>
                <div className="col-6 mt-5 p-5">
                    <h2 className='p-4'>{productName}</h2>
                    <p>
                        {productDescription}
                    </p>
                    <div className='mt-3 p-3'>
                        <a href={tryDemo}>tryDemo <i class="fa-solid fa-arrow-right"></i></a>
                        <a href={learnMore} style={{marginLeft:"50px"}}>learnMore <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                    <div>
                    <a href={googlePlay}><img src="media\images\googlePlayBadge.svg" /></a>
                    <a href={appStore}><img src="media\images\appstoreBadge.svg"  style={{marginLeft:"50px"}} /></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default LeftSection;