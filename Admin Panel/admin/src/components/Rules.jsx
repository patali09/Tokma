import React, { useRef, useState } from "react";

import Card from "./Card";
import ic from "../images/508-icon.png";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Activities() {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);

  const handleAddItem = () => {
    // if (text.trim()) {
    setItems([...items, text]);
    setText("");
    // }
  };

  const [data, setData] = useState({
    name: "",
    profile:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/d6/96/36/photo4jpg.jpg?w=1400&h=1400&s=1",
  });

  const changeHandeler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const inputFileRef = useRef(null);
  const imageViewRef = useRef(null);

  const uploadImage = (event) => {
    let imgLink = URL.createObjectURL(event.target.files[0]);
    imageViewRef.current.style.backgroundImage = `url(${imgLink})`;
    imageViewRef.textContent = "";
  };
  const submitHandeler = async (e) => {
    e.preventDefault();
    console.log({ ...data, rules: items });
    try {
      const res = await axios.post(
        "/admin/rule",
        {
          ...data,
          rules: items,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      toast.success("Added Successfully");
      navigate("/admin");
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <div className="min-h-screen">
        <div className="text-neutral-content">
          <div className="max-w-4xl m-4">
            <form className="max-w-5xl mx-auto" onSubmit={submitHandeler}>
              <div className="mb-2 flex items-center">
                <label
                  htmlFor="place-name"
                  className="w-1/2 text-sm font-medium text-gray-900"
                >
                  Name of the Place
                </label>
                <input
                  name="name"
                  onChange={changeHandeler}
                  type="text"
                  id="place-name"
                  className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
                  required
                />
              </div>

              {/* <div className="mb-2 flex items-center">
                <label
                  htmlFor="overview"
                  className="w-1/3 text-sm font-medium text-gray-900"
                >
                  Rules and regulations
                </label>
                <input
                  type="text"
                  value={text}
                  onChangeCapture={(e) => setText(e.target.value)}
                  name="overview"
                  id="overview"
                  className="w-2/3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
                  required
                />
              </div>
              <button className="" onClick={handleAddItem}>
                Add Item
              </button>

              <div>
                <ul>
                  {items.map((items, index) => (
                    <li key={index} className="p-2 border-b border-gray-200">
                      {items}
                    </li>
                  ))}
                </ul>
              </div> */}

              <div className="mb-2 flex items-center">
                <label
                  htmlFor="overview"
                  className="w-1/3 text-sm font-medium text-gray-900"
                >
                  Rules and regulations
                </label>
                <input
                  type="text"
                  value={text}
                  name="rules"
                  onChangeCapture={(e) => setText(e.target.value)}
                  // name="overview"
                  id="overview"
                  className="w-2/3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
                />
              </div>

              <div className="card-actions">
                <button
                  type="button"
                  onClick={handleAddItem}
                  className="mb-3 btn btn-primary hover:bg-blue-500"
                >
                  Add Item
                </button>
              </div>

              <div>
                {items.map((item, index) => (
                  <input
                    key={index}
                    type="text"
                    value={item}
                    className="w-full input input-bordered  max-w-xxl mb-2  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
                  />
                ))}
              </div>

              <div className="mb-2">
                <label
                  htmlFor="place-image"
                  className="block mb-1 text-sm font-medium text-gray-900"
                >
                  Place Image
                </label>
                <div className="flex items-center justify-center w-full">
                  <label
                    htmlFor="dropzone-file"
                    className="drop-area flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                  >
                    <div
                      className="flex flex-col items-center justify-center pt-5 pb-6 img-view"
                      ref={imageViewRef}
                    >
                      <svg
                        className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Click to upload</span>{" "}
                        or drag and drop
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        SVG, PNG, JPG or GIF (MAX. 800x400px)
                      </p>
                    </div>
                    <input
                      id="dropzone-file"
                      type="file"
                      className="input-file hidden"
                      ref={inputFileRef}
                      onChange={uploadImage}
                    />
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
