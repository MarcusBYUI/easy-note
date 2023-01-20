import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./loader.module.css";
import { notificationActions } from "../../store/notification/notification";

const Loader = () => {
  const { message, display: state } = useSelector(
    (state) => state.notification
  );
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (message !== "Processing...") {
      setLoaded(true);

      setTimeout(() => {
        dispatch(notificationActions.setMessage("Processing..."));
        setLoaded(false);
        dispatch(notificationActions.setDisplay(false));
      }, 2000);
    }
  }, [state, message, dispatch]);
  return (
    <div className={`${state ? styles.container : styles.close} `}>
      <div
        className={`${styles["circle-loader"]} ${
          loaded ? styles["load-complete"] : undefined
        }`}
      >
        <div
          className={`${loaded ? styles.checkmark : styles.view} ${
            styles.draw
          }`}
        ></div>
      </div>
      <p>{message}</p>
    </div>
  );
};

export default Loader;
