import React from "react";
import Button from "./ui/Button";
import Image from "next/image";
import "../globals.css"
import 'animate.css';
const About = () => {
  return (
    <>
      <section className="about animate__animated animate__slideInLeft animate__delay-2s ">
        <div className="about-section">
          <div className="about-left">
            <Image
              src="/images/about-img.png"
              alt="about-img"
              width={800}
              height={500}
              className="about-img"
            />
          </div>
          <div className="about-right">
            <h3>About us</h3>
            <h1>One of the Fastest Way to Business Growth</h1>
            <div className="right-img">
            <Image
              src="/images/about-img.png"
              alt="about-img"
              width={800}
              height={500}
              className="img"
            />
          </div>
            <p>
              At <span>Code & Connect</span>, we believe in the power of technology to
              transform ideas into reality. Our mission is simple: to bridge the
              gap between innovation and implementation. With a team of
              experienced developers, designers, and strategists, we specialize
              in delivering custom software solutions that drive business growth
              and digital transformation.
            </p>
            <div className="about-btn">
            <Button buttonText="Know More About us" />

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
