import React from "react";
import Book1 from "../../assets/books/Harry Potter and the Order of the Phoenix.jpg";
import Book2 from "../../assets/books/NewKid.jpg";
import Book3 from "../../assets/books/BadGuys.jpg";
import Book4 from "../../assets/books/Zonal Marking.jpg";
import Book5 from "../../assets/books/Sapiens A Brief History of Humankind.jpg";
import { FaStar } from "react-icons/fa";

const BooksData = [
  {
    id: 1,
    img: Book1,
    title: "Harry Potter ",
    rating: 4.8,
    author: "J.K. Rowling",
  },
  {
    id: 2,
    img: Book2,
    title: "NewKid",
    rating: 4.7,
    author: "Jerry Craft",
  },
  {
    id: 3,
    img: Book3,
    title: "BadGuys",
    rating: 4.7,
    author: "Aaron Blabey",
  },
  {
    id: 4,
    img: Book4,
    title: "Zonal Marking",
    rating: 4.7,
    author: "Michael Cox",
  },
  {
    id: 5,
    img: Book5,
    title: "Sapiens",
    rating: 4.6,
    author: " Yuval Noah Harari",
  },
];

function BookCard() {
  return (
    <div className="py-10">
      <div className="container placeholder-gray-100">
        {/* header */}
        <div
          data-aos="slide-up"
          className="text-center mb-20 max-w-[400px] mx-auto"
        >
          <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Best Books
          </p>
          <h1 className="text-3xl font-bold">Top Books</h1>
          <p className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            vitae neque tenetur blanditiis saepe illo aut dolorum placeat
          </p>
        </div>
        {/* card */}
        <div data-aos="slide-up">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {BooksData.map((data) => (
              <div className="space-y-3">
                <img
                  src={data.img}
                  alt=""
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h2 className="font-semibold">{data.title}</h2>
                  <p className="text-sm text-gray-700 dark:text-gray-400">
                    {data.author}
                  </p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-500" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-2 px-5 rounded-full">
              View All books
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
