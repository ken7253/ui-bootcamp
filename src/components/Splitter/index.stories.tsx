import type { Meta } from '@storybook/react';

import { Splitter } from './index';

type Stroy = Meta<typeof Splitter>;

export default {
  title: 'Other/Splitter',
  component: Splitter,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Stroy;

export const Default = {
  args: {
    direction: 'row',
    children: [
      <div style={{ width: '100%', minHeight: '500px', backgroundColor: 'red' }}>A</div>,
      <div style={{ width: '100%', minHeight: '500px', backgroundColor: 'blue' }}>B</div>,
    ],
  },
} satisfies Stroy;
