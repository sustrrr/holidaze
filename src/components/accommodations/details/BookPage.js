import BookForm from "./BookForm";

import Footer from "../../layout/Footer";

function BookPage() {
  return (
    <>
      <div className="books">
        <div className="ribbon">
          Use code <span>holidaze</span> for 20% on all bookings
        </div>

        <div className="book-box">
          <div className="book-flex">
            <div className="wrapper">
              <BookForm />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default BookPage;
