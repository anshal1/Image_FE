import React, { useCallback, useEffect } from "react";
import { Posts } from "../../Service/User.Service";

const Home = () => {
  const FetchPosts = async () => {
    await Posts((res, err) => {
      if (res) {
        console.log(res);
      }
    });
  };
  useEffect(() => {
    FetchPosts();
  }, []);
  return <div>Home</div>;
};

export default Home;
