import { composeStories } from '@storybook/react';

import * as stories from './index.stories';

const { Default } = composeStories(stories);
