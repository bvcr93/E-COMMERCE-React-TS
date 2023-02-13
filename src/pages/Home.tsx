import Navbar from "../components/Navbar";
import Announcment from "../components/Announcment";
import { Slider } from "../components/Slider";
import Categories from "../components/Categories";
import { Products } from "../components/Products";

const Home = () => {
    
  return (
    <>
      <Announcment />
      <Navbar />
      <Slider />
      <Categories/>
      <Products/>
    </>
  );
};

export default Home;
