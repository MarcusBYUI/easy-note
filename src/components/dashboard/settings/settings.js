import React from "react";
import NotesHeader from "../notes/components/notesHeader/notesHeader";

import styles from "./settings.module.css";

const Settings = () => {
  return (
    <main className={styles.settings}>
      <NotesHeader type={true} />
      <form onSubmit="">
        <label>
          Name
          <input type="text" name="name" required />
        </label>
        <label>
          Password
          <input type="password" name="password" required />
        </label>
        <input type="submit" value="Update" />
      </form>
    </main>
  );
};

export default Settings;
