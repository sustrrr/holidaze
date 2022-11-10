import Footer from "../layout/Footer";
import Welcome from "./Welcome";
import HeadingTwo from "../layout/headings/HeadingTwo";

import FeaturedHotel from "../accommodations/featured/FeaturedHotel";
import FeaturedGuesthouse from "../accommodations/featured/FeaturedGuesthouse";
import FeaturedBB from "../accommodations/featured/FeaturedBB";

import ButtonCategories from "../layout/buttons/ButtonCategories";

function Home() {
  return (
    <>
      <div className="wrapperhome">
        <div className="ribbon">
          Use code <span>holidaze</span> for 20% on all bookings
        </div>
        <Welcome />
        <div className="item-container wrapper">
          <HeadingTwo>Accomodations by type</HeadingTwo>
          <ButtonCategories />
        </div>
        <div className="item-container wrapper">
          <HeadingTwo>Most popular bookings</HeadingTwo>
          <div class="accomodations">
            <FeaturedHotel />
            <FeaturedBB />
            <FeaturedGuesthouse />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
