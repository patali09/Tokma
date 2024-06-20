import React from 'react'
import Card from './Card'

export default function Accomodation() {
  return (
    <>
      <div className='flex m-5 justify-between '>





        {/* 
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>`
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>Item 1</a></li>
                <li><a>Item 3</a></li>
              </ul>
            </div>
           
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li><a>Item 1</a></li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
        </div>
      </div> */}
        <div className="bg-red-100 w-25">
          <a className="btn btn-ghost text-xl">All</a>
          <a className="btn btn-ghost text-xl">Available</a>
          <a className="btn btn-ghost text-xl">Booked</a>
        </div>

        <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />

      </div>




      <div className="min-h-screen">
        <div className=" text-neutral-content">

          <div className="max-w-4xl m-4">
            {/* <h1 className="mb-5 text-5xl font-bold">Hello there</h1> */}
            {/* <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
            {/* <button className="btn btn-primary">Get Started</button> */}


            {/* <div className="card card-side bg-base-100 shadow-xl h-50">

              <figure><img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie" className='p-2 rounded-xl'/></figure>

              <div className="card-body">
                <h2 className="card-title">New movie is released!</h2>
                <p>Click the button to watch on Jetflix app.</p>
              
              </div>
            </div> */}
            <div className='flex flex-col gap-4'>
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>







          </div>
        </div>
      </div>



    </>
  )
}
