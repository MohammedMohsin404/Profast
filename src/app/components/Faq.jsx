"use client";
import Image from "next/image";
import { useState } from "react";

const Faq = (props) => {
  const { faqs } = props;

  const [showAll, setShowAll] = useState(false);
  return (
    <section className="mt-15 space-y-8 ">
      <h2 className="font-extrabold text-center text-[#03373D] text-4xl">
        Frequently Asked Question (FAQ)
      </h2>
      <p className="text-[#606060] text-base w-3/6 text-center">
        Enhance posture, mobility, and well-being effortlessly with Posture Pro.
        Achieve proper alignment, reduce pain, and strengthen your body with
        ease!
      </p>

      {(showAll ? faqs : faqs.slice(0, 5)).map((faq) => (
        <div
          key={faq.id}
          className=" collapse collapse-arrow bg-[#E6F2F3] border border-[#067A87] rounded-2xl"
        >
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title font-semibold">
            {faq.title}
            <div className=" "></div>
          </div>

          <div className="collapse-content text-sm pt-4 border-[#C3DFE2] border">
            {faq.description}
          </div>
        </div>
      ))}

      <div className="flex justify-center">
        <button
          onClick={() => setShowAll(!showAll)}
          className="btn bg-[#CAEB66] text-xl font-bold btn-xl rounded-2xl"
        >
          {showAll ? "See Less FAQ's " : "See More FAQ's"}
        </button>
        <Image src="/upperRight.png" alt="Upper Right" width="56" height="56" />
      </div>
    </section>
  );
};

export default Faq;
