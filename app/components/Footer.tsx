import React from "react";
import "../globals.css";
import Image from "next/image";
import Button from "./ui/Button";
import Link from "next/link";
const Footer = () => {
  return (
    <>
      <section className="footer-sec">
        <div className="footer-1">
          <h1>Code & Connect</h1>
          <p>
            Empowering coders to learn, collaborate, and grow. Join our
            community and connect with like-minded developers.
          </p>

          <div className="footer-follow-icon">
            <div className="follow-icon">
              <Image
                src="/images/social1.png"
                alt="icon-img"
                width={500}
                height={500}
                className="img"
              />
            </div>
            <div className="follow-icon">
              <Image
                src="/images/social2.png"
                alt="icon-img"
                width={500}
                height={500}
                className="img"
              />
            </div>
            <div className="follow-icon">
              <Image
                src="/images/social3.png"
                alt="icon-img"
                width={500}
                height={500}
                className="img"
              />
            </div>
            <div className="follow-icon">
              <Image
                src="/images/social4.png"
                alt="icon-img"
                width={500}
                height={500}
                className="img"
              />
            </div>
          </div>
          <div className="back-to-home">
            <li><Link href="/">Back to Home</Link></li>
          </div>
        </div>
        <div className="footer-2">
          <h1>Services</h1>
          <div className="border1 footer-border"></div>
          <ul>
            <li>Web Design/Development</li>
            <li>App Development</li>
            <li>UI/UX Design</li>
            <li>HubSpot Integration</li>
            <li>Email Marketing</li>
            <li>Website Migration</li>
          </ul>
        </div>
        <div className="footer-3">
          <h1>Career</h1>
          <div className="border1 footer-border"></div>
          <div className="footer-card-container">
            <div className="footer-card">
              <div className="footer-img">
                <Image
                  src="/images/career1.png"
                  alt="footer-img"
                  width={500}
                  height={500}
                  className="img"
                />
              </div>
              <div className="footer-info-content">
                <h3>ReactJs Dev.</h3>
                <p>1-5 Years aof Exp.</p>
              </div>
            </div>
            <div className="footer-card">
              <div className="footer-img">
                <Image
                  src="/images/career2.png"
                  alt="footer-img"
                  width={500}
                  height={500}
                  className="img"
                />
              </div>
              <div className="footer-info-content">
                <h3>ReactJs Dev.</h3>
                <p>1-5 Years aof Exp.</p>
              </div>
            </div>
            <div className="footer-card">
              <div className="footer-img">
                <Image
                  src="/images/career3.png"
                  alt="footer-img"
                  width={500}
                  height={500}
                  className="img"
                />
              </div>
              <div className="footer-info-content">
                <h3>ReactJs Dev.</h3>
                <p>1-5 Years aof Exp.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-4">
          <h1>Subscribe Us</h1>
          <div className="border1 footer-border"></div>
          <p>
            Stay updated with the latest coding tips, tutorials, and community
            news. Subscribe to our newsletter and never miss an update!
          </p>
          <form action="" className="footer-form">
            <input type="email" placeholder="Email" />
            <Button buttonText="Submit" />
          </form>
        </div>
      </section>
    </>
  );
};

export default Footer;
