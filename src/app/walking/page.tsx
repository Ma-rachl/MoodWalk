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
        />
      )}

      <animated.div
        {...bind()}
        style={{ y }}
        className="absolute bottom-0 left-0 w-full bg-white rounded-t-3xl shadow-lg z-50"
      >
        <div className="space-y-5 p-4 overflow-y-auto">
          <div
            className="absolute left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-300 rounded-full cursor-pointer"
            onClick={() => {
              const targetY = isMenuOpen ? window.innerHeight * 0.8 : 0;
              api.start({ y: targetY });
              setIsMenuOpen(!isMenuOpen);
            }}
          />
          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-gray-800">
              Walk to Boston Common
            </h2>
            <p className="text-sm text-gray-600">0.3 mi, 6 min</p>
          </div>
        </div>

        <div className="p-4 space-y-4 overflow-y-auto h-[80vh]">
          <div>
            <h3 className="text-lg font-semibold text-gray-700">All stops</h3>
          </div>

          <div className="space-y-4">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-bold text-gray-500">
                Current Location
              </p>

              <p className="text-sm text-gray-600">0.3 mi, 6 min</p>
            </div>
            <div className="flex flex-row items-center">
              <Image
                src="/icons/walk_menu/past_stops.svg"
                width={44}
                height={44}
                alt="past stops"
                className="px-4 w-auto"
              />
              <p className="text-xs font-bold text-yellow-500">
                See past stops
              </p>
            </div>

            <div className="flex flex-col bg-white border border-gray-200 rounded-lg shadow-sm p-3">
              <h4 className="text-lg font-semibold text-moodwalk-green">
                Boston Common
              </h4>
              <p className="text-sm py-3 text-gray-500">
                City park in Boston, Massachusetts
              </p>
              <Image
                src="/icons/map/boston-commons.png"
                width={500}
                height={1000}
                alt="commons"
              />
              <p className="text-sm text-gray-700 mt-2">
                The Boston Common is a historic public park in downtown Boston,
                Massachusetts. Established in 1634, it is the oldest city park
                in the United States and spans 50 acres. Originally a communal
                grazing ground, the Common has evolved into a vibrant green
                space that serves as a gathering place for locals and visitors
                alike.
              </p>
              <p className="text-sm text-gray-700 mt-2">
                Key features include:
              </p>
              <ul className="text-sm text-gray-700 mt-2 list-disc px-4">
                <li>
                  Frog Pond: A popular spot for ice skating in the winter and a
                  splash pad for children in the summer.
                </li>
                <li>
                  Soldiers and Sailors Monument: A tribute to those who fought
                  in the Civil War.
                </li>
                <li>Parkman Bandstand: A venue for concerts and events.</li>
                <li>
                  Central Location: It connects to the Boston Public Garden and
                  is part of the larger Emerald Necklace, a series of parks
                  designed by Frederick Law Olmsted.
                </li>
              </ul>
            </div>

            <div className="text-sm text-gray-500">
              Massachusetts State House
            </div>
          </div>
        </div>
      </animated.div>

      <div className="absolute top-4 w-full flex justify-between items-center px-4 z-40">
        <button
          onClick={() => router.back()}
          className="bg-white text-black p-2 rounded-full shadow-md"
        >
          Back
        </button>

        <button
          onClick={() => router.push("/rating")}
          className="bg-red-500 text-white p-2 rounded-full shadow-md"
        >
          End Walk
        </button>
      </div>
    </div>
  );
}
