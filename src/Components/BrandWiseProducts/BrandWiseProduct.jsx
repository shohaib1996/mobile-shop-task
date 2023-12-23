import { useParams } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar/Navbar";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ProductCard from "../ProductCard/ProductCard";
import Container from "../../Container/Container";


const BrandWiseProduct = () => {
    const { brand } = useParams()
    console.log(brand);
    const { data: brandProducts = [] } = useQuery({
        queryKey: ["brandProducts"],
        queryFn: async () => {
            const res = await axios.get(`https://mobile-shop-server-phi.vercel.app/mobiles?brand=${brand}`)
            const data = await res.data
            return data
        }
    })
    console.log(brandProducts);
    return (
        <div>
            <Navbar></Navbar>
            <Container>
                <h1 className="text-center text-5xl my-8">{brand}</h1>
                <div className="flex gap-5 mt-12">
                    <div className="flex-[1]">
                        <h1>filter</h1>
                    </div>
                    <div className="flex-[3] grid grid-cols-3 gap-5">
                        {
                            brandProducts.map(product =>
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                ></ProductCard>)
                        }

                    </div>
                </div>
            </Container>

        </div>
    );
};

export default BrandWiseProduct;