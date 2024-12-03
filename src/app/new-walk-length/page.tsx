"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

export default function NewWalkPage() {
  const router = useRouter();

  const [days, setDays] = useState("");
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");

  const handleCancel = () => {
    router.back();
  };

  const handleNewWalkSummary = () => {
    console.log("Creating a new walk...");
    router.push("/new-walk-summary");
  };

  const handleInputChange = (setter) => (event) => {
    setter(event.target.value);
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center font-bold p-16 text-3xl">
        <div className="relative w-full flex items-center justify-center">
          <button
            onClick={handleCancel}
            className="flex items-center space-x-2 text-primary"
            style={{ marginLeft: "-140px" }}
          >
            <Image
              src="/icons/map/back-arrow.png"
              width={10}
              height={10}
              alt="Back Arrow"
            />
            <span className="text-lg text-primary font-semibold">Back</span>
          </button>
          <h2 style={{ marginLeft: "70px" }} className=" font-bold">
            New Walk
          </h2>
        </div>
        <p className="text-sm text-moodwalk-green">Set Duration</p>
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

      <div className="m-5 flex flex-col space-y-48">
        <div>
          <h1 className="text-xl font-bold">
            How long would you like to walk?
          </h1>
          <p className="mb-8 text-gray-400">Set a time (optional)</p>
          <div className="flex flex-col space-y-4">
            <div className="flex justify-between space-x-4">
              <div className="relative flex items-center space-x-2 w-1/3">
                <input
                  type="number"
                  value={days}
                  onChange={handleInputChange(setDays)}
                  className={`h-12 text-2xl text-primary rounded-xl p-4 border-2 ${
                    days
                      ? "border-moodwalk-green text-primary"
                      : "border-gray-400"
                  } focus:outline-none w-full text-center`}
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
                  onChange={handleInputChange(setHours)}
                  className={`h-12 text-2xl text-primary rounded-xl p-4 border-2 ${
                    hours
                      ? "border-moodwalk-green text-primary"
                      : "border-gray-400"
                  } focus:outline-none w-full text-center`}
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
                  value={minutes}
                  onChange={handleInputChange(setMinutes)}
                  className={`h-12 text-2xl text-primary rounded-xl p-4 border-2 ${
                    minutes
                      ? "border-moodwalk-green text-primary"
                      : "border-gray-400"
                  } focus:outline-none w-full text-center`}
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
        onClick={handleNewWalkSummary}
        className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-moodwalk-green text-white py-3 w-80 rounded-xl z-20"
      >
        Continue
      </button>
    </div>
  );
}
