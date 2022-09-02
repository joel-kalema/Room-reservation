import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <div className="nav">
                <img src="logo.jpg" alt=""/>
                <NavLink to="/">Rooms</NavLink>
                <NavLink to="/reservations">Reservations</NavLink>
                <NavLink to="/sessions">Sessions</NavLink>
                <Link to="/login" className="login">Login</Link>
            </div>
        </>
    )
}

export default Header;