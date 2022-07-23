import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const handleDragStart = (e) => e.preventDefault();

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>The Wedding Boys</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.nav}>
          <img src="/images/logo.png" className={styles.navlogo}></img>
          <ul className={styles.navlist}>
            <li>
              <a>About</a>
            </li>
            <li>
              <Link href="/videos">
                <a>Videos</a>
              </Link>
            </li>
            <li>
              <a>Testimonials</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>

        <div className={styles.logo}>
          <Image
            src="/images/title.png"
            alt="band title"
            layout="responsive"
            sizes="1000vw"
            width={6.3}
            height={1}
          ></Image>
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

        <div className={styles.about}>
          <h2>About</h2>
          <p>
            Shropshire based 4-piece function band, with a wealth of performing
            experience. Perfect for your event, we provide a professional
            experience with songs that will get everyone of all ages up on their
            feet!
          </p>
        </div>

        <div className={styles.testimonials}>
          <h2>Testimonials</h2>
        </div>
      </main>
    </div>
  );
}
