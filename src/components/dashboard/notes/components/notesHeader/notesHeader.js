import React from "react";

import styles from "./notesHeader.module.css";
import { useDispatch } from "react-redux";
import { noteSliceActions } from "../../../../../store/note/note";
const NotesHeader = ({ type }) => {
  const dispatch = useDispatch();
  return (
    <section className={styles.header}>
      <h2>Hi, Marcus 👋🏾</h2>
      <div className={`${styles.search} ${type ? styles.none : ""}`}>
        <img src={require("../../../../../assets/search.png")} alt="search" />
        <input
          type="text"
          placeholder="Search"
          onChange={(e) =>
            dispatch(noteSliceActions.setSearchParam(e.target.value))
          }
        />
      </div>
    </section>
  );
};

export default NotesHeader;
