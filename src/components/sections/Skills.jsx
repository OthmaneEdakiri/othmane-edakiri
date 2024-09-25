import { TECHNOLOGIES } from "@/lib/data";
import Container from "@/components/layout/Container";
import TechDetails from "@/components/data-display/TechDetails";

const Skills = () => {
  return (
    <Container className="bg-transparent">
      <div className="flex items-center flex-col gap-4">
        <div className="text-center font-medium text-sm text-normal px-5 py-1 rounded-xl bg-gray-200 dark:bg-[#374151]">
          Skills
        </div>
        <p className="text-normal md:text-xl text-lg text-center">
          The skills, tools and technologies I am really good at:
        </p>
      </div>
      <div className="flex flex-wrap gap-y-12">
        {TECHNOLOGIES.map((tec, index) => (
          <TechDetails key={index} {...tec} />
        ))}
      </div>
    </Container>
  );
};

export default Skills;
