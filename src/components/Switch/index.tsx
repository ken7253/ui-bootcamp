import { FC, useState } from 'react';

import styles from './style.module.css';

type Props = {
  /** ラベルテキスト */
  children?: string;
  /** デフォルトのチェック状態 */
  defaultCheck?: boolean;
  /** スイッチを切り替えた場合に実行される関数 */
  onToggle?: (check: boolean) => void;
};

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
