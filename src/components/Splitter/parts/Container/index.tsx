import { type FC, type PropsWithChildren } from 'react';

import { DirectionContext, ContainerSizeContext } from '../../context';

import type { Direction } from '../../types';

import styles from './style.module.css';

type ContainerProps = PropsWithChildren<{
  direction: Direction;
  width?: number;
  height?: number;
}>;

export const Container: FC<ContainerProps> = ({ direction, width, height, children }) => {
  return (
    <DirectionContext.Provider value={direction}>
      <ContainerSizeContext.Provider value={{ width, height }}>
        <div
          className={styles.container}
          style={{
            flexDirection: direction,
            width: width ?? 'auto',
            height: height ?? 'auto',
          }}
        >
          {children}
        </div>
      </ContainerSizeContext.Provider>
    </DirectionContext.Provider>
  );
};
