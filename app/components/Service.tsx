import React from "react";
import "../globals.css";
import Card from "./ui/Card";
import 'animate.css';
const Service = () => {
  return (
    <>
      <section className="animate__animated animate__zoomIn animate__delay-4s">
        <div className="service">
          <h3>Services</h3>
          <h1>Our Expertise</h1>
          
          <div className="service-card-container animate__animated animate__bounceIn animate__slower">
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
    </>
  );
};

export default Service;
