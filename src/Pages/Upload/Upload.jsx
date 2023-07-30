import React, { useState } from "react";
import style from "./Upload.module.css";
import { UploadPost, UploadPostData } from "../../Service/User.Service";
import { useNavigate } from "react-router-dom";
import { Compress } from "../../Utils/CompressImage";
const Upload = () => {
  const navigate = useNavigate();
  const [Preview, setPreview] = useState("");
  const [PreviewLoading, setPreviewLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [CompressImage, setCompressImage] = useState(false);
  const ConvertToFile = async (image_url) => {
    const url = image_url;
    const data = await fetch(url);
    const blob = data.blob();
    const to_file = new File([blob], "image_share.png", { type: "image/png" });
    setFile(to_file);
  };
  const HandelChange = async (e) => {
    setPreviewLoading(true);
    if (CompressImage) {
      const Compressed = await Compress(e.target.files[0], 0.5);
      setPreview(Compressed);
      setPreviewLoading(false);
      await ConvertToFile(Compressed);
      return;
    }
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
      await UploadPost(file, async (res, err) => {
        if (err) return;
        await UploadPostData(res?.data?.display_url, (res, err) => {
          alert("Post Uploaded SuccessFully");
          navigate("/");
        });
      });
    }
  };
  return (
    <>
      <canvas
        className="canvas"
        style={{ opacity: "0", position: "absolute", zIndex: "-1" }}
      ></canvas>
      <div className={style["main-container"]}>
        <div className={style["input-container"]}>
          <input type="file" accept="image/*" onChange={HandelChange} />
          {/* <label htmlFor="">
            Compress Image
            <input
              type="checkbox"
              value={CompressImage}
              onChange={(e) => {
                setCompressImage(e.target.checked);
              }}
            />
          </label> */}
        </div>
        <div className={style["upload-container"]}>
          {PreviewLoading ? (
            <h1 className={style["loading"]}>Loading Image...</h1>
          ) : (
            <img
              src={Preview}
              className={style["preview-image"]}
              alt="preview"
            />
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
    </>
  );
};

export default Upload;
