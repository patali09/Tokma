import React, { useRef, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Foodandlodge from "./FoodAndLodge";
export default function Admin() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("admin");

  const handleSelect = (event) => {
    setSelectedOption(event.target.value);
  };
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const changeHandeler = (e) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  console.log(selectedOption);
  const submitHandeler = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/" + selectedOption + "/login", {
        ...data,
      });
      localStorage.setItem("token", res.data.token);
      console.log(res.data);
      toast.success("Welcome");
      // navigate(selectedOption);
      if (selectedOption === "admin") {
        navigate("/admin");
      } else if (selectedOption === "healthservice") {
        navigate("/health");
      } else if (selectedOption === "foodandlodge") {
        navigate("/food");
      }
    } catch (err) {
      toast.error("Invalid Credentials");
      console.log(err);
    }
  };

  return (
    <div>
      <section className="bg-gray-50 ">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-blue-600 md:text-2xl text-center">
                Login
              </h1>

              <form
                className="space-y-4 md:space-y-6"
                onSubmit={submitHandeler}
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Your email
                  </label>

                  <input
                    type="email"
                    name="email"
                    onChange={changeHandeler}
                    id="email"
                    className=" border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    onChange={changeHandeler}
                    placeholder=""
                    className=" border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>

                {/* for the role */}

                <div className="mb-2 ">
                  <label
                    htmlFor="category"
                    className="w-1/3 text-sm font-medium text-gray-900 block"
                  >
                    Role
                  </label>

                  <select
                    value={selectedOption}
                    onChange={handleSelect}
                    id="category"
                    className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
                  >
                    <option selected="selected" value="admin">
                      Admin
                    </option>
                    <option value="healthservice">Health Service</option>
                    <option value="foodandlodge">Food And Lodge</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4  focus:ring-primary-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center border-none"
                >
                  LOGIN
                </button>

                {(selectedOption == "healthservice" ||
                  selectedOption == "foodandlodge") && (
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Don’t have an account yet?{" "}
                    <a
                      href="#"
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      {console.log(selectedOption)}
                      <Link to={"/" + selectedOption}>Sign up</Link>
                    </a>
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
