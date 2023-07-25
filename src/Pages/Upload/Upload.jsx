import React, { useState } from "react";
import style from "./Upload.module.css";
const Upload = () => {
  const [Preview, setPreview] = useState("");
  const [PreviewLoading, setPreviewLoading] = useState(false);
  const HandelChange = (e) => {
    setPreview("");
    setPreviewLoading(true);
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.onload = (e) => {
      setPreviewLoading(false);
      setPreview(e.target.result);
    };
    fileReader.onerror = () => {
      alert("Something Went Wrong");
    };
    fileReader.readAsDataURL(file);
  };
  return (
    <div className={style["main-container"]}>
      <div className={style["input-container"]}>
        <input type="file" accept="image/*" onChange={HandelChange} />
      </div>
      <div className={style["upload-container"]}>
        {PreviewLoading ? (
          <h1 className={style["loading"]}>Loading Image...</h1>
        ) : (
          <img src={Preview} className={style["preview-image"]} alt="preview" />
        )}
      </div>
      <div className={style["buttons"]}>
        <button className="button-global" disabled={Preview ? false : true}>
          Share
        </button>
      </div>
    </div>
  );
};

export default Upload;
