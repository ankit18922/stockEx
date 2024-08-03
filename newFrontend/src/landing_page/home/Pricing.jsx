import React from 'react';

function Pricing() {
    return ( 
        <div className="container mb-5">
            <div className="row">
                <div className="col-4">
                     <h2 className='mb-4'>Unbeatable pricing</h2>
                     <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                     <a href="">See pricing </a>
                </div>
                <div className="col-2"></div>
                <div className="col-6">
                   <div className="row">
                    <div className="col p-3 border">
                       <h1 className='mb-3'><i class="fa-solid fa-indian-rupee-sign fa-sm"></i>0</h1>
                       <p>Free equity delivery <br />and direct mutual funds</p>
                    </div>
                    <div className="col p-3 border">
                        <h1 className='mb-3'><i class="fa-solid fa-indian-rupee-sign fa-sm"></i>20</h1>
                        <p>Intraday and F&O</p>
                    </div>
                   </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;