import type { Meta } from '@storybook/react';

import { Tooltip } from './index';

type Stroy = Meta<typeof Tooltip>;

export default {
  title: 'APG/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
} satisfies Stroy;

export const Default: Stroy = {
  args: {
    children: 'hover here!',
    content: 'tooltip',
  },
};
