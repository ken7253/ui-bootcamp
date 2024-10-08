import type { FC } from 'react';
import { useEffect, useId, useState } from 'react';

import { Props } from './spec';

import styles from './style.module.css';

export const Tooltip: FC<Props> = (props) => {
  const { children, content, opened = false } = props;
  const [open, setOpen] = useState(opened);
  const id = useId();

  useEffect(() => {
    const escapeHandler = (event: KeyboardEvent, state: boolean) => {
      if (event.key !== 'Escape' || event.repeat) return;
      setOpen(state);
    };

    const controller = new AbortController();
    window.addEventListener('keydown', (event) => escapeHandler(event, false), { signal: controller.signal });
    window.addEventListener('keyup', (event) => escapeHandler(event, true), { signal: controller.signal });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div className={styles.container} onPointerEnter={() => setOpen(true)} onPointerLeave={() => setOpen(false)}>
      <div className={styles.tooltipWrapper}>
        <div className={styles.tooltip} role="tooltip" hidden={!open} id={id}>
          {content}
        </div>
      </div>
      <div className={styles.trigger} aria-describedby={id}>
        {children}
      </div>
    </div>
  );
};
