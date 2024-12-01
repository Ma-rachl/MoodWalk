"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

export default function ConfirmationPage() {
  const router = useRouter();

  const [stops, setStops] = useState(["Stop 1", "Stop 2", "Stop 3"]);
  const [days, setDays] = useState("1");
  const [hours, setHours] = useState("2");
  const [minutes, setMinutes] = useState("30");

  const handleCancel = () => {
    router.back();
  };

  const handleConfirm = () => {
    console.log("Confirming the walk...");
    router.push("/walk-summary");
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center font-bold p-16 text-3xl">
        <div className="relative w-full flex items-center justify-center">
          {/* Cancel Button */}
          <button
            onClick={handleCancel}
            className="flex items-center space-x-2 text-primary"
            style={{ marginLeft: "-120px" }}
          >
            <Image
              src="/icons/map/back-arrow.png"
              width={10}
              height={10}
              alt="Back Arrow"
            />
            <span className="text-lg text-primary font-semibold">Cancel</span>
          </button>
          <h2 style={{ marginLeft: "80px" }} className="text-lg font-bold">
            Confirm Walk Details
          </h2>
        </div>
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

      <div className="m-5 flex flex-col space-y-8">
        <h1 className="text-xl font-bold">Your Walk Details</h1>
        <div className="space-y-4">
          {/* Stops Information */}
          <div className="flex flex-col space-y-2">
            <h2 className="text-lg font-semibold">Stops:</h2>
            <ul className="list-disc pl-5">
              {stops.map((stop, index) => (
                <li key={index} className="text-lg">
                  {stop}
                </li>
              ))}
            </ul>
          </div>

          {/* Duration Information */}
          <div className="flex flex-col space-y-2">
            <h2 className="text-lg font-semibold">Duration:</h2>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <div className="h-12 text-3xl text-center p-4">{days}</div>
                <span className="text-gray-400">days</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-12 text-3xl text-center p-4">{hours}</div>
                <span className="text-gray-400">hrs</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-12 text-3xl text-center p-4">{minutes}</div>
                <span className="text-gray-400">mins</span>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={handleConfirm}
          className="bg-moodwalk-green text-white py-3 w-80 rounded-xl z-20"
        >
          Confirm Walk
        </button>
      </div>
    </div>
  );
}
