import React from 'react';
import './styles/Footer.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import shop from './images/shop.svg';

function Footer() {
    return (
        <>
          <footer>
            <div className="container footer-container">
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="footer-brand">Bewakoof</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 col-12">
                        <p className="footer-heading">CUSTOMER SERVICE</p>
                        <ul className="footer-sec">
                            <li>Contact Us</li>
                            <li>Track Order</li>
                            <li>Return Order</li>
                            <li>Cancel Order</li>
                        </ul>
                        <p className="mobile-categories">Contact Us | Track Order | Return Order | Cancel Order</p>
                    </div>
                    <div className="col-md-3 col-12">
                        <p className="footer-heading">COMPANY</p>
                        <ul className="footer-sec">
                            <li>About Us</li>
                            <li>We're Hiring</li>
                            <li>Terms & Conditions</li>
                            <li>Privacy Policy</li>
                            <li>Blog</li>
                        </ul>
                        <p className="mobile-categories">About Us | We're Hiring | Terms & Conditions | Privacy Policy | Blog</p>
                    </div>
                    <div className="col-md-3 col-12">
                        <p className="footer-heading">CONNECT WITH US</p>
                        <p className="social"><FacebookIcon className="social-icons"/> <InstagramIcon className="social-icons"/> <TwitterIcon className="social-icons"/> <LinkedInIcon className="social-icons"/> <GitHubIcon className="social-icons"/></p>
                    </div>
                    <div className="col-md-3 footer-email-sec col-12">
                        <p className="footer-heading">KEEP UP TO DATE</p>
                        <form className="form-inline footer-form-inline">
                            <input type="text" className="form-control footer-form footer-form-input" placeholder="Enter Email Id"/>
                            <button type="submit" className="btn footer-form footer-form-btn">SUBSCRIBE</button>
                        </form>
                    </div>
                </div>
                <hr className="footer-hr"/>
                <div className="row">
                    <div className="col-md-3 col-12">
                        <p className="footer-heading-2">MEN'S CLOTHING</p>
                        <ul className="categories">
                            <li style={{fontWeight:"500"}}>Top Wear</li>
                            <li>Men's New Arrivals</li>
                            <li>Men's T-Shirts</li>
                            <li>Men's Half Sleeve T-Shirts</li>
                            <li>Men's Long Sleeve T-shirts</li>
                            <li>Men's Shirts</li>
                        </ul>
                        <ul className="categories">
                            <li style={{fontWeight:"500"}}>Bottom Wear</li>
                            <li>Men's Joggers</li>
                            <li>Men's Pants</li>
                        </ul>
                        <ul className="categories">
                            <li>Featured</li>
                            <li>XXXL T Shirts</li>
                            <li>Men's Sliders</li>
                            <li>Masks</li>
                            <li>Sanitizers</li>
                            <li>Surgical Masks</li>
                            <li>N95 Masks</li>
                            <li>Kawach Masks</li>
                        </ul>
                        <p className="mobile-categories">Top Wear | Men's New Arrivals | Men's T-Shirts | Men's Half Sleeve T-Shirts | Men's Long Sleeve T-shirts | Men's Shirts | Bottom Wear | Men's Joggers | Men's Pants | Featured | XXXL T Shirts | Men's Sliders | Masks | Sanitizers | Surgical Masks | N95 Masks | Kawach Masks</p>
                    </div>
                    <div className="col-md-3 col-12">
                        <p className="footer-heading-2">WOMEN'S CLOTHING</p>
                        <ul className="categories">
                            <li style={{fontWeight:"500"}}>Women's Top Wear</li>
                            <li>Women's New Arrivals</li>
                            <li>Women's T-Shirts</li>
                            <li>Women's Dresses</li>
                            <li>Women's 3/4 Sleeve T-Shirts</li>
                        </ul>
                        <ul className="categories">
                            <li style={{fontWeight:"500"}}>Women's Bottom Wear</li>
                            <li>Women's Joggers</li>
                        </ul>
                        <ul className="categories">
                            <li style={{fontWeight:"500"}}>BAGS</li>
                        </ul>
                        <ul className="categories">
                            <li>Featured</li>
                            <li>XXXL Clothes</li>
                            <li>Women's Slides</li>
                            <li>Clearance Zone</li>
                        </ul>
                        <p className="mobile-categories">Women's Top Wear | Women's New Arrivals | Women's T-Shirts | Women's Dresses | Women's 3/4 Sleeve T-Shirts | Women's Bottom Wear | Women's Joggers | BAGS | Featured | XXXL Clothes | Women's Slides | Clearance Zone</p>
                    </div>
                    <div className="col-md-6 col-12">
                        <p className="footer-heading-2">HAPPY SHOPPING!!</p>
                        <img src={shop} alt="shop" className="footer-img"/>
                    </div>
                </div>
            </div>
          </footer>  
        </>
    )
}

export default Footer;
