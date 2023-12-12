import styles from './grid.module.scss';
import Image from 'next/Image';
import link from 'next/link';
import {motion} from "framer-motion";

const Grid = ({items}) => {
    return <motion.section className={styles.grid}>
        {items.map((item, index) => {
                    const { title, slug, vehicleInformation } = item.node;
                    const { trimLevels } = vehicleInformation;
                    return <motion.article key={index}>
                        {trimLevels && trimLevels[0].images.thumbnail && 
                            <Image 
                                src={trimLevels[0].images.thumbnail.node.sourceUrl}
                                alt={trimLevels[0].images.thumbnail.node.altText}
                                width={trimLevels[0].images.thumbnail.node.mediaDetails.width}
                                height={trimLevels[0].images.thumbnail.node.mediaDetails.height}
                            />
                        }
                        <h3>{title}</h3>
                        <p>
                            <Link href={`/vehicles/${slug}`}>Learn more</Link>
                        </p>
                    </motion.article>
                })}
        
    </motion.section>
}
export default Grid;