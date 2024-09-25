import { type FC, type PropsWithChildren, useContext } from 'react';

import { ContainerSizeContext, DirectionContext } from '../../context';

type ItemProps = PropsWithChildren;

import styles from './style.module.css';

export const Item: FC<ItemProps> = ({ children }) => {
  const direction = useContext(DirectionContext);
  const containerSize = useContext(ContainerSizeContext);

  const width = direction === 'row' && containerSize.width ? containerSize.width / 2 : null;
  const height = direction === 'column' && containerSize.height ? containerSize.height / 2 : null;

  return (
    <div className={styles.item} style={{ width: width ?? 'auto', height: height ?? 'auto' }}>
      {children}
    </div>
  );
};
