import { useEffect, useState, type ReactNode } from 'react';
import CloseIcon from '@/assets/close.svg?react';
import styles from './Banner.module.css';

type BannerProps = {
  title?: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
  media?: ReactNode;
  onClose?: () => void;
};

export function Banner({ title, description, actions, media, onClose }: BannerProps) {
  const [open, setOpen] = useState(true);
  const [closing, setClosing] = useState(false);
  const [entering, setEntering] = useState(true);

  const prefersReducedMotion =
    typeof window !== 'undefined' && window.matchMedia
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false;

  const handleClose = () => {
    if (prefersReducedMotion) {
      setOpen(false);
      onClose?.();
      return;
    }
    setClosing(true);
    onClose?.();
  };

  useEffect(() => {
    if (prefersReducedMotion) {
      setEntering(false);
      return;
    }
    const t = requestAnimationFrame(() => setEntering(false));
    return () => cancelAnimationFrame(t);
  }, [prefersReducedMotion]);

  const handleTransitionEnd: React.TransitionEventHandler<HTMLElement> = (event) => {
    if (!closing) return;
    if (event.target !== event.currentTarget) return;
    setOpen(false);
  };

  if (!open) return null;

  return (
    <section
      data-testid="banner-element"
      className={`${styles.banner} ${entering ? styles.entering : ''} ${closing ? styles.closing : ''}`}
      onTransitionEnd={handleTransitionEnd}
      aria-labelledby="promo-title"
    >
      <button className={styles.close} data-testid="banner-btn-close" aria-label="Close banner" onClick={handleClose}>
        <CloseIcon />
      </button>

      {title}
      {description}
      {actions}
      {media}
    </section>
  );
}
