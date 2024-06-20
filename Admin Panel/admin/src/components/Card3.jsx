import React from 'react'
import h1 from '../images/hotel1.webp'

import { Link } from 'react-router-dom'
export default function Card3(props) {
    return (
        <div>

            <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-5xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">

                <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-36 md:rounded-none md:rounded-s-lg" src={props.source} alt=""/>


                    <div className="flex flex-col justify-between p-4 leading-normal">

                        <h5 className="-mt-4 text-xl font-bold tracking-tight text-gray-900 ">{props.name}</h5>

                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.des}</p>

                        {/* <button className="btn btn-primary text-xs ">Know More</button> */}

                        <div className="card-actions">
                       <Link to="/mapRoute" > <button className="btn btn-primary text-xs ">Know More</button></Link>
                    </div>


                    </div>

            </div>

        </div>
    )
}