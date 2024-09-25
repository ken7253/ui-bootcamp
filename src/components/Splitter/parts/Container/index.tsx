import { type FC, type PropsWithChildren } from 'react';

import { DirectionContext } from '../../context';

import type { Direction } from '../../types';

import styles from './style.module.css';

type ContainerProps = PropsWithChildren<{
  direction: Direction;
}>;

export const Container: FC<ContainerProps> = ({ direction, children }) => {
  return (
    <DirectionContext.Provider value={direction}>
      <div className={styles.container} style={{ flexDirection: direction }}>
        {children}
      </div>
    </DirectionContext.Provider>
  );
};
