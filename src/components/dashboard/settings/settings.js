import React, { useState } from "react";
import NotesHeader from "../notes/components/notesHeader/notesHeader";

import styles from "./settings.module.css";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../home/authhelper";

const Settings = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth.loggedIn);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    updateUser(dispatch, form, authState, user, last_name, first_name);
  };

  const [first_name, setFirst_name] = useState(user.first_name);
  const [last_name, setLast_name] = useState(user.last_name);

  return (
    <main className={styles.settings}>
      <NotesHeader type={true} />
      <form onSubmit={handleUpdate}>
        <label>
          First Name
          <input
            type="text"
            name="first_name"
            value={first_name}
            onChange={(e) => setFirst_name(e.target.value)}
          />
        </label>
        <label>
          Last Name
          <input
            type="text"
            name="last_name"
            value={last_name}
            onChange={(e) => setLast_name(e.target.value)}
          />
        </label>
        <input type="submit" value="Update" />
      </form>
    </main>
  );
};

export default Settings;
