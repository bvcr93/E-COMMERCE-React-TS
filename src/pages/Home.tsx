import { Slider } from "../components/Slider";
import Categories from "../components/Categories";
import { Products } from "../components/Products";
import { Newsletter } from "../components/Newsletter";
import { LandingProducts } from "../components/LandingProducts";
import SVGContainer from "../components/SVGContainer";

const Home = () => {
 
  return (
    <>
      <Slider />
      <Categories />
      <LandingProducts/>
      <Newsletter />
      <SVGContainer/>
   
    </>
  );
};

export default Home;
