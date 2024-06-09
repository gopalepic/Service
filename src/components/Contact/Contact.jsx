import React from 'react'
import '../../index.css'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer'
const Contact = () => {
  return<>
  <Navbar/>
  <div className="section contact" id="contact">
        <div className="container">
        <h1 style={{margin:"50px 40% 20px 40%"}}>Contact Us</h1>
            <div className="row">
                <div className="col-lg-8">
                    <div className="contact-form-card">
                        <h4 className="contact-title">Send a message</h4>
                        <form action="">
                            <div className="form-group">
                                <input  className="form-control" type="text" placeholder="Name *" required/>
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="email" placeholder="Email *" required/>
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" id="" placeholder="Message" rows="7" required></textarea>
                            </div>
                            <div className="form-group ">
                                <button type="submit" className="form-control btn btn-primary" >Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="contact-info-card">
                        <h4 className="contact-title">Get in touch</h4>
                        <div className="row mb-2">
                            <div className="col-1 pt-1 mr-1">
                                <i className="ti-mobile icon-md"></i>
                            </div>
                            <div className="col-10 ">
                                <h6 className="d-inline">Phone : <br/> <span className="text-muted">+91 9340782909</span></h6>
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-1 pt-1 mr-1">
                                <i className="ti-map-alt icon-md"></i>
                            </div>
                            <div className="col-10">
                                <h6 className="d-inline">Address :<br/> <span className="text-muted">Indore</span></h6>
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-1 pt-1 mr-1">
                                <i className="ti-envelope icon-md"></i>
                            </div>
                            <div className="col-10">
                                <h6 className="d-inline">Email :<br/> <span className="text-muted">sumitshar2452@gmail.com</span></h6>
                            </div>
                        </div>
                        <ul className="social-icons pt-4">
                            <li className="social-item"><a className="social-link text-dark" href="#"><i className="ti-facebook" aria-hidden="true"></i></a></li>
                            <li className="social-item"><a className="social-link text-dark" href="#"><i className="ti-twitter" aria-hidden="true"></i></a></li>
                            <li className="social-item"><a className="social-link text-dark" href="#"><i className="ti-google" aria-hidden="true"></i></a></li>
                            <li className="social-item"><a className="social-link text-dark" href="#"><i className="ti-instagram" aria-hidden="true"></i></a></li>
                            <li className="social-item"><a className="social-link text-dark" href="#"><i className="ti-github" aria-hidden="true"></i></a></li>
                        </ul> 
                    </div>
                </div>
            </div>
</div>
        </div>
 <Footer/>
  </>

}

export default Contact
