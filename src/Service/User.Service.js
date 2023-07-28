const domain = "http://localhost:5000";
export async function register({ name, email, password }) {}
export async function Posts(cb) {
  const url = `${domain}/image`;
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
