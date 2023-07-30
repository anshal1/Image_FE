import React, { useCallback, useEffect, useState } from "react";
import { Posts } from "../../Service/User.Service";
import Card from "../../Components/Card/Card";
import style from "./Home.module.css";
import Loader from "../../Components/Loader/Loader";
const Home = () => {
  const [Post, setPosts] = useState([]);
  const [Page, setPage] = useState(1);
  const [isNextPage, setisNextPage] = useState(null);
  const [Loading, setLoading] = useState(true);
  const FetchPosts = async () => {
    await Posts(Page, (res, err) => {
      setLoading(false);
      if (res) {
        setPosts(Post.concat(res?.Post));
        setisNextPage(res?.NextPage);
      }
    });
  };
  const Infinite_scrolling = async () => {
    const Cardpromise = new Promise((resolve) => {
      const Card = document.querySelectorAll("[data-card='true']");
      resolve(Card);
    });
    const AllCard = await Cardpromise;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && isNextPage) {
          console.log("last");
          setPage(Page + 1);
          obs.unobserve(entries[0].target);
        }
      },
      {
        threshold: 0.7,
      }
    );
    obs.observe(AllCard[AllCard.length - 1]);
  };
  useEffect(() => {
    FetchPosts();
  }, [Page]);
  useEffect(() => {
    Infinite_scrolling();
  }, [Post]);
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
