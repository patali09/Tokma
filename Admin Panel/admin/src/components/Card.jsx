import React from 'react'
import h1 from "../images/hotel1.webp"
import h2 from "../images/hotel2.webp"

export default function Card() {
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl w-96 h-40">
                <figure><img src={h2} alt="Movie" className='p-2 w-72 rounded-xl ' /></figure>

                <div className="card-body w-auto p-4">
                    <h2 className="card-title">Hotel Yellow Pagoda</h2>
                    <p>Set in Pokhara, 300 metres from Fewa Lake, Hotel Portland offers air-conditioned rooms and a bar.</p>
                </div>
            </div>
        </div>
    )
}



// import React from 'react';

// export default function Card({ source, name, des }) {
//     return (
//         <div className="card card-side bg-base-100 shadow-xl w-full md:w-1/2 lg:w-1/3 h-40 m-2">
//             <figure><img src={source} alt={name} className='p-1 rounded-xl h-full w-1/3 object-cover' /></figure>
//             <div className="card-body">
//                 <h2 className="card-title">{name}</h2>
//                 <p>{des}</p>
//             </div>
//         </div>
//     );
// }
