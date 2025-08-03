"use client";

import Image from "next/image";
import React, { useState } from "react";

const Page = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    region: "",
    nid: "",
    contact: "",
    warehouse: "",
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
      // Simulate API or save logic
      console.log("Form Submitted:", formData);

      // TODO: Send formData to API/backend
      setFeedback("Form submitted successfully ✅");
      setFormData({
        name: "",
        age: "",
        email: "",
        region: "",
        nid: "",
        contact: "",
        warehouse: "",
      });
    } catch (err) {
      setFeedback("Something went wrong ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mt-15 bg-white rounded-3xl p-24">
      <div className=" flex flex-col justify-center  space-y-8">
        <h3 className="font-bold text-4xl text-[#03373D] ">Be a Rider</h3>
        <p className="text-base text-[#606060] md:w-3/6 ">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
      </div>

      <div className="flex flex-col-reverse lg:flex-row justify-center lg:justify-around">
        <div className=" mt-8">
          <h3 className="text-2xl font-extrabold text-[#03373D] text-center lg:text-left">
            Tell us about yourself
          </h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col lg:flex-row space-x-6">
              <fieldset className="fieldset w-full">
                <legend className="fieldset-legend text-sm text-[#0F172A]">
                  Your Name
                </legend>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  className="input border-[#94A3B8]"
                  placeholder="Your Name"
                  required
                />
              </fieldset>

              <fieldset className="fieldset w-full">
                <legend className="fieldset-legend text-sm text-[#0F172A]">
                  Your Age
                </legend>
                <input
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  type="number"
                  className="input border-[#94A3B8]"
                  placeholder="Your Age"
                  required
                />
              </fieldset>
            </div>

            <div className="flex flex-col lg:flex-row  space-x-6">
              <fieldset className="fieldset w-full">
                <legend className="fieldset-legend text-sm text-[#0F172A]">
                  Your Email
                </legend>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  className="input border-[#94A3B8]"
                  placeholder="Your Email"
                  required
                />
              </fieldset>

              <fieldset className="fieldset w-full">
                <legend className="fieldset-legend text-sm text-[#0F172A]">
                  Your Region
                </legend>
                <input
                  name="region"
                  value={formData.region}
                  onChange={handleChange}
                  type="text"
                  className="input"
                  placeholder="Select Your Region"
                  list="region"
                  required
                />
                <datalist id="region">
                  <option value="Dhaka" />
                  <option value="Chattogram" />
                  <option value="Rajshahi" />
                  <option value="Khulna" />
                  <option value="Barishal" />
                  <option value="Sylhet" />
                  <option value="Rangpur" />
                  <option value="Mymensingh" />
                </datalist>
              </fieldset>
            </div>

            <div className="flex flex-col lg:flex-row  space-x-6">
              <fieldset className="fieldset w-full">
                <legend className="fieldset-legend text-sm text-[#0F172A]">
                  NID No
                </legend>
                <input
                  name="nid"
                  value={formData.nid}
                  onChange={handleChange}
                  type="number"
                  className="input border-[#94A3B8]"
                  placeholder="NID No"
                  required
                />
              </fieldset>

              <fieldset className="fieldset w-full">
                <legend className="fieldset-legend text-sm text-[#0F172A]">
                  Contact
                </legend>
                <input
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  type="number"
                  className="input border-[#94A3B8]"
                  placeholder="Contact"
                  required
                />
              </fieldset>
            </div>

            <fieldset className="fieldset">
              <legend className="fieldset-legend text-sm text-[#0F172A]">
                Which wire-house you want to work?
              </legend>
              <input
                name="warehouse"
                value={formData.warehouse}
                onChange={handleChange}
                type="text"
                className="input w-full border-[#94A3B8]"
                placeholder="Select Your Wire House"
                list="wire-house"
                required
              />
              <datalist id="wire-house">
                <option value="Bagerhat">Bagerhat</option>
                <option value="Bandarban">Bandarban</option>
                <option value="Barguna">Barguna</option>
                <option value="Barishal">Barishal</option>
                <option value="Bhola">Bhola</option>
                <option value="Bogura">Bogura</option>
                <option value="Brahmanbaria">Brahmanbaria</option>
                <option value="Chandpur">Chandpur</option>
                <option value="Chattogram">Chattogram</option>
                <option value="Chuadanga">Chuadanga</option>
                <option value="Cox's Bazar">Cox's Bazar</option>
                <option value="Cumilla">Cumilla</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Dinajpur">Dinajpur</option>
                <option value="Faridpur">Faridpur</option>
                <option value="Feni">Feni</option>
                <option value="Gaibandha">Gaibandha</option>
                <option value="Gazipur">Gazipur</option>
                <option value="Gopalganj">Gopalganj</option>
                <option value="Habiganj">Habiganj</option>
                <option value="Jamalpur">Jamalpur</option>
                <option value="Jashore">Jashore</option>
                <option value="Jhalokathi">Jhalokathi</option>
                <option value="Jhenaidah">Jhenaidah</option>
                <option value="Joypurhat">Joypurhat</option>
                <option value="Khagrachari">Khagrachari</option>
                <option value="Khulna">Khulna</option>
                <option value="Kishoreganj">Kishoreganj</option>
                <option value="Kurigram">Kurigram</option>
                <option value="Kushtia">Kushtia</option>
                <option value="Lakshmipur">Lakshmipur</option>
                <option value="Lalmonirhat">Lalmonirhat</option>
                <option value="Madaripur">Madaripur</option>
                <option value="Magura">Magura</option>
                <option value="Manikganj">Manikganj</option>
                <option value="Meherpur">Meherpur</option>
                <option value="Moulvibazar">Moulvibazar</option>
                <option value="Munshiganj">Munshiganj</option>
                <option value="Mymensingh">Mymensingh</option>
                <option value="Naogaon">Naogaon</option>
                <option value="Narail">Narail</option>
                <option value="Narayanganj">Narayanganj</option>
                <option value="Narsingdi">Narsingdi</option>
                <option value="Natore">Natore</option>
                <option value="Netrokona">Netrokona</option>
                <option value="Nilphamari">Nilphamari</option>
                <option value="Noakhali">Noakhali</option>
                <option value="Pabna">Pabna</option>
                <option value="Panchagarh">Panchagarh</option>
                <option value="Patuakhali">Patuakhali</option>
                <option value="Pirojpur">Pirojpur</option>
                <option value="Rajbari">Rajbari</option>
                <option value="Rajshahi">Rajshahi</option>
                <option value="Rangamati">Rangamati</option>
                <option value="Rangpur">Rangpur</option>
                <option value="Satkhira">Satkhira</option>
                <option value="Shariatpur">Shariatpur</option>
                <option value="Sherpur">Sherpur</option>
                <option value="Sirajganj">Sirajganj</option>
                <option value="Sunamganj">Sunamganj</option>
                <option value="Sylhet">Sylhet</option>
                <option value="Tangail">Tangail</option>
                <option value="Thakurgaon">Thakurgaon</option>
              </datalist>
            </fieldset>

            <button
              type="submit"
              className="btn rounded-xl bg-[#CAEB66] w-full"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
            {feedback && <p className="text-green-600 mt-2">{feedback}</p>}
          </form>
        </div>

        <div className="flex  justify-center">
          <Image
            src="/agent-pending.png"
            alt="Agent Pending"
            width="462"
            height="439"
          />
        </div>
      </div>
    </section>
  );
};

export default Page;
