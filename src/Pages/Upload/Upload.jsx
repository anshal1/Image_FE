import React, { useState } from "react";
import style from "./Upload.module.css";
import { UploadPost, UploadPostData } from "../../Service/User.Service";
import { useNavigate } from "react-router-dom";
const Upload = () => {
  const navigate = useNavigate();
  const [Preview, setPreview] = useState("");
  const [PreviewLoading, setPreviewLoading] = useState(false);
  const [File, setFile] = useState(null);
  const HandelChange = (e) => {
    setPreview("");
    setFile(e.target.files[0]);
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
  const UploadImage = async () => {
    if (!localStorage.getItem("token")) {
      alert("Please login to continue");
      navigate("/login");
      return;
    } else {
      await UploadPost(File, async (res, err) => {
        if (err) return;
        await UploadPostData(res?.data?.display_url, (res, err) => {
          alert("Post Uploaded SuccessFully");
          navigate("/");
        });
      });
    }
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
        <button
          className="button-global"
          disabled={Preview ? false : true}
          onClick={UploadImage}
        >
          Share
        </button>
      </div>
    </div>
  );
};

export default Upload;
