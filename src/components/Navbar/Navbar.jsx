import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "../themeToggle/ThemeToggle";
import AuthLinks from "../authLinks/AuthLinks";

function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/facebook.png" alt="" width={24} height={24} />
        <Image src="/instagram.png" alt="" width={24} height={24} />
        <Image src="/tiktok.png" alt="" width={24} height={24} />
        <Image src="/youtube.png" alt="" width={24} height={24} />
      </div>
      <div className={styles.logo}>NextBlog</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>
          Home
        </Link>
        <Link href="/blog" className={styles.link}>
          Blog
        </Link>

        <AuthLinks />
      </div>
    </div>
  );
}

export default Navbar;
