import React from "react";

import styles from "./notesCard.module.css";

const NotesCard = ({ data }) => {
  return (
    <div className={styles.container} style={{ background: data.theme }}>
      <h3>{data.title}</h3>
      <p>{data.note.slice(0, 150)}...</p>
      <div>
        <span>{data.date}</span>
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
