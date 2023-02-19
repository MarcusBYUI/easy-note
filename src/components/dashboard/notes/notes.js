import React, { useEffect, useState } from "react";

import NotesHeader from "./components/notesHeader/notesHeader";
import styles from "./notes.module.css";
import NotesCard from "./components/notesCard/notesCard";
import Addnote from "./components/addnote/addnote";
import { useDispatch, useSelector } from "react-redux";
import { getNotes } from "./noteactions";

const Notes = () => {
  const dispatch = useDispatch();

  const [notes, setNotes] = useState([]);

  useEffect(() => {
    (async function () {
      const res = await getNotes(dispatch);
      setNotes(res);
    })();
  }, [dispatch]);

  const { display } = useSelector((state) => state.note);
  return (
    <main className={styles.main}>
      <NotesHeader />
      <section className={styles.grid}>
        <div>
          <img src={require("../../../assets/pinned.png")} alt="pinned" />
          <p>Pinned</p>
        </div>
        <div className={styles.notes}>
          {notes
            .filter((item) => item.pinned)
            .map((item, index) => {
              return <NotesCard key={index} data={item} />;
            })}
        </div>
      </section>
      <section className={styles.grid}>
        <div>
          <img src={require("../../../assets/forme.png")} alt="pinned" />
          <p>Shared</p>
        </div>
        <div className={styles.notes}>
          {notes
            .filter((item) => item.pinned)
            .map((item, index) => {
              return <NotesCard key={index} data={item} />;
            })}
        </div>
      </section>
      <section className={styles.grid}>
        <div>
          <img src={require("../../../assets/notes.png")} alt="notes" />
          <p>Notes</p>
        </div>
        <div className={styles.notes}>
          {notes
            .filter((item) => !item.pinned)
            .map((item, index) => {
              return <NotesCard key={index} data={item} />;
            })}
        </div>
      </section>
      <section
        className={`${styles.noteControl} ${display ? styles.show : undefined}`}
      >
        <Addnote />
      </section>
    </main>
  );
};

export default Notes;
