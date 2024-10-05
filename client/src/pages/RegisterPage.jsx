import React from "react";
import Navbar from "../components/HomePage/Navbar";
import RegisterForm from "../components/RegisterPage/RegisterForm";
import Footer from "../components/HomePage/Footer";
function RegisterPage() {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar />
      <RegisterForm />
      <Footer />
    </div>
  );
}

export default RegisterPage;
