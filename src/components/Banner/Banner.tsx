import { useState, type ReactNode } from 'react';
import styles from './Banner.module.css';
import CloseIcon from '@/assets/close.svg?react';

export function Banner({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(true);
  if (!open) return null;

  return (
    <section className={styles.banner}>
      <button
        className={styles.close}
        aria-label="Close banner"
        onClick={() => setOpen(false)}
      >
        <CloseIcon />
      </button>

      {children}

    </section>
  );
}
