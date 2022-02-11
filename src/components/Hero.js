import React, { useEffect, useRef } from "react";
import "./my.css";
import Typewriter from "typewriter-effect";

const Hero = () => {
  const container = useRef(null);

  return (
    <section className="my-16 px-5 md:my-32 flex flex-col flex-wrap space-y-16 md:space-y-0 patterns">
      <div className="ml-auto w-72 md:w-96 lg:w-2/5">
        <div className="container" ref={container}></div>
      </div>
      <div className="prof head space-y-20">
       
        <div>
          {" "}
          <h1 className="text-6xl font-bold md:text-6xl">
            Hello, I’m Suraj Ughade
          </h1>
          <h3>
            <Typewriter
              options={{
                strings: [
                  "A Tech Enthusiast",
                  "A Problem Solver",
                  "A Full Stack Developer",
                ],
                pauseFor: 1500,
                autoStart: true,
                loop: true,
              }}
            />
          </h3>
          <br></br>
          <p className="tracking-wide leading-relaxed">
          An enthusiastic Full Stack Web Developer with a strong
          set of technical as well as non-technical skills and a
          dedication towards creating useful and interactive web
          applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
