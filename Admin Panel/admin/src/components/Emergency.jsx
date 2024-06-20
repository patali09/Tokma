// import React, { useRef, useState } from "react";

// import Card from "./Card";
// import ic from "../images/508-icon.png";

// export default function Health_services() {
//   // const dropArea = document.getElementsByClassName('drop-area')
//   // const inputFile = document.getElementsByClassName('input-file')
//   // const imageView = document.getElementsByClassName('img-view')

//   // inputFile.addEventListener("change",uploadImage);

//   // function uploadImage(){

//   //   let imgLink = URL.createObjectURL(inputFile.files[0])
//   //   imageView.style.backgroundImage = `url(${imgLink})`
//   // }
//   const { data, setData } = useState({
//     nameofplace: "",
//     email: "",
//     password: "",
//     regionallocation: "",
//     contactno: "",
//     description: "",
//   });
//   const changeHandeler = (e) => {
//     setData((prev) => {
//       return {
//         ...prev,
//         [e.target.name]: e.target.value,
//       };
//     });
//   };
//   const inputFileRef = useRef(null);
//   const imageViewRef = useRef(null);

//   const uploadImage = (event) => {
//     let imgLink = URL.createObjectURL(event.target.files[0]);
//     imageViewRef.current.style.backgroundImage = `url(${imgLink})`;
//     imageViewRef.textContent = "";
//   };

//   return (
//     <div>
//       <div className="min-h-screen">
//         <div className="text-neutral-content">
//           <div className="max-w-4xl m-4">
//             <form className="max-w-5xl mx-auto">
//               <div className="mb-2 flex items-center">
//                 <label
//                   htmlFor="place-name"
//                   className="w-1/2 text-sm font-medium text-gray-900"
//                 >
//                   Name
//                 </label>
//                 <input
//                   name="nameofplace"
//                   onChange={changeHandeler}
//                   type="text"
//                   id="place-name"
//                   className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
//                   required
//                 />
//               </div>

//               <div className="mb-2 flex items-center">
//                 <label
//                   htmlFor="place-name"
//                   className="w-1/2 text-sm font-medium text-gray-900"
//                 >
//                   Email
//                 </label>
//                 <input
//                   name="email"
//                   onChange={changeHandeler}
//                   type="text"
//                   id="place-name"
//                   className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
//                   required
//                 />
//               </div>

//               <div className="mb-2 flex items-center">
//                 <label
//                   htmlFor="place-name"
//                   className="w-1/2 text-sm font-medium text-gray-900"
//                 >
//                   Password
//                 </label>
//                 <input
//                   name="password"
//                   onChange={changeHandeler}
//                   type="text"
//                   id="place-name"
//                   className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
//                   required
//                 />
//               </div>

//               <div className="mb-2 flex items-center">
//                 <label
//                   htmlFor="location"
//                   className="w-1/3 text-sm font-medium text-gray-900"
//                 >
//                   Location
//                 </label>
//                 <input
//                   type="text"
//                   name="regionallocation"
//                   onChange={changeHandeler}
//                   id="location"
//                   className="w-2/3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
//                   required
//                 />
//               </div>

//               <div className="mb-2 flex items-center">
//                 <label
//                   htmlFor="overview"
//                   className="w-1/3 text-sm font-medium text-gray-900"
//                 >
//                   Contact no
//                 </label>
//                 <input
//                   type="text"
//                   name="contactno"
//                   onChange={changeHandeler}
//                   id="overview"
//                   className="w-2/3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
//                   required
//                 />
//               </div>

//               <div className="mb-2">
//                 <label
//                   htmlFor="description"
//                   className="block mb-1 text-sm font-medium text-gray-900"
//                 >
//                   Description
//                 </label>
//                 <textarea
//                   name="description"
//                   onChange={changeHandeler}
//                   id="description"
//                   rows="4"
//                   className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 p-2.5"
//                   placeholder=""
//                 ></textarea>
//               </div>

//               {/* <div className="mb-2">
//                 <label htmlFor="place-image" className="block mb-1 text-sm font-medium text-gray-900">Place Image</label>

//                 <div className="flex items-center justify-center w-full">
//                   <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
//                     <div className="flex flex-col items-center justify-center pt-5 pb-6">
//                       <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
//                         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
//                       </svg>
//                       <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
//                       <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
//                     </div>

//                     <input id="dropzone-file" type="file" className="hidden" />
//                   </label>
//                 </div>
//               </div> */}

//               {/* <div className="mb-2">
//                 <label htmlFor="rules" className="block mb-1 text-sm font-medium text-gray-900">Rules and Regulations</label>
//                 <textarea id="rules" rows="4" className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 p-2.5" placeholder=""></textarea>
//               </div> */}

//               {/* <div className='mb-2'>
//                 <div className='hero'>
//                   <label htmlFor='input-file' className='drop-area'>
//                     <input type="file" accept="image/*" className='input-file' hidden />

