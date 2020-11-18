import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/Success.css';

function Success() {
    return (
        <div className="container sc">
            <h1>Your order is confirmed.</h1>
			<h3>Thank you for shopping with us. The order shall be delivered to you shortly.</h3>
			<h3><NavLink to="/" className="text-primary">Click here</NavLink> to order more.</h3>
        </div>
    )
}

export default Success;
