import React from "react";

import styles from "./notesHeader.module.css";
const NotesHeader = () => {
  return (
    <section className={styles.header}>
      <h2>Hi, Marcus 👋🏾</h2>
      <div className={styles.search}>
        <img src={require("../../../../../assets/search.png")} alt="search" />
        <input type="text" placeholder="Search" />
      </div>
    </section>
  );
};

export default NotesHeader;
