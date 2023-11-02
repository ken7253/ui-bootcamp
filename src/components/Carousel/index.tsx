import type { FC } from 'react';

import type { Props } from './spec';
import styles from './style.module.css';

export const Carousel: FC<Props> = (props) => {
  const { source, autoPlay = false } = props;
  return (
    <>
      <ul className={styles.images}>
        {source.map(({ url, alt }) => (
          <li className={styles.imageWrapper}>
            <picture>
              <img src={url} alt={alt} />
            </picture>
          </li>
        ))}
      </ul>
      <div className={styles.controllers}>
        <button className={styles.prev} type="button"></button>
        <button className={styles.next} type="button"></button>
        {autoPlay && <button className={styles.play} type="button"></button>}
        <div className={styles.pager}>
          {source.map((_, i) => (
            <button type="button">{`${i}/${source.length}`}</button>
          ))}
        </div>
      </div>
    </>
  );
};
