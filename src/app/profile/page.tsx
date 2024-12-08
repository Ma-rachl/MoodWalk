"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export interface WalkDetails {
  destination: string;
  origin: string;
  distance: number;
  duration: string;
}

const walkDetails: WalkDetails[] = [
  {
    destination: "New England Aquarium",
    origin: "Northeastern University",
    distance: 3.5,
    duration: "45",
  },
  {
    destination: "Boston Common",
    origin: "New England Aquarium",
    distance: 1.2,
    duration: "15",
  },
  {
    destination: "Fenway Park",
    origin: "Boston Common",
    distance: 2.1,
    duration: "30",
  },
];

export default function ProfilePage() {
  const router = useRouter();

  const handleWalkClick = (walk: WalkDetails) => {
    const query = new URLSearchParams({
      walk: JSON.stringify(walk),
    }).toString();
    router.push(`/past-walk-summary?${query}`);
  };

  const handleNewWalkLength = () => {
    console.log("Creating a new walk...");
    router.push("/new-walk-length");
  };

  return (
    <div className="mx-5">
      <div className="flex flex-row justify-between mt-16">
        <button
          onClick={() => router.push("/map")}
          className="flex items-center space-x-2 text-primary"
        >
          <Image
            src="/icons/map/back-arrow.png"
            width={10}
            height={10}
            alt="Back Arrow"
          />
          <span className="text-lg text-primary font-semibold">Back</span>
        </button>
        <Link href="/edit-profile">
          <Image
            src="/icons/profile/edit.svg"
            width={18}
            height={18}
            alt="Edit Profile"
          />
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center">
        <Image
          src="/icons/profile/pfp.svg"
          width={120}
          height={120}
          alt="Profile Picture"
        />
        <h3 className="m-5 text-2xl font-bold">John Doe</h3>
      </div>

      <div>
        <h1 className="text-xl font-bold">Past Walks</h1>
        <Image
          src="/icons/profile/search_bar.svg"
          width={350}
          height={48}
          alt="Search Bar"
          className="w-full my-3"
        />
      </div>

      {walkDetails.map((walk, index) => (
        <div
          key={index}
          className="flex flex-row border-2 border-gray-300 rounded-2xl p-4 my-2"
          onClick={() => handleWalkClick(walk)}
        >
          <Image
            src="/icons/profile/nea_preview.png"
            width={68}
            height={68}
            alt="walk preview"
            className="flex-none w-1/4"
          />
          <div className="flex-grow px-2">
            <h1 className="text-xl font-bold">{walk.destination}</h1>
            <p className="text-gray-400">from {walk.origin}</p>
            <div className="flex flex-row space-x-16">
              <p>
                <span className="font-bold pr-1">{walk.distance}</span>mi
              </p>
              <p>
                <span className="font-bold pr-1">{walk.duration}</span>min
              </p>
            </div>
          </div>
          <Image
            src="/icons/profile/more_arrow.svg"
            width={24}
            height={24}
            alt="More"
            className="flex-none w-1/8"
          />
        </div>
      ))}

      <button
        onClick={() => router.push("/")}
        className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-moodwalk-green text-white py-3 w-80 rounded-xl z-20"
      >
        Log Out
      </button>
    </div>
  );
}
