import { ReactNode, CSSProperties } from 'react';
import styles from './GroupContainer.module.css';
import { Space } from '@/types';
import { toCss } from '@/utils/toCss';

type Direction = 'row' | 'column';

export interface GroupContainerProps {
  children: ReactNode;
  gap?: Space;
  padding?: Space;
  margin?: Space;
  direction?: Direction;
  className?: string;
}

export const GroupСontainer = ({
  children,
  gap,
  padding,
  margin,
  direction = 'row',
  className,
}: GroupContainerProps) => {
  const style: CSSProperties = {
    gap: toCss(gap),
    padding: toCss(padding),
    margin: toCss(margin),
    flexDirection: direction,
  };

  return (
    <div className={`${styles.container} ${className ?? ''}`} style={style}>
      {children}
    </div>
  );
};
