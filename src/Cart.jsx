import React,{ useContext } from 'react';
import Navbar from './Navbar';
import './styles/Cart.css';
import { useStateValue } from './StateProvider';
import { NavLink } from 'react-router-dom';
import BagItem from './BagItem';
import SubTotal from './SubTotal';

function Cart() {
    const [{ bag }] = useStateValue();

    return (
        <>
            <Navbar />
            { bag?.length === 0 ?
                <div className="container cart-page">
                    <img src="https://images.bewakoof.com/images/doodles/empty-cart-page-doodle.png" alt="empty-cart" className="empty-cart"/>
                    <p style={{fontWeight:"600",margin:"15px"}}>Nothing in the bag</p>
                    <NavLink exact to="/" className="btn btn-outline-primary" style={{fontSize:"1.25rem",fontWeight:"500",border:"2px solid"}}>Continue Shopping</NavLink>
                </div>
             : 

            <div className="container cart-table">
                <h5>My Bag <span style={{color:"gray"}}>({bag?.length} items)</span></h5>
                <div className="row">
                    <div className="col-md-8 cart-sec">
                            {
                                bag.map((item) => (
                                    <BagItem 
                                        key={item.pid}
                                        pid={item.pid}
                                        name={item.name}
                                        image={item.image}
                                        price={item.price}
                                    />
                                ))
                            }
                    </div>

                    <div className="col-md-4 cart-sec">
                        <SubTotal />
                    </div>
                </div>
            </div>}
        </>
    )
}

export default Cart;
