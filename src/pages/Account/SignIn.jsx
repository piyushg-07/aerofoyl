import React, { useState } from "react";
import { Link } from "react-router-dom";
import   sign  from "../../assets/sign.jpg";

const SignIn = () => {
  // ============= Initial State Start here =============
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // ============= Initial State End here ===============
  // ============= Error Msg Start here =================
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");

  // ============= Error Msg End here ===================
  const [successMsg, setSuccessMsg] = useState("");
  // ============= Event Handler Start here =============
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
  };
  // ============= Event Handler End here ===============
  const handleSignUp = (e) => {
    e.preventDefault();

    if (!email) {
      setErrEmail("Enter your email");
    }

    if (!password) {
      setErrPassword("Create a password");
    }
    // ============== Getting the value ==============
    if (email && password) {
      setSuccessMsg(
        `Hello dear, Thank you for your attempt. We are processing to validate your access. Till then stay connected and additional assistance will be sent to you by your mail at ${email}`
      );
      setEmail("");
      setPassword("");
    }
  };
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-1/2 hidden lgl:inline-flex h-full text-white">

        <div className="w-[450px] md:w-[700px] h-full bg-primeColor flex flex-col justify-center ">
          <img src={sign} className="h-full w-full object-cover" alt="Sign" />
        </div>
      </div>
      <div className="w-full lgl:w-1/2 h-full">
        {successMsg ? (
          <div className="w-full lgl:w-[500px] h-full flex flex-col justify-center">
            <p className="w-full px-4 py-10 text-green-500 font-medium font-titleFont">
              {successMsg}
            </p>
            <Link to="/signup">
              <button
                className="w-full h-10 bg-primeColor text-gray-200 rounded-md text-base font-titleFont font-semibold 
            tracking-wide hover:bg-black hover:text-white duration-300"
              >
                Sign Up
              </button>
            </Link>
          </div>
        ) : (
          <form className="w-full lgl:w-[450px] my-64 flex items-center justify-center">
          <div className="bg-white shadow-lg rounded-lg px-8 py-6 w-full h-[90%] flex flex-col justify-center overflow-y-scroll scrollbar-thin scrollbar-thumb-primeColor gap-3">
            <h1 className="font-titleFont underline underline-offset-4 decoration-[1px] font-semibold text-3xl mdl:text-4xl mb-6 text-center text-gray-700">
              Sign in
            </h1>
        
            <div className="flex flex-col gap-4">
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
        
              <button
                onClick={handleSignUp}
                className="bg-primeColor hover:bg-black text-gray-200 hover:text-white cursor-pointer w-full text-base font-medium h-10 rounded-md transition duration-300"
              >
                Sign In
              </button>
              <p className="text-sm text-center font-titleFont font-medium">
                Don't have an Account?{" "}
                <Link to="/signup">
                  <span className="hover:text-blue-600 font-bold duration-300">Sign up</span>
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

export default SignIn;
