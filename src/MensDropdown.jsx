import React from 'react';
import './styles/Dropdown.css';

function MensDropdown() {
    return (
        <>
            <div className="dropdown-menu dropdown-menu-m" aria-labelledby="navbarDropdown1">
                <div className="row row-dd">
                    <div className="col-lg-2">
                        <ul>
                            <li className="dropdown-item heading">Topwear</li>
                            <li className="dropdown-item">T-Shirts</li>
                            <li className="dropdown-item">Kurta <sup>NEW</sup></li>
                            <li className="dropdown-item">Shirts <sup>NEW</sup></li>
                            <li className="dropdown-item">Vest</li>
                            <li className="dropdown-item">Polo T-Shirts <sup>NEW</sup></li>
                            <li className="dropdown-item">V-Neck T-Shirts</li>
                            <li className="dropdown-item">Henley T-Shirts</li>
                            <li className="dropdown-item">Hoodies & Sweatshirts</li>
                            <li className="dropdown-item">Jackets</li>
                        </ul>
                    </div>
                    <div className="col-lg-2">
                        <ul>
                            <li className="dropdown-item heading">Bottomwear</li>
                            <li className="dropdown-item">Denims <sup>NEW</sup></li>
                            <li className="dropdown-item">Shorts <sup>NEW</sup></li>
                            <li className="dropdown-item">Joggers</li>
                            <li className="dropdown-item">Pyjamas</li>
                            <li className="dropdown-item">Boxers</li>
                        </ul>
                    </div>
                    <div className="col-lg-2">
                        <ul>
                            <li className="dropdown-item heading">Regional</li>
                            <li className="dropdown-item">Marathi T-Shirts</li>
                            <li className="dropdown-item">Bengali T-Shirts</li>
                            <li className="dropdown-item">Gujarati T-Shirts</li>
                        </ul>
                    </div>
                    <div className="col-lg-2">
                        <ul>
                            <li className="dropdown-item heading">Prevention Gear</li>
                            <li className="dropdown-item">Protective Masks</li>
                            <li className="dropdown-item">Multipurpose Sanitizers</li>
                            <li className="dropdown-item">Protective Eyewear</li>
                            <li className="dropdown-item">Essentials Combo Kits</li>
                        </ul>
                    </div>
                    <div className="col-lg-2">
                        <ul>
                            <li className="dropdown-item heading">Footwear</li>
                            <li className="dropdown-item">Flip Flops</li>
                            <li className="dropdown-item">Sliders</li>
                            <li className="dropdown-item">Socks</li>
                        </ul>
                    </div>
                </div>
            </div>  
        </>
    )
}

export default MensDropdown;
