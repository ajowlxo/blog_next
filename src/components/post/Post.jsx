import React from "react";
import styles from "./post.module.css";
import Image from "next/image";
import Link from "next/link";

function Post() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>1.02.2023</span>
          <span className={styles.category}>CULTURE</span>
        </div>
        <h1>Lorem ipsum dolorsit amet consectetur adipisicing.</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum sed qui
          architecto hic culpa suscipit fuga aliquam voluptas quod consectetur
          asperiores consequuntur illo enim sapiente accusamus sit, tenetur non
          iusto.
        </p>
        <Link href="/" className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
}

export default Post;
