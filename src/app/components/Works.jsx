import Image from "next/image";

const  Works = () => {
  return (
    <section className="mt-30  flex flex-col justify-center">
      <h2 className="font-extrabold md:text-left text-center text-3xl text-[#03373D]">How it Works</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 self-center  gap-6 mt-8">
        <div className="space-y-6 bg-white rounded-2xl p-8 w-[304] h-[262]">
          <Image src="/bookingIcon.png" alt="Bookinng" width="57" height="56" />
          <h3 className="text-[#03373D] text-xl font-bold">
            Booking Pick & Drop
          </h3>
          <p className="w-56 text-base text-[#606060]">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>


        <div className="space-y-6 bg-white rounded-2xl p-8 w-[304] h-[262]">
          <Image src="/bookingIcon.png" alt="Bookinng" width="57" height="56" />
          <h3 className="text-[#03373D] text-xl font-bold">
            Cash On Delivery
          </h3>
          <p className="w-56 text-base text-[#606060]">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>


        <div className="space-y-6 bg-white rounded-2xl p-8 w-[304] h-[262]">
          <Image src="/bookingIcon.png" alt="Bookinng" width="57" height="56" />
          <h3 className="text-[#03373D] text-xl font-bold">
            Delivery Hub
          </h3>
          <p className="w-56 text-base text-[#606060]">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>


        <div className="space-y-6 bg-white rounded-2xl p-8 w-[304] h-[262]">
          <Image src="/bookingIcon.png" alt="Bookinng" width="57" height="56" />
          <h3 className="text-[#03373D] text-xl font-bold">
            Booking SME & Corporate
          </h3>
          <p className="w-56 text-base text-[#606060]">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>





      </div>
    </section>
  );
};

export default  Works;
