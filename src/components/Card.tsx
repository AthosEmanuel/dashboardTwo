import React from "react";
import MessageIcon from "@mui/icons-material/Message";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import { Button } from "@mui/material";

interface BoxGreyProps {
  title?: string;
  subTitle?: string;
  isVisibleDot?: boolean;
}

const Card: React.FC<BoxGreyProps> = ({ title, subTitle }) => {
  return (
    <div className="cardContainer">
      <div style={{ display: "flex", justifyContent: "end" }}>
        <div className="redDot"></div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <MessageIcon style={{ fontSize: 14 }} />
        <div style={{ fontSize: "12px" }}>{title} NOVOS COMENTÁRIOS</div>
      </div>
      <div style={{ display: "flex", marginTop: "10px" }}>
        {subTitle && <div dangerouslySetInnerHTML={{ __html: subTitle }} />}
        <Button
          size="small"
          sx={{
            minWidth: "auto",
            border: " 1px solid #c9d1d6",
            color: "#000000",
          }}
        >
          <TrendingFlatIcon />
        </Button>
      </div>
    </div>
  );
};

export default Card;
