import type { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.css';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export function Button({ children, ...rest }: Props) {
  return (
    <button className={styles.btn} {...rest}>
      {children}
    </button>
  );
}
