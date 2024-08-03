import React from 'react';

function Universe() {
    return ( 
        
        <div className="container">
            <div className="row">
                <h2>The Zerodha Universe</h2>
                <p className='p-3'>Extend your trading and investment experience even further with our partner platforms</p>
           
                <div className="col-4">
                   <img src="media\images\smallcaseLogo.png" />
                   <p className='p-3 text-muted mb-5'>Thematic investment platform</p>
                </div>
                <div className="col-4">
                   <img style={{width:"50%"}} src="media\images\streakLogo.png"/>
                   <p className='p-3 text-muted mb-5'>Algo & strategy platform</p>
                </div>
                <div className="col-4">
                    <img src="media\images\sensibullLogo.svg" />
                    <p className='p-3 text-muted mb-5'>Options trading platform</p>
                </div>
                <div className="col-4">
                   <img style={{width:"50%"}} src="media\images\zerodhaFundhouse.png"/>
                   <p className='p-3 text-muted mb-5'>Asset management</p>
                </div>
                <div className="col-4">
                   <img style={{width:"50%"}} src="media\images\goldenpiLogo.png"/>
                   <p className='p-3 text-muted mb-5'>Fundamental research platform</p>
                </div>
                <div className="col-4">
                   <img src="media\images\dittoLogo.png" style={{width:"45%"}}/>
                   <p className='p-3 text-muted mb-5'>Insurence</p>
                </div>
            </div>
            <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%", margin: "0 auto"}}>Sign up Now</button>
        </div>
     );
}

export default Universe;