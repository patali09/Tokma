import React from 'react'

import fo from "../images/file.jpg"

export default function Food_card() {
    return (


        // <div className="bg-gray-100 text-neutral-content">
        <div className=" w-auto bg-gray-100 text-neutral-content rounded-lg">


            <div className="card-body">

                <div className='flex '>
                    <figure className="">
                        <img src={fo} alt="Shoes" className="rounded-xl w-32 h-auto" />
                    </figure>


                    <div className='ml-5 mt-2'>
                        <strong> <p className='m-0'>Roadhouse Cafe Pokhara</p></strong>

                        <p>Restaurant in Pokhara</p>
                        


                        <p>Located by the Lakeside of Pokhara,one of the many branches of Roadhouse Cafés in Kathmandu.</p>
                    </div>
                </div>


                <div className="card-actions">


                    <button className="btn btn-primary hover:bg-blue-500">Accept</button>
                    <button className="btn btn-ghost hover:bg-blue-500 hover:text-white">Deny</button>
                </div>
            </div>

        </div>






    )
}