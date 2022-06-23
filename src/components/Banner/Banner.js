import React from 'react';
import styles from './Banner.module.scss';
import banner from '../../assets/banner.svg';

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.left}>
        <h2 className={styles.title}>
          A guide to the <br /> right subjects
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </p>
        <button className={styles.button}>HTML</button>
        <button className={styles.button}>CSS</button>
      </div>
      <div className={styles.right}>
        <img src={banner} alt="Banner" />
      </div>
    </div>
  );
}
