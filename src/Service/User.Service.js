const domain = "http://localhost:5000";
export async function register_user({ name, email, password }, cb) {
  const url = `${domain}/user/register`;
  const data = await fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  });
  const res = await data.json();
  if (res?.success) {
    return cb(res, null);
  } else {
    return cb(null, res);
  }
}
export async function login({ name, email, password }, cb) {
  const url = `${domain}/user/login`;
  const data = await fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  });
  const res = await data.json();
  if (res?.success) {
    return cb(res, null);
  } else {
    return cb(null, res);
  }
}
export async function Posts(cb) {
  const url = `${domain}/image?limit=10`;
  const data = await fetch(url, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });
  const res = await data.json();
  if (res?.success) {
    return cb(res, null);
  } else {
    return cb(null, res);
  }
}
export async function UploadPost(image, cb) {
  const url =
    "https://api.imgbb.com/1/upload?key=428f38fa6e1791861b8063f4d0bb8ab1";
  const fd = new FormData();
  fd.append("image", image);
  const data = await fetch(url, {
    method: "POST",
    body: fd,
  });
  const res = await data.json();
  if (res?.success) {
    return cb(res, null);
  } else {
    return cb(null, res);
  }
}
export async function UploadPostData(image_url, cb) {
  const url = `${domain}/image`;
  const data = await fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      token: localStorage.getItem("token"),
    },
    body: JSON.stringify({ image_url }),
  });
  const res = await data.json();
  if (res?.success) {
    return cb(res, null);
  } else {
    return cb(null, res);
  }
}
