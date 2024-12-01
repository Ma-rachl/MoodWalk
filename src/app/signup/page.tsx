import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <div>
      <div className="flex flex-row mt-16 mx-5">
        <Link href="/">
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
          <h3 className="font-bold text-xl">Sign Up</h3>
        </div>
      </div>
      <div className="m-5 flex flex-col space-y-44 mt-40">
        <div>
          <h1 className="text-2xl font-bold">Welcome to MoodWalk!</h1>
          <p className="mb-8 text-gray-400">Make an account to start walking</p>
          <div className="flex flex-col space-y-4">
            <input
              className="h-12 rounded-xl p-4 border-gray-400 border-2 "
              placeholder="First name"
            ></input>
            <input
              className="h-12 rounded-xl p-4 border-gray-400 border-2"
              placeholder="Last name"
            ></input>
            <input
              className="h-12 rounded-xl p-4 border-gray-400 border-2"
              placeholder="Email"
            ></input>
            <input
              className="h-12 rounded-xl p-4 border-gray-400 border-2"
              placeholder="Password"
            ></input>
          </div>
        </div>
        <button className="h-12 rounded-xl  text-white bg-moodwalk-green">
          Sign up
        </button>
      </div>
    </div>
  );
}
