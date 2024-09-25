import { createContext } from 'react';

import type { Direction } from './types';

export const DirectionContext = createContext<Direction | null>(null);

export const ContainerSizeContext = createContext<{ width?: number; height?: number }>({
  width: undefined,
  height: undefined,
});
