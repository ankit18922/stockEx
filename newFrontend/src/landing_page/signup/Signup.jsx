import React from 'react';

function SignUp() {
    return ( 
        <>
         <div className="container p-5">
            <div className="row p-5">
                <div className="col-8 p-5">
                   <img src="media\images\signup.png" alt="" style={{width:"90%"}} />
                </div>
                <div className="col-4 text-muted p-5">
                    <h2 className='p-1'>Signup now</h2>
                    <p className='p-1'>Or track your existing application.</p>
                    
                    <div class="input-group mb-3">
                         <span class="input-group-text" id="basic-addon1">+91</span>
                         <input type="number" class="form-control" placeholder="mobile number" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                    <p className='p-1 mt-3'>You will receive an OTP on your number</p>
                    <button type="button" class="btn btn-primary">Continue</button>
                    <p>Want to open an NRI account?</p>
                </div>
            </div>
            <div className="row text-muted">
                <p>I authorise stockEx to contact me even if my number is registered on DND. I authorise stockEx to fetch my KYC information from the C-KYC registry with my PAN. Please visit this article to know more.
                </p>
                <p>
                If you are looking to open a HUF, Corporate, Partnership, or NRI account, you have to use the offline forms. For help, click here.</p>
            </div>
         </div>
        </>
     );
}

export default SignUp;