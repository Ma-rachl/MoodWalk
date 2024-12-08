"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

const StarRating = () => {
  const [rating, setRating] = useState(0);

  const handleClick = (index) => {
    setRating(index + 1);
  };

  return (
    <div className="flex space-x-2">
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          onClick={() => handleClick(index)}
          xmlns="http://www.w3.org/2000/svg"
          fill={index < rating ? "gold" : "white"}
          viewBox="0 0 24 24"
          stroke="gold"
          strokeWidth="1.5"
          className="w-8 h-8 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.905c.969 0 1.371 1.24.588 1.81l-3.97 2.882a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.539 1.118l-3.97-2.882a1 1 0 00-1.175 0l-3.97 2.882c-.784.57-1.838-.197-1.539-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.48 10.101c-.784-.57-.38-1.81.588-1.81h4.905a1 1 0 00.95-.69l1.518-4.674z"
          />
        </svg>
      ))}
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
          <h3 className="font-bold text-xl"></h3>
        </div>
      </div>
      <div className="flex flex-col my-12 space-y-8">
        <div>
          <h1 className="font-bold text-xl">Rate your walk to</h1>
          <p className="font-bold  mb-2 text-moodwalk-green">
            New England Aquarium
          </p>
        </div>

        <div>
          <h1 className="font-bold text-lg">
            How likely are you to walk this route again?
          </h1>
          <StarRating />
        </div>
        <div>
          <h1 className="font-bold text-lg">How much did your mood improve?</h1>
          <StarRating />
        </div>
        <div>
          <h1 className="font-bold text-lg">
            How safe did you feel during this walk?
          </h1>
          <StarRating />
        </div>
        <div>
          <h1 className="font-bold text-lg">How accessible was this route?</h1>
          <StarRating />
        </div>
        <div>
          <h1 className="font-bold text-lg">Additional Comments</h1>
          <textarea
            className="w-full h-32 p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-moodwalk-green"
            placeholder="What was noteworthy about this walk?"
          ></textarea>
        </div>

        <div className="space-y-4 pb-10">
          <button
            onClick={() => router.push("/map")}
            className=" bottom-16 bg-moodwalk-green text-white py-3 w-full rounded-xl z-20"
          >
            Submit Your Review
          </button>
          <button
            onClick={() => router.push("/map")}
            className=" bottom-16  bg-white border-moodwalk-green border-2 text-moodwalk-green py-3 w-full rounded-xl z-20"
          >
            Skip
          </button>
        </div>
      </div>
    </div>
  );
}
