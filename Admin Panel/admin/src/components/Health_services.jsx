import { useRef, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Health_services() {
  const navigate = useNavigate();
  const submitHandeler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/healthservice/register", {
        ...data,
      });
      toast.success("Added Successfully");
      navigate("/");
      console.log(res.data);
    } catch (err) {
      toast.error("Something went wrong");

      console.log(err);
    }
  };
  // name, contactNo, email, password, description, location
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    locaton: "",
    contactNo: "",
    description: "",
    profileImg:
      "https://www.shutterstock.com/image-photo/young-indian-adult-girl-her-260nw-2093559157.jpg",
  });
  const changeHandeler = (e) => {
    setData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  const inputFileRef = useRef(null);
  const imageViewRef = useRef(null);

  const uploadImage = (event) => {
    let imgLink = URL.createObjectURL(event.target.files[0]);
    imageViewRef.current.style.backgroundImage = `url(${imgLink})`;
    imageViewRef.textContent = "";
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
                  Name
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

              <div className="mb-2 flex items-center">
                <label
                  htmlFor="place-name"
                  className="w-1/2 text-sm font-medium text-gray-900"
                >
                  Email
                </label>
                <input
                  name="email"
                  onChange={changeHandeler}
                  type="text"
                  id="place-name"
                  className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
                  required
                />
              </div>

              <div className="mb-2 flex items-center">
                <label
                  htmlFor="place-name"
                  className="w-1/2 text-sm font-medium text-gray-900"
                >
                  Password
                </label>
                <input
                  name="password"
                  onChange={changeHandeler}
                  type="password"
                  id="place-name"
                  className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
                  required
                />
              </div>

              <div className="mb-2 flex items-center">
                <label
                  htmlFor="location"
                  className="w-1/3 text-sm font-medium text-gray-900"
                >
                  Regional Location
                </label>
                <input
                  type="text"
                  name="location"
                  onChange={changeHandeler}
                  id="location"
                  className="w-2/3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
                  required
                />
              </div>

              <div className="mb-2 flex items-center">
                <label
                  htmlFor="overview"
                  className="w-1/3 text-sm font-medium text-gray-900"
                >
                  Contact no
                </label>
                <input
                  type="number"
                  name="contactNo"
                  onChange={changeHandeler}
                  id="overview"
                  className="w-2/3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
                  required
                />
              </div>

              <div className="mb-2">
                <label
                  htmlFor="description"
                  className="block mb-1 text-sm font-medium text-gray-900"
                >
                  Description
                </label>
                <textarea
                  name="description"
                  onChange={changeHandeler}
                  id="description"
                  rows="4"
                  className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 p-2.5"
                  placeholder=""
                ></textarea>
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

// import React, { useRef } from 'react';

// export default function HealthServices() {
//   const inputFileRef = useRef(null);
//   const imageViewRef = useRef(null);

//   const uploadImage = (event) => {
//     let imgLink = URL.createObjectURL(event.target.files[0]);
//     imageViewRef.current.style.backgroundImage = `url(${imgLink})`;
//   };

//   return (
//     <div>
//       <div className="min-h-screen">
//         <div className="text-neutral-content">
//           <div className="max-w-4xl m-4">
//             <form className="max-w-sm mx-auto">

//               <div className="mb-2 flex items-center">
//                 <label htmlFor="place-name" className="w-1/3 text-sm font-medium text-gray-900">Name of the Place</label>
//                 <input type="text" id="place-name" className="w-2/3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5" required />
//               </div>

//               <div className="mb-2 flex items-center">
//                 <label htmlFor="location" className="w-1/3 text-sm font-medium text-gray-900">Location</label>
//                 <input type="text" id="location" className="w-2/3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5" required />
//               </div>

//               <div className="mb-2 flex items-center">
//                 <label htmlFor="overview" className="w-1/3 text-sm font-medium text-gray-900">Overview</label>
//                 <input type="text" id="overview" className="w-2/3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5" required />
//               </div>

//               <div className="mb-2 flex items-center">
//                 <label htmlFor="category" className="w-1/3 text-sm font-medium text-gray-900">Category</label>
//                 <select id="category" className="w-2/3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5">
//                   <option value="Historical">Historical</option>
//                   <option value="Cultural">Cultural</option>
//                   <option value="Adventure">Adventure</option>
//                   <option value="Natural">Natural</option>
//                 </select>
//               </div>

//               <div className="mb-2">
//                 <label htmlFor="description" className="block mb-1 text-sm font-medium text-gray-900">Description</label>
//                 <textarea id="description" rows="4" className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 p-2.5" placeholder=""></textarea>
//               </div>

//               <div className="mb-2">
//                 <label htmlFor="place-image" className="block mb-1 text-sm font-medium text-gray-900">Place Image</label>
//                 <div className="flex items-center justify-center w-full">
//                   <label htmlFor="dropzone-file" className="drop-area flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
//                     <div className="flex flex-col items-center justify-center pt-5 pb-6 img-view" ref={imageViewRef}>
//                       <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
//                         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
//                       </svg>
//                       <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
//                       <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
//                     </div>
//                     <input id="dropzone-file" type="file" className="input-file hidden" ref={inputFileRef} onChange={uploadImage} />
//                   </label>
//                 </div>
//               </div>

//               <div className="mb-2">
//                 <label htmlFor="rules" className="block mb-1 text-sm font-medium text-gray-900">Rules and Regulations</label>
//                 <textarea id="rules" rows="4" className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 p-2.5" placeholder=""></textarea>
//               </div>

//               <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
