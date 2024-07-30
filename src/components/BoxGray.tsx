import React from "react";
import Button from "./Button";

interface BoxGreyProps {
  title?: string;
  subTitle?: string;
  isVisibleDot?: boolean;
}

const BoxGrey: React.FC<BoxGreyProps> = ({ subTitle }) => {
  return (
    <div className="boxGreyBody">
      <img src="./star.svg" width={"90px"} height={"90px"} alt="star" />
      <label style={{ color: "#000000", fontWeight: "bold" }}>
        Pronto para conhecer o seu cliente ?
      </label>
      <div className="subTitle">{subTitle}</div>

      <Button title="NOVA PESQUISA +" />
    </div>
  );
};

export default BoxGrey;
