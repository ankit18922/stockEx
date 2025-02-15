import React from 'react';

function Stats() {
    return ( 
        
        <div className="container">
            <div className="row p-5">
                <div className="col-6 p-5 mb-5">
                    <h2 className='mb-5'>Trust with confidence</h2>
                    
                    <h4>Customer-first always</h4>
                    <p className='text-muted'>That's why 1.5+ crore customers trust stockEx with ₹4.5+ lakh crores worth of equity investments.</p>
                
                    <h4>No spam or gimmicks</h4>
                    <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                
                    <h4>The stockEx universe</h4>
                    <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                
                    <h4>Do better with money</h4>
                    <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                
                </div>
                <div className="col-6">
                <img src="media\images\ecosystem.png" style={{width:"90%"}} />
                <div className='text-center'>
                    <a href="" className='mx-5'>Explore our products </a>
                    &nbsp; &nbsp; &nbsp;
                    <a href="">Try Kite demo  </a>
                </div>
                </div>
            </div>
        </div>
     );
}

export default Stats;