//                     <div className='img-view'>
//                       <img src={ic} />
//                       <p>Drag and drop or click here<br />to upload image</p>
//                       <span>Upload any images from desktop</span>
//                     </div>
//                   </label>
//                </div>
//               </div> */}

//               <div className="mb-2">
//                 <label
//                   htmlFor="place-image"
//                   className="block mb-1 text-sm font-medium text-gray-900"
//                 >
//                   Place Image
//                 </label>
//                 <div className="flex items-center justify-center w-full">
//                   <label
//                     htmlFor="dropzone-file"
//                     className="drop-area flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
//                   >
//                     <div
//                       className="flex flex-col items-center justify-center pt-5 pb-6 img-view"
//                       ref={imageViewRef}
//                     >
//                       <svg
//                         className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
//                         aria-hidden="true"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 20 16"
//                       >
//                         <path
//                           stroke="currentColor"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth="2"
//                           d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
//                         />
//                       </svg>
//                       <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
//                         <span className="font-semibold">Click to upload</span>{" "}
//                         or drag and drop
//                       </p>
//                       <p className="text-xs text-gray-500 dark:text-gray-400">
//                         SVG, PNG, JPG or GIF (MAX. 800x400px)
//                       </p>
//                     </div>
//                     <input
//                       id="dropzone-file"
//                       type="file"
//                       className="input-file hidden"
//                       ref={inputFileRef}
//                       onChange={uploadImage}
//                     />
//                   </label>
//                 </div>
//               </div>

//               <button
//                 type="submit"
//                 className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
//               >
//                 Submit
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import Navbar from "./Navbar";
import Sidebar1 from "./Sidebar1";
import {Link} from "react-router-dom"
import Card1 from "./Card1";
import Card2 from "./Card2";
import Food_card from "./Food_card";
import po from "../images/police.jpeg"

export default function Home() {
  return (
    <div>
      <Navbar />

      <div className="container-fluid mb-5 pt-5 d-flex">
        <div className="row w-100 m-0 p-0">
          <div
            className="col-lg-2 p-0 m-0"
            style={{
              position: "fixed",
              top: "0",
              left: "0",
              height: "100%",
              overflowY: "auto",
            }}
          >
            <Sidebar1 />
          </div>

          <div
            className="col-lg-9 offset-lg-2 mt-5"
            style={{ paddingLeft: "20px" }}
          >
            {/* <input type="text" placeholder="Type here" className="input input-bordered input-primary ml-5 w-full max-w-xl mt-4" /> */}

            {/* <h4 className='ml-5 mt-5'>Requested accomodation request</h4>
                        <div className='ml-5  flex flex-wrap gap-2'>
                            <Card2 />
                            <Card2 />
                            <Card2 />
                            <Card2 />
                        </div> */}

            <div className="overflow-x-auto mt-5">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Contact no</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <th>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask  w-12 h-12">
                            <img
                              src={po}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold"> District Traffic Police Office, Kaski
</div>
                          <div className="text-sm opacity-50">
                            Pokhara
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      Zemlak, Daniel and Leannon
                      <br />
                      <span className="badge badge-ghost badge-sm">
                        Desktop Support Technician
                      </span>
                    </td>
                    <td>98006744</td>
                    <th>
                      <Link  to="/policeform" className="btn btn-ghost btn-xs">details</Link>
                    </th>
                  </tr>
                  {/* row 2 */}
                  <tr>
                    <th>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask  w-12 h-12">
                            <img
                              src={po}
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">Brice Swyre</div>
                          <div className="text-sm opacity-50">China</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      Carroll Group
                      <br />
                      <span className="badge badge-ghost badge-sm">
                        Tax Accountant
                      </span>
                    </td>
                    <td>Red</td>
                    <th>
                      <button className="btn btn-ghost btn-xs">details</button>
                    </th>
                  </tr>
                  {/* row 3 */}
                  <tr>
                    <th>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask  w-12 h-12">
                            <img
                              src={po}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">Marjy Ferencz</div>
                          <div className="text-sm opacity-50">Russia</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      Rowe-Schoen
                      <br />
                      <span className="badge badge-ghost badge-sm">
                        Office Assistant I
                      </span>
                    </td>
                    <td>Crimson</td>
                    <th>
                      <button className="btn btn-ghost btn-xs">details</button>
                    </th>
                  </tr>
                  {/* row 4 */}
                  <tr>
                    <th>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>
                    <td>


                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask w-12 h-12">
                            <img
                              src={po}
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">Yancy Tear</div>
                          <div className="text-sm opacity-50">Brazil</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      Wyman-Ledner
                      <br />
                      <span className="badge badge-ghost badge-sm">
                        Community Outreach Specialist
                      </span>
                    </td>
                    <td>Indigo</td>
                    <th>
                      <button className="btn btn-ghost btn-xs">details</button>
                    </th>
                  </tr>
                </tbody>
                {/* foot */}
               
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

