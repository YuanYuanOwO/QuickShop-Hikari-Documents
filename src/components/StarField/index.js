// src/components/Starfield/index.js
import React, {useMemo} from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

function createStars(count) {
  return new Array(count).fill(0).map((_, i) => ({
    id: i,
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: 1 + Math.random() * 2,
    delay: Math.random() * 8,
    duration: 6 + Math.random() * 8,
    isGolden: Math.random() < 0.4,
  }));
}

export default function Starfield() {
  // only generated once per render lifecycle
  const stars = useMemo(() => createStars(80), []);

  return (
    <div className={styles.layer}>
      {/* Twinkling stars */}
      {stars.map(star => (
        <div
          key={star.id}
          className={clsx(styles.star, star.isGolden && styles.starGolden)}
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}

      {/* Shooting stars */}
      <div className={styles.shootingStar} />
      <div className={clsx(styles.shootingStar, styles.shootingStarSecondary)} />
    </div>
  );
}
