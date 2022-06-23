import React from 'react';
import styles from './Tag.module.scss';

export default function Tag({
  tag,
  meta,
  block,
  experimental,
  inline,
  self_closing,
}) {
  return (
    <div className={styles.tagDiv}>
      <div className={styles.tagName}>
        <h2>{tag}</h2>
      </div>
      <div className={styles.collections}>
        <div
          className={meta ? styles.collection + ' colorSky' : styles.collection}
        >
          Meta
        </div>
        <div
          className={
            self_closing ? styles.collection + ' colorSky' : styles.collection
          }
        >
          Self-closing
        </div>
        <div
          className={
            inline ? styles.collection + ' colorSky' : styles.collection
          }
        >
          Inline
        </div>
        <div
          className={
            block ? styles.collection + ' colorSky' : styles.collection
          }
        >
          Block
        </div>
      </div>
    </div>
  );
}
