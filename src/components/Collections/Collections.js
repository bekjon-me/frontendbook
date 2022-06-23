import React from 'react';
import styles from './Collections.module.scss';

export default function Collections() {
  return (
    <div className={styles.collections}>
      <div>Experimental</div>
      <div>Meta</div>
      <div>Self-closing</div>
      <div>Inline</div>
      <div>Block</div>
    </div>
  );
}
