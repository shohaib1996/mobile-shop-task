import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Navbar from "../../Shared/Navbar/Navbar/Navbar";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { FaSearch } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";



const AllProducts = () => {
    const searchRef = useRef()
    const [searchValue, setSearchValue] = useState("")
    const [smartphone, setSmartPhone] = useState(false)
    const [tablet, setTablet] = useState(false)
    const [selectedBrand, setSelectedBrand] = useState("")
    const { data: allProducts = [], refetch } = useQuery({
        queryKey: ["allProducts"],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/mobiles${searchValue}`)
            const data = await res.data
            return data
        }
    })
    const { data: brandsName = [] } = useQuery({
        queryKey: ["brandsName"],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/mobiles`)
            const data = await res.data
            return data
        }
    })
    let brands = []
    const allBrands = brandsName.map(brand => brand.brand)
    for (const brand of allBrands) {
        if (!brands.includes(brand)) {
            brands.push(brand);
        }
    }
    useEffect(() => {
        refetch()
    }, [searchValue, refetch])
    const handleSearch = () => {
        const searchResult = searchRef.current.value;
        searchRef.current.value = "";
        setSearchValue(`?brand=${searchResult}`);
        setTablet(false)
        setSmartPhone(false)
        setSelectedBrand("")
    };
    const handlePrice = (e) => {
        e.preventDefault()
        const form = e.target
        const min = form.min.value
        const max = form.max.value
        setSearchValue(`?min=${min}&max=${max}`)
        setTablet(false)
        setSmartPhone(false)
        setSelectedBrand("")

        // console.log(min, max);
    }
    const handleMemory = (e) => {
        e.preventDefault()
        const memory = e.target.value;
        setSearchValue(`?memory=${memory}`);
        setTablet(false)
        setSmartPhone(false)
        setSelectedBrand("")
        // console.log(memory);
    }
    const handleProcessor = (e) => {
        const processor = e.target.value
        setSearchValue(`?processor=${processor}`)
        setTablet(false)
        setSmartPhone(false)
        setSelectedBrand("")
        // console.log(processor);
    }
    const handleCheckboxChange = (e) => {
        const checked = e.target.value
        console.log(checked);
        if (checked === "Smartphone") {
            setSmartPhone(!smartphone)
            setSearchValue(`?type=${checked}`)
            setTablet(false)
            setSelectedBrand("")
        } else if (checked === "Tablet") {
            setTablet(!tablet)
            setSearchValue(`?type=${checked}`)
            setSmartPhone(false)
            setSelectedBrand("")
        }
    }

    const handleBrand = (brand) => {
        setSearchValue(`?brand=${brand}`)
        setSelectedBrand(brand)
    }
    // console.log(searchValue);

    // console.log(allProducts);
    console.log(smartphone);
    console.log(tablet);
    return (
        <div>
            <Navbar></Navbar>
            <div className="flex gap-5 max-w-5xl mx-auto my-12">
                <div className="flex-1 ">
                    <div className="join">
                        <input ref={searchRef} className="input input-bordered join-item" placeholder="Product name" />
                        <button onClick={handleSearch} className="btn join-item rounded-r-full">
                            <FaSearch></FaSearch>
                        </button>
                    </div>
                    <div className="my-5 space-y-2">
                        <p className="text-center">Price</p>
                        <div>
                            <form className="flex items-center justify-center gap-2" onSubmit={handlePrice}>
                                <input name="min" type="number" defaultValue={0} placeholder="Min" className="input input-bordered input-xs w-full" />
                                <p>-</p>
                                <input name="max" type="number" defaultValue={500} placeholder="Max" className="input input-bordered input-xs w-full" />
                                <button type="submit" className="btn btn-xs">Apply</button>
                            </form>
                        </div>
                    </div>
                    <select onChange={handleMemory} name="memory" className="select select-bordered w-full ">
                        <option disabled selected>Select Memory</option>
                        <option>16Gb</option>
                        <option>32Gb</option>
                        <option>64Gb</option>
                        <option>128Gb</option>
                        <option>256Gb</option>
                        <option>512Gb</option>
                    </select>
                    <select onChange={handleProcessor} name="Processor" className="select mt-4 select-bordered w-full ">
                        <option disabled selected>Select Processor</option>
                        <option>Bionic</option>
                        <option>Snapdragon</option>
                        <option>Google Tensor</option>
                        <option>Mediatek</option>
                        <option>Exynos</option>
                    </select>
                    <div className="mt-4 space-y-3">
                        <h1 className="text-center">Type</h1>
                        <div className="flex items-center gap-5">
                            <input onChange={handleCheckboxChange} type="checkbox" value="Smartphone" checked={smartphone} className="checkbox" /> <span>Smartphone</span>
                        </div>
                        <div className="flex items-center gap-5">
                            <input onChange={handleCheckboxChange} type="checkbox" value="Tablet" checked={tablet} className="checkbox" /> <span>Tablet</span>
                        </div>
                    </div>
                    <div className="mt-4">
                        {
                            brands.map(brand => <p className="mb-1" key={brand}><button onClick={() => handleBrand(brand)} className={selectedBrand == brand ? "bg-purple-600 btn text-white font-bold w-full" : "btn w-full"}>{brand}</button></p>)
                        }
                    </div>
                </div>
                <div className="flex-[3] grid grid-cols-3 gap-5">
                    {
                        allProducts.map(product =>
                            <ProductCard
                                key={product.id}
                                product={product}
                            ></ProductCard>)
                    }

                </div>
            </div>
        </div>
    );
};

export default AllProducts;