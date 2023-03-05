import React, { useEffect, useState } from "react";
import { HexColorPicker } from "react-colorful";
import { useDispatch, useSelector } from "react-redux";

import styles from "./addnote.module.css";
import { noteSliceActions } from "../../../../../store/note/note";
import { addNote, deleteNote, updateNote } from "../../noteactions";

const Addnote = () => {
  const authState = useSelector((state) => state.auth.loggedIn);

  const emails = [
    "myko@gmail.com",
    "red@gmail.com",
    "myko@gmail.com",
    "red@gmail.com",
    "myko@gmail.com",
    "red@gmail.com",
  ];
  const [color, setColor] = useState("#E9FBC5");
  const [pallet, setPallet] = useState(false);
  const [emailCard, setEmailCard] = useState(false);
  const [titleValue, setTitleValue] = useState("");
  const [noteValue, setNoteValue] = useState("");
  const [dateValue, setDateValue] = useState(null);
  const [pinned, setPinned] = useState(null);
  const dispatch = useDispatch();

  const { current, update } = useSelector((state) => state.note);

  useEffect(() => {
    if (current) {
      setTitleValue(current.title);
      setNoteValue(current.note);
      setColor(current.theme);
      setDateValue(current.date);
      setPinned(current.pinned);
    }

    if (!update) {
      setTitleValue("");
      setNoteValue("");
      setColor("#E9FBC5");
      setDateValue("");
      setPinned(false);
    }
  }, [current, update]);

  const handleSave = async () => {
    const body = {
      user_id: 1,
      title: titleValue,
      note: noteValue,
      theme: color,
      pinned: pinned,
    };

    if (current) {
      //update existing post
      await updateNote(dispatch, current.id, body, authState);
    } else {
      await addNote(dispatch, body, authState);
    }
  };

  const handleDelete = async () => {
    await deleteNote(dispatch, current.id, authState);
  };

  return (
    <div className={styles.addnote}>
      <div className={styles.container}>
        <div className={styles.noteState}>
          <div className={styles.deleteSave}>
            <button className={styles.save} onClick={handleSave}>
              <p>Save</p>
            </button>
            {current && (
              <button className={styles.delete} onClick={handleDelete}>
                <p>Delete</p>
              </button>
            )}
          </div>
          <button
            className={styles.cancel}
            onClick={() => dispatch(noteSliceActions.setDisplay(false))}
          >
            <img
              src={require("../../../../../assets/cancel.png")}
              alt="close"
            />
          </button>
        </div>

        <div className={styles.noteCard} style={{ background: color }}>
          <input
            onChange={(e) => setTitleValue(e.target.value)}
            type="text"
            name="title"
            placeholder="Title"
            value={titleValue}
          />
          <textarea
            onChange={(e) => setNoteValue(e.target.value)}
            name="note"
            rows="7"
            placeholder="Note..."
            value={noteValue}
          ></textarea>
          <p>{dateValue ? dateValue : "27th Jan, 2023"}</p>
        </div>
        <div className={styles.control}>
          <button
            className={pinned ? styles.active : undefined}
            onClick={() => setPinned((prevState) => !prevState)}
          >
            <img src={require("../../../../../assets/pin.png")} alt="pin" />
          </button>
          <button
            className={`${emailCard ? styles.active : undefined}`}
            onClick={() => setEmailCard((prevState) => !prevState)}
          >
            <img
              src={require("../../../../../assets/add.png")}
              alt="add user"
            />
          </button>
          <button
            className={`${pallet ? styles.active : undefined}`}
            onClick={() => setPallet((prevState) => !prevState)}
          >
            <img
              src={require("../../../../../assets/pallet.png")}
              alt="pallet"
            />
          </button>
          <div
            className={`${styles.pallet} ${pallet ? styles.show : undefined}`}
          >
            <HexColorPicker color={color} onChange={setColor} />
          </div>
        </div>
        <div
          className={`${styles.emailCard} ${
            emailCard ? styles.showEmailCard : undefined
          }`}
        >
          <input type="email" placeholder="Email" />
          <div>
            {emails.map((email, index) => {
              return (
                <div key={index} className={styles.emailcard}>
                  <p>{email}</p>{" "}
                  <img
                    src={require("../../../../../assets/cancel.png")}
                    alt="remove email"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addnote;
