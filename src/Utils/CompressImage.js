export async function Compress(image, quality) {
  const canvas = document.querySelector(".canvas");
  const ctx = canvas.getContext("2d");
  const imageUrl = await readFile(image);
  const NewImage = new Image();
  NewImage.src = imageUrl;
  return new Promise((resolve) => {
    NewImage.onload = () => {
      ctx.drawImage(NewImage, 0, 0, canvas.width, canvas.height);
      const CompressedImage = canvas.toDataURL("image/png", quality);
      resolve(CompressedImage);
    };
  });
}
function readFile(file) {
  let Mypromise = new Promise((resolve, reject) => {
    const Reader = new FileReader();
    Reader.onload = (e) => {
      resolve(e.target.result);
    };
    Reader.readAsDataURL(file);
  });
  return Mypromise;
}
