import React from "react";
import styles from "./cardList.module.css";
import Pagination from "../pagination/Pagination";
import Post from "../post/Post";

function CardList() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
      <Pagination />
    </div>
  );
}

export default CardList;
