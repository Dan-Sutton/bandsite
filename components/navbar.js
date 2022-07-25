import styles from "../styles/navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className={styles.nav}>
      <img
        src="https://res.cloudinary.com/dansutton/image/upload/v1658598395/bandsite/logo_u7fykq.png"
        className={styles.navlogo}
      ></img>
      <ul className={styles.navlist}>
        <li>
          <Link href="#aboutsection">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/videos">
            <a>Gallery</a>
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
          <Link href="/setlist">
            <a>Setlist</a>
          </Link>
        </li>
        <li>
          <a>Contact</a>
        </li>
      </ul>
    </div>
  );
}
