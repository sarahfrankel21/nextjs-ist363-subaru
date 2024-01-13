import React from 'react';
import styles from './swatches.module.scss';
const cx =classnames.bind(styles);
const Swatches = ({ colors, setActiveColor }) => {
  return (
    <ul className={styles.swatches_list}>
      {colors.map((color, index), setActiveColor => (
        const swatchClasses= cx({
            swatches_list_item:true,
            active:index==activeColor
        });
        <li
          key={index}
          className={styles.swatches_list_item}
          style={{ backgroundColor: color.swatch.edges[0].node.swatchInformation.hexvalue }}
        >
          {}
        </li>
      ))}
    </ul>
  );
};

export default Swatches;
