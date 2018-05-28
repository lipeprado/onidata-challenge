import React from "react";
import Login from "./Login/LoginContainer";
import styles from "./app.sass";

const App = () => {
  return (
    <div className={styles.container}>
      <Login />
    </div>
  );
};

export default App;
