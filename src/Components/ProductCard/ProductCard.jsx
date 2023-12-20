/* eslint-disable react/prop-types */

import { FaCartPlus, FaEye, FaRegHeart } from "react-icons/fa";



const ProductCard = ({ product }) => {
    const { name, price, img, memory, processor, type } = product

    return (
        <div className="group card relative bg-base-100 shadow-xl border-2">
            <figure><img className="w-full h-[280px]" src={img} alt="Shoes" /></figure>
            <div className="hidden bg-black rounded-xl bg-opacity-30 w-full absolute h-full card-actions justify-end group-hover:flex">
            </div>
            <div className="card-bod">
                <div className="p-5">
                    <h2 className="card-title">{name}</h2>
                    <div className="flex justify-between">
                        <p>${price}</p>
                        <p>{memory}</p>
                    </div>
                    <p>Processor: {processor}</p>
                    <p className="font-bold">{type}</p>
                </div>
                <div className="absolute flex items-center gap-3 justify-center top-1/2 left-8 transform transition ease-in-out duration-300 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
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
    );
};

export default ProductCard;