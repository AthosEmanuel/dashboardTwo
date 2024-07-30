import React from "react";
import BoxColored from "./BoxColored";
import GenericPanel from "./GenericPanel";
import Button from "./Button";
import Carousel from "./Carousel";
import { HomeDataProps } from "@/services/api";

interface PanelProps extends HomeDataProps {}

const items = [
  { title: "EM CAMPO", subTitle: "Título da pesquisa" },
  { title: "RASCUNHO", subTitle: "Pesquisa sem titulo" },
  { title: "EM CAMPO", subTitle: "Título da pesquisa" },
  { title: "EM CAMPO", subTitle: "Título da pesquisa" },
  { title: "VER TODAS", subTitle: "" },
];

const Panel: React.FC<PanelProps> = ({ credits, audience }) => {
  return (
    <div className="panelContainer">
      <div>
        <Carousel items={items} />
      </div>
      <div className="coloredBoxContainer">
        <div className="coloredBoxBody">
          <div style={{ color: "#000000", fontSize: "12px" }}>
            CRÉDITOS PARA PAINEL
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <BoxColored
                title={credits?.available.toString()}
                subTitle="CRÉDITOS DISPONIVEIS"
                style={1}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <BoxColored
                title={credits?.running.toString()}
                subTitle="CRÉDITOS EM CAMPO "
                style={2}
              />
              <BoxColored
                title={credits?.reserved.toString()}
                subTitle="CRÉDITOS RESERVADOS"
              />
            </div>
          </div>
          <Button
            title="GERENCIAR CRÉDITOS"
            style={{
              color: "#000000",
              backgroundColor: "#FFFFFF",
              border: "1px solid #C9D1D6",
              width: "300px ",
              fontWeight: "bolder",
            }}
          />
        </div>

        <div className="genericPanelContainer">
          <GenericPanel
            title="AUDIÊNCIA"
            subTitle={audience?.contacts.toString()}
          />
          <GenericPanel
            title="DISPAROS"
            subTitle={audience?.sended.toString()}
            complement={audience?.balance}
          />
        </div>
      </div>
    </div>
  );
};

export default Panel;
