import React from "react";
import styles from "../styles/Videos.module.css";

function videos(props) {
  return (
    <div className={styles.videopage}>
      <div className={styles.nav}>
        <h1 className={styles.titlename}>The Wedding Boys</h1>
        <ul className={styles.navlist}>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Testimonials</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
      <h1 className={styles.title}>Videos</h1>
      <div className={styles.imggrid}>
        <img src="https://play-lh.googleusercontent.com/coMv1dl31PCfEs6essJoEUwVryaqKHKQvENdZ_WYpN-PXa8Qfitkg3grQxIVN22W5A"></img>
        <img src="https://play-lh.googleusercontent.com/coMv1dl31PCfEs6essJoEUwVryaqKHKQvENdZ_WYpN-PXa8Qfitkg3grQxIVN22W5A"></img>
        <img src="https://play-lh.googleusercontent.com/coMv1dl31PCfEs6essJoEUwVryaqKHKQvENdZ_WYpN-PXa8Qfitkg3grQxIVN22W5A"></img>
        <img src="https://play-lh.googleusercontent.com/coMv1dl31PCfEs6essJoEUwVryaqKHKQvENdZ_WYpN-PXa8Qfitkg3grQxIVN22W5A"></img>
        <img src="https://play-lh.googleusercontent.com/coMv1dl31PCfEs6essJoEUwVryaqKHKQvENdZ_WYpN-PXa8Qfitkg3grQxIVN22W5A"></img>
        <img src="https://play-lh.googleusercontent.com/coMv1dl31PCfEs6essJoEUwVryaqKHKQvENdZ_WYpN-PXa8Qfitkg3grQxIVN22W5A"></img>
      </div>
    </div>
  );
}

export default videos;
