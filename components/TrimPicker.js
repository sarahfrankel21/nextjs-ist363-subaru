import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion"

import FormGroup from './FormGroup';
import Heading from './Heading';
import Image from 'next/image';
import Label from './Label';
import Select from './Select';

import styles from './trimpicker.module.scss';
const TrimPicker = ({ trims, locations }) => {

    const [activeTrim, setActiveTrim] = useState(trims[0]);
    const [activeLocation, setActiveLocation] = useState(locations[0]);
  
  };
  <Image
  src={`/backgrounds/series-background-${activeLocation + 1}.jpg`}
  alt={`${locations[activeLocation].name} background`}
  width={1900}
  height={656}
  className={styles.trimpicker_images_background}
/>

  

const TrimPicker = ({ trimLevels }) => {
    const trimOptions= trims.map((trim)> 
    {const {name}=trim;
        return{
            label: name,
            value:name.toLowerCase().replace('','')

        }

      });
      const locationOptions = locations.map((location) => {
        const { name } = location;
        return {
          label: name,
          value: name.toLowerCase().replace(".", ""),
        };
      });
      

    const [activeTrimIndex, setActiveTrimIndex] = useState(0);
    const [activeBackgroundIndex, setActiveBackgroundIndex] = useState(0);

    return <section className={styles.trimpicker} id="trimPicker">
        <div className={styles.trimpicker__text}>
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={styles.trimpicker_background_wrapper}
            >
                <Image 
                    src={`/backgrounds/series-background-${parseInt(activeBackgroundIndex)+1}.jpg`}
                    alt={backgroundImages[activeBackgroundIndex].name}
                    width={1900}
                    height={656}
                    className={styles.trimpicker_image_background}
                />
            </motion.div>
            <motion.div
                 key={trimLevels[activeTrimIndex].images.large.sourceUrl}
                 initial={{ x: 50, opacity: 0 }}
                 animate={{ x: 0, opacity: 1 }}
                 exit={{ x: -50, opacity: 0 }}
                 className={styles.trimpicker_image_wrapper}
            >
                <Image 
                    src={trimLevels[activeTrimIndex].images.large.sourceUrl}
                    alt={trimLevels[activeTrimIndex].images.large.altText}
                    width={trimLevels[activeTrimIndex].images.large.mediaDetails.width}
                    height={trimLevels[activeTrimIndex].images.large.mediaDetails.height}
                    className={styles.trimpicker_image_large}
                />
            </motion.div>
        </div>
        <div className={styles.trim__picker}>
            {trims[activeTrim].images.large&&
  <Image
    src={trims[activeTrim].images.large.node.sourceUrl}
    alt={trims[activeTrim].images.large.node.altText}
    width={trims[activeTrim].images.large.node.mediaDetails.width}
    height={trims[activeTrim].images.large.node.mediaDetails.height}
    className={styles.trimpicker_images_foreground}
  />
}
</div>

        <div className={styles.trimpicker_text}>
            <Heading level={2}>Picture Yourself Behind the Wheel</Heading>
            <FormGroup>
                <form>
                <Label>I want to drive a...</Label>
                <Select 
                    options={trimOptions}
                    changeHandler={setActiveTrimIndex}
                />
                 </form>
            </FormGroup>
            <FormGroup>
                <Label>Change the driving location to...</Label>
                <Select 
                    options={backgroundImages.map((backgroundImage, index) => {
                        return {
                            value: index,
                            label: backgroundImage.name
                        }
                    })} 
                    changeHandler={setActiveBackgroundIndex}
                />
               
            </FormGroup>
        </div>
    </section>
}
const backgroundImages = [
    {
        name: "Lakeside",
    },
    {
        name: "Lakeside City",
    },
    {
        name: "City Park",
    },
    {
        name: "Mountains",
    },
    {
        name: "Race track"
    },
    {
        name: "Mountain top"
    },
    {
        name: "City parking lot"
    },
    {
        name: "City street"
    },
    {
        name: "Parking Garage Top"
    }
];


export default TrimPicker;