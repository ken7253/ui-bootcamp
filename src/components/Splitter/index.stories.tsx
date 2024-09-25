import { FC } from 'react';

import type { Meta } from '@storybook/react';

import { Splitter } from './index';

type Stroy = Meta<typeof Splitter>;

export default {
  title: 'Other/Splitter',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Stroy;

const Contents: FC<JSX.IntrinsicElements['div']> = ({ style, ...rest }) => {
  return (
    <div
      style={{
        width: 500,
        height: 500,
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        fontSize: 64,
        justifyContent: 'center',
        ...style,
      }}
      {...rest}
    />
  );
};

export const Row = {
  render: () => {
    return (
      <Splitter.Container direction="row">
        <Splitter.Item>
          <Contents style={{ backgroundColor: 'red' }}>A</Contents>
        </Splitter.Item>
        <Splitter.Separator />
        <Splitter.Item>
          <Contents style={{ backgroundColor: 'blue' }}>B</Contents>
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
          <Contents style={{ backgroundColor: 'red' }}>A</Contents>
        </Splitter.Item>
        <Splitter.Separator />
        <Splitter.Item>
          <Contents style={{ backgroundColor: 'blue' }}>B</Contents>
        </Splitter.Item>
      </Splitter.Container>
    );
  },
} satisfies Stroy;
