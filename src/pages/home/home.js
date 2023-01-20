import React from "react";

import styles from "./home.module.css";
import AuthCard from "../../components/home/authCard/authCard";
import Footer from "../../components/footer/footer";

const Home = () => {
  return (
    <>
      <header>
        <h2>EASY NOTE</h2>
      </header>
      <section className={styles.hero}>
        <h1>
          A diary📔 is a personal record of events, thoughts, and feelings that
          is often written on a daily basis. 🌞
        </h1>
        <AuthCard />
      </section>
      <Footer />
    </>
  );
};

export default Home;
