"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";


const imagePaths = [
  "/icons/newwalk/face1.png",
  "/icons/newwalk/face2.png",
  "/icons/newwalk/face3.png",
  "/icons/newwalk/face4.png",
  "/icons/newwalk/face5.png",
  "/icons/newwalk/face6.png",
  "/icons/newwalk/face7.png",
  "/icons/newwalk/face8.png",
  "/icons/newwalk/face9.png",
];

export default function NewWalkPage() {
  const router = useRouter();

  const [selectedImages, setSelectedImages] = useState(Array(9).fill(false)); 

  const handleCancel = () => {
    router.back();
  };

  const handleNewWalkDuration = () => {
    console.log("Creating a new walk...");
    router.push("/new-walk-duration");
  };

  const handleImageClick = (index) => {
    const newSelectedImages = [...selectedImages];
    newSelectedImages[index] = !newSelectedImages[index]; 
    setSelectedImages(newSelectedImages);
  };

  const imagePositions = [
    { top: "3%", left: "0%" },
    { top: "17%", left: "30%" },
    { top: "0%", left: "55%" },
    { top: "38%", left: "75%" },
    { top: "40%", left: "5%" },
    { top: "55%", left: "30%" },
    { top: "65%", left: "60%" },
    { top: "72%", left: "2%" },
    { top: "9%", left: "80%" },
  ];

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
          <h1 className="text-xl font-bold">How are you currently feeling?</h1>
          <p className="mb-8 text-gray-400">Set your current mood</p>
          <div className="relative w-full h-96">
            {imagePaths.map((imagePath, index) => {
              const position = imagePositions[index];
              const isSelected = selectedImages[index];
              return (
                <div
                  key={index}
                  onClick={() => handleImageClick(index)}
                  className="absolute"
                  style={{ ...position }}
                >
                  <Image
                    src={imagePath}
                    alt={`Image ${index + 1}`}
                    width={100}
                    height={100}
                    className={`rounded-full cursor-pointer`}
                    style={{
                      filter: isSelected
                        ? "grayscale(900%) sepia(80%) saturate(1000%) hue-rotate(0deg)" 
                        : "none", 
                      transition: "filter 0.3s ease-in-out",
                    }}
                  />
                </div>
              );
            })}
          </div>
          <button
        className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-moodwalk-green text-white py-3 w-80 rounded-xl z-20"
        onClick={handleNewWalkDuration}
      >
        Continue
      </button>
        </div>
      </div>
    </div>
  );
}
