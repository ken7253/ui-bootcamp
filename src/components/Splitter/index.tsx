import { createContext, useContext, type FC, type PropsWithChildren } from 'react';

import styles from './style.module.css';

const DirectionContext = createContext<Direction | null>(null);

type Direction = 'column' | 'row';

type ContainerProps = PropsWithChildren<{
  direction: Direction;
}>;

const Container: FC<ContainerProps> = ({ direction, children }) => {
  return (
    <DirectionContext.Provider value={direction}>
      <div style={{ flexDirection: direction }} className={styles.container}>
        {children}
      </div>
    </DirectionContext.Provider>
  );
};

type SeparatorProps = {
  size?: number;
};

const Separator: FC<SeparatorProps> = ({ size = 5 }) => {
  const direction = useContext(DirectionContext);

  return (
    <div
      style={{ width: direction === 'row' ? size : 0, height: direction === 'column' ? size : 0 }}
      className={styles.separator}
    />
  );
};

type ItemProps = PropsWithChildren;

const Item: FC<ItemProps> = ({ children }) => {
  return <div>{children}</div>;
};

export const Splitter = {
  Container,
  Separator,
  Item,
};
