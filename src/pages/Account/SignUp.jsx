import React, { useState } from "react";
import { Link } from "react-router-dom";
import sign from "../../assets/sign.jpg";

const SignUp = () => {
  // ============= Initial State Start here =============
  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);
  // ============= Initial State End here ===============
  // ============= Error Msg Start here =================
  const [errClientName, setErrClientName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPhone, setErrPhone] = useState("");
  const [errPassword, setErrPassword] = useState("");
 
  // ============= Error Msg End here ===================
  const [successMsg, setSuccessMsg] = useState("");
  // ============= Event Handler Start here =============
  const handleName = (e) => {
    setClientName(e.target.value);
    setErrClientName("");
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
    setErrPhone("");
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
  };

  // ============= Event Handler End here ===============
  // ================= Email Validation start here =============
  const EmailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
  };
  // ================= Email Validation End here ===============

  const handleSignUp = (e) => {
    e.preventDefault();
    if (checked) {
      if (!clientName) {
        setErrClientName("Enter your name");
      }
      if (!email) {
        setErrEmail("Enter your email");
      } else {
        if (!EmailValidation(email)) {
          setErrEmail("Enter a Valid email");
        }
      }
      if (!phone) {
        setErrPhone("Enter your phone number");
      }
      if (!password) {
        setErrPassword("Create a password");
      } else {
        if (password.length < 6) {
          setErrPassword("Passwords must be at least 6 characters");
        }
      }
  
      // ============== Getting the value ==============
      if (
        clientName &&
        email &&
        EmailValidation(email) &&
        password &&
        password.length >= 6 

      ) {
        setSuccessMsg(
          `Welcome dear ${clientName}, stay connected and additional assistance will be sent to you by your mail at ${email}`
        );
        setClientName("");
        setEmail("");
        setPhone("");
        setPassword("");
      }
    }
  };
  return (
    <div className="w-full  flex items-center justify-start">
      <div className="w-1/2 hidden lgl:inline-flex h-full text-white">
        <div className="w-[450px] md:w-[700px] h-full bg-primeColor flex flex-col justify-center ">
          <img src={sign} className="h-full w-full object-cover" alt="Sign" />
        </div>

      </div>
      <div className="w-full lgl:w-[500px] h-full flex flex-col justify-center">
        {successMsg ? (
          <div className="w-[500px]">
            <p className="w-full px-4 py-10 text-green-500 font-medium font-titleFont">
              {successMsg}
            </p>
            <Link to="/signin">
              <button
                className="w-full h-10 bg-primeColor rounded-md text-gray-200 text-base font-titleFont font-semibold 
            tracking-wide hover:bg-black hover:text-white duration-300"
              >
                Sign in
              </button>
            </Link>
          </div>
        ) : (
          <form className="w-full lgl:w-[500px] h-full flex items-center justify-center">
          <div className="bg-white shadow-lg rounded-lg px-8 py-6 w-full h-[96%] flex flex-col justify-start overflow-hidden">
            <h1 className="font-titleFont underline underline-offset-4 decoration-[1px] font-semibold text-2xl mdl:text-3xl mb-10 mt-10 text-center text-gray-700">
              Create your account
            </h1>
            <div className="flex flex-col gap-4 overflow-auto">
              {/* Client Name */}
              <div className="flex flex-col gap-1">
                <p className="font-titleFont text-base font-semibold text-gray-600">Full Name</p>
                <input
                  onChange={handleName}
                  value={clientName}
                  className="w-full h-10 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-300 outline-none focus:border-primeColor transition duration-200"
                  type="text"
                  placeholder="eg. John Doe"
                />
                {errClientName && (
                  <p className="text-sm text-red-500 font-titleFont font-semibold px-2">
                    <span className="font-bold italic mr-1">!</span>
                    {errClientName}
                  </p>
                )}
              </div>
        
              {/* Email */}
              <div className="flex flex-col gap-1">
                <p className="font-titleFont text-base font-semibold text-gray-600">Email</p>
                <input
                  onChange={handleEmail}
                  value={email}
                  className="w-full h-10 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-300 outline-none focus:border-primeColor transition duration-200"
                  type="email"
                  placeholder="john@email.com"
                />
                {errEmail && (
                  <p className="text-sm text-red-500 font-titleFont font-semibold px-2">
                    <span className="font-bold italic mr-1">!</span>
                    {errEmail}
                  </p>
                )}
              </div>
        
              {/* Phone Number */}
              <div className="flex flex-col gap-1">
                <p className="font-titleFont text-base font-semibold text-gray-600">Phone Number</p>
                <input
                  onChange={handlePhone}
                  value={phone}
                  className="w-full h-10 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-300 outline-none focus:border-primeColor transition duration-200"
                  type="text"
                  placeholder="008801234567891"
                />
                {errPhone && (
                  <p className="text-sm text-red-500 font-titleFont font-semibold px-2">
                    <span className="font-bold italic mr-1">!</span>
                    {errPhone}
                  </p>
                )}
              </div>
        
              {/* Password */}
              <div className="flex flex-col gap-1">
                <p className="font-titleFont text-base font-semibold text-gray-600">Password</p>
                <input
                  onChange={handlePassword}
                  value={password}
                  className="w-full h-10 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-300 outline-none focus:border-primeColor transition duration-200"
                  type="password"
                  placeholder="Create password"
                />
                {errPassword && (
                  <p className="text-sm text-red-500 font-titleFont font-semibold px-2">
                    <span className="font-bold italic mr-1">!</span>
                    {errPassword}
                  </p>
                )}
              </div>
        
              {/* Checkbox */}
              <div className="flex items-start mdl:items-center gap-2">
                <input
                  onChange={() => setChecked(!checked)}
                  className="w-4 h-4 mt-1 mdl:mt-0 cursor-pointer"
                  type="checkbox"
                />
                <p className="text-sm text-gray-600">
                  I agree to the Aerofoyl{" "}
                  <span className="text-blue-500">Terms of Service</span> and{" "}
                  <span className="text-blue-500">Privacy Policy</span>.
                </p>
              </div>
        
              <button
                onClick={handleSignUp}
                className={`${
                  checked
                    ? "bg-primeColor hover:bg-black hover:text-white cursor-pointer"
                    : "bg-gray-500 cursor-not-allowed"
                } w-full text-gray-200 text-base font-medium h-10 rounded-md transition duration-300`}
                disabled={!checked} // Disable button if checkbox is not checked
              >
                Create Account
              </button>
        
              <p className="text-sm text-center font-titleFont font-medium">
                Don't have an Account?{" "}
                <Link to="/signin">
                  <span className="hover:text-blue-600 duration-300 font-semibold cursor-pointer">
                    Sign in
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </form>
        
        
        )}
      </div>
    </div>
  );
};

export default SignUp;
