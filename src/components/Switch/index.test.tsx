import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import * as stories from './index.stories';

const { Default, On } = composeStories(stories);

describe('Switchコンポーネントに関するテスト', () => {
  describe('コンポーネント作成の前提条件', () => {
    test('Switchロールを持った要素が存在していること', () => {
      render(<Default />);
      const switchElement = screen.getByRole('switch');

      expect(switchElement).toBeInTheDocument();
    });

    test('Switchロールを持つ要素はbutton要素を利用して作成していること', () => {
      render(<Default />);
      const switchElement = screen.getByRole('switch');

      expect(switchElement.tagName).toBe('BUTTON');
    });
  });

  test('チェック状態はOFFの状態でレンダリングされる', () => {
    render(<Default />);
    const switchElement = screen.getByRole('switch');

    expect(switchElement).not.toBeChecked();
  });

  describe.each([Default, On])('ON/OFF表示に関するテスト', (Story) => {
    test('ON/OFF表示は画面上はレンダリングされるがアクセシビリティツリーには公開されないこと', () => {
      render(<Story />);
      const stateLabel = screen.queryByText(/[ON|OFF]/iu);

      expect(stateLabel).toBeInTheDocument();
      expect(stateLabel).toHaveAttribute('aria-hidden');
    });
  });
});
