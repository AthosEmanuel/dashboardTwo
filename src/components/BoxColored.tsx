import React from "react";

interface BoxColoredProps {
  title?: string;
  subTitle?: string;
  style?: number;
}

const BoxColored: React.FC<BoxColoredProps> = ({ title, subTitle, style }) => {
  let borderColor = "";
  let color = "";
  let width = "";
  let height = "";

  if (style === 1) {
    borderColor = "#0AD2A5";
    color = "#000000";
    width = "275px";
  } else if (style === 2) {
    borderColor = "#C7B2FF";
    color = "#000000";
    width = "110px";
  }

  return (
    <div className="boxColoredBody" style={{ borderColor, color, width, height }}>
      <div style={{ fontWeight: "bold", fontSize: 38 }}>{title}</div>
      <div style={{ maxWidth: 100 }}>{subTitle}</div>
    </div>
  );
};

export default BoxColored;
