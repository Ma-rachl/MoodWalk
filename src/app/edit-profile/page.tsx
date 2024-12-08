"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

const ToggleSwitch = () => {
  return (
    <label className="inline-flex items-center cursor-pointer">
      <input type="checkbox" value="" className="sr-only peer" />
      <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-moodwalk-green"></div>
    </label>
  );
};

const Slider = () => {
  const [value, setValue] = useState(50);

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);

    let gradient;

    if (newValue < 50) {
      // Thumb is on the left side
      gradient = `linear-gradient(to right, rgba(11, 133, 30, 0.38) ${newValue}%, #0B851E ${newValue}%, #0B851E 50%, rgba(11, 133, 30, 0.38) 50%)`;
    } else if (newValue > 50) {
      // Thumb is on the right side
      gradient = `linear-gradient(to right, rgba(11, 133, 30, 0.38) 50%, #0B851E 50%, #0B851E ${newValue}%, rgba(11, 133, 30, 0.38) ${newValue}%)`;
    } else {
      gradient = `linear-gradient(to left, rgba(11, 133, 30, 0.38) 50%, #0B851E 50%, #0B851E ${newValue}%, rgba(11, 133, 30, 0.38) ${newValue}%)`;
    }

    e.target.style.background = gradient;
  };

  return (
    <div className="relative mb-6">
      <label className="sr-only">Labels range</label>
      <input
        id="labels-range-input"
        type="range"
        className="w-full h-2 rounded-lg appearance-none cursor-pointer"
        value={value}
        onChange={handleInputChange}
      />
      <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">
        Natural
      </span>
      <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-1/2 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">
        Both
      </span>
      <span className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">
        Urban
      </span>
    </div>
  );
};

export default function EditProfilePage() {
  const router = useRouter();
  return (
    <div className="mx-5">
      <div className="flex flex-row mt-16">
        <Link href="/profile">
          <div className="flex flex-row items-center mr-12">
            <Image
              src="/icons/registration/back_arrow.svg"
              width={24}
              height={24}
              alt="MoodWalk Logo"
            />
            <p>Back</p>
          </div>
        </Link>
        <div className="flex-grow flex justify-center relative left-[-44px]">
          <h3 className="font-bold text-xl">Edit Profile</h3>
        </div>
      </div>
      <div className="flex flex-col my-12 space-y-12">
        <div>
          <h1 className="font-bold text-xl mb-2">Profile Details</h1>
          <div className="flex flex-col space-y-4">
            <input
              className="h-12 rounded-xl p-4 border-gray-400 border-2 "
              placeholder="John"
              disabled
            ></input>
            <input
              className="h-12 rounded-xl p-4 border-gray-400 border-2"
              placeholder="Doe"
              disabled
            ></input>
            <input
              className="h-12 rounded-xl p-4 border-gray-400 border-2"
              placeholder="johndoe@email.com"
              disabled
            ></input>
            <div className="h-12 rounded-xl p-4 flex flex-row border-gray-400 border-2">
              {Array.from({ length: 14 }).map((_, index) => (
                <div
                  key={index}
                  className="w-2 h-2 m-1 bg-black rounded-full"
                />
              ))}
            </div>
          </div>
        </div>

        <div>
          <h1 className="font-bold text-xl">Location Preferences</h1>
          <p className="mb-8 text-gray-400">
            Types of locations to include in your routes
          </p>
          <div className="flex flex-col space-y-8">
            <div className="flex flex-row justify-between">
              <h1 className="font-medium text-sm">Urban Environments</h1>
              <ToggleSwitch />
            </div>
            <div className="flex flex-row justify-between">
              <h1 className="font-medium text-sm">Natural Environments</h1>
              <ToggleSwitch />
            </div>
            <div className="flex flex-row justify-between">
              <h1 className="font-medium text-sm">Near Water</h1>
              <ToggleSwitch />
            </div>
          </div>
        </div>

        <div>
          <h1 className="font-bold text-xl">Accessibility Preferences</h1>
          <p className="mb-8 text-gray-400">
            Prioritizing specific accessibility concerns
          </p>
          <div className="flex flex-col space-y-8">
            <div className="flex flex-row justify-between">
              <h1 className="font-medium text-sm">Stairs</h1>
              <ToggleSwitch />
            </div>
            <div className="flex flex-row justify-between">
              <h1 className="font-medium text-sm">
                Always prioritize safest route
              </h1>
              <ToggleSwitch />
            </div>
          </div>
        </div>

        <div>
          <h1 className="font-bold text-xl">Mood-based Preferences</h1>
          <p className="mb-8 text-gray-400">
            Prioritizing specific accessibility concerns
          </p>
          <div className="flex flex-col space-y-8">
            <div className="justify-between">
              <h1 className="font-bold text-sm">Default</h1>
              <Slider />
            </div>
            <div className="justify-between">
              <h1 className="font-bold text-sm">When happy</h1>
              <Slider />
            </div>
            <div className="justify-between">
              <h1 className="font-bold text-sm">When sad</h1>
              <Slider />
            </div>
            <div className="justify-between">
              <h1 className="font-bold text-sm">When angry</h1>
              <Slider />
            </div>
          </div>
        </div>
        <div className="space-y-4 pb-10">
          <button
            onClick={() => router.push("/")}
            className=" bottom-16 bg-moodwalk-green text-white py-3 w-full rounded-xl z-20"
          >
            Log Out
          </button>
          <button
            onClick={() => router.push("/profile")}
            className=" bottom-16  bg-white border-moodwalk-green border-2 text-moodwalk-green py-3 w-full rounded-xl z-20"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
