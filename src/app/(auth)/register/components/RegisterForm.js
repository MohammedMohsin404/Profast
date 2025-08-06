"use client";
import { registerUser } from "@/app/actions/auth/registerUser";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFeedback("");

    try {
      registerUser( formData);
      //  registerUser("Form Submitted:");

      // TODO: Send formData to API/backend
      setFeedback("Form submitted successfully ✅");
      setFormData({ name: "", email: "", password: "" });
    } catch (err) {
      setFeedback("Something went wrong ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-2xl w-full mx-auto px-4 py-10 space-y-8">
      <h4 className="text-2xl md:text-3xl font-semibold text-center lg:text-left">
        Register with Profast
      </h4>

      <form
        className="flex flex-col space-y-6 items-center w-full"
        onSubmit={handleSubmit}
      >
        <Image
          src="/image-upload-icon.png"
          alt="Avatar"
          width={60}
          height={60}
          className="rounded-full"
        />

        <fieldset className="w-full">
          <legend className="text-sm text-[#0F172A]">Name</legend>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
            className="w-full p-3 rounded-lg border border-[#94A3B8] outline-none"
            placeholder="Your name"
            required
          />
        </fieldset>

        <fieldset className="w-full">
          <legend className="text-sm text-[#0F172A]">Email</legend>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            className="w-full p-3 rounded-lg border border-[#94A3B8] outline-none"
            placeholder="Your email"
            required
          />
        </fieldset>

        <fieldset className="w-full">
          <legend className="text-sm text-[#0F172A]">Password</legend>
          <input
            name="password"
            value={formData.password}
            onChange={handleChange}
            type="password"
            className="w-full p-3 rounded-lg border border-[#94A3B8] outline-none"
            placeholder="Password"
            required
          />
        </fieldset>

        <button
          type="submit"
          className="btn bg-[#CAEB66] text-black font-medium py-2 px-6 w-full  rounded-xl"
          disabled={loading}
        >
          {loading ? "Registering..." : "Register"}
        </button>

        {feedback && (
          <p
            className={`text-sm ${
              feedback.includes("successfully")
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {feedback}
          </p>
        )}
      </form>
      <p>
        Already have an account?{" "}
        <Link href="/login" className="text-[#CAEB66]">
          Login
        </Link>
      </p>
      {/* Google Register Button */}
      <p className="text-center text-[#71717A] font-bold">Or</p>
      <button
        type="button"
        // onClick={handleGoogleRegister}
        className="btn flex w-full"
      >
        <Image src="/google-logo.png" alt="Google" width={24} height={24} />
        <span className="text-sm font-medium text-gray-700">
          Register with Google
        </span>
      </button>
    </section>
  );
};

export default RegisterForm;
