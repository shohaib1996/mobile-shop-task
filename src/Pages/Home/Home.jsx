import Navbar from "../../Shared/Navbar/Navbar/Navbar";
import FeatureProducts from "./FeatureProducts/FeatureProducts";
import Slider from "./Slider/Slider";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Slider></Slider>
            <FeatureProducts></FeatureProducts>
        </div>
    );
};

export default Home;