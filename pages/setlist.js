import Head from "next/head";

import styles from "../styles/setlist.module.css";
import Link from "next/link";

import "react-alice-carousel/lib/alice-carousel.css";

const handleDragStart = (e) => e.preventDefault();

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>The Wildfire | Function Band</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.nav}>
          <Link href={"/"}>
            <img
              src="https://res.cloudinary.com/dansutton/image/upload/v1658598395/bandsite/logo_u7fykq.png"
              className={styles.navlogo}
            ></img>
          </Link>
          <ul className={styles.navlist}>
            <li>
              <a>About</a>
            </li>
            <li>
              <Link href="/videos">
                <a>Gallery</a>
              </Link>
            </li>
            <li>
              <a>Events</a>
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

        <div className={styles.setlist}>
          <h2 className={styles.sectionheader}>SETLIST.</h2>
          <ol className={styles.text}>
            <li>WHAT I LIKE ABOUT YOU - THE ROMANTICS</li>
            <li>SHE MOVES IN HER OWN WAY - THE KOOKS</li>
            <li>JUMPING JACK FLASH - THE ROLLING STONES</li>
            <li>(I CANT GET NO) SATISFACTION - THE ROLLING STONES</li>
            <li>LIGHTNING BOLT - JAKE BUGG</li>
            <li>LONELY BOY - THE BLACK KEYS</li>
            <li>LAST NITE - THE STROKES</li>
            <li>DOCTOR DOCTOR - ROBERT PALMER</li>
            <li>NO ROOTS - ALICE MERTON</li>
            <li>STUCK IN THE MIDDLE WITH YOU - STEALERS WHEEL</li>
            <li>EX'S AND OH'S - ELLE KING</li>
            <li>DREAMS - FLEEWOOD MAC</li>
            <li>CRAZY LITTLE THING CALLED LOVE - QUEEN</li>
            <li>SAW HER STANDING THERE - THE BEATLES</li>
            <li>NEVER CAN TELL - CHUCK BERRY</li>
            <li>5 COLOURS IN HER HAIR - MCFLY</li>
            <li>SEX ON FIRE - KINGS OF LEON</li>
            <li>ROCK N ROLL STAR - OASIS</li>
            <li>ALL THE SMALL THINGS - BLINK 182</li>
            <li>PLACE YOUR HANDS - REEF</li>
            <li>YELLOW - COLDPLAY</li>
            <li>USE SOMEBODY - KINGS OF LEON</li>
            <li>GETTING STARTED - SAM FENDER</li>
            <li>HOLD BACK THE RIVER - JAMES BAY</li>
            <li>FOOTLOOSE - KENNY LOGGINS</li>
            <li>DAKOTA - STEREOPHONICS</li>
            <li>WHAT YOU KNOW - TWO DOOR CINEMA CLUB</li>
            <li>AS IT WAS- HARRY STYLES</li>
            <li>COME TOGETHER - THE BEATLES</li>
          </ol>
        </div>
      </main>
    </div>
  );
}