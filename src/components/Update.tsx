import React from "react";
import Card from "./Card";

interface ItemProps {
  comments: string;
  mensage: string;
}

interface UpdateProps {
  data: ItemProps[];
}

const Update: React.FC<UpdateProps> = ({ data }) => {
  return (
    <div className="updateContainer">
      <div
        style={{
          color: "#000000",
          fontWeight: "bold",
          fontSize: "18px",
          display: "flex",
          gap: "10px",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        Atualizações
        <div
          style={{
            color: "white",
            backgroundColor: "red",
            width: "28px",
            height: "20px",
            borderRadius: 15,
            textAlign: "center",
          }}
        >
          3
        </div>
      </div>

      <div
        style={{
          color: "#FF5D55",
          fontWeight: "bold",
          fontSize: "12px",
          borderBottom: "5px solid #FF5D55",
          width: "40px",
          marginBottom: "10px",
        }}
      >
        Todas
      </div>
      <div
        style={{
          color: "#8A9099",
          fontSize: "14px",
          marginBottom: "10px",
        }}
      >
        Hoje
      </div>
      {data.map((item: any) => (
        <Card title={item.comments} subTitle={item.mensage} />
      ))}
    </div>
  );
};

export default Update;
