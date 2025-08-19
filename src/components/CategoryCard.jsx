import React from "react";

export default function CategoryCard({ title, img, inputs }) {
  return (
    <div className="flex bg-white shadow-md rounded-lg overflow-hidden h-48 w-full max-w-md">
      <div className="flex flex-col justify-center px-4 py-2 flex-grow">
        <h5 className="text-xl font-semibold text-gray-900">{title}</h5>
        <div className="mt-3 flex items-center justify-around max-w-[280px] text-sm text-gray-600 ">
          <span className="bg-gray-100 px-2 py-1 rounded">{inputs[0]}</span>
          <span>|</span>
          <span className="bg-gray-100 px-2 py-1 rounded">{inputs[1]}</span>
          <span> | </span>
          <span className="bg-gray-100 px-2 py-1 rounded">{inputs[2] ? inputs[2] : null}</span>
        </div>
      </div>
      <img className="w-40 object-cover" src={img} alt="Live from space album cover" />
    </div>
  );
}
