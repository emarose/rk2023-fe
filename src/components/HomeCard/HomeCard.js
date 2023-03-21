import React from "react";
import "./HomeCard.css";
import Typography from "antd/es/typography/Typography";

const HomeCard = ({ icon, title, navigate }) => {
  return (
    <>
      <div className="HomeCardWrapper">
        <div className="homeCardIcon">{icon}</div>
        <Typography className="homeCardTitle">{title}</Typography>
      </div>
    </>
  );
};

export default HomeCard;
