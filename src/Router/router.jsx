import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import AllBrands from "../Pages/AllBrands/AllBrands";
import BrandWiseProduct from "../Components/BrandWiseProducts/BrandWiseProduct";
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
                path: "/all-brands",
                element: <AllBrands></AllBrands>
            },
            {
                path: "/brand-products/:brand",
                element: <BrandWiseProduct></BrandWiseProduct>
            },
            {
                path: "/all-products",
                element: <AllProducts></AllProducts>
            }
        ]
    }
])

export default router;