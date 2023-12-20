import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";

import AllProducts from "../Pages/AllProducts/AllProducts";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/all-products",
                element: <AllProducts></AllProducts>
            }
        ]
    }
])

export default router;