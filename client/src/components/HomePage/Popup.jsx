import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/authentication";

function Popup({ orderPopup, handleOrderPopup }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
    login({
      email,
      password,
    });
  };

  return (
    <>
      {orderPopup && (
        <div className="h-screen w-screen fixed top-0 left-0 z-20 backdrop-blur-sm bg-black/50">
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-900 dark:text-white duration-200 p-4 rounded-md shadow-md w-[300px] ">
            <form onSubmit={handleSubmit}>
              {/* header */}
              <div className="flex items-center justify-between">
                <h1>Login</h1>
                <div>
                  <IoCloseOutline
                    className="text-2xl cursor-pointer"
                    onClick={() => handleOrderPopup(false)}
                  />
                </div>
              </div>
              {/* Form body */}

              <div className="mt-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                  value={email}
                />

                <input
                  type="password"
                  placeholder="Password"
                  className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                  value={password}
                />

                <div className="flex justify-center">
                  <button
                    className="bg-primary text-white px-8 py-2 rounded-full hover:underline "
                    type="submit"
                  >
                    Login
                  </button>
                </div>
                <div className="mt-4 flex justify-center">
                  <h1>
                    Do not have an account ?{" "}
                    <Link to="/auth/register">
                      <button className="text-primary hover:underline">
                        Sign up
                      </button>
                    </Link>
                  </h1>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
export default Popup;
