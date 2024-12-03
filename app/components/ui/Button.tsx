import React from "react";
import "../../globals.css";

interface Tbutton {
  buttonText: string;
}
const Button = ({ buttonText }: Tbutton) => {
  return (
    <>
      <div className="btn">
        <button>{buttonText}</button>
      </div>
    </>
  );
};

export default Button;
