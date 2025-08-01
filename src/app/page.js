import Banner from "./components/Banner";
import Brands from "./components/Brands";
import CustomersReviews from "./components/CustomersReviews";

import Merchant from "./components/Merchant";
import Services from "./components/Services";
import Supports from "./components/Supports";
import Works from "./components/Works";

const OPTIONS = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
export default function Home() {
  return (
    <>
      <Banner />
    <Works/>
    <Services/>
    <Brands/>
    <Supports/>
    <Merchant/>
    <CustomersReviews slides={SLIDES} options={OPTIONS}/>
  

    
    </>
  );
}
