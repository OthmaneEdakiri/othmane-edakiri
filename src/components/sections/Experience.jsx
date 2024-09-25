import React from "react";
import Container from "@/components/layout/Container";
import { EXPERIENCES } from "@/lib/data";
import ExperienceDetails from "@/components/data-display/ExperienceDetails";

const Experience = () => {
  return (
    <Container>
      <div className="flex items-center flex-col gap-4">
        <div className="text-center font-medium text-sm text-normal px-5 py-1 rounded-xl bg-gray-200 dark:bg-[#374151]">
          Experience
        </div>
        <p className="text-normal md:text-xl text-lg text-center">
          Here is a quick summary of my most recent experiences:
        </p>
      </div>
      {EXPERIENCES.map((experience, index) => (
        <ExperienceDetails key={index} {...experience} />
      ))}
    </Container>
  );
};

export default Experience;
