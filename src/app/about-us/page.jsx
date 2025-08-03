import React from "react";

const page = () => {

  return (
    <section className="mt-15 bg-white rounded-2xl lg:p-24 p-12">
      <div className="space-y-6">
        <h2 className="font-extrabold text-[#03373D] md:text-4xl text-3xl text-center lg:text-left lg:text-5xl">About Us</h2>
        <p className="lg:w-3/6 text-[#606060] text-base text-center lg:text-left">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
      </div>
      <div className="mt-12 pt-12 border-t-2 border-[#00000026]">
        {/* name of each tab group should be unique */}
        <div className="tabs tabs-lift">
          <input
            type="radio"
            name="my_tabs_3"
            className="tab text-3xl text-[#5B6A2E] font-bold"
            aria-label="Story"
            
          />
          <p className="tab-content bg-base-100 p-6 mt-12 text-[#606060] text-xl/10 text-justify">
           Every great service starts with a simple idea. Ours was to make parcel delivery faster, easier, and more trustworthy for everyone across Bangladesh. What began as a small team with a strong commitment has now grown into a trusted name — known for reliability, real-time updates, and a customer-first mindset.
<br />
Our journey started with one goal in mind: make sure people could send and receive parcels without stress or confusion. We saw how delivery delays and lack of communication affected people’s daily lives and business operations. That’s when we decided to create a solution that puts the customer at the center — using smart logistics and transparent tracking to build trust, every step of the way. <br />

From our earliest days, we focused on the things that matter: quick pick-ups, safe handling, clear communication, and on-time drop-offs. We built systems that allowed customers to track their parcels in real-time, reach out for instant support, and feel confident from the moment their package left their hands.
<br />
As we grew, so did our ambition. We expanded into more districts, partnered with more vendors, and strengthened our logistics backbone to handle larger volumes without sacrificing speed or quality. Whether we’re delivering a birthday gift, an online order, or an urgent document, we know every parcel carries value — both emotionally and practically.
<br />
Today, our story is still being written — in every delivery we complete, in every message of thanks from a satisfied customer, and in every improvement we make to serve you better. What sets us apart is not just our network or systems, but the promise we made on day one: to treat every parcel as if it were our own.
<br />
And that’s a promise we continue to keep — on time, every time.
          </p>
          <input
            type="radio"
            name="my_tabs_3"
            className="tab text-3xl text-[#5B6A2E] font-bold"
            aria-label="Mission"
            
          />
          <p className="tab-content bg-base-100 p-6 mt-12 text-[#606060] text-xl/10 text-justify">
            Our mission is to redefine parcel delivery in Bangladesh by offering services that are fast, transparent, and built around the customer. From the moment a parcel is booked to the time it is delivered, we aim to create a seamless experience for both individuals and businesses.
<br />
We understand that a delivery is more than just moving something from one place to another. It often carries emotions, commitments, and business reputations. That’s why we’ve built our systems to be efficient, our staff to be responsive, and our processes to be dependable. Whether it’s an urgent legal document, a thoughtful gift, or a product shipment — we treat each parcel with the importance it deserves.
<br />
Real-time tracking, responsive customer support, and efficient routing are at the core of our operations. But beyond logistics, our deeper mission is to bring peace of mind to every sender and every receiver. We want people to know that once their parcel is with us, it’s in safe hands.
<br />
As we grow, we remain committed to innovation and sustainability. We continuously upgrade our technology, expand our coverage, and train our team to serve with excellence. Our ultimate goal is to become Bangladesh’s most trusted parcel delivery partner — known not just for speed, but for integrity, care, and consistency.
          </p>
          <input
            type="radio"
            name="my_tabs_3"
            className="tab text-3xl text-[#5B6A2E] font-bold"
            aria-label="Success"
            
          />
           <p className="tab-content bg-base-100 p-6 mt-12 text-[#606060] text-xl/10 text-justify">
           Our success story is written one parcel at a time, through consistent service, happy customers, and trust earned over time. What started as a small operation with a big promise has grown into one of the most reliable names in Bangladesh’s parcel delivery space.
<br />
We measure success not only by numbers but by the relationships we build. Thousands of customers — from students to small businesses to large organizations — rely on us daily. Each successful delivery strengthens that trust. We’ve delivered to every division, crossed challenging routes, and handled both routine and time-critical parcels.
<br />
Our real-time tracking and transparent pricing have won us appreciation, but it’s our people and process that keep customers coming back. We’ve kept failure rates low and satisfaction rates high by putting the customer first in every situation. Whether it’s handling delays, solving queries, or managing expectations, we strive to leave a positive impression.
<br />
Over the years, we’ve received testimonials, referrals, and repeat business that speak louder than any advertisement. Our success is not accidental — it is the result of smart planning, continuous improvement, and never losing sight of our promise: safe, fast, and reliable delivery.
<br />
As we scale up our network and technology, we stay grounded in our values. Our goal is not just to expand, but to evolve — to serve more people, better, and faster than ever before.
          </p>
          <input
            type="radio"
            name="my_tabs_3"
            className="tab text-3xl text-[#5B6A2E] font-bold"
            aria-label="Team & Others"
            
          />
         <p className="tab-content bg-base-100 p-6 mt-12 text-[#606060] text-xl/10 text-justify">
           Behind every smooth delivery is a dedicated team that works round the clock to ensure excellence. Our team is the heartbeat of our operations — from the support staff answering queries, to the logistics managers routing parcels, to the delivery agents braving traffic and weather.
<br />
Each member of our team is selected, trained, and empowered to deliver not just parcels, but satisfaction. We believe in building a culture of responsibility and ownership. When a customer places an order, it's not just a transaction — it's a commitment that our team honors with professionalism.
<br />
But we don’t work alone. Our success also depends on trusted partners, reliable vendors, and a robust support network. Together, they form the ecosystem that allows us to operate efficiently, even in remote areas. We maintain strong collaborations with transport providers, technology partners, and local agents to ensure nothing falls through the cracks.
<br />
We also invest in our people — offering training, feedback, and growth opportunities. Many of our senior staff started in entry-level positions and grew with us, proving that dedication and talent are always recognized.
<br />
Our team culture values communication, care, and a can-do attitude. Whether it’s a peak season rush or an unexpected roadblock, our team rallies together to keep promises and solve problems. We are not just employees; we are enablers of connections, reliability, and trust.
<br />
In the end, it’s our people — and those who support them — who make everything possible.
          </p>

        </div>
      </div>
    </section>
  );
};

export default page;
