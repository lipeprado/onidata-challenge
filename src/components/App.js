import React from "react";
import styles from "./app.sass";

const App = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.container__header}>React Boilerplate</h1>
      <div className={styles.wrapper_features}>
        <span className={styles.features}>React</span>
        <span className={styles.features}>Redux</span>
        <span className={styles.features}>Sass</span>
        <span className={styles.features}>Webpack</span>
        <span className={styles.features}>Eslint</span>
      </div>
    </div>
  );
};

export default App;
