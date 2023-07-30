import React, { useCallback, useEffect, useState } from "react";
import { Posts } from "../../Service/User.Service";
import Card from "../../Components/Card/Card";
import style from "./Home.module.css";
import Loader from "../../Components/Loader/Loader";
const Home = () => {
  const [Post, setPosts] = useState([]);
  const [Loading, setLoading] = useState(true);
  const FetchPosts = async () => {
    await Posts((res, err) => {
      setLoading(false);
      if (res) {
        setPosts(res?.Post);
        console.log(res);
      }
    });
  };
  useEffect(() => {
    FetchPosts();
  }, []);
  return (
    <>
      {Loading ? (
        <Loader />
      ) : (
        <div className={style["main-container"]}>
          {Post?.map((each, idx) => {
            return (
              <Card
                img={each?.image}
                like={each?.likes?.length}
                date={each?.date}
                blur_image={each?.preview_image}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default Home;
