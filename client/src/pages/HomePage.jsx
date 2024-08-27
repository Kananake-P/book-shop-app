import React from "react";
import Navbar from "../components/HomePage/Navbar";
import BookSuggestion from "../components/HomePage/BookSuggestion";
import BestBook from "../components/HomePage/BestBook";
import Banner from "../components/HomePage/Banner";
import DownloadBanner from "../components/HomePage/DownloadBanner";
import BookCard from "../components/HomePage/BookCard";
import CustomerComment from "../components/HomePage/CustomerComment";
import Footer from "../components/HomePage/Footer";
import Popup from "../components/HomePage/Popup";

//aos import
import AOS from "aos";
import "aos/dist/aos.css";

function Homepage() {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        <Navbar handleOrderPopup={handleOrderPopup} />
        <BookSuggestion handleOrderPopup={handleOrderPopup} />
        <BestBook handleOrderPopup={handleOrderPopup} />
        <Banner />
        <DownloadBanner />
        <BookCard />
        <CustomerComment />
        <Footer />
        <Popup handleOrderPopup={handleOrderPopup} orderPopup={orderPopup} />
      </div>
    </>
  );
}
export default Homepage;
