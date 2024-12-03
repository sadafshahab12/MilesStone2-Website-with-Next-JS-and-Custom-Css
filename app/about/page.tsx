import React from "react";
import Image from "next/image";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Code & Connect | About",
};
const About = () => {
  return (
    <div>
      <section className="about animate__animated animate__slideInLeft  ">
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
              At <span>Code & Connect</span>, we believe in the power of
              technology to transform ideas into reality. Our mission is simple:
              to bridge the gap between innovation and implementation. With a
              team of experienced developers, designers, and strategists, we
              specialize in delivering custom software solutions that drive
              business growth and digital transformation.
            </p>
            <div className="about-btn">
              <Button buttonText="Know More About us" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="process">
          <h3>Planning</h3>
          <h1>Our Process</h1>
          <div className="card-container animate__animated animate__fadeIn  animate__infinite animate__slower ">
            <Card
              src="/images/process1.png"
              heading="Research"
              description="We start with in-depth Research, understanding your business, audience, and goals to ensure we deliver the right solutions from the start."
            />
            <Card
              src="/images/process2.png"
              heading="Design"
              description="Our Design process focuses on creating intuitive, user-friendly interfaces that align with your brand and provide a seamless experience."
            />
            <Card
              src="/images/process3.png"
              heading="Development"
              description="We perform thorough Testing to ensure the final product is reliable, secure, and meets the highest quality standards."
            />
            <Card
              src="/images/process4.png"
              heading="Testing"
              description="We start with in-depth Research, understanding your business, audience, and goals to ensure we deliver the right solutions from the start."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
