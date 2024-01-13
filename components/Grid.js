import Link from 'next/link';
import Image from 'next/image';
import { motion } from "framer-motion";
import Heading from './Heading';
import styles from './grid.module.scss';
import Heading from './Heading';
import Paragraph from './Paragraph';

const convertPriceToFormattedString = (price) => {

    let priceString = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
   
    let priceArray = priceString.split('');

    for (let i = -3; i > -priceArray.length; i -= 4) {
      priceArray.splice(i, 0, '\n');
    }
    
    return priceArray.join('');
  }

  const formattedPrice = convertPriceToFormattedString(22999);
  console.log(formattedPrice);
  

const Grid = ({ items }) => {
    const sectionVariants = {
        closed: { 
            opacity: 0 
        },
        open: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2
          }
        }
    }
    const articleVariants = {
        closed: { 
            y: 50, 
            opacity: 0 
        },
        open: { 
            y: 0, 
            opacity: 1 
        }
    }
    const itemVariants = {
        closed: { 
            y: -50, 
            opacity: 0 
        },
        open: { 
            y: 0, 
            opacity: 1 
        }
    }
    return <motion.section 
        initial="closed"
        animate="open"
        variants={sectionVariants}
        className={styles.grid}
    >
        {items.map((item, index) => {
                    const { title, slug, vehicleInformation } = item.node;
                    const { trimLevels } = vehicleInformation;
                    return <motion.article 
                        key={index}
                        variants={articleVariants}
                        className={styles.grid__items}
                    >
                        {trimLevels && trimLevels[0].images.thumbnail && 
                            <Image 
                                src={trimLevels[0].images.thumbnail.node.sourceUrl}
                                alt={trimLevels[0].images.thumbnail.node.altText}
                                width={trimLevels[0].images.thumbnail.node.mediaDetails.width}
                                height={trimLevels[0].images.thumbnail.node.mediaDetails.height}
                            />
                        }
                        <Heading level={3} color="black">{title}
                        {trimLevels[0]mrsp&&}
                        </Heading>
                        <Paragraph>
                            Starting at ${convertPriceToFormattedString(trimLevels[0].mrsp)}
                        </Paragraph>

                            <Link href={`/vehicles/${slug}`}>Learn more</Link>
<Paragraph>
                        </Paragraph>
                    </motion.article>
                })}
    </motion.section>
}
export default Grid;