"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

export default function ConfirmationPage() {
  const router = useRouter();
  const [days, setDays] = useState("0");
  const [hours, setHours] = useState("0");
  const [minutes, setMinutes] = useState("45");

  const handleCancel = () => {
    router.back();
  };

  // const handleConfirm = () => {
  //   console.log("Confirming the walk...");
  //   router.push("/walk-summary");
  // };

  return (
    <div>
      <div className="flex flex-col items-center justify-center font-bold p-16 text-3xl">
        <div className="relative w-full flex items-center justify-center">
          {/* Cancel Button */}
          <button
            onClick={handleCancel}
            className="flex items-center space-x-2 text-primary"
            style={{ marginLeft: "-100px" }}
          >
            <Image
              src="/icons/map/back-arrow.png"
              width={10}
              height={10}
              alt="Back Arrow"
            />
            <span className="text-lg text-primary font-semibold">Back</span>
          </button>

          <h2 style={{ marginLeft: "30px" }} className="text-xl font-bold">
            Confirm Walk Details
          </h2>
        </div>
        <p className="text-sm text-moodwalk-green">Confirm Itinerary</p>
      </div>

      <div className="flex justify-center p-4 ">
        <Image
          src="/icons/map/small-map.png"
          width={390}
          height={200}
          alt="Small Map"
          className="rounded-lg"
        />
      </div>

      <div className="m-5 flex flex-col space-y-4">
        <h1 className="text-xl font-bold">Stops</h1>

        {/* Stops Information */}
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col space-y-4">
            <input
              className="h-12 rounded-xl p-4 border-2 border-gray-400 focus:outline-none focus:border-moodwalk-green focus:text-moodwalk-green"
              placeholder="Northeastern University"
            ></input>
            <Image
              src="/icons/newwalk/stops.svg"
              width={4}
              height={44}
              alt="stops"
              className="w-12"
            />
            <input
              className="h-12 rounded-xl p-4 border-2 border-gray-400 focus:outline-none focus:border-moodwalk-green focus:text-moodwalk-green"
              placeholder="New England Aquarium"
            ></input>
          </div>
          <div
            style={{ marginTop: "50px" }}
            className="flex flex-col space-y-4"
          >
            <h1 className="text-xl font-bold">Walk Duration</h1>
            <div className="flex justify-between space-x-4">
              <div className="relative flex items-center space-x-2 w-1/3">
                <input
                  type="number"
                  value={days}
                  onChange={(e) => setDays(e.target.value)}
                  className={`h-12 text-2xl text-primary rounded-xl p-4 border-2 ${"border-gray-400"} focus:outline-none w-full text-center`}
                  placeholder="0"
                />
                <span
                  className={`absolute right-2 top-3 text-gray-400 ${
                    days ? "text-moodwalk-green" : ""
                  }`}
                >
                  days
                </span>
              </div>
              <div className="relative flex items-center space-x-2 w-1/3">
                <input
                  type="number"
                  value={hours}
                  onChange={(e) => setHours(e.target.value)}
                  className={`h-12 text-2xl text-primary rounded-xl p-4 border-2 ${"border-gray-400"} focus:outline-none w-full text-center`}
                  placeholder="0"
                />
                <span
                  className={`absolute right-2 top-3 text-gray-400 ${
                    hours ? "text-moodwalk-green" : ""
                  }`}
                >
                  hrs
                </span>
              </div>

              <div className="relative flex items-center space-x-2 w-1/3">
                <input
                  type="number"
                  onChange={(e) => setMinutes(e.target.value)}
                  value={minutes}
                  className={`h-12 text-2xl text-primary rounded-xl p-4 border-2 ${"border-gray-400"} focus:outline-none w-full text-center`}
                  placeholder="0"
                />
                <span
                  className={`absolute right-2 top-3 text-gray-400 ${
                    minutes ? "text-moodwalk-green" : ""
                  }`}
                >
                  mins
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={() => router.push("/walking")}
        className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-moodwalk-green text-white py-3 w-80 rounded-xl z-20"
      >
        Start Walk
      </button>
    </div>
  );
}
