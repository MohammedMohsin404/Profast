import Image from "next/image";
import React from "react";
import LoginForm from "./components/LoginForm";

const page = () => {
  return (
    <section className="bg-white rounded-3xl">
      {/* For md screens: background image wrapper */}
      <div className="relative bg-[url('/authImage.png')] bg-cover bg-center rounded-3xl lg:bg-none">
        {/* Overlay for bg dim (optional) */}
        <div className="bg-white/50 backdrop-blur-sm rounded-3xl">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 p-6 lg:p-16">

            {/* Left/Form */}
            <div className="w-full lg:w-1/2 space-y-6 z-10">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-center lg:text-left">
                Welcome Back
              </h3>

              <LoginForm />
            </div>

            {/* Right side image - visible only on large screens */}
            <div className="hidden lg:flex justify-center items-center w-1/2 bg-[#FAFDF0] rounded-xl p-8">
              <Image
                src="/authImage.png"
                alt="Auth Image"
                width={425}
                height={355}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
