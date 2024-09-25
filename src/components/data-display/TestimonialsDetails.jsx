const TestimonialsDetails = ({
  testimonial,
  title,
  personAvatar,
  personName,
}) => {
  return (
    <div className="flex flex-col items-center gap-6 md:p-12 p-8 lg:w-1/3 md:w-2/3 mx-auto w-full bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-2xl">
      <img className="h-16 w-16 rounded-[50%]" src={personAvatar} alt="" />
      <p className="text-base text-normal">{testimonial}</p>
      <div className="flex flex-col gap-1 items-center">
        <p className="font-semibold md:text-xl text-lg text-gray-900 dark:text-gray-100">
          {personName}
        </p>
        <p className="text-sm text-normal">{title}</p>
      </div>
    </div>
  );
};

export default TestimonialsDetails;
