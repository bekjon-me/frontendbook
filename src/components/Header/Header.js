import React from 'react';
import styles from './Header.module.scss';
import { BsSearch } from 'react-icons/bs';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Logo</div>
      <div className={styles.search}>
        <select className={styles.searchSelect}>
          <option value="html">HTML</option>
          <option value="css">CSS</option>
        </select>
        <input
          type="text"
          placeholder="Search..."
          className={styles.searchInput}
        />
        <button className={styles.searchButton}>
          <BsSearch />
        </button>
      </div>
      <div className={styles.errorBtn}>
        <button>Find an error?</button>
      </div>
    </header>
  );
}
