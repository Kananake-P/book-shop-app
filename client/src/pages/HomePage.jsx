import Navbar from "../components/HomePage/Navbar";
import BookSuggestion from "../components/HomePage/BookSuggestion";
import BestBook from "../components/HomePage/BestBook";
import Banner from "../components/HomePage/Banner";
import DownloadBanner from "../components/HomePage/DownloadBanner";
import BookCard from "../components/HomePage/BookCard";
import CustomerComment from "../components/HomePage/CustomerComment";
import Footer from "../components/HomePage/Footer";
function Homepage() {
  return (
    <>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        <Navbar />
        <BookSuggestion />
        <BestBook />
        <Banner />
        <DownloadBanner />
        <BookCard />
        <CustomerComment />
        <Footer />
      </div>
    </>
  );
}
export default Homepage;
