import React from "react";
import Button from "./ui/Button";
import Image from "next/image";
import "../globals.css";
import 'animate.css';
const Contact = () => {
  return (
    <>
      <section className="contact-sec animate__animated  animate__rotateInDownLeft animate__delay-2s ">
        <div className="contact">
          <h3>Get In Touch </h3>
          <h1>Hey! {`Let’s`} Talk</h1>
        </div>
        <div className="contact-form animate__animated animate__fadeInDown animate__delay-2s ">
          <form action="">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Phone" />
            <textarea placeholder="Your Message" rows={8} />
            <Button buttonText="Send Now" />
          </form>
          <div className="contact-info animate__animated animate__fadeInDown animate__delay-5s ">
            <div className="contact-card-container">
              <div className="contact-card">
                <div className="contact-img">
                  <Image
                    src="/images/contact1.png"
                    alt="contact-img"
                    width={500}
                    height={500}
                    className="img"
                  />
                </div>
                <div className="contact-info-content">
                  <h3>Call Anytime</h3>
                  <p>+ 92 23678 27867</p>
                  <p>+ 92 67678 92878</p>
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-img">
                  <Image
                    src="/images/contact2.png"
                    alt="contact-img"
                    width={500}
                    height={500}
                    className="img"
                  />
                </div>
                <div className="contact-info-content">
                  <h3>Send Email</h3>
                  <p>sadafshahab123@yahoo.com</p>
                  <p>sadafshahabsr12@gmail.com</p>
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-img">
                  <Image
                    src="/images/contact3.png"
                    alt="contact-img"
                    width={500}
                    height={500}
                    className="img"
                  />
                </div>
                <div className="contact-info-content">
                  <h3>Visit US</h3>
                  <p>20 Island Park Road,</p>
                  <p>New Jearsy, New York, USA</p>
                </div>
              </div>
            </div>
            <div className="follow">
              <h1>Follow us</h1>
              <div className="follow-icon-container">
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
