"use client";

import { useState } from "react";

const Page = () => {
  const [formData, setFormData] = useState({
    parcelType: "",
    destination: "",
    weight: "",
  });

  const [price, setPrice] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const calculatePrice = () => {
    const { parcelType, destination, weight } = formData;
    const weightNum = parseFloat(weight);

    if (!parcelType || !destination || isNaN(weightNum)) {
      setFeedback("Please fill all fields correctly.");
      return;
    }

    let cost = 0;

    if (parcelType === "Document") {
      cost = destination === "Within City" ? 60 : 80;
    } else if (parcelType === "Non-Document") {
      if (weightNum <= 3) {
        cost = destination === "Within City" ? 110 : 150;
      } else {
        const extraWeight = weightNum - 3;
        const base = destination === "Within City" ? 110 : 150;
        const extraCharge = extraWeight * 40;
        const destinationExtra = destination === "Outside City/District" ? 40 : 0;
        cost = base + extraCharge + destinationExtra;
      }
    }

    setPrice(cost);
    setFeedback("Calculation complete ✅");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setFeedback("");
    setTimeout(() => {
      calculatePrice();
      setLoading(false);
    }, 500); // simulate delay
  };

  const handleReset = () => {
    setFormData({
      parcelType: "",
      destination: "",
      weight: "",
    });
    setPrice(null);
    setFeedback("");
  };

  return (
    <section className="mt-15 bg-white rounded-2xl p-24">
      <div className="space-y-6">
        <h2 className="font-extrabold text-[#03373D] text-5xl">
          Pricing Calculator
        </h2>
        <p className="w-3/6 text-[#606060] text-base">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
      </div>
      <div className="mt-12 pt-12 border-t-2 border-[#00000026]">
        <h3 className="text-[#03373D] font-bold text-3xl text-center">
          Calculate Your Cost
        </h3>
        <div className="flex">
          <div className="flex w-6/12 justify-center items-center ">
            <form onSubmit={handleSubmit} className="w-3/6 space-y-4">
              <fieldset className="fieldset w-full">
                <legend className="fieldset-legend text-sm text-[#0F172A]">
                  Parcel Type
                </legend>
                <input
                  name="parcelType"
                  value={formData.parcelType}
                  onChange={handleChange}
                  type="text"
                  className="input w-full"
                  placeholder="Select Your Parcel"
                  list="parcelType"
                  required
                />
                <datalist id="parcelType">
                  <option value="Document" />
                  <option value="Non-Document" />
                </datalist>
              </fieldset>

              <fieldset className="fieldset w-full">
                <legend className="fieldset-legend text-sm text-[#0F172A]">
                  Delivery Destination
                </legend>
                <input
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  type="text"
                  className="input w-full"
                  placeholder="Select Delivery Destination"
                  list="destination"
                  required
                />
                <datalist id="destination">
                  <option value="Within City" />
                  <option value="Outside City/District" />
                </datalist>
              </fieldset>

              <fieldset className="fieldset w-full">
                <legend className="fieldset-legend text-sm text-[#0F172A]">
                  Weight (KG)
                </legend>
                <input
                  name="weight"
                  value={formData.weight}
                  onChange={handleChange}
                  type="number"
                  min="0"
                  step="0.01"
                  className="input w-full"
                  placeholder="Your Parcel Weight"
                  required
                />
              </fieldset>

              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={handleReset}
                  className="btn bg-[#FAFDF0] w-3/12 border-[#8FA748] rounded-xl"
                >
                  Reset
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="btn w-4/6 bg-[#CAEB66] rounded-xl border-0"
                >
                  {loading ? "Calculating..." : "Calculate"}
                </button>
              </div>
              {feedback && <p className="text-green-600 mt-2">{feedback}</p>}
            </form>
          </div>
          <div className="flex w-6/12 justify-center items-center">
            <h1 className="text-[#000000] font-extrabold text-8xl">
              {price !== null ? `${price} TK` : "-- TK"}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
