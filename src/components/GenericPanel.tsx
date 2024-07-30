import React from "react";
import Button from "./Button";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import EmailIcon from "@mui/icons-material/Email";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

interface GenericPanel {
  title?: string;
  subTitle?: string;
  complement?: number;
}

const GenericPanel: React.FC<GenericPanel> = ({
  title,
  subTitle,
  complement,
}) => {
  return (
    <>
      {title === "AUDIÊNCIA" ? (
        <div className="genericPanelBody">
          <div className="genericPanelHeader">
            <ContactPageIcon />
            {title}
          </div>
          <div className="genericPanelContent">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "200px",
              }}
            >
              <div>
                <div style={{ fontSize: 38, fontWeight: "bold" }}>
                  {subTitle}
                </div>
                <div style={{ fontSize: 14, fontWeight: "bold" }}>Contatos</div>
              </div>
              <div>
                <ChevronRightIcon />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="genericPanelBody" style={{ height: "186px" }}>
          <div className="genericPanelHeader">
            <EmailIcon />
            {title}
          </div>

          <div className="" style={{ height: "176px" }}>
            <div className="genericPanelContent">
              <div>
                <div style={{ fontSize: 38, fontWeight: "bold" }}>
                  {subTitle}
                  <span style={{ fontSize: 20, color: "#8A9099" }}>
                    /{complement}
                  </span>
                </div>
                <div style={{ fontSize: 14, fontWeight: "bold" }}>
                  Disparos feitos
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "center",
                marginBottom: "10px",
              }}
            >
              <Button
                title="IR PARA CAMPANHAS"
                style={{
                  height: 38,
                  fontWeight: "bold",
                }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GenericPanel;
