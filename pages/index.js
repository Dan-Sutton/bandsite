import Head from "next/head";

import styles from "../styles/Home.module.css";
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

        <div className={styles.videoandlogo}>
          <div className={styles.logo}>
            <img
              src="https://res.cloudinary.com/dansutton/image/upload/v1658598394/bandsite/title_k36gya.png"
              alt="band title"
            ></img>
            <h2 className={styles.subtitle}>
              Shropshire-based function band, perfect for any event
            </h2>
          </div>

          <video autoPlay loop muted infinite className={styles.video}>
            <source
              src="https://res.cloudinary.com/dansutton/video/upload/v1658593108/bandsite/headervid_mfwydn.mov"
              type="video/mp4"
            />
          </video>
        </div>

        <div id={"aboutsection"} className={styles.about}>
          <h2 className={styles.sectionheader}>ABOUT.</h2>
          <p className={styles.text}>
            The Wildfire are a fresh and energetic Shropshire based
            function/party band ready to bring a big, unforgettable sound to
            your event. We cover a wide range of well-known hits suitable for
            Weddings, Parties and other events. Collectively, The Wildfire has
            many years of experience providing a professional musical package
            for clients nationwide. We provide our own PA and lighting system,
            as well as all the necessary cover/insurance for your event.
          </p>
        </div>

        <div className={styles.theband}>
          <h2 className={styles.sectionheader}>MEET THE BAND.</h2>
          <img
            src="https://res.cloudinary.com/dansutton/image/upload/v1658598421/bandsite/headshots_pbuqeq.png"
            className={styles.headshots}
          ></img>
        </div>
      </main>
    </div>
  );
}
