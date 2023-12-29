import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

function Featured() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b> Hey, XE12 here ! </b>
        Discover my stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A, alias
            nobis quia deleniti quis cumque incidunt sequi sit harum similique.
            Nemo incidunt maiores dicta aliquam delectus, impedit vitae nobis
            quas?Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Ducimus, soluta deleniti fugiat iure illum vel enim quaerat quas,
            amet aliquam minus facilis perspiciatis quidem, porro obcaecati quam
            velit dignissimos sint.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
}

export default Featured;
