import type { FC } from 'react';
import { useEffect, useId, useState } from 'react';

import styles from './style.module.css';
import { Props } from './spec';

export const Tooltip: FC<Props> = (props) => {
  const { children, content } = props;
  const [open, setOpen] = useState(false);
  const id = useId();

  useEffect(() => {
    const escapeHandler = (e: KeyboardEvent, state: boolean) => {
      if (e.key !== 'Escape' || e.repeat) return;
      setOpen(state);
    };

    const controller = new AbortController();
    window.addEventListener('keydown', (e) => escapeHandler(e, false), { signal: controller.signal });
    window.addEventListener('keyup', (e) => escapeHandler(e, true), { signal: controller.signal });

    return () => {
      controller.abort();
    };
  }, [open]);

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
