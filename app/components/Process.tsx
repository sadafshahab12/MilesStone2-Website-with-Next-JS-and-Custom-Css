import React from "react";
import "../globals.css";
import Card from "./ui/Card";
import 'animate.css';
const Process = () => {
  return (
    <>
      <section>
        <div className="process">
          <h3>Planning</h3>
          <h1>Our Process</h1>
          <div className="card-container animate__animated animate__fadeIn animate__delay-3s animate__infinite animate__slower ">
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
    </>
  );
};

export default Process;
