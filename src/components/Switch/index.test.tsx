import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import * as stories from './index.stories';

const { Default } = composeStories(stories);

describe('Switchコンポーネントに関するテスト', () => {
  test('Switchロールを持っていること', () => {
    render(<Default />);
    const switchElement = screen.getByRole('switch');

    expect(switchElement).toBeInTheDocument();
  });
});
