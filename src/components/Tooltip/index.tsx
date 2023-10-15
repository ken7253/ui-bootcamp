import { FC, useEffect, useId, useState } from 'react';

import styles from './style.module.css';
import { Props } from './spec';

export const Tooltip: FC<Props> = (props) => {
  const { children, content } = props;
  const [open, setOpen] = useState(false);
  const id = useId();

  useEffect(() => {
    // TODO: ESCで一時的に非表示にする処理
  }, []);

  return (
    <div className={styles.container} onPointerEnter={() => setOpen(true)} onPointerLeave={() => setOpen(false)}>
      <div className={styles.tooltip} role="tooltip" hidden={!open} id={id}>
        {content}
      </div>
      <button className={styles.trigger} aria-describedby={id}>
        {children}
      </button>
    </div>
  );
};
