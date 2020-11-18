import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Carousel from './Carousel';
import './styles/Home.css';
import { NavLink } from 'react-router-dom';

function Home() {
    return (
        <>
            <Navbar />
            <div className="container home-container">
                <div className="row">
                    <Carousel />
                </div>
                <div className="row home-row">
                    <h5>BROWSE</h5>
                    <h2>TOPWEAR</h2>
                    <NavLink className="view-link" exact to="/topwear-for-men-and-women">VIEW ALL</NavLink>
                    <div className="options">
                        <img src="https://images.bewakoof.com/uploads/grid/app/Men-s-Colorblock-1591361054.png" alt="first" />
                        <img src="https://images.bewakoof.com/uploads/grid/app/Men-s-T-shirts-1591361055.png" alt="second" />
                        <img src="https://images.bewakoof.com/uploads/grid/app/Men-s-Shirts-1591361055.png" alt="third" />
                        <img src="https://images.bewakoof.com/uploads/grid/app/Women-s-34th-Sleeves--1--1591788297.png" alt="fourth" />
                        <img src="https://images.bewakoof.com/uploads/grid/app/Women-s-Crop-Tops--1--1591788298.png" alt="fifth" />
                        <img src="https://images.bewakoof.com/uploads/grid/app/Women-s-T-shirts--1--1591788299.png" alt="sixth" />
                    </div>   
                </div>
                <div className="row home-row">
                    <h5>BROWSE</h5>
                    <h2>BOTTOMWEAR</h2>
                    <a className="view-link">VIEW ALL</a>
                    <div className="options">
                        <img src="https://images.bewakoof.com/uploads/grid/app/bewakoof-mens-shorts-online-fashion-shopping-CATEGORY-BOTTOM-WEAR-BOX-1603288957.png" alt="first" />
                        <img src="https://images.bewakoof.com/uploads/grid/app/bewakoof-shorts-online-fashion-shopping--CATEGORY-BOX-desktop-2-1598935956.png" alt="second" />
                        <img src="https://images.bewakoof.com/uploads/grid/app/bewakoof-color-of-the-month-online-shopping-category-MEN-PYJAMA-1604164206.png" alt="third" />
                        <img src="https://images.bewakoof.com/uploads/grid/app/bewakoof-womens-boxers-online-fashion-shopping-CATEGORY-BOTTOM-WEAR-BOX-1603288957.png" alt="fourth" />
                        <img src="https://images.bewakoof.com/uploads/grid/app/Women-s-Joggers-1591361306.png" alt="fifth" />
                        <img src="https://images.bewakoof.com/uploads/grid/app/Women-s-Pyjamas-1591361307.png" alt="sixth" />
                    </div> 
                </div>
                <div className="row home-row">
                    <img src="https://images.bewakoof.com/uploads/grid/app/feedback-survey-bewakoof-desktop-1588604341.gif" alt="feedback" style={{cursor:"pointer"}}/>
                    <img src="https://images.bewakoof.com/uploads/grid/app/announcement-desktop-strip--1--1594387974.jpg" alt="orders" />
                </div>
                <div className="row home-row">
                    <h5>BROWSE</h5>
                    <h2>TRENDING</h2>
                    <div className="trend">
                        <img src="https://images.bewakoof.com/uploads/grid/app/bewakoof-online-fashion-shopping-BANNER-1603805820.jpg" alt="first" style={{cursor:"pointer"}}/>
                        <img src="https://images.bewakoof.com/uploads/grid/app/bewakoof-color-of-the-month-cotm-digiteal-online-MAIN-DESKTOP-BANNER-1604397811.jpg" alt="second" style={{cursor:"pointer"}}/>
                        <img src="https://images.bewakoof.com/uploads/grid/app/collab-banner-v-2-1593079023.jpg" alt="third" style={{cursor:"pointer"}}/>
                    </div>
                </div>
                <div className="row home-row">
                    <h5>BROWSE</h5>
                    <h2>REGIONAL</h2>
                    <div className="region">
                        <img src="https://images.bewakoof.com/uploads/grid/app/bewakoof-marathi-madness-casual-wear-online-fashion-COMMON-BANNER-1597653596.jpg" alt="first" style={{cursor:"pointer"}}/>
                        <img src="https://images.bewakoof.com/uploads/grid/app/bewakoof-bengali-collection-online-fashion-shopping-BANNER-1599056255.jpg" alt="second" style={{cursor:"pointer"}}/>
                        <img src="https://images.bewakoof.com/uploads/grid/app/bewakoof-gujarati-homepage-online-fashion-shopping-banner-1602165578.jpg" alt="third" style={{cursor:"pointer"}}/>
                    </div>
                </div>
                <div className="row home-row">
                    <h5>EXPLORE</h5>
                    <h2>MONEY SAVERS</h2>
                    <div className="money">
                        <img src="https://images.bewakoof.com/uploads/grid/app/Bewakoof-TriBe-underslider-1588247228.png" alt="first" style={{cursor:"pointer"}}/>
                        <img src="https://images.bewakoof.com/uploads/grid/app/saving-zone-main-banner-1588247229.png" alt="second" style={{cursor:"pointer"}}/>
                    </div>
                </div>
                <div className="row home-row">
                    <h5>FEATURED</h5>
                    <h2>COLLECTIONS</h2>
                    <div className="feat">
                        <img src="https://images.bewakoof.com/uploads/grid/app/bewakoof-cricket-carnival-online-fashion-shopping-msite-desktop-banner-1600177632.jpg" alt="first" style={{cursor:"pointer"}}/>
                        <img src="https://images.bewakoof.com/uploads/grid/app/bewakoof-collaboration-marvel-mania-online-fashion-MSITE-BANNER-1598538400.jpg" alt="second" style={{cursor:"pointer"}}/>
                        <img src="https://images.bewakoof.com/uploads/grid/app/bewakoof-work-from-home-online-fashion-shopping-HOMEPAGE-BANNER-1597847963.jpg" alt="third" style={{cursor:"pointer"}}/>
                    </div>
                    <div className="feat-2">
                        <img src="https://images.bewakoof.com/uploads/grid/app/bewakoof-polo-tshirt-online-casual-wear-BANNER-1597907964.jpg" alt="first" style={{cursor:"pointer"}}/>
                        <img src="https://images.bewakoof.com/uploads/grid/app/bewakoof-mvp-gaming-collection-banner-1594801544.jpg" alt="second" style={{cursor:"pointer"}}/>
                    </div>
                    <div className="feat-2">
                        <img src="https://images.bewakoof.com/uploads/grid/app/BEWAKOOF-NIOSH-N95-MASK-BANNER-1594992240.jpg" alt="third" style={{cursor:"pointer"}}/>
                        <img src="https://images.bewakoof.com/uploads/grid/app/bewakoof-joggers-bottom-wear-casual-louge-wear-banner-1588684445.gif" alt="fourth" style={{cursor:"pointer"}}/>
                    </div>
                    <div className="feat-2">
                        <img src="https://images.bewakoof.com/uploads/grid/app/bewakoof-under-299-store-banner-online-shopping-msite-1592470551.jpg" alt="fifth" style={{cursor:"pointer"}}/>
                        <img src="https://images.bewakoof.com/uploads/grid/app/bewakoof-joggers-revised-homepage-banner-1593185780.jpg" alt="sixth" style={{cursor:"pointer"}}/>
                    </div>
                </div>
            </div>
            <Footer /> 
        </>
    )
}

export default Home;
