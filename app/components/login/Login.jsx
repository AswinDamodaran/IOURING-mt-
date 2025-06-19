"use client";
import { Router } from "next/router";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Darkmode from "../darkmodebtn/Darkmode";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [errorUsr, setErrorUsr] = useState(false);
  const [errorPsw, setErrorPsw] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    let hasError = false;

    if (username.trim() === "") {
      setErrorUsr(true);
      hasError = true;
    } else {
      setErrorUsr(false);
    }

    if (password.trim() === "") {
      setErrorPsw(true);
      hasError = true;
    } else {
      setErrorPsw(false);
    }

    if (hasError) return; 

    localStorage.setItem("username", username);
    router.push("/listpage");
  };

  return (
    <section className="bg-background ">
      <div className="flex p-5 justify-end ">
        <Darkmode />
      </div>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-[80vh] lg:py-0 gap-5">
        <div className="w-full rounded-lg shadow-2xl md:mt-0 sm:max-w-md xl:p-0 bg-subbg">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8 flex flex-col justify-center">
            <div className="flex justify-center">
              <a href="#" className="flex items-center gap-2">
                <img src="/globe.svg" className="h-8 w-8" alt="Test Logo" />
                <span className="text-2xl font-semibold text-text">Test</span>
              </a>
            </div>
            <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl text-text">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium text-text2"
                >
                  Your username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="bg-background border border-gray-300 text-text rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="username"
                 
                  onChange={(e) => setUsername(e.target.value)}
                />
                {errorUsr && (
                  <p className="text-xs text-red-500 mt-0.5">
                    Username is required.
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-text2"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-background border shadow-none  border-gray-300 text-text rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                {errorPsw && (
                  <p className="text-xs text-red-500 mt-0.5">
                    Password is required.
                  </p>
                )}
              </div>
              <div className="flex items-center justify-between">
                <a
                  href="#"
                  className="text-sm text-text font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className=" bg-button  hover:bg-[#0047AB] hover:text-white w-full text-text bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign in
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <a
                  href="#"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
