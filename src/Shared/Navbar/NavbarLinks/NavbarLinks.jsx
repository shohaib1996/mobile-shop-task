import { NavLink } from "react-router-dom";


const NavbarLinks = () => {
    return (
        <>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                >
                   Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/all-brands"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                >
                   All Brands
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/all-products"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                >
                    All Products
                </NavLink>
            </li>
        </>
    );
};

export default NavbarLinks;