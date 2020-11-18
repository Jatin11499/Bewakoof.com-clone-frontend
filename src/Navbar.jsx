import React from 'react';
import './styles/Navbar.css';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import MensDropdown from './MensDropdown';
import WomensDropdown from './WomensDropdown';
import { NavLink } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Navbar() {
    const [{ bag, user }] = useStateValue();

    const signout = () => {
        if(user){
            auth.signOut();
        }
    }

    return (
        <div className="navbar-main" style={!user ? {borderBottom : "1px solid lightgray"} : {borderBottom : "1px solid black"}}>
            <nav className={user ? "navbar navbar-expand-lg navbar-dark bg-dark" : "navbar navbar-expand-lg navbar-light bg-light"}>
                <NavLink 
                    exact 
                    className="navbar-brand" 
                    to="/" 
                    style={user && {color:"gold"}}
                >
                    Bewakoof
                </NavLink>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-toggle="collapse" 
                    data-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item dropdown dm">
                            <NavLink exact to="/men-clothing" className="nav-link cat" style={user ? {color:"white"} : {color:"black"}}>
                            MEN
                            </NavLink>
                            <MensDropdown />
                        </li>
                        <li className="nav-item dropdown dw">
                            <NavLink exact to="/women-clothing" className="nav-link cat" style={user ? {color:"white"} : {color:"black"}}>
                            WOMEN
                            </NavLink>
                            <WomensDropdown />
                        </li>
                    </ul>
                    <form className="my-2 my-lg-0 navbar-form desk-nav">
                        <input className="form-control search" type="search" placeholder="Search by product, category or collection" aria-label="Search" />
                        <button className="btn btn-outline-secondary" type="submit"><SearchOutlinedIcon /></button>
                    </form>
                    <ul className="navbar-nav">
                        <li className="nav-item user-section">
                            <NavLink 
                                exact 
                                className="nav-link desk-nav" 
                                to={!user && "/login"} 
                                style={user ? {color:"white",paddingRight:"0px"} : {color:"black",paddingRight:"0px"}}>
                                    <span> | Hello {user ? user.displayName : "User"}</span>{!user && " | Login"}
                            </NavLink>
                            <p 
                                className="nav-link desk-nav" 
                                onClick={signout} 
                                style={user ? {color:"white",cursor:"pointer",marginBottom:"4px"} : {color:"black",cursor:"pointer",marginBottom:"4px"}}
                                >
                                    { user && "| Sign Out"}
                            </p>
                            <div className="mobile-nav">
                                <div style={{display:"flex",alignItems:"center"}}>
                                    <NavLink 
                                        exact 
                                        className="nav-link mobile-l-s" 
                                        to={!user && "/login"}
                                        style={{marginRight: "10px"}}
                                    >
                                        {!user && "Login"}
                                    </NavLink>
                                        {!user && "or"}
                                    <NavLink 
                                        exact 
                                        className="nav-link mobile-l-s" 
                                        to={!user && "/register"}
                                        style={{marginLeft: "10px"}}
                                    >
                                        {!user && "Sign Up"}
                                    </NavLink>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link desk-nav" style={user ? {color:"white"} : {color:"black"}}><FavoriteBorderIcon/></a>
                            <p 
                                className="mobile-nav mobile-wishlist" 
                                style={user ? {color:"white"} : {color:"black"}}
                            >
                                    My Wishlist
                            </p>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                exact 
                                to="/cart" 
                                className="nav-link desk-nav" 
                                style={user ? {color:"white"} : {color:"black"}}
                            >
                                <LocalMallOutlinedIcon />{bag?.length}
                            </NavLink>
                            <NavLink 
                                exact 
                                to="/cart" 
                                className="nav-link mobile-nav" 
                                style={user ? {color:"white",margin:"0",border:"0"} : {color:"black",margin:"0",border:"0"}}
                            >
                                Your Cart
                            </NavLink>
                        </li>
                    </ul>
                    <p 
                        className="nav-link mobile-nav mobile-signout" 
                        onClick={signout} 
                        style={user ? {color:"white"} : {color:"black"}}
                    >
                    { user && "Sign Out"}
                    </p>
                </div>
            </nav>
            
        </div>
    )
}

export default Navbar;
