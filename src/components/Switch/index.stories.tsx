import type { Meta } from '@storybook/react';

import { Switch } from './index';

type Stroy = Meta<typeof Switch>;

export default {
  title: 'APG/Switch',
  component: Switch,
} satisfies Stroy;

export const Default = {
  args: {
    children: '',
    defaultCheck: false,
    onToggle: (check) => console.log(check),
  },
} satisfies Stroy;

export const On = {
  args: {
    ...Default.args,
    defaultCheck: true,
  },
} satisfies Stroy;

export const Labeled = {
  args: {
    ...Default.args,
    children: 'ラベル',
  },
} satisfies Stroy;
