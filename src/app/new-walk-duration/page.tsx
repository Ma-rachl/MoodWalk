"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function NewWalkPage() {
  const router = useRouter();

  const handleCancel = () => {
    router.back();
  };

  const handleNewWalkLength = () => {
    console.log("Creating a new walk...");
    router.push("/new-walk-length");
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
            New Walk
          </h2>
        </div>
      </div>

      <div className="flex justify-center  p-4 ">
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
          <h1 className="text-xl font-bold">Where would you like to go?</h1>
          <p className="mb-8 text-gray-400">Add all desired stops</p>
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-4">
              <input
                className="h-12 rounded-xl p-4 border-2 border-gray-400 focus:outline-none focus:border-moodwalk-green focus:text-moodwalk-green"
                placeholder="Northeastern University"
              ></input>
              <input
                className="h-12 rounded-xl p-4 border-2 border-gray-400 focus:outline-none focus:border-moodwalk-green focus:text-moodwalk-green"
                placeholder="New England Aquarium"
              ></input>
              <div className="relative w-full flex items-start">
                <button
                  className="flex items-center space-x-2"
                >
                  <Image
                    src="/icons/map/add-icon.svg"
                    width={20}
                    height={20}
                    alt="Add Icon"
                  />
                  <span className="text-lg text-moodwalk-green font-semibold">
                    Add stop
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={handleNewWalkLength}
        className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-moodwalk-green text-white py-3 w-80 rounded-xl z-20"
      >
        Continue
      </button>
    </div>
  );
}
