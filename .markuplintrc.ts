import type { Config } from '@markuplint/ml-config';

// https://markuplint.dev/ja/docs/configuration
export default {
  extends: ['markuplint:recommended'],
  parser: {
    '\\.[jt]sx?$': '@markuplint/jsx-parser',
  },
  specs: {
    '\\.[jt]sx?$': '@markuplint/react-spec',
  },
  excludeFiles: ['**/*.stories.tsx', '**/*.test.tsx'],
} satisfies Config;
