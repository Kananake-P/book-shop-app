import React from "react";
import Img1 from "../../assets/books/The Black Swan.jpg";
import Img2 from "../../assets/books/Learn to Earn.jpg";
import Img3 from "../../assets/books/Sir Alex Ferguson.jpg";
import { FaStar } from "react-icons/fa";

const BooksData = [
  {
    id: 1,
    img: Img1,
    title: "The Black Swan",
    description:
      "Do you know what the true definition of a Black Swan is?",
  },
  {
    id: 2,
    img: Img2,
    title: "Learn to Earn",
    description:
      "Learn Investing with Peter Lynch is one of the significant works by Peter Lynch.",
  },
  {
    id: 3,
    img: Img3,
    title: "Alex Ferguson: My Autobiography",
    description:
      "The celebratory, revealing, inspiring, and entertaining autobiography of the greatest manager in the history of British soccer.",
  },
];

function BestBook({ handleOrderPopup }) {
  return (
    <div className="py-10">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-20 max-w-[400px] mx-auto">
          <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Trending Books
          </p>
          <h1 className="text-3xl font-bold">Best Books</h1>
          <p className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            vitae neque tenetur blanditiis saepe illo aut dolorum placeat
          </p>
        </div>
        {/* card section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-5 place-items-center  gap-24">
          {BooksData.map((book) => (
            <div
              data-aos="zoom-in"
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]  "
            >
              <div className="h-[100px]">
                <img
                  src={book.img}
                  alt=""
                  className="max-w-[100px] block mx-auto transform -translate-y-14 group-hover:scale-105 duration-300 shadow-md"
                />
              </div>
              <div className="p-4 text-center">
                <div className="w-full flex items-center justify-center">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h1 className="text-xl font-bold">{book.title}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {book.description}
                </p>
                <button
                  onClick={handleOrderPopup}
                  className="bg-primary to-secondary text-white px-4 py-2 rounded-full mt-4 hover:scale-105 duration-200 group-hover:bg-white group-hover:text-primary"
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default BestBook;
