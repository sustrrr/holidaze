import GetBB from "./GetBB";

import Footer from "../../layout/Footer";
import HeadingOne from "../../layout/headings/HeadingOne";
import HeadingTwo from "../../layout/headings/HeadingTwo";
import HeadingImage from "../../layout/headings/HeadingImage";
import SearchBB from "../../search/SearchBB";

function BBPage() {
  return (
    <>
      <div className="bb">
        <div className="ribbon">
          Use code <span>holidaze</span> for 20% on all bookings
        </div>
        <HeadingImage style="bb__image" />
        <div class="wrapper">
          <div className="item-container-first">
            <HeadingOne titleStyle="h1__big-header" content="B&B" />
            <SearchBB />
          </div>
          <div class="accomodations">
            <GetBB />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default BBPage;
