import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Sidebar from "../../components/dashboard/sidebar/sidebar";
import Settings from "../../components/dashboard/settings/settings";
import Notes from "../../components/dashboard/notes/notes";
import styles from "./dashboard.module.css";

const Dashboard = () => {
  return (
    <section className={styles.section}>
      <Sidebar />
      <div>
        <Routes>
          <Route path="settings" exact element={<Settings />} />
          <Route path="notes" exact element={<Notes />} />
          <Route path={"*"} element={<Navigate replace to="/user/notes" />} />
        </Routes>
      </div>
    </section>
  );
};

export default Dashboard;
