import React, { useContext } from "react";
import Create from "../Context/CreateContext";
const useContextHook = () => {
  const ctx = useContext(Create);
  return ctx;
};

export default useContextHook;
