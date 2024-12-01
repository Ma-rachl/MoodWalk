"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function NewWalkPage() {
  const router = useRouter();

  const handleCreateNewWalk = () => {
    console.log("Creating a new walk...");
    router.push("/create-new-walk");
  };

  const handleRepeatPastWalk = () => {
    console.log("Repeating a past walk...");
    router.push("/repeat-past-walk");
  };

  const handleCancel = () => {
    router.back();
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center font-bold p-28 text-3xl">
        <div className="relative w-full flex items-center justify-center">
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

      <div className="m-5 flex flex-col space-y-48">
        <div>
          <h1 className="text-xl font-bold">Start a new walk</h1>
          <p className="mb-8 text-gray-400">How would you like to proceed?</p>
          <div className="flex flex-col space-y-4">
            <button
              className="bg-moodwalk-green text-white py-3 rounded-xl h-12"
              onClick={handleCreateNewWalk}
            >
              Create New Walk
            </button>
            <div className="text-center text-primary-500">or</div>
            <button
              className="bg-white text-moodwalk-green border-2 border-moodwalk-green py-3 rounded-xl h-12"
              onClick={handleRepeatPastWalk}
            >
              Repeat a Past Walk
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
