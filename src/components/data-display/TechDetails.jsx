import ImageWrapper from "@/components/data-display/ImageWrapper";

const TechDetails = ({ url, logo, label, darkModeLogo }) => {

  return (
    <div className="lg:w-[12.5%] md:w-[calc(100%/6)] w-[calc(100%/3)] flex flex-col items-center gap-2 ">
      <a href={url} target="_blank">
        <ImageWrapper
          srcForDarkMode={darkModeLogo}
          src={logo}
          className="transition-transform duration-300 hover:scale-[1.1]"
        />
      </a>
      <p className="text-normal text-base">{label}</p>
    </div>
  );
};

export default TechDetails;
