import { FC, useState } from 'react';

import styles from './style.module.css';
import { Props } from './spec';

export const Switch: FC<Props> = (props) => {
  const { children, defaultCheck } = props;
  const [checked, setChecked] = useState(defaultCheck ?? false);

  return (
    <label className={styles.container}>
      <span>{children}</span>
      <button type="button" role="switch" aria-checked={checked} onClick={() => setChecked((prev) => !prev)}>
        Switch
      </button>
      <span className={styles.state} aria-hidden="true">
        {checked ? 'on' : 'off'}
      </span>
    </label>
  );
};
