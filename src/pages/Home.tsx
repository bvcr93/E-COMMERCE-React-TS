import { Slider } from "../components/Slider";
import Categories from "../components/Categories";
import { Products } from "../components/Products";
import { Newsletter } from "../components/Newsletter";
import { LandingProducts } from "../components/LandingProducts";
import SVGContainer from "../components/SVGContainer";
import Reviews from "../components/Reviews";

const Home = () => {
 
  return (
    <div className="">
      <Slider />
      <Categories />
      <LandingProducts/>
      <Newsletter />
      <SVGContainer/>
      <Reviews/>
   
    </div>
  );
};

export default Home;
