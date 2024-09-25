import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectDetails = ({
  technologies,
  previewImage,
  url,
  description,
  name,
  index,
}) => {
  return (
    <div className="flex md:flex-row flex-col rounded-xl overflow-hidden shadow-md dark:shadow-2xl bg-white dark:bg-gray-800">
      <div
        className={`md:w-1/2 w-full md:p-12 p-8 bg-gray-100 dark:bg-gray-600 border-r-gray-100 flex items-center ${
          index % 2 != 0 && "md:order-1"
        }`}
      >
        <img
          className="rounded-xl hover:cursor-pointer hover:scale-105 transition-transform duration-300"
          src={previewImage}
          alt=""
        />
      </div>
      <div className="md:w-1/2 w-full md:p-12 p-8 flex flex-col gap-6">
        <h3 className="font-semibold md:text-xl text-lg">{name}</h3>
        <p className="text-base text-normal">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((technologie, index) => (
            <div
              key={index}
              className="w-fit font-medium text-sm text-normal px-5 py-1 rounded-xl bg-gray-200 dark:bg-[#374151]"
            >
              {technologie}
            </div>
          ))}
        </div>
      <div className="">
        <a href={url} target="_blank">
          <Button size="icon" variant="outline" className="border-none text-normal bg-transparent">
            <ExternalLink />
          </Button>
        </a>
      </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
