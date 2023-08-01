import React, { useEffect, useState } from "react";
import Create from "./CreateContext";
const State = ({ children }) => {
  const [AlertMessage, setAlertMessage] = useState("Hello World! Alert");
  const [ShowAlert, setShowAlert] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  }, [ShowAlert]);
  return (
    <Create.Provider
      value={{ AlertMessage, setAlertMessage, ShowAlert, setShowAlert }}
    >
      {children}
    </Create.Provider>
  );
};

export default State;
