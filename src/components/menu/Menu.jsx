import React from "react";
import styles from "./menu.module.css";
import Link from "next/link";

import MenuPost from "../menuPost/MenuPost";
import MenuCategories from "../menuCategories/MenuCategories";

function Menu() {
  return (
    <div className={styles.container}>
      <h2 className={styles.subTitle}>What's hot?</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuPost withImage={false} />
      <h2 className={styles.subTitle}>Discover by topic</h2>
      <h1 className={styles.title}>Categories</h1>
      <MenuCategories />
      <h2 className={styles.subTitle}>Choosen by the editor</h2>
      <h1 className={styles.title}>Editors Pick</h1>
      <MenuPost withImage={true} />
    </div>
  );
}

export default Menu;
