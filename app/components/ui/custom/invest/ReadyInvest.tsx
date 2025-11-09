import React from "react";
import back from "~/assets/back2.png";

const ReadyInvest: React.FC = () => {
  return (
    <div
      className="px-5 md:px-10 lg:px-[198px] py-16 uid bg-oha__green bg-cover bg-center flex justify-center items-center text-white h-auto md:h-[800px]"
      style={{ backgroundImage: `url(${back})` }}
    >
      <div className="w-full grid md:grid-cols-2 items-center gap-6 md:gap-20 lg:p-20 uid">
        <div className="grid gap-10">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-start mt-4 mb-6 md:mt-6 md:mb-8">
            Ready to Invest in the Future?
          </h1>
          <p className="text-lg lg:text-2xl font-normal leading-loose lg:w-[600px]">
            Our platform is live! Explore investment opportunities today and be
            part of a movement that{"'"}s making a real difference. Your
            investment is more than just a financial decision—it{"'"}s a
            commitment to a better world.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a
              href="https://app.onehiveafrica.com/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-oha__green rounded-md shadow font-semibold text-lg px-8 py-4 md:px-5 md:py-3 hover:bg-gray-50 transition-colors text-center inline-block min-w-[140px]"
            >
              Start Investing
            </a>
            <a
              href="https://app.onehiveafrica.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white text-white rounded-md shadow font-semibold text-lg px-8 py-4 md:px-5 md:py-3 hover:bg-white hover:text-oha__green transition-colors text-center inline-block min-w-[140px]"
            >
              Login
            </a>
          </div>
        </div>
        <div></div>
        <div></div>
        <div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-start mt-4 mb-6 md:mt-6 md:mb-8">
            Start Your Journey Today
          </h1>
          <p className="text-lg lg:text-2xl font-normal leading-loose lg:w-[600px]">
            Invest in hives. Invest in communities. Invest in the future. Join
            One Hive Africa and be part of a new way to invest—where profit
            meets purpose.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReadyInvest;
