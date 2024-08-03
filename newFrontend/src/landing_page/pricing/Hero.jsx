import React from 'react';

function Hero() {
    return ( 
        
        <div className="container">
            <div className="row border-bottom">
                <h1 className='p-3 mt-5'>Pricing</h1>
                <p className='text-muted mb-5 fs-5'>Free equity investments and flat ₹20 intraday and F&O trades</p>

                <div className="col mt-5">
                   <img src="media\images\pricing0.svg" style={{width:"70%"}} />
                   <h3 className=' mt-4'>Free equity delivery</h3>
                   <p className='text-muted mt-4'>All equity delivery investments (NSE, BSE), <br /> are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="col mt-5">
                    <img src="media\images\intradayTrades.svg" style={{width:"70%"}} />
                    <h3 className=' mt-4'>Intraday and F&O trades</h3>
                    <p className='text-muted mt-4'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>

                </div>
                <div className="col mt-5">
                    <img src="media\images\pricing0.svg" style={{width:"70%"}}/>
                    <h3 className=' mt-4'>Free direct MF</h3>
                    <p className='text-muted mt-4'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                  
                </div>
            </div>
        </div>
     );
}

export default Hero;