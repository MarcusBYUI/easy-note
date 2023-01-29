import React, { useState } from "react";
import { HexColorPicker } from "react-colorful";
import { useDispatch } from "react-redux";

import styles from "./addnote.module.css";
import { noteSliceActions } from "../../../../../store/note/note";

const Addnote = () => {
  const emails = ["myko@gmail.com", "red@gmail.com"];
  const [color, setColor] = useState("#E9FBC5");
  const dispatch = useDispatch();
  return (
    <div className={styles.addnote}>
      <div className={styles.container}>
        <button
          className={styles.cancel}
          onClick={() => dispatch(noteSliceActions.setDisplay(false))}
        >
          <img src={require("../../../../../assets/cancel.png")} alt="close" />
        </button>
        <div className={styles.noteCard} style={{ background: color }}>
          <input type="text" name="title" placeholder="Title" />
          <textarea name="note" rows="7" placeholder="Note..."></textarea>
          <p>27th Jan, 2023</p>
        </div>
        <div className={styles.control}>
          <button>
            <img src={require("../../../../../assets/pin.png")} alt="pin" />
          </button>
          <button>
            <img
              src={require("../../../../../assets/add.png")}
              alt="add user"
            />
          </button>
          <button>
            <img
              src={require("../../../../../assets/pallet.png")}
              alt="pallet"
            />
          </button>
          {/* <div className={styles.pallet}>
          <HexColorPicker color={color} onChange={setColor} />
          </div> */}
        </div>
        <div className={styles.emailCard}>
          <input type="email" />
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
