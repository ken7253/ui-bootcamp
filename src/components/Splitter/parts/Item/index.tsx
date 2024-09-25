import { type FC, type PropsWithChildren } from 'react';

type ItemProps = PropsWithChildren;

export const Item: FC<ItemProps> = ({ children }) => {
  return <div>{children}</div>;
};
