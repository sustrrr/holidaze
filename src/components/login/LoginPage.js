import LoginForm from "./LoginForm";

import Footer from "../layout/Footer";
import HeadingOne from "../layout/headings/HeadingOne";
import HeadingTwo from "../layout/headings/HeadingTwo";
import HeadingImage from "../layout/headings/HeadingImage";

export default function LoginPage() {
  return (
    <>
      <div className="contact">
        <div className="ribbon">
          Use code <span>holidaze</span> for 20% on all bookings
        </div>

        <div className="contact-box">
          <div className="contact-flex">
            <HeadingImage style="contact__image" />
            <div class="wrapper contact">
              <div class="item-container-first flex">
                <HeadingOne titleStyle="h1__big-header" content="Login" />
                <LoginForm />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
