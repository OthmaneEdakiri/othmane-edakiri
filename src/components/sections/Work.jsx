import { PROJECTS } from "@/lib/data";
import ProjectDetails from "@/components/data-display/ProjectDetails";
import Container from "@/components/layout/Container";

const Work = () => {
  return (
    <Container id="work" className={'bg-transparent'}>
      <div className="flex items-center flex-col gap-4">
        <div className="text-center font-medium text-sm text-normal px-5 py-1 rounded-xl bg-gray-200 dark:bg-[#374151]">
          Work
        </div>
        <p className="text-normal md:text-xl text-lg text-center">
          Some of the noteworthy projects I have built:
        </p>
      </div>
      {PROJECTS.map((project, index) => (
        <ProjectDetails key={index} {...project} index={index} />
      ))}
    </Container>
  );
};

export default Work;
