import type { Meta } from '@storybook/react';

import { Splitter } from './index';

type Stroy = Meta<typeof Splitter>;

export default {
  title: 'Other/Splitter',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Stroy;

export const Row = {
  render: () => {
    return (
      <Splitter.Container direction="row">
        <Splitter.Item>
          <div style={{ width: 500, height: 500, backgroundColor: 'red' }}>A</div>
        </Splitter.Item>
        <Splitter.Separator />
        <Splitter.Item>
          <div style={{ width: 500, height: 500, backgroundColor: 'blue' }}>B</div>
        </Splitter.Item>
      </Splitter.Container>
    );
  },
} satisfies Stroy;

export const Column = {
  render: () => {
    return (
      <Splitter.Container direction="column">
        <Splitter.Item>
          <div style={{ width: 500, height: 500, backgroundColor: 'red' }}>A</div>
        </Splitter.Item>
        <Splitter.Separator />
        <Splitter.Item>
          <div style={{ width: 500, height: 500, backgroundColor: 'blue' }}>B</div>
        </Splitter.Item>
      </Splitter.Container>
    );
  },
} satisfies Stroy;
