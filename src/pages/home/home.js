import React from "react";

import styles from "./home.module.css";
import AuthCard from "../../components/home/authCard/authCard";

const Home = () => {
  return (
    <>
      <header>EASY NOTE</header>
      <section className={styles.hero}>
        <h1>
          A diary📔📙📔📚📖📕 is a personal record of events, thoughts, and
          feelings that is often written on a daily basis. 🌞
        </h1>
        <AuthCard />
      </section>
    </>
  );
};

export default Home;
