'use client';

import { useRef } from 'react';
import styles from './interactive-phone.module.css';

export function InteractivePhone() {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();

    // Calculate mouse position relative to the container
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation degrees (20 is the max rotation angle - increased for drama)
    const rotateX = ((y - centerY) / centerY) * -20;
    const rotateY = ((x - centerX) / centerX) * 20;

    // Apply the transform
    containerRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    if (!containerRef.current) return;

    // Temporarily slow down the transition for a smooth return to center
    containerRef.current.style.transition =
      'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    containerRef.current.style.transform = 'rotateX(0deg) rotateY(0deg)';

    // Revert back to fast transition for the next time they hover
    setTimeout(() => {
      if (containerRef.current) {
        containerRef.current.style.transition = 'transform 0.1s ease-out';
      }
    }, 400);
  };

  return (
    <div
      className={styles['phone-container']}
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles['image-wrapper']}>
        <img
          src="/First_page.png"
          alt="Full Tarsi ad with green background"
          className={`${styles['phone-image']} ${styles['img-green-bg']}`}
        />
      </div>
    </div>
  );
}
