import Head from "next/head";
import Header from "./header";
import styles from "../styles/Home.module.css";

export default function HomeComponent() {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Fos.io</title>
          <meta name="description" content="Open Source File.io Alternative" />
        </Head>
        <Header />
      </div>
    </>
  );
}
