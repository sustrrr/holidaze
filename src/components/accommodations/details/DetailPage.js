import Details from "./Details";

import Footer from "../../layout/Footer";
import HeadingTwo from "../../layout/headings/HeadingTwo";

import FeaturedHotel from "../featured/FeaturedHotel";
import FeaturedGuesthouse from "../featured/FeaturedGuesthouse";
import FeaturedBB from "../featured/FeaturedBB";

import Stored from "./bookingStored";

function DetailPage() {
  return (
    <>
      <div className="detailpage">
        <div className="ribbon">
          Use code <span>holidaze</span> for 20% on all bookings
        </div>
        <div className="wrapper wrapper_detail">
          <div className="item-container">
            <Details />
          </div>
        </div>
        <div className="item-container wrapper">
          <HeadingTwo>Most popular bookings</HeadingTwo>
          <div className="accomodations">
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

export default DetailPage;
