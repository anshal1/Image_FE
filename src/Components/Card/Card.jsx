import React, { useState } from "react";
import style from "./Card.module.css";
import FullScreenImage from "../FullScreenImage/FullScreenImage";
const Card = ({ img }) => {
  const [ShowFullScreenImage, setShowFullScreenImage] = useState(false);
  const handleFulScreen = () => {
    ShowFullScreenImage
      ? setShowFullScreenImage(false)
      : setShowFullScreenImage(true);
  };
  const CloseFullScreen = () => {
    setShowFullScreenImage(false);
  };
  return (
    <>
      <FullScreenImage
        show={ShowFullScreenImage}
        image={img}
        handleClose={CloseFullScreen}
      />
      <div className={style["main-card-container"]}>
        <img src={img} alt="" onClick={handleFulScreen} />
        <span className={style["like"]} role="button">
          23
        </span>
        <span className={style["time"]}>3 hours ago.</span>
      </div>
    </>
  );
};

export default Card;
