import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <section className="mt-15 bg-[#1E1E1E] p-8 md:p-16 lg:p-28 rounded-2xl flex flex-col justify-center items-center space-y-8">
      <h2 className="text-4xl text-white font-extrabold">Our Services</h2>
      <p className="text-base text-[#DADADA]">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero
        hassle. From personal packages to business shipments — we deliver on
        time, every time.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-4">
        <div className="w-full bg-white hover:bg-[#CAEB66] rounded-2xl p-8 flex flex-col  space-y-8 justify-center  items-center self-center ">
          <div className="h-[88] w-[88] rounded-full bg-radial from-[#EEEDFC] from-40% to-[#EEEDFC] flex  justify-center items-center">
            <Image src="/service.png" width="40" height="41" alt="Service" />
          </div>

          <h3 className="text-2xl text-center max-w-[255] font-bold text-[#03373D]">
            Express & Standard Delivery
          </h3>
          <p className="text-[#606060]  text-center text-base">
            We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet,
            Khulna, and Rajshahi. Express delivery available in Dhaka within
            4–6 hours from pick-up to drop-off.
          </p>
        </div>


        <div className="bg-white hover:bg-[#CAEB66] rounded-2xl p-8 flex flex-col  space-y-8 justify-center min-h-[346] items-center self-center ">
          <div className="h-[88] w-[88] rounded-full bg-radial from-[#EEEDFC] from-40% to-[#EEEDFC] flex  justify-center items-center">
            <Image src="/service.png" width="40" height="41" alt="Service" />
          </div>

          <h3 className="text-2xl text-center max-w-[255] font-bold text-[#03373D]">
            Express & Standard Delivery
          </h3>
          <p className="text-[#606060]  text-center text-base">
            We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet,
            Khulna, and Rajshahi. Express delivery available in Dhaka within
            4–6 hours from pick-up to drop-off.
          </p>
        </div>


        <div className="bg-white hover:bg-[#CAEB66] rounded-2xl p-8 flex flex-col  space-y-8 justify-center min-h-[346] items-center self-center ">
          <div className="h-[88] w-[88] rounded-full bg-radial from-[#EEEDFC] from-40% to-[#EEEDFC] flex  justify-center items-center">
            <Image src="/service.png" width="40" height="41" alt="Service" />
          </div>

          <h3 className="text-2xl text-center max-w-[255] font-bold text-[#03373D]">
            Express & Standard Delivery
          </h3>
          <p className="text-[#606060]  text-center text-base">
            We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet,
            Khulna, and Rajshahi. Express delivery available in Dhaka within
            4–6 hours from pick-up to drop-off.
          </p>
        </div>


        <div className="bg-white hover:bg-[#CAEB66] rounded-2xl p-8 flex flex-col  space-y-8 justify-center min-h-[346] items-center self-center ">
          <div className="h-[88] w-[88] rounded-full bg-radial from-[#EEEDFC] from-40% to-[#EEEDFC] flex  justify-center items-center">
            <Image src="/service.png" width="40" height="41" alt="Service" />
          </div>

          <h3 className="text-2xl text-center max-w-[255] font-bold text-[#03373D]">
            Express & Standard Delivery
          </h3>
          <p className="text-[#606060]  text-center text-base">
            We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet,
            Khulna, and Rajshahi. Express delivery available in Dhaka within
            4–6 hours from pick-up to drop-off.
          </p>
        </div>


        <div className="bg-white hover:bg-[#CAEB66] rounded-2xl p-8 flex flex-col  space-y-8 justify-center min-h-[346] items-center self-center ">
          <div className="h-[88] w-[88] rounded-full bg-radial from-[#EEEDFC] from-40% to-[#EEEDFC] flex  justify-center items-center">
            <Image src="/service.png" width="40" height="41" alt="Service" />
          </div>

          <h3 className="text-2xl text-center max-w-[255] font-bold text-[#03373D]">
            Express & Standard Delivery
          </h3>
          <p className="text-[#606060]  text-center text-base">
            We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet,
            Khulna, and Rajshahi. Express delivery available in Dhaka within
            4–6 hours from pick-up to drop-off.
          </p>
        </div>


        <div className="bg-white hover:bg-[#CAEB66] rounded-2xl p-8 flex flex-col  space-y-8 justify-center min-h-[346] items-center self-center ">
          <div className="h-[88] w-[88] rounded-full bg-radial from-[#EEEDFC] from-40% to-[#EEEDFC] flex  justify-center items-center">
            <Image src="/service.png" width="40" height="41" alt="Service" />
          </div>

          <h3 className="text-2xl text-center max-w-[255] font-bold text-[#03373D]">
            Express & Standard Delivery
          </h3>
          <p className="text-[#606060] text-center text-base">
            We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet,
            Khulna, and Rajshahi. Express delivery available in Dhaka within
            4–6 hours from pick-up to drop-off.
          </p>
        </div>




      </div>
    </section>
  );
};

export default Services;
