import Image from "next/image";
import React from "react";

const Brands = () => {
  const brands = [
    { name: "/brands/casio.png" },
    { name: "/brands/amazon.png" },
    { name: "/brands/moonstar.png" },
    { name: "/brands/start.png" },
    { name: "/brands/start-people 1.png" },
    { name: "/brands/randstad.png" },
    
];

  return (
    <section className="mt-15">
      <h2 className="text-4xl text-center font-extrabold">
        We've helped thousands of sales teams
      </h2>
      <div className=" mt-11 gap-4  justify-items-center grid grid-cols-3 md:grid-cols-6 ">
        {brands.map(brand=>(
            <Image
            key={brand.name}
            src={brand.name}
            width="123"
            height="24"
            alt="Brnad"
            className=""
            
            />
        ))}
      </div>

      
    </section>
  );
};

export default Brands;
