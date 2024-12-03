"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import Image from "next/image";
export default function PullUpMenuPage() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [{ y }, api] = useSpring(() => ({
    y: window.innerHeight * 0.8,
    config: { tension: 300, friction: 30 },
  }));

  useEffect(() => {
    const updateBounds = () => {
      api.start({ y: window.innerHeight * 0.8 });
    };
    window.addEventListener("resize", updateBounds);
    return () => window.removeEventListener("resize", updateBounds);
  }, [api]);

  const bind = useDrag(
    ({ last, movement: [, my], velocity: [, vy], direction: [, dy] }) => {
      if (last) {
        const shouldOpen = my < 0 || (vy > 0.5 && dy < 0);
        api.start({ y: shouldOpen ? 0 : window.innerHeight * 0.8 });
        setIsMenuOpen(shouldOpen);
      } else {
        api.start({ y: my, immediate: true });
      }
    },
    {
      from: () => [0, y.get()],
      bounds: { top: 0, bottom: window.innerHeight * 0.8 },
      rubberband: true,
    }
  );

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-100">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/icons/map/walk-map.png')",
        }}
      ></div>

      {isMenuOpen && (
        <div
          className="absolute inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => {
            api.start({ y: window.innerHeight * 0.8 });
            setIsMenuOpen(false);
          }}
        ></div>
      )}

      <animated.div
        {...bind()}
        style={{ y }}
        className="absolute bottom-0 left-0 w-full bg-white rounded-t-3xl shadow-lg z-50"
      >
        <div
          className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-300 rounded-full cursor-pointer"
          onClick={() => {
            const targetY = isMenuOpen ? window.innerHeight * 0.8 : 0;
            api.start({ y: targetY });
            setIsMenuOpen(!isMenuOpen);
          }}
        ></div>

        <div className="p-4 space-y-4 overflow-y-auto h-[80vh]">
          <div className="space-y-2">
            <h2 className="text-lg font-semibold text-gray-800">
              Walk to Boston Common
            </h2>
            <p className="text-sm text-gray-600">0.3 mi, 6 min</p>
          </div>

          <div>
            <h3 className="text-md font-semibold text-gray-700">All stops</h3>
          </div>

          <div className="space-y-4">
            <div className="flex flex-col space-y-1">
              <p className="text-sm text-gray-500">Current Location</p>
              <p className="text-xs text-yellow-500 font-medium">
                See past stops
              </p>
            </div>

            <div className="flex flex-col bg-white border border-gray-200 rounded-lg shadow-sm p-3">
              <h4 className="text-md font-semibold text-gray-800">
                Boston Common
              </h4>
              <p className="text-sm text-gray-500">
                City park in Boston, Massachusetts
              </p>
               <Image
              src="/icons/map/boston-commons.png"
              width={500}
              height={1000}
              alt="commons"
            />
              <p className="text-sm text-gray-700 mt-2">
                Very pretty blah blah ask ChatGPT to cook here
              </p>
            </div>

            <div className="text-sm text-gray-500">
              Massachusetts State House
            </div>
          </div>
        </div>
      </animated.div>

      <button
        onClick={() => router.back()}
        className="absolute top-4 left-4 bg-white text-black p-2 rounded-full shadow-md z-40"
      >
        Back
      </button>
    </div>
  );
}
