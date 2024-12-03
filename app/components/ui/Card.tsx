import Image from "next/image";
import React from "react";
import "../../globals.css";
interface TCard {
  src: string;
  heading: string;
  description: string;
}
const Card = ({ src, heading, description }: TCard) => {
  return (
    <>
      <div className="card">
        <div className="icon-bg">
          <Image
            src={src}
            alt="card-img"
            className="card-img"
            width={500}
            height={500}
          />
        </div>
        <h1>{heading}</h1>
        <div className="border">
          <div className="border1"></div>
          <div className="border2"></div>
        </div>
        <p>{description}</p>
      </div>
    </>
  );
};

export default Card;
