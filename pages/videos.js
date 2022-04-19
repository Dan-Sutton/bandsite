import React from "react";
import styles from "../styles/Videos.module.css";

function videos(props) {
  return (
    <div className={styles.videopage}>
      <h1 className={styles.title}>Videos</h1>
      <div className={styles.imggrid}>
        <img src="https://i.ytimg.com/vi/yDEIKq3yNx0/maxresdefault.jpg"></img>
        <img src="https://i.ytimg.com/vi/yDEIKq3yNx0/maxresdefault.jpg"></img>
        <img src="https://i.ytimg.com/vi/yDEIKq3yNx0/maxresdefault.jpg"></img>
        <img src="https://i.ytimg.com/vi/yDEIKq3yNx0/maxresdefault.jpg"></img>
      </div>
    </div>
  );
}

export default videos;
