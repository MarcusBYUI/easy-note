import { useEffect, useState } from "react";
import { Portal } from "react-portal";
import { useDispatch } from "react-redux";
import { notificationActions } from "../../store/notification/notification";

import styles from "./message.module.css";

export const Message = ({ loading, message }) => {
  const [appear, setAppear] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    if (message) {
      const timeout = setTimeout(() => {
        setAppear(false);
        dispatch(notificationActions.setNotify(false));
        dispatch(notificationActions.setMessage(""));
      }, 6500);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [message, loading, dispatch]);

  const ifloading = (
    <Portal>
      <div className={`${styles.messagebody} ${appear ? styles.appear : ""}`}>
        <div className={`${styles["lds-dual-ring"]} ${styles.white}`}></div>
      </div>
    </Portal>
  );

  const ifmessage = (
    <Portal>
      <div
        className={`${styles.messagebody} ${styles.whitebody} ${
          appear ? styles.appear : ""
        }`}
      >
        <p>{message}</p>
        <div className={styles.linearactivity}>
          <div className={styles.indeterminate}></div>
        </div>
      </div>
    </Portal>
  );

  return (
    <div className={styles.overlay}>{loading ? ifloading : ifmessage}</div>
  );
};
