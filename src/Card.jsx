import React from "react";



function Card(props) {



  return (
    <div className="max-w-sm mx-auto items-center min-w-fit">
      {/* Heading */}
     
      {/* Card */}
      <div className="bg-teal-200 rounded-2xl shadow-lg text-left px-25 h-64 my-12">
        {/* Top */}
        <div className=" bg-teal-500 rounded-t-2xl py-6 relative ">
          <h1 className="font-bold text-4xl text-gray-800 text-gray mx-5 mt-5 ">
            {props.name}
          </h1>
          <img
            className="rounded-full h-28 ring-8 ring-white absolute top-0 right-0 mx-6 mt-10  object-center "
            src={props.img}
            alt="profile pic"
          ></img>
        </div>

        {/* bottom */}
        <div className="py-8">
          <p className="px-5 py-3 text-gray-800 ">{props.tel}</p>
          <p className="px-5 text-gray-800">{props.email}</p>
        </div>
      </div>
    </div>
    
  );
}

export default Card; 
