import React from "react";

import NotesHeader from "./components/notesHeader/notesHeader";
import styles from "./notes.module.css";
import NotesCard from "./components/notesCard/notesCard";
import Addnote from "./components/addnote/addnote";
import { useSelector } from "react-redux";

const Notes = () => {
  const notes = [
    {
      title: "My Savings",
      note: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since ...    ",
      theme: "#C5FBEB",
      date: "27th Jan. 2023",
      pinned: true,
      collaborators: [{ email: "collaborator@gmail.com" }],
    },
    {
      title: "My Savings",
      note: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since ...    ",
      theme: "#fff",
      date: "27th Jan. 2023",
      pinned: true,
      collaborators: [{ email: "collaborator@gmail.com" }],
    },
    {
      title: "My Savings",
      note: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since ...    ",
      theme: "#E9FBC5",
      date: "27th Jan. 2023",
      pinned: true,
      collaborators: [{ email: "collaborator@gmail.com" }],
    },
    {
      title: "My Savings",
      note: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since ...    ",
      theme: "#fff",
      date: "27th Jan. 2023",
      pinned: true,
      collaborators: [{ email: "collaborator@gmail.com" }],
    },
    {
      title: "My Savings",
      note: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since ...    ",
      theme: "#C5E6FB",
      date: "27th Jan. 2023",
      pinned: false,

      collaborators: [{ email: "collaborator@gmail.com" }],
    },
    {
      title: "My Savings",
      note: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since ...    ",
      theme: "#fff",
      date: "27th Jan. 2023",
      pinned: false,
      collaborators: [{ email: "collaborator@gmail.com" }],
    },
    {
      title: "My Savings",
      note: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since ...    ",
      theme: "#fff",
      date: "27th Jan. 2023",
      pinned: false,
      collaborators: [{ email: "collaborator@gmail.com" }],
    },
    {
      title: "My Savings",
      note: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since ...    ",
      theme: "#fff",
      date: "27th Jan. 2023",
      pinned: false,
      collaborators: [{ email: "collaborator@gmail.com" }],
    },
    {
      title: "My Savings",
      note: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since ...    ",
      theme: "#fff",
      date: "27th Jan. 2023",
      pinned: false,
      collaborators: [{ email: "collaborator@gmail.com" }],
    },
  ];

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
