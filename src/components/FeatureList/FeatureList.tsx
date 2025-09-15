import { ReactNode } from 'react';
import styles from './FeatureList.module.css';
import CheckIcon from '@/assets/check-solid.svg?react';

export interface FeatureListProps {
  items: ReactNode[];
  className?: string;
}

export function FeatureList({ items, className }: FeatureListProps) {
  return (
    <ul className={`${styles.list} ${className ?? ''}`}>
      {items.map((item, i) => (
        <li key={i} className={styles.item}>
          <CheckIcon />
          <span className={styles.text}>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default FeatureList;
