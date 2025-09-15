import { ReactNode } from 'react';
import styles from './ButtonGroup.module.css';


export const ButtonGroup = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.buttonGroup}>
      {children}
    </div>
  );
};
