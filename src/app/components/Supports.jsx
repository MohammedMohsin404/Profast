import Image from "next/image";
import React from "react";

const Supports = () => {
  const supports = [
    {
      img: "/live-tracking.png",
      title: "Live Parcel Tracking",
      desc: "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
    },
    {
      img: "/safe-delivery.png",
      title: "100% Safe Delivery",
      desc: "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    },
    {
      img: "/safe-delivery.png",
      title: "24/7 Call Center Support",
      desc: "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    },
  ];
  return (
    <section className=" mt-15 py-20    border-r-0 border-l-0 border-dashed border-2 border-[#03373D]">
      {supports.map(support=>(
        <div key={support.title} className="flex flex-col md:flex-row divide-x-0 mt-6 pr-11 bg-white p-8 md:divide-x-3 space-y-8 divide-dashed divide-[#03373D]">
            <Image  src={support.img} 
            alt={support.title}
            height="202"
            width="196"
            className="md:pr-11 self-center-safe"
            />




            <div className="ml-11  content-center space-y-4">
                <h3 className="text-2xl font-bold text-[#03373D]">{support.title}</h3>
                <p className="text-[#606060] text-base">{support.desc}</p>
            </div> 
        </div>
      ))}
    </section>
  );
};

export default Supports;
