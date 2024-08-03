import React from 'react';

function Hero() {
    return ( 
        
        <section className="container-fluid mb-4" id="supportHero" style={{textAlign:"left"}} >
            <div className="p-5" id="supportWrapper">
                  <h3>Support Portal</h3>
                  <a href="">Track Ticket</a>
            </div>
            <div className="row">
                  <div className="col-6 p-5 mb-5">
                        <h3 className='mb-5'>Search for an answer or browse help topics to create a ticket</h3>
                        <input className='mb-5' placeholder='
Eg: how do i activate F&O, why is my order getting rejected ...
' /> <br />
                <a href="">Track account opening</a> &nbsp; &nbsp;
               <a href="">Track segment activation</a> &nbsp;&nbsp;
                <a href="">Intraday margins</a> &nbsp; &nbsp;
               <a href="">Kite user manual</a> 
                  </div>
                  <div className="col-6 p-5 mb-5">
                    <h3>Featured</h3>
                    <a href="">1.Surveillance measure on scrips - July 2024</a>
                     <br />
                    <a href="">2.Latest Intraday leverages and Square-off timings</a>
 

                  </div>
            </div>
           
        </section>
     );
}

export default Hero;