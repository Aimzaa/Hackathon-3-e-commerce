import Hero from "./components/Hero";
import FeaturedProduct from "./components/FeaturedProduct";
import TopCategories from "./components/TopCategories";
import OurProduts from "./components/OurProduts";



export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedProduct />
      <TopCategories />
      <OurProduts />
    </div>
  );
}
