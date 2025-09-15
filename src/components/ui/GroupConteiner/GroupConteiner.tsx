import { ReactNode, CSSProperties } from 'react';
import styles from './GroupConteiner.module.css';

type Space = number | string;
type Direction = 'row' | 'column';

function toCssSpace(v?: Space): string | undefined {
  if (v === undefined) return undefined;
  return typeof v === 'number' ? `${v}px` : v; // 16 -> '16px'
}

export interface GroupConteinerProps {
  children: ReactNode;
  gap?: Space;
  padding?: Space;
  margin?: Space;
  direction?: Direction;
  className?: string;
}

export const GroupConteiner = ({
  children,
  gap,
  padding,
  margin,
  direction = 'row',
  className,
}: GroupConteinerProps) => {
  const style: CSSProperties = {
    gap: toCssSpace(gap),
    padding: toCssSpace(padding),
    margin: toCssSpace(margin),
    flexDirection: direction,
  };

  return (
    <div className={`${styles.container} ${className ?? ''}`} style={style}>
      {children}
    </div>
  );
};
