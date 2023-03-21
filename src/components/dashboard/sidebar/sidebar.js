import React, { useState } from "react";

import styles from "./sidebar.module.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { noteSliceActions } from "../../../store/note/note";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../home/authhelper";

const Sidebar = () => {
  const { user } = useSelector((state) => state.auth);
  const [state, setState] = useState("");
  const [noteHover, setNoteHover] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [sidebar, setsideBar] = useState(false);
  const authState = useSelector((state) => state.auth.loggedIn);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("notes")) {
      setState("notes");
    } else if (location.pathname.includes("settings")) {
      setState("settings");
    }
  }, [location.pathname]);

  return (
    <div className={`${styles.container} ${sidebar ? styles.view : undefined}`}>
      <div>
        <button
          onClick={() => setsideBar((prevState) => !prevState)}
          className={`${styles.closeSidebar} ${
            !sidebar ? styles.openstate : undefined
          }`}
        >
          <img
            src={require("../../../assets/arr_down.png")}
            alt="close sidebar"
          />
        </button>
        <div className={styles.info}>
          <img src={require("../../../assets/avatar.png")} alt="avatar" />
          <div>
            <p>
              {user.first_name} {user.last_name}
            </p>
            <span>{user.email}</span>
          </div>
          <img
            className={`${dropDown ? styles.rotate : undefined} ${
              !sidebar ? styles.opaque : undefined
            }`}
            onClick={() => setDropDown((prevState) => !prevState)}
            src={require("../../../assets/arr_down.png")}
            alt="dropdown"
          />
          <div
            onClick={() => logout(navigate, authState, dispatch)}
            className={`${styles.logoutPop} ${
              dropDown ? styles.show : undefined
            }`}
          >
            <li>Logout</li>
          </div>
        </div>
        <button
          className={styles.newnote}
          onMouseEnter={() => setNoteHover(true)}
          onMouseLeave={() => setNoteHover(false)}
          onClick={() => {
            dispatch(noteSliceActions.setDisplay(true));
            dispatch(noteSliceActions.setUpdate(false));
            setsideBar(false);
          }}
        >
          <img
            src={require(`../../../assets/${
              noteHover ? "addNotesActive" : "addNotes"
            }.png`)}
            alt="add Notes"
          />
          <p>New note</p>
        </button>
        <div className={styles.menuItems}>
          <NavLink
            to="/user/notes"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            <img
              src={require(`../../../assets/${
                state === "notes" ? "noteActive" : "note"
              }.png`)}
              alt="notes"
            />
            <p>Notes</p>
          </NavLink>
          <NavLink
            to="/user/settings"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            <img
              src={require(`../../../assets/${
                state === "settings" ? "settingsActive" : "settings"
              }.png`)}
              alt="settings"
            />
            <p>Settings</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
