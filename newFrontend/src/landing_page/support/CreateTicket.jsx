import React from 'react';

function CreateTicket() {
    return ( 
        
        <div className="container">
            <div className="row" style={{textAlign:"left"}}>
                <p className='text-muted fs-4' style={{textAlign:"left"}}>To create a ticket, select a relevant topic</p>
                <div className="col p-4">
                    <p style={{fontSize:"1.2rem"}}><i class="fa-solid fa-circle-plus"></i> Account Opening</p>
                    <div style={{lineHeight:"2.0"}}>
                    <a href="">Geeting Started</a> <br />
                    <a href="">Online</a><br />
                    <a href="">Offline</a><br />
                    <a href="">Charges</a><br />
                    <a href="">Company, Partnership and HUF</a><br />
                    <a href="">Non Resident Indian (NRI)</a><br />
                    </div>
                </div>
                
                <div className="col p-4">
                    <p style={{fontSize:"1.2rem"}} > <i class="fa-regular fa-user"></i> Your Zerodha Account</p>
                    <div style={{lineHeight:"2.0"}}>
                    <a href="">Login credentials</a> <br />
                    <a href="">Your Profile</a><br />
                    <a href="">Account modification and segment addition</a><br />
                    <a href="">CMR & DP ID</a><br />
                    <a href="">Nomination</a><br />
                    <a href="">Transfer and conversion of shares</a><br />
                    </div>
                </div>
                <div className="col p-4">
                    <p style={{fontSize:"1.2rem"}}><i class="fa-solid fa-chart-simple"></i> Trading and Markets</p>
                    <div style={{lineHeight:"2.0"}}>
                    <a href="">Trading FAQs</a> <br />
                    <a href="">Kite</a><br />
                    <a href="">Margines</a><br />
                    <a href="">Product and order types</a><br />
                    <a href="">Corporate actions</a><br />
                    <a href="">Kite features</a><br />
                    </div>
                </div>
               
                
            </div>
            <div className="row" style={{textAlign:"left"}}>
                
                <div className="col p-4">
                    <p style={{fontSize:"1.2rem"}}> <i class="fa-solid fa-wallet"></i> Funds</p>
                    <div style={{lineHeight:"2.0"}}>
                    <a href="">Fund withdrawal</a> <br />
                    <a href="">Adding funds</a><br />
                    <a href="">Adding bank accounts</a><br />
                    <a href="">eMandates</a><br />
                    </div>
                </div>

                <div className="col p-4">
                    <p style={{fontSize:"1.2rem"}}> <i class="fa-solid fa-magnifying-glass"></i> Console</p>
                    <div style={{lineHeight:"2.0"}}>
                    <a href="">IPO</a> <br />
                    <a href="">Portfolio</a><br />
                    <a href="">Funds statement</a><br />
                    <a href="">Profile</a><br />
                    <a href="">Reports</a><br />
                    <a href="">Referral program</a><br />
                    </div>
                </div>
                
                <div className="col p-4">
                    <p style={{fontSize:"1.2rem"}}> <i class="fa-solid fa-coins"></i> Coin</p>
                    <div style={{lineHeight:"2.0"}}>
                    <a href="">Understanding mutual funds and Coin</a> <br />
                    <a href="">Coin app</a><br />
                    <a href="">Coin web</a><br />
                    <a href="">Charges</a><br />
                    <a href="">Transactions and reports</a><br />
                    <a href="">National Pension Scheme (NPS)</a><br />
                    </div>
                </div>
               
                
            </div>
        </div>
     );
}

export default CreateTicket;