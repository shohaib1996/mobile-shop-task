
import { Link } from "react-router-dom";
import logo from "../../../../public/images/logo.png"

import NavbarLinks from "../NavbarLinks/NavbarLinks";

const Navbar = () => {
    return (
        <div className="bg-black bg-opacity-75">
            <div className="navbar max-w-6xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-20 p-2 shadow bg-base-100 rounded-box w-52">
                            <NavbarLinks></NavbarLinks>
                        </ul>
                    </div>
                    <Link to="/">
                        <button className="btn btn-ghost text-xl">
                            <img className="w-16 h-12" src={logo} alt="" />
                        </button>
                    </Link>
                </div>
                <div className="navbar-center text-white  hidden lg:flex">
                    <ul className="menu menu-horizontal space-x-4 px-1">
                        <NavbarLinks></NavbarLinks>
                    </ul>
                </div>

                <div className="navbar-end space-x-6">
                   
                    <a className="btn">Login</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;