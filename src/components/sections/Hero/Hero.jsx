import "@/components/sections/Hero/Hero.css";
import { MapPin } from "lucide-react";
import { heroImage } from "@/assets";
import SocialIcons from "@/components/data-display/SocialIcons";

const Hero = () => {
  return (
    <div className="hero min-h-screen flex items-center md:mt-0 mt-[100px]">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-12 md:px-8">
        <div className="flex md:flex-row flex-col-reverse gap-y-14 items-center">
          <div className="flex flex-col gap-8 md:w-7/12 w-full md:mt-6">
            <div className="flex flex-col gap-2">
              <h1 className="md:text-6xl text-3xl md:font-bold font-semibold">
                Hi, I'm Othmane{" "}
                <span className="inline-block animate-waving-hand">👋</span>
              </h1>
              <p className="text-base text-normal">
                I'm a full stack developer (React.js & Laravel) with a focus on
                creating exceptional digital experiences that are fast,
                accessible, visually appealing, and responsive.
              </p>
            </div>
            <div className="flex flex-col gap-2 text-normal">
              <div className="flex gap-2 items-center">
                <span>
                  <MapPin />
                </span>
                <p>Sale, Morocco</p>
              </div>
              <div className="flex gap-2 items-center">
                <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500 ms-1">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                </span>
                <p>Available for new projects</p>
              </div>
            </div>
            <SocialIcons />
          </div>
          <div className="md:w-5/12 w-full flex md:justify-end justify-center md:pe-[50px]">
            <div className="md:h-[320px] h-[270px] md:w-[280px] w-[230px] relative">
              <img
                src={heroImage}
                className="w-full h-full object-cover"
                alt=""
              />
              <span className="absolute md:w-[calc(100%+10px)] w-[calc(100%+60px)] h-[calc(100%+10px)] border-gray md:border-[40px] md:border-l-0 md:border-t-0  border-[20px] border-t-0 md:right-[-50px] md:bottom-[-50px] bottom-[-30px] right-[-30px]"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
