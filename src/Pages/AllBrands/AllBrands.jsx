import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Navbar from "../../Shared/Navbar/Navbar/Navbar";
import Container from "../../Container/Container";
import { Link } from "react-router-dom";


const AllBrands = () => {
    const { data: allBrands = [] } = useQuery({
        queryKey: ["allBrands"],
        queryFn: async () => {
            const res = await axios.get("/brands.json")
            const data = await res.data
            return data
        }
    })
    console.log(allBrands);
    return (
        <div>
            <Navbar></Navbar>
            <Container>
                <div className="grid grid-cols-4 gap-5 mt-12">
                    {
                        allBrands.map(brand =>
                            <Link to={`/brand-products/${brand.brand}`} key={brand.id} >
                                <div  className="shadow-xl border-2 rounded-3xl hover:scale-95 transform transition-transform duration-300">
                                    <figure className="">
                                        <img className="rounded-xl w-[250px] h-[180px] object-fill" src={brand.img} alt="" />
                                        <h1 className="p-2 text-center">{brand.brand} </h1>
                                    </figure>
                                </div>
                            </Link>
                        )
                    }
                </div>
            </Container>

        </div>
    );
};

export default AllBrands;