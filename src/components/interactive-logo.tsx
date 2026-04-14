'use client';

import { useRef } from 'react';
import Image from 'next/image';
import styles from './interactive-logo.module.css';

export function InteractiveLogo() {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    console.log('Logo is waving!');
  };

  const handleMouseLeave = () => {
    if (containerRef.current) {
      containerRef.current.style.transition =
        'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)';
    }
  };

  return (
    <div className={styles['interaction-wrapper']}>
      <div
        className={styles['character-container']}
        ref={containerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          src="/logo_3.png"
          alt="Cute waving monkey"
          className={styles['monkey-image']}
          width={120}
          height={120}
        />
      </div>
      <p className={styles['status-text']}>Hover to say hi!</p>
    </div>
  );
}
