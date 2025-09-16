import { AnchorHTMLAttributes, ReactNode, forwardRef } from 'react';
import styles from './Link.module.css';

type Variant = 'primary' | 'muted' | 'default';
type Size = 'sm' | 'xs';
type Underline = 'hover' | 'always' | 'none';

export interface LinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children'> {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  underline?: Underline;
  external?: boolean;
  uppercase?: boolean;
}

const isExternalHref = (href: string) =>
  /^https?:\/\//i.test(href) || href.startsWith('mailto:') || href.startsWith('tel:');

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  {
    href,
    children,
    variant = 'default',
    size = 'md',
    underline = 'hover',
    uppercase,
    external,
    target,
    rel,
    className,
    ...rest
  },
  ref,
) {
  const isExternal = external ?? isExternalHref(href) ?? target === '_blank';

  const computedTarget = target ?? (isExternal ? '_blank' : undefined);
  const computedRel =
    computedTarget === '_blank'
      ? rel
        ? `${rel} noopener noreferrer`
        : 'noopener noreferrer'
      : rel;

  const cls = [
    styles.link,
    styles[`v-${variant}`],
    styles[`s-${size}`],
    styles[`u-${underline}`],
    styles[uppercase ? 'uppercase' : ''],
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <a
      ref={ref}
      href={href}
      className={cls}
      target={computedTarget}
      rel={computedRel}
      tabIndex={0}
      {...rest}
    >
      {children}
    </a>
  );
});

export default Link;
