import { createContext, useState } from "react";

const CreateContext = createContext();
import React from "react";

const Context = (props) => {
  const [ShowAlert, setShowAlert] = useState(false);
  const [AlertMessage, setAlertMessage] = useState("");
  return (
    <CreateContext.Provider
      value={{
        ShowAlert,
        setShowAlert,
        AlertMessage,
        setAlertMessage,
      }}
    >
      {props.children}
    </CreateContext.Provider>
  );
};

export default Context;
