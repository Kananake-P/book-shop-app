import { useState } from "react";
import { useAuth } from "../../contexts/authentication";
import Logo from "../../assets/website/logo.png";

function RegisterForm() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile_number, setMobileNumber] = useState("");

  const { register } = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      firstname,
      lastname,
      email,
      password,
      mobile_number,
    };
    register(data);
  };

  return (
    <div className="flex justify-center mt-[50px] mb-[50px]">
      <div className="w-[900px] h-[700px] bg-gray-50 flex justify-center rounded-lg shadow-xl">
        <form onSubmit={handleSubmit} className="flex flex-col gap-[30px]">
          {/* header */}

          <div className="flex justify-center mt-[30px] gap-[20px]">
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="" className="w-20" />
            </a>
            <h1 className="font-bold text-2xl sm:text-3xl flex  items-center text-primary relative top-1">
              Books Shop
            </h1>
          </div>

          <h1 className="text-[20px] flex justify-center mt-[-10px]">
            Register Information
          </h1>
          <div className="flex flex-row gap-[20px] justify-center">
            <div className="flex flex-col gap-[5px]">
              <label>First name *</label>
              <input
                type="text"
                placeholder="Your name"
                onChange={(event) => {
                  setFirstname(event.target.value);
                }}
                value={firstname}
                className="rounded-md w-[400px] h-[40px]"
              />
            </div>
            <div className="flex flex-col gap-[5px]">
              <label>Last name *</label>
              <input
                type="text"
                placeholder="Your last name"
                onChange={(event) => {
                  setLastname(event.target.value);
                }}
                value={lastname}
                className="rounded-md w-[400px] h-[40px] "
              />
            </div>
          </div>

          <div className="flex flex-col gap-[5px] ">
            <label>Email *</label>
            <input
              type="text"
              placeholder="example@email.com"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              value={email}
              className="rounded-md w-[820px] h-[40px]"
            />
          </div>

          <div className="flex flex-col gap-[5px]">
            <label>Password *</label>
            <input
              type="password"
              placeholder="*********"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              value={password}
              className="rounded-md w-[820px] h-[40px] "
            />
          </div>

          <div className="flex flex-col gap-[5px]">
            <label>Mobile number*</label>
            <input
              type="text"
              placeholder="0xx-xxx-xxxx"
              onChange={(event) => {
                setMobileNumber(event.target.value);
              }}
              value={mobile_number}
              className="rounded-md w-[820px] h-[40px] flex"
            />
          </div>
          <button
            type="submit"
            className="w-[800px] h-[40px] bg-primary rounded-md flex items-center justify-center text-white text-base font-bold"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
export default RegisterForm;
