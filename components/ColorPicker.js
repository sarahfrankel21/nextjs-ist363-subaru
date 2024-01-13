import React, { useState } from 'react';
import {useState} from React;
import Heading from './Heading';
import Swatches from './Swatches';
import styles from './CarColorPicker';

const CarColorPicker = ({colors}) => {
  const [activeColor, setActiveColor] = useState();

  return (
    <section>
      <Heading level={2}>Pick a color</Heading>
      <Swatches colors={colors}> 
      <Image
        src={colors[activeColor].image.node.sourceUrl}
        alt={colors[activeColor].image.node.altText}
        width={colors[activeColor].image.node.mediaDetails.width}
        height={colors[activeColor].image.node.mediaDetails.height}
        className={styles.color.colorpicker__image}
      />
      </Swatches>
      <Heading level={3}>{colors[activeColor].swatch.edges[0].node.name}</Heading>
    </section>
  );
};

export default CarColorPicker;
