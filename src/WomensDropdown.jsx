import React from 'react';
import './styles/Dropdown.css';

function WomensDropdown() {
    return (
        <>
            <div class="dropdown-menu dropdown-menu-w" aria-labelledby="navbarDropdown2">
                <div className="row row-dd">
                    <div className="col-lg-2">
                        <ul>
                            <li class="dropdown-item heading">Topwear</li>
                            <li class="dropdown-item">T-Shirts</li>
                            <li class="dropdown-item">Fashion Tops <sup>NEW</sup></li>
                            <li class="dropdown-item">Nightwear <sup>NEW</sup></li>
                            <li class="dropdown-item">Crop Tops</li>
                            <li class="dropdown-item">Dresses</li>
                            <li class="dropdown-item">V-Neck T-Shirts</li>
                            <li class="dropdown-item">Sunactive T-Shirts</li>
                            <li class="dropdown-item">Hoodies & Sweatshirts</li>
                            <li class="dropdown-item">Jackets</li>
                        </ul>
                    </div>
                    <div className="col-lg-2">
                        <ul>
                            <li class="dropdown-item heading">Bottomwear</li>
                            <li class="dropdown-item">Palazzos & Leggings <sup>NEW</sup></li>
                            <li class="dropdown-item">Denims <sup>NEW</sup></li>
                            <li class="dropdown-item">Joggers</li>
                            <li class="dropdown-item">Pyjamas</li>
                            <li class="dropdown-item">Boxers</li>
                        </ul>
                    </div>
                    <div className="col-lg-2">
                        <ul>
                            <li class="dropdown-item heading">Regional</li>
                            <li class="dropdown-item">Marathi T-Shirts</li>
                            <li class="dropdown-item">Bengali T-Shirts</li>
                            <li class="dropdown-item">Gujarati T-Shirts</li>
                        </ul>
                    </div>
                    <div className="col-lg-2">
                        <ul>
                            <li class="dropdown-item heading">Prevention Gear</li>
                            <li class="dropdown-item">Protective Masks</li>
                            <li class="dropdown-item">Multipurpose Sanitizers</li>
                            <li class="dropdown-item">Protective Eyewear</li>
                            <li class="dropdown-item">Essentials Combo Kits</li>
                        </ul>
                    </div>
                    <div className="col-lg-2">
                        <ul>
                            <li class="dropdown-item heading">Footwear</li>
                            <li class="dropdown-item">Flip Flops</li>
                            <li class="dropdown-item">Sliders</li>
                            <li class="dropdown-item">Socks</li>
                        </ul>
                    </div>
                </div>
            </div>  
        </>
    )
}

export default WomensDropdown;