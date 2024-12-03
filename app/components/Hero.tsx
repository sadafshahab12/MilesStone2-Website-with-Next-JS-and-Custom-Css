import React from "react";
import "../globals.css";
import Button from "./ui/Button";
import Image from "next/image";
import 'animate.css';
const Hero = () => {
  return (
    <>
      <section className="hero animate__animated animate__slideInDown">
        <div className="hero-section">
          <div className="left">
            <h1 >Empowering Innovation Through Code & Connectivity</h1>
            <h3>
              Bridging Ideas to Reality with Seamless Technology Solutions
            </h3>
            <div className="mb-hero-img">
              <Image
                src="/images/hero-img.png"
                alt="hero-img"
                width={800}
                height={500}
                className="img"
              />
            </div>
            <p>{`At Code & Connect, we turn ideas into reality with innovative software and seamless connectivity solutions. Let’s build the future together.`}</p>
            <div className="hero-btn">
            <Button buttonText="See Our Work" />

            </div>
          </div>
          <div className="right">
            <div>
              <Image
                src="/images/hero-img.png"
                alt="hero-img"
                width={500}
                height={500}
                className="hero-img"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
