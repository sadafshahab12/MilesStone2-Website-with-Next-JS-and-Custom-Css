import React from "react";
import Button from "./ui/Button";
import Image from "next/image";
import "../globals.css";
import 'animate.css';
const WhatWeDo = () => {
  return (
    <>
      <section className="our-work animate__animated animate__slideInUp animate__slow animate__delay-3s">
        <div className="our-work-section">
          <div className="our-work-left">
            <Image
              src="/images/what we do.png"
              alt="our-work-img"
              width={800}
              height={500}
              className="our-work-img"
            />
          </div>
          <div className="our-work-right">
            <h3>What We Do</h3>
            <h1>We Develop Product That People Love to Use.</h1>
            <p>
              At <span>Code & Connect</span>, we create user-friendly products that solve real problems, offering seamless experiences through creativity, innovation, and user-centered design.
            </p>
            <div className="our-work-left-mb">
            <Image
              src="/images/what we do.png"
              alt="our-work-img"
              width={800}
              height={500}
              className="our-work-img"
            />
          </div>
            <div className="WWd">
              <div className="WWD-card">
                <div className="WWD-icon-bg">
                  <Image
                    src="/images/ourvision.png"
                    alt="WWD-img"
                    className="WWD-img"
                    width={500}
                    height={500}
                  />
                </div>
                <div className="WWD-card-content">
                  <h1>Our Vision</h1>
                  <p>Innovating for Tomorrow.</p>
                </div>
              </div>
              <div className="WWD-card">
                <div className="WWD-icon-bg">
                  <Image
                    src="/images/ourgoal.png"
                    alt="WWD-img"
                    className="WWD-img"
                    width={500}
                    height={500}
                  />
                </div>
                <div className="WWD-card-content">
                  <h1>Our Goal</h1>
                  <p>Empowering Growth Together.</p>
                </div>
              </div>
            </div>
            <Button buttonText="Watch Porjects" />
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatWeDo;
