import React from 'react'
import '../../index.css'
import imageDark from '../../Assets/Images/logo-dark.png'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import login from '../../Assets/Images/login-img.jpg'

const style = {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height:500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


function Header() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div className="full-width-header">

            <header id="rs-header" className="rs-header">

                <div className="menu-area menu-sticky">
                    <div className="container">
                        <div className="row y-middle">
                            <div className="col-lg-3">
                                <div className="logo-area">
                                    <a className="dark" href=""><img src={imageDark} alt="logo" /></a>
                                    <a className="light" href=""><img src={imageDark} alt="logo" /></a>
                                </div>
                            </div>
                            <div className="col-lg-9 text-right">
                                <div className="head-btn pl-30" style={{ marginTop: '-10px' }}>

                                    <div>
                                        <Button onClick={handleOpen}>  <a href="javascript:void(0);" data-toggle="modal" data-target="#loginModal"><i className="fa fa-lock"></i> Login</a></Button>
                                        <Modal
                                            aria-labelledby="transition-modal-title"
                                            aria-describedby="transition-modal-description"
                                            open={open}
                                            onClose={handleClose}
                                            closeAfterTransition
                                            BackdropComponent={Backdrop}
                                            BackdropProps={{
                                                timeout: 500,
                                            }}
                                        >
                                            <Fade in={open}>
                                                <Box sx={style}>
                                                    <div class="modal fade show" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" style={{ display: 'block', paddingright: '17px', ariamodal: 'true' }}>
                                                        <div class="modal-dialog" role="document">
                                                            <div class="modal-content">
                                                                <div class="modal-body padd-0 br-r-0">
                                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                        {/* <span aria-hidden="true">×</span> */}
                                                                    </button>
                                                                    <img src={login} class="img-fluid" />
                                                                    <div class="row" style={{ padding: '15px' }}>
                                                                        <div class="col-12 text-center">
                                                                            <h5 class="modal-title text-center text-red" id="exampleModalLabel" style={{ marginbottom: '15px' }}>Login to Find Your Partner</h5>
                                                                            <input class="home-form" type="text" placeholder="User ID" />
                                                                            <input class="home-form" type="password" placeholder="Password" />
                                                                            <button type="button" class="form-btn" style={{ marginbottom: '15px' }}>Submit</button><br />
                                                                            Are you a new user? <a href="https://jodibanao.in/beta/" data-dismiss="modal">Register Here</a>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Box>
                                            </Fade>
                                        </Modal>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </header>

        </div>
    )
}

export default Header