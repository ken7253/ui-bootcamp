import { FC, useState } from 'react';

import { Props } from './spec';

import styles from './style.module.css';

export const Switch: FC<Props> = (props) => {
  const { children, defaultCheck } = props;
  const [checked, setChecked] = useState(defaultCheck ?? false);

  return (
    <label className={styles.container}>
      <span>{children}</span>
      <button type="button" role="switch" aria-checked={checked} onClick={() => setChecked((previous) => !previous)}>
        Switch
      </button>
      <span className={styles.state} aria-hidden="true">
        {checked ? 'on' : 'off'}
      </span>
    </label>
  );
};
