import { FC } from 'react';

import styles from './style.module.css';

type Props = {
  children: string;
};

export const Switch: FC<Props> = (props) => {
  const { children } = props;

  return (
    <label className={styles.container}>
      <input type="checkbox" role="switch" />
      <span className={styles.label}>{children}</span>
    </label>
  );
};
