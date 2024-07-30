import React from "react";

interface ButtonProps {
  title?: string;
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({ title, style }) => {
  return (
    <>
      <div>
        <button className="buttonBody" style={style}>
          {title}
        </button>
      </div>
    </>
  );
};

export default Button;
