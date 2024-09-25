import Container from "@/components/layout/Container";
import { TESTIMONIALS } from "@/lib/data";
import TestimonialsDetails from "@/components/data-display/TestimonialsDetails";

const Testimonials = () => {
  return (
    <Container id="testimonials">
      <div className="flex items-center flex-col gap-4">
        <div className="text-center font-medium text-sm text-normal px-5 py-1 rounded-xl bg-gray-200 dark:bg-[#374151]">
          Testimonials
        </div>
        <p className="text-normal md:text-xl text-lg text-center">
          Nice things people have said about me:
        </p>
      </div>
      <div className="flex gap-12 lg:flex-row flex-col">
        {TESTIMONIALS.map((testimonial, index) => (
          <TestimonialsDetails key={index} {...testimonial} />
        ))}
      </div>
    </Container>
  );
};

export default Testimonials;
