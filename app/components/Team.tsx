import Image from "next/image";
import React from "react";
import "../globals.css";
import 'animate.css';
const Team = () => {
  return (
    <>
      <section>
        <div className="team animate__animated animate__fadeInUp animate__delay-5s">
          <h3>Team</h3>
          <h1>Our Leaders</h1>
          <div className="team-card-container">
            <div className="leader-card">
              <div className="team-img">
                <Image
                  src="/images/team1.jpg"
                  alt="team-img"
                  width={500}
                  height={500}
                  className="img"
                />
              </div>

              <h2>Larry F. Burnett</h2>
              <p>CEO</p>
            </div>
            <div className="leader-card">
              <div className="team-img">
                <Image
                  src="/images/team3.jpg"
                  alt="team-img"
                  width={500}
                  height={500}
                  className="img"
                />
              </div>

              <h2>Meghan J. Webb</h2>
              <p>CTO</p>
            </div>
            <div className="leader-card">
              <div className="team-img">
                <Image
                  src="/images/team2.jpg"
                  alt="team-img"
                  width={500}
                  height={500}
                  className="img"
                />
              </div>

              <h2>John Lee</h2>
              <p>CFO</p>
            </div>
            <div className="leader-card">
              <div className="team-img">
                <Image
                  src="/images/team 4.jpg"
                  alt="team-img"
                  width={500}
                  height={500}
                  className="img"
                />
              </div>
              <h2>Diana H. Williams</h2>
              <p>COO</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
