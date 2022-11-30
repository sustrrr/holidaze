import Footer from "../layout/Footer";
import HeadingOne from "../layout/headings/HeadingOne";
import HeadingTwo from "../layout/headings/HeadingTwo";
import HeadingImage from "../layout/headings/HeadingImage";
import ContactForm from "./ContactForm";

import { MdAlternateEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";

import ButtonCategories from "../layout/buttons/ButtonCategories";

function ContactPage() {
  return (
    <div className="contact">
      <div className="ribbon">
        Use code <span>holidaze</span> for 20% on all bookings
      </div>

      <div className="contact-box">
        <div className="contact-flex">
          <HeadingOne titleStyle="h1__big-header" content="Contact us" />
          <ContactForm />
          <div className="contactinfo">
            <p>
              <MdAlternateEmail />
              <span>holidaze@no</span>
            </p>
            <p>
              <BsFillTelephoneFill />
              <span>0000000000</span>
            </p>
          </div>
        </div>
      </div>

      <div class="item-container wrapper">
        <HeadingTwo>Accomodations by type</HeadingTwo>
        <ButtonCategories />
      </div>

      <Footer />
    </div>
  );
}

export default ContactPage;
