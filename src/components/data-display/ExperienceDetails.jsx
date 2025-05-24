import React from "react";
import ImageWrapper from "@/components/data-display/ImageWrapper";

const ExperienceDetails = ({
  summary,
  currentlyWorkHere,
  startDate,
  position,
  logo,
  darkModeLogo,
  endDate,
}) => {
  return (
    <div className="rounded-xl bg-white shadow-md dark:bg-[#374151] dark:shadow-2xl mx-auto flex w-full max-w-4xl flex-col justify-between gap-4 p-8 md:flex-row md:gap-8">
      <div className="md:w-1/4 max-md:order-1">
        <ImageWrapper
          src={logo}
          className={"h-[48px]"}
          srcForDarkMode={darkModeLogo}
        />
      </div>
      <div className="flex flex-col gap-4 md:w-2/4 max-md:order-3">
        <p className="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-50">
          {position}
        </p>
        <ul className="list-disc text-base text-normal">
          {summary.map((sum, index) => (
            <li key={index}>{sum}</li>
          ))}
        </ul>
      </div>
      <div className="md:w-1/4 max-md:order-2 md:text-end">
        <p>
          {new Date(startDate).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
          })}{" "}
          -
          {" "}{currentlyWorkHere
            ? "Present"
            : new Date(endDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
              })}
        </p>
      </div>
    </div>
  );
};

export default ExperienceDetails;
