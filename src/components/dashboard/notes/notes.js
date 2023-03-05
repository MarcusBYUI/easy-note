import React, { useEffect, useState } from "react";

import NotesHeader from "./components/notesHeader/notesHeader";
import styles from "./notes.module.css";
import NotesCard from "./components/notesCard/notesCard";
import Addnote from "./components/addnote/addnote";
import { useDispatch, useSelector } from "react-redux";
import { getNotes } from "./noteactions";

const Notes = () => {
  const dispatch = useDispatch();
  const { notify } = useSelector((state) => state.notification);
  const authState = useSelector((state) => state.auth.loggedIn);

  const [notes, setNotes] = useState([]);

  useEffect(() => {
    (async function () {
      const res = await getNotes(dispatch, authState);
      setNotes(res);
    })();
  }, [dispatch, notify, authState]);

  const { display } = useSelector((state) => state.note);
  return (
    <main className={styles.main}>
      <NotesHeader />
      {notes?.length > 0 ? (
        <>
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
          {/* <section className={styles.grid}>
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
      </section> */}
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
        </>
      ) : (
        <>
          <p>You currently have no Notes</p>
        </>
      )}
      <section
        className={`${styles.noteControl} ${display ? styles.show : undefined}`}
      >
        <Addnote />
      </section>
    </main>
  );
};

export default Notes;
