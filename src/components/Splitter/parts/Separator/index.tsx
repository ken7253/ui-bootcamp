import { FC, useContext } from 'react';

import { DirectionContext } from '../../context';

import styles from './style.module.css';

type SeparatorProps = {
  size?: number;
};

export const Separator: FC<SeparatorProps> = ({ size = 5 }) => {
  const direction = useContext(DirectionContext);

  return (
    <div
      className={styles.separator}
      style={{ width: direction === 'row' ? size : 0, height: direction === 'column' ? size : 0 }}
    />
  );
};
