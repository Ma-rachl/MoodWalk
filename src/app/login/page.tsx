"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const handleLogin = () => {
    console.log("Log in");
    router.push("/map"); 
  };
  return (
    <div>
      <div className="flex flex-col items-center justify-center font-bold p-28 text-3xl ">
        <Image
          src="/icons/registration/mdi_walk.svg"
          width={64}
          height={64}
          alt="MoodWalk Logo"
        />
        <h1>MoodWalk</h1>
      </div>
      <div className="m-5 flex flex-col space-y-48">
        <div>
          <h1 className="text-2xl font-bold">Welcome back!</h1>
          <p className="mb-8 text-gray-400">
            Please enter your details to log in
          </p>
          <div className="flex flex-col space-y-4">
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
        <button className="h-12 rounded-xl  text-white bg-moodwalk-green"  onClick={handleLogin} >
          Log in
        </button>
      </div>
      <div className="flex justify-center">
        <p>
          Don&apos;t have an account?{" "}
          <Link href="/signup">
            <span className="text-moodwalk-green font-bold">Sign up</span>
          </Link>
        </p>
      </div>
    </div>
  );
}
