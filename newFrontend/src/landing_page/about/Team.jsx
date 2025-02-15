import React from 'react';

function Team() {
    return ( 
        <div className="container">
            <div className="row">
                <h2>People</h2>
                <div className="col-6 text-muted">
                  <img src="media\images\IMG_20210507_155211.jpg" style={{borderRadius:"100%", width:"50%"}} /> <br /> <br />
                  <h3>Ankit Kumar Gupta</h3> <br />
                  <p>Founder, CEO</p>

                </div>
                <div className="col-6 mt-5 text-muted">
                <p>Ankit bootstrapped and founded stockEx in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, stockEx has changed the landscape of the Indian broking industry.</p>

                <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>

                <p>Playing basketball is his zen.</p>

                <p>Connect on <a href="">Homepage</a> / <a href="">TradingQnA</a> / <a href="">Twitter</a></p>
                </div>
            </div>
        </div>
     );
}

export default Team;