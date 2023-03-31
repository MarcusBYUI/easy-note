import React from "react";

import styles from "./notesCard.module.css";
import { useDispatch } from "react-redux";
import { noteSliceActions } from "../../../../../store/note/note";

const NotesCard = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => {
        dispatch(noteSliceActions.setCurrent(data));
        dispatch(noteSliceActions.setUpdate(true));
      }}
      className={styles.container}
      style={{ background: data.theme }}
    >
      <h3>{data.title}</h3>
      <p>{data.note.slice(0, 150)}...</p>
      <div>
        <span>{new Date(data.date).toLocaleString()}</span>
        {data.collaborators ? (
          <img
            src={require("../../../../../assets/avatar.png")}
            alt="collaborators"
          />
        ) : undefined}
      </div>
    </div>
  );
};

export default NotesCard;
