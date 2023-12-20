import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const Brands = () => {
    const { data: brandsName = [] } = useQuery({
        queryKey: ["brandsName"],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/mobiles`)
            const data = await res.data
            return data
        }
    })
    // console.log(brandsName);
    let brands = []
    const allBrands = brandsName.map(brand => brand.brand)
    for (const brand of allBrands) {
        if (!brands.includes(brand)) {
            brands.push(brand);
        }
    }
    console.log(brands);
    
    return (
        <div className="mt-4">
            {
                brands.map(brand => <p className="mb-1" key={brand}><button className="btn w-full">{brand}</button></p>)
            }
        </div>
    );
};

export default Brands;