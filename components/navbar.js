import styles from "../styles/navbar.module.css";

import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <div className={styles.nav}>
      <Link to="top" spy={true} smooth={true} offset={50} duration={500}>
        <img
          src="https://res.cloudinary.com/dansutton/image/upload/v1658598395/bandsite/logo_u7fykq.png"
          className={styles.navlogo}
        ></img>
      </Link>
      <ul className={styles.navlist}>
        <li>
          <Link
            to="aboutsection"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="gallery"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Gallery
          </Link>
        </li>
        <li>
          <Link
            to="setlist"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Setlist
          </Link>
        </li>
        <li>
          <a
            href="https://www.facebook.com/TheWildfireMusic/events"
            target="_blank"
            rel="noreferrer"
          >
            Events
          </a>
        </li>

        <li>
          <a>Contact</a>
        </li>
      </ul>
    </div>
  );
}
