import React from 'react'
import Header from '../../Components/common/header'
import img1 from '../../Assets/Images/1.png'
import img2 from '../../Assets/Images/2.png'
import img3 from '../../Assets/Images/3.png'
import img4 from '../../Assets/Images/4.png'
import img5 from '../../Assets/Images/5.png'
import img6 from '../../Assets/Images/6.png'
import h7bnrlyr from '../../Assets/Images/h7-bnr-lyr.png'

function register() {
	return (
		<>
			<Header />
			<div className="main-content">

				<div className="rs-banner style1">
					<div className="container">
						<br />
						<div className="row">
							<div className="col-sm-5 order-sm-1 order-2">
								<div className="content-part">
									<h4 className="title">Search for a Better Profile</h4>
									<h3 className="title1 text-left text-green">Register Now</h3>
									<div className="row">
										<div className="col-sm-6">
											<select className="home-form" required="">
												<option>Profile Created for</option>
												<option value="" className="hide">- select -</option>

												<option value="1">Son</option>

												<option value="2">Brother</option>

												<option value="3">Sister</option>

												<option value="4">Daughter</option>

												<option value="17">Self</option>
											</select>
										</div>
										<div className="col-sm-6 col-6">
											<span className="text-red gender-position" style={{ top: '-13px' }}>Gender</span>
											<input type="radio" name="gender" /> <label className="label-checkbx-names">Male</label >
											<input type="radio" name="gender" /> <label className="label-checkbx-names">Female</label>
										</div>
										<div className="col-sm-12">
											<input type="email" name="email" className="home-form" placeholder="Full Name" id="type" required="" />
											<p className="textdis" style={{ display: 'none' }}>Enter Full Name of Bride / Bride Groom</p>
										</div>
										<div className="clearfix"></div>
										<div className="col-sm-6 date-input">
											<input className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm sm:text-sm border-gray-300 rounded-md home-form" type="date" name="bday" required="" pattern="\d{4}-\d{2}-\d{2}" placeholder="#### / ## / ##" />
											<span></span>
										</div>
										<div className="col-sm-6">
											<select className="home-form">
												<option>Mother Tongue</option>
												<option value="" className="hide">- Select -</option>
												<option value="49">Tamil</option>
												<option value="50">Telugu</option>
												<option value="33">Malayalam</option>
												<option value="21">Kannada</option>
												<option value="19">Hindi</option>
												<option value="35">Marathi</option>
												<option value="5">Bengali</option>
												<option value="16">Gujarati</option>
												<option value="1">Angika</option>
												<option value="2">Arunachali</option>
												<option value="3">Assamese</option>
												<option value="4">Awadhi</option>
												<option value="6">Bhojpuri</option>
												<option value="7">Brij</option>
												<option value="8">Bihari</option>
												<option value="9">Badaga</option>
												<option value="10">Chatisgarhi</option>
												<option value="11">Dogri</option>
												<option value="12">English</option>
												<option value="13">French</option>
												<option value="14">Garhwali</option>
												<option value="15">Garo</option>
												<option value="17">Haryanvi</option>
												<option value="18">Himachali/Pahari</option>
												<option value="20">Kanauji</option>
												<option value="22">Kashmiri</option>
												<option value="23">Khandesi</option>
												<option value="24">Khasi</option>
												<option value="25">Konkani</option>
												<option value="26">Koshali</option>
												<option value="27">Kumaoni</option>
												<option value="28">Kutchi</option>
												<option value="29">Lepcha</option>
												<option value="30">Ladacki</option>
												<option value="31">Magahi</option>
												<option value="32">Maithili</option>
												<option value="34">Manipuri</option>
												<option value="36">Marwari</option>
												<option value="37">Miji</option>
												<option value="38">Mizo</option>
												<option value="39">Monpa</option>
												<option value="40">Nicobarese</option>
												<option value="41">Nepali</option>
												<option value="42">Oriya</option>
												<option value="43">Punjabi</option>
												<option value="44">Rajasthani</option>
												<option value="45">Sanskrit</option>
												<option value="46">Santhali</option>
												<option value="47">Sindhi</option>
												<option value="48">Sourashtra</option>
												<option value="51">Tripuri</option>
												<option value="52">Tulu</option>
												<option value="53">Urdu</option>
											</select>
										</div>

										<div className="col-sm-6">
											<select className="home-form">
												<option>Religion</option>
												<option value="" className="hide">- select -</option>

												<option value="1">Hindu</option>

												<option value="2">Muslim - Shia</option>

												<option value="3">Muslim - Sunni</option>

												<option value="4">Muslim - Others</option>

												<option value="5">Christian - Catholic</option>

												<option value="6">Christian - Orthodox</option>

												<option value="7">Christian - Protestant</option>

												<option value="8">Christian - Others</option>

												<option value="9">Sikh</option>

												<option value="10">Jain - Digambar</option>

												<option value="11">Jain - Shwetambar</option>

												<option value="12">Jain - Others</option>

												<option value="13">Parsi</option>

												<option value="14">Buddhist</option>

												<option value="15">Jewish</option>

												<option value="16">Inter-Religion</option>

												<option value="17">No Religious Belief</option>
											</select>
										</div>
										<div className="col-sm-6">
											<select className="home-form">
												<option>Country</option>
											</select>
										</div>
										<div className="col-sm-6">
											<select className="home-form">
												<option>State</option>
											</select>
										</div>
										<div className="col-sm-6">
											<select className="home-form">
												<option>District</option>
											</select>
										</div>
										<div className="col-sm-6">
											<input type="text" name="email" className="home-form" placeholder="Mandal" required="" />
										</div>
										<div className="col-sm-6">
											<input type="text" name="email" className="home-form" placeholder="Village" required="" />
										</div>
										<div className="col-sm-6">
											<input type="text" name="email" className="home-form" placeholder="Postal Code" required="" />
										</div>
										<div className="col-sm-6">
											<span id="valid-msg" className="hide">Valid</span>
											<span id="error-msg" className="hide">Invalid number</span>
											<input type="email" name="email" className="home-form" placeholder="Phone Number" required />
										</div>
										<div className="col-sm-12">
											<input type="email" name="email" className="home-form" placeholder="Email" required="" />
										</div>
										<div className="col-sm-6">
											<input type="email" name="email" className="home-form" placeholder="Enter Password" required="" />
										</div>
										<div className="col-sm-6">
											<input type="email" name="email" className="home-form" placeholder="Re-Enter Password" required="" />
										</div>
										<div className="col-sm-12">
											<input type="checkbox" /> <a href="" style={{ fontweight: '500' }} className="label-checkbx-names">I accept your Terms and Conditions</a><br /><br />
										</div>
										<div className="clearfix"></div>
										<div className="col-sm-12">
											<button type="submit" className="form-btn btn-padding-top" onclick="window.location.href=&#39;reg1.html&#39;">Register</button>
										</div>
									</div>
								</div>
							</div>
							<div className="col-sm-1 order-sm-2 order-1"></div>
							<div className="col-sm-6 order-sm-3 order-1">
								<h3 className="title1 text-red">Join Us - Find Match - Get Married</h3>
								<div className="parallax-elemen" id="stuff" >
									<span data-depth="0.5"><img className="wow animate slideInLeft" src={img1} alt="" /></span>
									<span data-depth="0.4"><img className="wow animate slideInRight" data-wow-delay="100ms" src={img2} alt="" /></span>
									<span data-depth="0.6" ><img className="wow animate slideInRight" data-wow-delay="500ms" src={img3} alt="" /></span>
									<span data-depth="1.2"  ><img className="wow animate slideInLeft" data-wow-delay="400ms" src={img4} alt="" /></span>
									<span data-depth="1" ><img className="wow animate slideInLeft" data-wow-delay="200ms" src={img5} alt="" /></span>
									<span data-depth="0.8" ><img className="wow animate slideInRight" data-wow-delay="300ms" src={img6} alt="" /></span>
									<div data-depth="0.3" ><img src={h7bnrlyr} alt="" /></div>
								</div>
							</div>
						</div>
					</div>
				</div>


				<div className="banner-bottom-content">
					<h3>Free Registration</h3>
					<p>Easy to find a perfect match from more options</p>
				</div>

			</div>
			<div id="scrollUp" style={{ display: 'none' }}>
				<i className="fa fa-angle-up"></i>
			</div>


			<div aria-hidden="true" className="modal fade search-modal" role="dialog" tabindex="-1">
				<button type="button" className="close" data-dismiss="modal" aria-label="Close">
					<span className="flaticon-cross"></span>
				</button>
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<div className="search-block clearfix">
							<form>
								<div className="form-group">
									<input className="form-control" placeholder="Search Here..." type="text" required="" />
									<button type="submit"><i className="fa fa-search"></i></button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>

		</>
	)
}

export default register