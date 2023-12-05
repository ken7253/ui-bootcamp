import type { FC, ReactNode } from 'react';

import styles from './style.module.css';

type Props = {
  direction: 'column' | 'row';
  children: [ReactNode, ReactNode];
};

export const Splitter: FC<Props> = (props: Props) => {
  const { children, direction } = props;

  return (
    <div className={styles.container} style={{ flexDirection: direction }}>
      <div className={styles.content}>{children[0]}</div>
      <div className={styles.separator} tabIndex={0} />
      <div className={styles.content}>{children[1]}</div>
    </div>
  );
};
