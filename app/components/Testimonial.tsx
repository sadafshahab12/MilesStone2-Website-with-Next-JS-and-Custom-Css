import Image from "next/image";
import React from "react";
import "../globals.css";
import 'animate.css';
const Testimonial = () => {
  return (
    <>
      <section className="testimonial-sec animate__animated animate__fadeInDown animate__delay-2s">
        <div className="testimonial">
          <h3>From our Customers </h3>
          <h1>Testimonials</h1>
          <div className="testimonia-card-container">
            <div className="testimonial-card">
              <div className="testimonial-img">
                <Image
                  src="/images/tetsi2.jpg"
                  alt="testi-img"
                  width={500}
                  height={500}
                  className="img"
                />
              </div>
              <div className="testimonial-content">
                <p>
                  The app developed by Code & Connect has transformed our
                  customer interactions. {`It’s`} user-friendly, reliable, and
                  exactly what we needed to grow our business.
                </p>
                <h2>James T</h2>
                <h4>Founder of GreenWave Solutions</h4>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-img">
                <Image
                  src="/images/testi1.jpg"
                  alt="testi-img"
                  width={500}
                  height={500}
                  className="img"
                />
              </div>
              <div className="testimonial-content">
                <p>
                  Code & Connect delivered a stunning website with an intuitive
                  user experience that significantly boosted our customer
                  engagement. Their team was professional, responsive, and fully
                  dedicated to our success.
                </p>
                <h2>Sarah M.</h2>
                <h4>CEO of InnovateTech</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
