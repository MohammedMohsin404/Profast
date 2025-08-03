import React from "react";
import LeafletMap from "../components/LeafletMap";

const page = () => {
  return (
    <section className="mt-15 bg-white rounded-2xl lg:p-24 p-12">
      <div className="space-y-6">
        <h2 className="font-extrabold text-[#03373D] text-2xl md:text-4xl lg:text-5xl text-center md:text-left">
          We are available in 64 districts
        </h2>

        <div className="flex lg:justify-start justify-center mt-12">
          <label className="flex w-9/12 lg:w-4/12 items-center px-4 rounded-full border-0  bg-[#cbd5e170] text-base">
            <svg
              className="h-[1.5em]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              required
              placeholder="Search here"
              className="px-4 border-0 w-full rounded-full p-2"
            />
          </label>
          <button className="btn md:btn-xl rounded-full bg-[#CAEB66] ml-[-30] z-10">
            Search
          </button>
        </div>
        <div className="space-y-14 mt-14">
          <h2 className="font-extrabold text-[#03373D] text-2xl md:text-3xl md:text-left text-center">
            We deliver almost all over Bangladesh
          </h2>

          <LeafletMap className="mt-12" />
        </div>
      </div>
    </section>
  );
};

export default page;
