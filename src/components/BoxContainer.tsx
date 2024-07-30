import React from "react";
import LinearProgress from "@mui/material/LinearProgress";

interface BoxContainerProps {
  title?: string;
  subTitle?: string;
  isVisibleDot?: boolean;
  isVisiableProgressBar?: boolean;
}

const BoxContainer: React.FC<BoxContainerProps> = ({
  title,
  subTitle,
  isVisibleDot,
  isVisiableProgressBar,
}) => {
  return (
    <div className="boxBody">
      {isVisibleDot ? (
        <>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <div className="greenDot"></div>
          </div>
          <h1>{title}</h1>
          <div className="subTitle">{subTitle}</div>
          <div
            style={{
              display: "flex",
              justifyContent: "start",
              gap: "10px",
              marginTop: "50px",
            }}
          >
            <div className="emptyDot"></div>
            <div className="emptyDot"></div> <div className="emptyDot"></div>{" "}
            <div className="emptyDot"></div> <div className="emptyDot"></div>{" "}
          </div>
        </>
      ) : isVisiableProgressBar ? (
        <>
          <h1>
            {title}
            <span style={{ fontSize: 20, color: "#8A9099" }}>/10000</span>
          </h1>
          <div className="subTitle">{subTitle}</div>
          <div
            style={{
              marginTop: "50px",
            }}
          >
            <LinearProgress
              variant="determinate"
              value={20}
              sx={{
                height: 12,
                borderRadius: 12,
                backgroundColor: "#242528",
                "& .MuiLinearProgress-bar": {
                  borderRadius: 12,
                  backgroundColor: "white",
                },
                border: "2px solid white",
              }}
            />
          </div>
        </>
      ) : (
        <>
          <h1>{title}</h1>
          <div className="subTitle">{subTitle}</div>
        </>
      )}
    </div>
  );
};

export default BoxContainer;
