"use client";

import Image from "next/image";
import Link from "next/link";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { WalkDetails } from "../profile/page";

export default function PastWalkSummary() {
  const router = useRouter();
  const [walk, setWalk] = useState<WalkDetails>();
  const searchParams = useSearchParams();

  useEffect(() => {
    const queryParamValue = searchParams.get("walk");
    if (queryParamValue) {
      setWalk(JSON.parse(queryParamValue));
    }
  }, [searchParams]);

  if (!walk) {
    return <div>Loading...</div>;
  }

  const handleNewWalkSummary = () => {
    console.log("Creating a new walk...");
    router.push("/new-walk-summary");
  };

  return (
    <div className="mx-5 space-y-6">
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
          <h3 className="font-bold text-xl">Walk Summary</h3>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-moodwalk-green text-xl">
          {walk?.destination}
        </h1>
        <p className=" text-gray-400">
          from <span>{walk?.origin}</span>
        </p>
        <div className="flex flex-row space-x-4">
          <Image
            src="/icons/past_walk/stars.svg"
            width={104}
            height={20}
            alt="rating"
          />
          <div className="height-auto bg-black w-px" />
          <p className=" text-gray-400">01 Nov 2024</p>
        </div>
      </div>
      <Image
        src="/icons/map/small-map.png"
        width={350}
        height={176}
        alt="walk map"
        className="w-full h-auto rounded-2xl"
      />
      <div className="flex flex-row justify-between">
        <div className="py-7 px-8 border-2 border-moodwalk-green flex opacity-40 rounded-2xl w-auto">
          <Image
            src="/icons/past_walk/happy_face.svg"
            width={24}
            height={24}
            alt="happy mood"
          />
        </div>
        <div className="py-7 px-8  border-2 border-gray-300 rounded-2xl w-auto">
          <span className="font-bold text-3xl pr-1">{walk.distance}</span>mi
        </div>
        <div className="py-7 px-8  border-2 border-gray-300 rounded-2xl w-auto">
          <span className="font-bold text-3xl pr-1">{walk.duration}</span>min
        </div>
      </div>

      <div className="flex flex-row w-full">
        <div className="flex flex-col w-1/2">
          <div>
            <h1 className="text-base font-medium">Quality</h1>
            <Image
              src="/icons/past_walk/stars.svg"
              width={104}
              height={20}
              alt="rating"
            />
          </div>
          <div>
            <h1 className="text-base font-medium">Safety</h1>
            <Image
              src="/icons/past_walk/stars.svg"
              width={104}
              height={20}
              alt="rating"
            />
          </div>
        </div>
        <div className="flex flex-col w-1/2">
          <div>
            <h1 className="text-base font-medium">Mood improvement</h1>
            <Image
              src="/icons/past_walk/stars.svg"
              width={104}
              height={20}
              alt="rating"
            />
          </div>
          <div>
            <h1 className="text-base font-medium">Accessibility</h1>
            <Image
              src="/icons/past_walk/stars.svg"
              width={104}
              height={20}
              alt="rating"
            />
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-base font-medium mb-2">Notes</h1>
        <div className="p-4 w-full border-2 border-gray-300 rounded-2xl">
          <p>this walk was really fun!</p>
        </div>
      </div>

      <button
        onClick={handleNewWalkSummary}
        className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-moodwalk-green text-white py-3 w-80 rounded-xl z-20"
      >
        Start Walk
      </button>
    </div>
  );
}
