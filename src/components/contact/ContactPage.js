import Footer from "../layout/Footer";
import HeadingOne from "../layout/headings/HeadingOne";
import HeadingTwo from "../layout/headings/HeadingTwo";
import HeadingImage from "../layout/headings/HeadingImage";
import ContactForm from "./ContactForm";

import ButtonCategories from "../layout/buttons/ButtonCategories";

function ContactPage() {
  return (
    <div className="contact">
      <div className="ribbon">
        Use code <span>holidaze</span> for 20% on all bookings
      </div>
      <HeadingImage style="contact__image" />
      <div className="wrapper contact">
        <div className="item-container-first flex">
          <HeadingOne titleStyle="h1__big-header" content="Contact us" />
          <ContactForm />
        </div>
        <div class="item-container wrapper">
          <HeadingTwo>Accomodations by type</HeadingTwo>
          <ButtonCategories />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactPage;
