import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FaCartPlus, FaEye, FaRegHeart } from "react-icons/fa";

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

const FeatureProducts = () => {
    const { data: featurePhone = [] } = useQuery({
        queryKey: ["featurePhone"],
        queryFn: async () => {
            const res = await axios.get("/featureProducts.json")
            const data = await res.data
            return data
        }
    })
   

    console.log(featurePhone);
    return (
        <div className="max-w-5xl mx-auto mb-12">
            <div className="space-y-4 my-12">
                <h1 className="text-5xl text-center font-semibold">Feature Products</h1>
                <p className="italic text-center">Here are some feature products. You can explore here some best product from us</p>
            </div>

            <Swiper
                spaceBetween={10}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 20
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    }
                }}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                {
                    featurePhone.map(phone =>
                        <SwiperSlide key={phone.id}>
                            <div className="group card relative bg-base-100 shadow-xl border-2 mb-12">
                                <figure><img className="w-full h-[280px]" src={phone.img} alt="Shoes" /></figure>
                                <div className="hidden bg-black rounded-xl bg-opacity-30 w-full absolute h-full card-actions justify-end group-hover:flex">
                                </div>
                                <div className="card-bod">
                                    <div className="p-5">
                                        <h2 className="card-title">{phone.name}</h2>
                                        <p>${phone.price}</p>
                                    </div>
                                    <div className="absolute flex items-center gap-3 justify-center top-1/2 left-32 lg:left-20 md:32 transform transition ease-in-out duration-300 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                                        <button className="btn btn-primary">
                                            <FaRegHeart></FaRegHeart>
                                        </button>
                                        <button className="btn btn-primary">
                                            <FaCartPlus></FaCartPlus>
                                        </button>
                                        <button className="btn btn-primary">
                                            <FaEye></FaEye>
                                        </button>
                                    </div>

                                </div>
                            </div>

                        </SwiperSlide>)
                }

            </Swiper>


        </div >
    );
};

export default FeatureProducts;