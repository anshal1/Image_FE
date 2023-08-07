import React, { useCallback, useEffect, useState } from "react";
import { Posts, dislike, like } from "../../Service/User.Service";
import Card from "../../Components/Card/Card";
import style from "./Home.module.css";
import Loader from "../../Components/Loader/Loader";
import NextPageLoader from "../../Components/Loader/NextPageLoader";
const Home = ({ user }) => {
  const [Post, setPosts] = useState([]);
  const [Page, setPage] = useState(1);
  const [isNextPage, setisNextPage] = useState(null);
  const [Loading, setLoading] = useState(true);
  const [NextPageIs_Loading, setNextPageIs_Loading] = useState(false);
  const FetchPosts = async () => {
    if (Page > 1) setNextPageIs_Loading(true);
    await Posts(Page, (res, err) => {
      setLoading(false);
      if (res) {
        setNextPageIs_Loading(false);
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
  const Like = async (id) => {
    await like(id, (res, err) => {
      if (res) {
        const newPosts = Post.map((each) => {
          if (each?._id === res?.Post?._id) {
            return res?.Post;
          } else {
            return each;
          }
        });
        setPosts(newPosts);
      }
    });
  };
  const Dislike = async (id) => {
    await dislike(id, (res, err) => {
      if (res) {
        const newPosts = Post.map((each) => {
          if (each?._id === res?.Post?._id) {
            return res?.Post;
          } else {
            return each;
          }
        });
        setPosts(newPosts);
      }
    });
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
                key={idx}
                img={each?.image}
                like={each?.likes}
                date={each?.date}
                blur_image={each?.preview_image}
                Like={() => {
                  Like(each?._id);
                }}
                Dislike={() => {
                  Dislike(each?._id);
                }}
                user={user}
              />
            );
          })}
        </div>
      )}
      <br />
      {NextPageIs_Loading && <NextPageLoader />}
    </>
  );
};

export default Home;
