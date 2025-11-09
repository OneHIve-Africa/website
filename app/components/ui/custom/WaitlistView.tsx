import React from "react";
import back from "~/assets/back.png";
import { Button } from "../button";

interface WaitlistViewProps {}

const WaitlistView: React.FC<WaitlistViewProps> = () => {
  return (
    <div
      className="h-[800px] w-full px-10 md:px-[198px] py-2 bg-oha__yellow bg-cover bg-center flex justify-center items-center text-white"
      style={{ backgroundImage: `url(${back})` }}
    >
      <div className="flex flex-col justify-center items-center gap-10">
        <h1 className="text-5xl font-extrabold text-center w-full">
          Ready to Make an Impact?
        </h1>
        <p className="text-center text-wrap text-lg leading-8 lg:w-[750px]">
          Our platform is now live! Join thousands of investors and beekeepers
          who are already making a difference. Create your account today and
          start your journey with One Hive Africa.
        </p>
        <div className="flex gap-6 flex-wrap justify-center">
          <a
            href="https://app.onehiveafrica.com/signup"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-oha__green rounded-md shadow font-semibold text-lg px-5 py-2 hover:bg-gray-50 transition-colors min-w-[160px] text-center inline-block"
          >
            Create Account
          </a>
          <a
            href="https://app.onehiveafrica.com/login"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-oha__green text-white rounded-md shadow font-semibold text-lg px-5 py-2 hover:bg-green-700 transition-colors min-w-[160px] text-center inline-block"
          >
            Login
          </a>
          <a
            href="/investor"
            className="bg-transparent border-2 border-white text-white rounded-md shadow font-semibold text-lg px-5 py-2 hover:bg-white hover:text-oha__green transition-colors min-w-[160px] text-center inline-block"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default WaitlistView;
