import { FC } from "react";
import styles from './index.module.scss'

const SkyBg: FC = () => {
  return (
    <div className={`${styles.overflow}`}>
      <div className={`${styles.container}`}>
        <div className={`${styles.layer1} ${styles.layer}`}></div>
        <div className={`${styles.layer2} ${styles.layer}`}></div>
        <div className={`${styles.layer3} ${styles.layer}`}></div>
      </div>
    </div>
  )
}

export default SkyBg