import React, { useState } from "react";
import style from "./Card.module.css";
import FullScreenImage from "../FullScreenImage/FullScreenImage";
const Card = ({ img, like, date, blur_image, Like, Dislike, user }) => {
  const [ShowFullScreenImage, setShowFullScreenImage] = useState(false);
  const [ShowMainImage, setShowmainImage] = useState("main-image");
  const [HideBlurImage, setHideBlurImage] = useState("blur-image");
  const FormatDate = (_Date) => {
    if (!_Date) return;
    const NewDate = new Date(_Date);
    const Format = new Intl.DateTimeFormat("en-In", {
      month: "short",
      year: "numeric",
      day: "numeric",
      hour: "numeric",
    });
    return Format.format(NewDate);
  };
  const handleFulScreen = () => {
    ShowFullScreenImage
      ? setShowFullScreenImage(false)
      : setShowFullScreenImage(true);
  };
  const CloseFullScreen = () => {
    setShowFullScreenImage(false);
  };
  const ShowImage = () => {
    setShowmainImage("main-image-show");
    setHideBlurImage("blur-image-hide");
  };
  return (
    <>
      <FullScreenImage
        show={ShowFullScreenImage}
        image={img}
        handleClose={CloseFullScreen}
      />
      <div className={style["main-card-container"]} data-card="true">
        <span
          className={style["full-screen-button"]}
          role="button"
          onClick={handleFulScreen}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="28"
            viewBox="0 -960 960 960"
            width="28"
          >
            <path d="M200-200v-193h60v133h133v60H200Zm0-367v-193h193v60H260v133h-60Zm367 367v-60h133v-133h60v193H567Zm133-367v-133H567v-60h193v193h-60Z" />
          </svg>
        </span>
        <img src={blur_image} className={style[HideBlurImage]} />
        <img
          src={img}
          alt=""
          className={style[ShowMainImage]}
          onLoad={ShowImage}
        />
        <span
          className={style["like"]}
          role="button"
          onClick={like.includes(user?._id) ? Dislike : Like}
        >
          {like?.length}{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            viewBox="0 -960 960 960"
            width="16"
            fill="#fff"
          >
            <path d="m480-121-41-37q-105.768-97.121-174.884-167.561Q195-396 154-451.5T96.5-552Q80-597 80-643q0-90.155 60.5-150.577Q201-854 290-854q57 0 105.5 27t84.5 78q42-54 89-79.5T670-854q89 0 149.5 60.423Q880-733.155 880-643q0 46-16.5 91T806-451.5Q765-396 695.884-325.561 626.768-255.121 521-158l-41 37Zm0-79q101.236-92.995 166.618-159.498Q712-426 750.5-476t54-89.135q15.5-39.136 15.5-77.72Q820-709 778-751.5T670.225-794q-51.524 0-95.375 31.5Q531-731 504-674h-49q-26-56-69.85-88-43.851-32-95.375-32Q224-794 182-751.5t-42 108.816Q140-604 155.5-564.5t54 90Q248-424 314-358t166 158Zm0-297Z" />
          </svg>
        </span>
        <span className={style["time"]}>{FormatDate(date)}</span>
      </div>
    </>
  );
};

export default Card;
