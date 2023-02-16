import { Slider } from "../components/Slider";
import Categories from "../components/Categories";
import { Products } from "../components/Products";
import { Newsletter } from "../components/Newsletter";
import { LandingProducts } from "../components/LandingProducts";

const Home = () => {
 
  return (
    <>
      <Slider />
      <Categories />
      <LandingProducts/>
      <Newsletter />
   
    </>
  );
};

export default Home;
