import React from "react";
import BoxContainer from "./BoxContainer";
import { HomeDataProps } from "@/services/api";
import BoxGrey from "./BoxGray";

const SubHeader: React.FC<HomeDataProps> = ({ researches, audience }) => {
  return (
    <div className="subHeaderContainer">
      <div
        style={{
          padding: "10px",
          marginTop: "20px",
          marginLeft: "3%",
        }}
      >
        <div style={{ fontSize: "15px" }}>Resumo Mensal</div>
        <div style={{ fontWeight: "bold", fontSize: "22px" }}>
          Janeiro, 2023
        </div>
      </div>
      <div className="subHeaderCardsBody">
        <div className="cardsSubHeaderBody">
          <BoxContainer
            title={researches?.running}
            subTitle="Pesquisas em Campo"
            isVisibleDot={true}
          />
          <BoxContainer
            title={researches?.scripting.toString()}
            subTitle="Pesquisas em Roterização"
          />
          <BoxContainer
            title={audience?.sended.toString()}
            subTitle="DISPAROS FEITOS"
            isVisiableProgressBar={true}
          />
        </div>
        <BoxGrey />
      </div>
    </div>
  );
};

export default SubHeader;
