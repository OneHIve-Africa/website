import React from "react";
import back from "~/assets/back.png";

const BeeJoin: React.FC = () => {
  return (
    <div
      className="uid h-[800px] w-full px-10 md:px-[198px] py-2 bg-oha__green bg-cover bg-center flex justify-center items-center text-white"
      style={{ backgroundImage: `url(${back})` }}
    >
      <div className="flex flex-col justify-center items-center uid gap-10">
        <h1 className="text-5xl font-extrabold text-center w-full">
          Join the One Hive Africa Family
        </h1>
        <p className="text-center text-wrap text-lg leading-8 lg:w-[800px]">
          Our platform is live! Become part of a growing network of farmers
          dedicated to making a difference through sustainable beekeeping. With
          One Hive Africa, you
          {"'"}re not just a beekeeper; you{"'"}re a change-maker, helping to
          create a better future for yourself, your community, and the
          environment.
        </p>
        <div className="flex gap-6 flex-wrap justify-center">
          <a
            href="https://app.onehiveafrica.com/register"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-oha__green rounded-md shadow font-semibold text-lg px-8 py-3 hover:bg-gray-50 transition-colors text-center inline-block min-w-[140px]"
          >
            Get Started
          </a>
          <a
            href="https://app.onehiveafrica.com/login"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent border-2 border-white text-white rounded-md shadow font-semibold text-lg px-8 py-3 hover:bg-white hover:text-oha__green transition-colors text-center inline-block min-w-[140px]"
          >
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default BeeJoin;
