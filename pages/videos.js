import React from "react";
import styles from "../styles/Videos.module.css";
import Image from "next/image";

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
        <Image
          src="/images/logo.png"
          layout="responsive"
          sizes="10vw"
          width={100}
          height={100}
        ></Image>
      </div>
    </div>
  );
}

export default videos;
