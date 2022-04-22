import React from 'react'
import '../../index.css'
import imageDark from '../../Assets/Images/logo-dark.png'
import android from '../../Assets/Images/android-app.png'


function LayoutHeader() {
    return (
        <div className="full-width-header">
           <header id="rs-header" className="rs-header">
                <div className="menu-area menu-sticky">
                    <div className="container">
                        <div className="row">
                           <form method="post" id="login-form-1" action="">
                           <div className="col-lg-12 header-container">   
                                <div className="col-lg-3">
                                    <div className="logo-area">
                                        <a ><img src={imageDark} alt="logo" /></a>
                                    </div>
                                </div>
                                <div className="col-lg-9 text-right">
                                    <div className="header-form">
                                    <div className=" msg-1 text-center "></div>
                                        
                                            <input type="text" placeholder="   Enter Profile-Id / Email" className=" placeicon email-data" id="form_name" name="email"  required="" oninvalid="this.setCustomValidity(&#39;Please Enter Your Profile-Id / Valid Email ID&#39;)" oninput="setCustomValidity(&#39;&#39;)" /> 
                                            <input type="password" placeholder="   ●●●●●●●●" id="form_email" name="password" className=" placeicon" required="" oninvalid="this.setCustomValidity(&#39;Please Enter Your Password&#39;)" oninput="setCustomValidity(&#39;&#39;)" /> 
                                            <button className='login-page'>Login</button>
                                        <a ><img src={android} style={{height: '36px', marginleft: '5px'}} /></a>
                                    </div>
                                </div>
                            </div>
                            </form>
                            
                        </div>
                        <p className='text-right'><span><a href="" className="forgot-password">Forgot your password?</a></span> </p>
                    </div>
                </div>
           
            </header>
   
        </div>
    )
}

export default LayoutHeader