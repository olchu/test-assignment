import { type ReactNode } from 'react';
import styles from './Text.module.css';

type TextTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
type TextSize = 'xl' | 'lg' | 'md' | 'sm' | 'xs';

export interface TextProps {
  as?: TextTag;
  size?: TextSize;
  align?: 'left' | 'center' | 'right';
  className?: string;
  children: ReactNode;
}

export const Text = ({
  as = 'p',
  size,
  align = 'left',
  className,
  children,
}: TextProps) => {
  const Tag = as;
  const visual = size ?? as;

  const cls = [
    styles.title,
    styles[`size-${visual}`],
    styles[`align-${align}`],
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  return <Tag className={cls}>{children}</Tag>;
};
