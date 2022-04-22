import React from 'react'
import img1 from '../../Assets/Images/1img.png'
import img2 from '../../Assets/Images/2img.png'
import abouts from '../../Assets/Images/about1.png'

function About() {
  return (
    
    <div id="rs-about" className="rs-about style1 bg1 md-pt-80 mt-80 mb-30">
    <div className="container">
        <div className="row y-bottom">
            <div className="col-lg-6 padding-0">
                <img src={abouts} alt="" />
            </div>
            <div className="col-lg-6 pl-66 pt-75 pb-75 md-pt-42 md-pb-72">
                <div className="sec-title mb-47 md-mb-42">
                    <div className="sub-title primary">Find Indian Brides &amp; Grooms in</div>
                    <h2 className="title mb-0">Jodi Banao Matrimony</h2>
                </div>
                <div className="services-part mb-30">
                    <div className="services-icon">
                        <img src={img1} alt="image" />
                    </div>
                    <div className="services-text">
                        <h4 className="title">Lakhs of Profiles</h4>
                        <div className="desc">You will find lakhs of profiles carefully sourced from across the
                            globe and with rich information.</div>
                    </div>
                </div>
                <div className="services-part">
                    <div className="services-icon">
                        <img src={img1} alt="image" />
                    </div>
                    <div className="services-text">
                        <h4 className="title">Go ahead !</h4>
                        <div className="desc">Click the register button and start searching. Our trust - proofed
                            and most intuitive register - verify - validate - match and connect approach is
                            just what you need to find your life partner.</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default About