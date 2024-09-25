import React from "react";
import Container from "@/components/layout/Container";
import { heroImage } from "@/assets";

const About = () => {
  return (
    <Container id="about">
      <div className="text-center font-medium text-sm text-normal px-5 py-1 rounded-xl bg-gray-200 dark:bg-[#374151] w-fit mx-auto">
        About me
      </div>
      <div className="flex md:flex-row flex-col gap-12">
        <div className="md:w-1/2 md:pl-[50px]">
          <div className="lg:w-[350px] lg:h-[420px] md:w-[300px] md:h-[360px] w-[250px] h-[300px] relative md:mx-0 mx-auto">
            <span className="absolute md:bottom-[-50px] bottom-[-30px] md:left-[-50px] left-[-30px] md:w-[calc(100%+20px)] w-[calc(100%+60px)] h-[calc(100%+20px)] md:border-[40px] border-[20px] md:border-t-0 border-t-0 md:border-r-0 border-gray"></span>
            <img
              src={heroImage}
              className="object-cover w-full h-full"
              alt=""
            />
          </div>
        </div>
        <div className="md:w-1/2 flex flex-col gap-6">
          <h3 className="md:text-3xl text-2xl font-semibold">
            about me? Here you have it:
          </h3>
          <p className="text-base text-normal">
            I am a passionate web developer who considers myself a specialist in
            full-stack development (React.js and Laravel).I am a passionate web
            developer focused on bringing the technical aspects of digital
            products to life. Writing clear, readable, and highly performant
            code matters to me, along with delivering a smooth and efficient
            user experience.
          </p>
          <p className="text-base text-normal">
            I began my journey as a web developer in 2021, and since then, I’ve
            continued to grow and evolve as a developer, taking on new
            challenges and learning the latest technologies along the way. Now,
            in my mid-twenties, 3 years after starting my web development
            journey, I'm building cutting-edge web applications using modern
            technologies such as React.js, Laravel, TailwindCSS, Bootstrap, and
            many more.
          </p>
          <p className="text-base text-normal">
            I am very much a progressive thinker and enjoy working on products
            end to end, from ideation all the way to development.
          </p>
          <p className="text-base text-normal">One last thing, I'm available for freelance work, so feel free to reach out and say hello 😉</p>
        </div>
      </div>
    </Container>
  );
};

export default About;
