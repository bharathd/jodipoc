import React from 'react'
import bannerImg from '../../Assets/Images/quote.jpg'

function HomeRegister() {
    return (
        <>
            <div className="container">
                <div className="sec-title style2 mb-92 md-mb-42">
                    <div className="first-half text-right">
                        <div className="sub-title green">Join with us to find perfect match</div>
                        <h2 className="title title-phone mb-0">REGISTER NOW</h2>

                    </div>
                    <div className="last-half">
                        <p className="desc mb-0 pr-10">Go ahead ! Click the register button and start searching. Our trust -
                            proofed and most intuitive register - verify - validate - match and connect approach is just
                            what you need to find your life partner.</p>
                    </div>
                </div>
            </div>
            <div className="row md-row-container">
                <div className="col-lg-6 pr-40 md-pr-15 md-mb-30">
                    <div className="image-part text-right">
                        <img src={bannerImg} alt="" />
                    </div>
                </div>
                <div className="col-lg-6 ">
                    <div id="form-messages"></div>
                    <form className="quote-form" method="post" action="https://jodibanao.in/beta/v2/index/save">
                        <div className="home-form-scroll scrollbar" id="style-3">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-ctrl mb-20">

                                        <select className="home-form" name="created_for" required="" oninvalid="this.setCustomValidity('Select whose profile you are creating.')" oninput="setCustomValidity('')">
                                            <option value=""> Creating for</option>
                                            <option value="Son">Son</option>
                                            <option value="Brother">Brother</option>
                                            <option value="Sister">Sister</option>
                                            <option value="Daughter">Daughter</option>
                                            <option value="Self">Self</option>
                                        </select>

                                    </div>
                                </div>
                                <div className="col-sm-6 col-6 mb-10">
                                    <span className="text-white gender-position" style={{top: '-17px'}}>Gender</span>
                                    <input type="radio" name="gender" value="Male" required="" oninvalid="this.setCustomValidity('Please Choose Gender')" oninput="setCustomValidity('')"/> <label className="label-checkbx-names" style={{top: '-17px'}}>Male</label> &emsp;
                                        <input type="radio" name="gender" value="Female" required="" oninvalid="this.setCustomValidity('Please Choose Gender')" oninput="setCustomValidity('')"/> <label className="label-checkbx-names" style={{top: '-17px'}}>Female</label> &emsp;
                                        </div>
                                        <div className="col-sm-12">
                                            <div className="form-ctrl mb-30">
                                                <input type="text" name="name" placeholder="Enter bride/bride groom name" id="type" required="" oninvalid="this.setCustomValidity('Please Enter Bride / Bride Groom Name')" oninput="setCustomValidity('')" />
                                                    <p className="textdis" style={{display: 'none', color: 'white'}}>Enter Full Name of Bride / Bride Groom</p>
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <div className="form-ctrl mb-20">
                                                <label className="col-sm-3" style={{top: '10px'}}>Date of Birth</label>
                                                <div className="col-sm-3">

                                                    <select name="txtDate" className="home-form" required="" oninvalid="this.setCustomValidity('Please Select Date')" oninput="setCustomValidity('')">

                                                        <option value="">Day..</option>
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                        <option value="5">5</option>
                                                        <option value="6">6</option>
                                                        <option value="7">7</option>
                                                        <option value="8">8</option>
                                                        <option value="9">9</option>
                                                        <option value="10">10</option>
                                                        <option value="11">11</option>
                                                        <option value="12">12</option>
                                                        <option value="13">13</option>
                                                        <option value="14">14</option>
                                                        <option value="15">15</option>
                                                        <option value="16">16</option>
                                                        <option value="17">17</option>
                                                        <option value="18">18</option>
                                                        <option value="19">19</option>
                                                        <option value="20">20</option>
                                                        <option value="21">21</option>
                                                        <option value="22">22</option>
                                                        <option value="23">23</option>
                                                        <option value="24">24</option>
                                                        <option value="25">25</option>
                                                        <option value="26">26</option>
                                                        <option value="27">27</option>
                                                        <option value="28">28</option>
                                                        <option value="29">29</option>
                                                        <option value="30">30</option>
                                                        <option value="31">31</option>
                                                    </select></div>
                                                <div className="col-sm-3">
                                                    <select name="txtMonth" className="home-form" placeholder="Month" id="DOBMONTH" onchange="updateDay('month','MatriForm','DOBYEAR','DOBMONTH','DOBDAY');" required="" oninvalid="this.setCustomValidity('Please Select Month')" oninput="setCustomValidity('')">
                                                        <option value="">Month..</option>
                                                        <option value="Jan">Jan</option>
                                                        <option value="Feb">Feb</option>
                                                        <option value="Mar">Mar</option>
                                                        <option value="Apr">Apr</option>
                                                        <option value="May">May</option>
                                                        <option value="Jun">Jun</option>
                                                        <option value="Jul">Jul</option>
                                                        <option value="Aug">Aug</option>
                                                        <option value="Sep">Sep</option>
                                                        <option value="Oct">Oct</option>
                                                        <option value="Nov">Nov</option>
                                                        <option value="Dec">Dec</option>
                                                    </select>
                                                </div>
                                                <div className="col-sm-3">
                                                    <select name="txtYear" id="DOBYEAR" className="home-form" onchange="updateDay('year','MatriForm','DOBYEAR','DOBMONTH','DOBDAY');" required="" oninvalid="this.setCustomValidity('Please Select Year')" oninput="setCustomValidity('')">
                                                       <option value="1997">1997</option>
                                                        <option value="">Year..</option>
                                                        <option value="2004">2004</option><option value="2003">2003</option><option value="2002">2002</option><option value="2001">2001</option><option value="2000">2000</option><option value="1999">1999</option><option value="1998">1998</option><option value="1997">1997</option><option value="1996">1996</option><option value="1995">1995</option><option value="1994">1994</option><option value="1993">1993</option><option value="1992">1992</option><option value="1991">1991</option><option value="1990">1990</option><option value="1989">1989</option><option value="1988">1988</option><option value="1987">1987</option><option value="1986">1986</option><option value="1985">1985</option><option value="1984">1984</option><option value="1983">1983</option><option value="1982">1982</option><option value="1981">1981</option><option value="1980">1980</option><option value="1979">1979</option><option value="1978">1978</option><option value="1977">1977</option><option value="1976">1976</option><option value="1975">1975</option><option value="1974">1974</option><option value="1973">1973</option><option value="1972">1972</option><option value="1971">1971</option><option value="1970">1970</option><option value="1969">1969</option><option value="1968">1968</option><option value="1967">1967</option><option value="1966">1966</option><option value="1965">1965</option><option value="1964">1964</option><option value="1963">1963</option><option value="1962">1962</option><option value="1961">1961</option>                                                </select>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-ctrl mb-20">
                                                <select name="mtongue" required="" oninvalid="this.setCustomValidity('Please select your Mother Tongue')" oninput="setCustomValidity('')">
                                                    <option value="">Mother Tongue</option>
                                                    <option value="Tamil"> Tamil </option>
                                                    <option value="Telugu"> Telugu </option>
                                                    <option value="Malayalam"> Malayalam </option>
                                                    <option value="Kannada"> Kannada </option>
                                                    <option value="Hindi"> Hindi </option>
                                                    <option value="Marathi"> Marathi </option>
                                                    <option value="Bengali"> Bengali </option>
                                                    <option value="Gujarati"> Gujarati </option>
                                                    <option value="Angika"> Angika </option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="form-ctrl mb-20">
                                                <select name="txtReligion" id="religion" required="" oninvalid="this.setCustomValidity('Please select Your Religion')" oninput="setCustomValidity('')">
                                                    <option value="">Religion</option>
                                                    <option value="" className="hide">- select -</option>
                                                   <option value="26"> Hindu </option>
                                                    <option value="2"> Muslim - Shia </option>
                                                    <option value="6"> Muslim - Others </option>
                                                    <option value="7"> Christian - Catholic </option>
                                                    <option value="8"> Christian - Orthodox </option>
                                                    <option value="9"> Christian - Protestant </option>
                                                    <option value="10"> Christian - Others </option>
                                                    <option value="11"> Sikh </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-ctrl mb-20">
                                                <select name="txtCaste" id="caste" required="" oninvalid="this.setCustomValidity('Please select Your Caste')" oninput="setCustomValidity('')">
                                                    <option value="">Caste</option>

                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-ctrl mb-20">
                                                <select name="txtCountry" id="country" required="" oninvalid="this.setCustomValidity('Please select Your Country')" oninput="setCustomValidity('')">
                                                    <option value="">Country</option>
                                                    <option value="1"> Afghanistan </option>
                                                    <option value="2"> Aland Islands </option>
                                                    <option value="3"> Albania </option>
                                                    <option value="4"> Algeria </option>
                                                    <option value="5"> American Samoa </option>
                                                    <option value="6"> Andorra </option>
                                                    <option value="7"> Angola </option>
                                                    <option value="8"> Anguilla </option>
                                                    <option value="9"> Antarctica </option>
                                                    <option value="10"> Antigua And Barbuda </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-ctrl mb-20">
                                                <select name="txtState" id="state" required="" oninvalid="this.setCustomValidity('Please select Your State')" oninput="setCustomValidity('')"><option value="">State</option><option value="4006">Meghalaya</option><option value="4007">Haryana</option><option value="4008">Maharashtra</option><option value="4009">Goa</option><option value="4010">Manipur</option><option value="4011">Puducherry</option><option value="4012">Telangana</option><option value="4013">Odisha</option><option value="4014">Rajasthan</option><option value="4015">Punjab</option><option value="4016">Uttarakhand</option><option value="4017">Andhra Pradesh</option><option value="4018">Nagaland</option><option value="4019">Lakshadweep</option><option value="4020">Himachal Pradesh</option><option value="4021">Delhi</option><option value="4022">Uttar Pradesh</option><option value="4023">Andaman and Nicobar Islands</option><option value="4024">Arunachal Pradesh</option><option value="4025">Jharkhand</option><option value="4026">Karnataka</option><option value="4027">Assam</option><option value="4028">Kerala</option><option value="4029">Jammu and Kashmir</option><option value="4030">Gujarat</option><option value="4031">Chandigarh</option><option value="4033">Dadra and Nagar Haveli and Daman and Diu</option><option value="4034">Sikkim</option><option value="4035">Tamil Nadu</option><option value="4036">Mizoram</option><option value="4037">Bihar</option><option value="4038">Tripura</option><option value="4039">Madhya Pradesh</option><option value="4040">Chhattisgarh</option><option value="4852">Ladakh</option><option value="4853">West Bengal</option></select>
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="form-ctrl mb-20">
                                                <select name="txtDistrict" id="district" oninvalid="this.setCustomValidity('Please select Your District')" oninput="setCustomValidity('')">
                                                    <option value="">District</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-ctrl mb-20">
                                                <select className="home-form" name="txtCity" id="city" required="" oninvalid="this.setCustomValidity('Please select Your City')" oninput="setCustomValidity('')">
                                                    <option value="">City</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-ctrl mb-20">
                                                <input type="text" name="village" placeholder="Village" oninvalid="this.setCustomValidity('Please Enter Village Name')" oninput="setCustomValidity('')" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-ctrl mb-20">
                                                <input type="text" name="postal_code" className="home-form" placeholder="Postal Code" onkeyup="if (/\D/g.test(this.value)) this.value = this.value.replace(/\D/g,'')" maxlength="6" required="" oninvalid="this.setCustomValidity('Please Enter Your Postal Code')" oninput="setCustomValidity('')" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-ctrl mb-20">
                                               
                                                <p className="mobilecheck"></p>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-ctrl mb-20">
                                                <input type="email" name="email" className="home-form" placeholder="Email" id="email" required="" oninvalid="this.setCustomValidity('Please Enter Your Email ID')" oninput="setCustomValidity('')" />
                                                    <p className="emailcheck"></p>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-ctrl mb-20">
                                                <input type="password" name="password" className="home-form" id="password" placeholder="Enter Password" minlength="6" required="" oninvalid="this.setCustomValidity('Please Enter Your Password/Password must Contain 6 Characters')" oninput="setCustomValidity('')" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-ctrl mb-20">
                                                <input type="password" name="c_password" className="home-form" id="confirm_password" placeholder="Re-Enter Password" minlength="6" required="" oninvalid="this.setCustomValidity('Please Re-Enter Your Password')" oninput="setCustomValidity('')" />
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <div className="form-ctrl mb-0">
                                                <input type="checkbox" required="" style={{height:'auto'}} /><span> I accept your <a target="_blank" >Terms and Conditions</a></span><br /><br />
                                                </div>
                                                </div>
                                                    <div className="submit-btn col-sm-12">
                                                        <button type="submit" className="btn-padding-top" onclick="ValidateForm(this.form)">SUBMIT</button>
                                                        <p><span><a  className="forgot-password">Forgot your password?</a></span> </p>
                                                    </div>


                                            </div>
                                        </div></form>
                                </div>
                            </div>


                        </>
                        )
}

                        export default HomeRegister