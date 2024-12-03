import React from "react";
import Button from "../components/ui/Button";
import Image from "next/image";
import Card from "../components/ui/Card";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Code & Connect | Service",
};
const Service = () => {
  return (
    <div>
      <section className="our-work animate__animated animate__slideInUp animate__slow ">
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
              At <span>Code & Connect</span>, we create user-friendly products
              that solve real problems, offering seamless experiences through
              creativity, innovation, and user-centered design.
            </p>
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
      <section className="animate__animated animate__zoomIn animate__delay-2s">
        <div className="service">
          <h3>Services</h3>
          <h1>Our Expertise</h1>
          <div className="service-card-container">
            <Card
              src="/images/service1.png"
              heading="Web Design / Development"
              description="We design and develop responsive, visually appealing websites tailored to meet your business needs and enhance user experience."
            />
            <Card
              src="/images/service2.png"
              heading="UI/UX Design"
              description="We create intuitive, engaging user interfaces and experiences that keep users connected and drive conversions."
            />
            <Card
              src="/images/service3.png"
              heading="Website Migration"
              description="We smoothly transition your website to new platforms with minimal downtime, ensuring a seamless experience for users and search engines."
            />
            <Card
              src="/images/service4.png"
              heading="App Development"
              description="We build custom mobile and web applications that are reliable, scalable, and designed to deliver value to your users."
            />
            <Card
              src="/images/service5.png"
              heading="HubSpot Integration"
              description="We integrate HubSpot with your business systems to streamline marketing, sales, and customer service for improved efficiency and growth."
            />
            <Card
              src="/images/service6.png"
              heading="Email Marketing"
              description="We create targeted email campaigns that engage your audience, increase conversions, and build lasting customer relationships."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
