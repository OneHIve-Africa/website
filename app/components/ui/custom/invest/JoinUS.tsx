import React from "react";
import back from "~/assets/back.png";

const JoinUS: React.FC = () => {
  return (
    <div className="px-5 md:px-10 lg:px-[198px] py-16">
      <div
        className="h-auto md:h-[800px] px-5 md:px-[198px] py-10 bg-oha__green bg-cover bg-center flex justify-center items-center text-white rounded-lg"
        style={{ backgroundImage: `url(${back})` }}
      >
        <div className="flex flex-col justify-center items-center gap-6 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold w-full">
            Start Investing Today
          </h1>
          <h4 className="text-lg md:text-xl -mt-2">
            Financial growth with social impact.
          </h4>
          <p className="text-base md:text-lg leading-6 md:leading-8">
            Our platform is live! Join thousands of investors who are already
            making a difference while earning returns through beekeeping
            investments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <a
              href="https://app.onehiveafrica.com/register"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-oha__green rounded-md shadow font-semibold text-lg px-8 py-4 md:px-8 md:py-3 hover:bg-gray-50 transition-colors text-center"
            >
              Start Investing
            </a>
            <a
              href="https://app.onehiveafrica.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white text-white rounded-md shadow font-semibold text-lg px-8 py-4 md:px-8 md:py-3 hover:bg-white hover:text-oha__green transition-colors text-center"
            >
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUS;
