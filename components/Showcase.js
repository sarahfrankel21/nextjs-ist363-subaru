import { scroller } from 'react-scroll';

import Button from './Button';
import Container from './Container';
import Heading from './Heading';
import Image from 'next/image';

import styles from './showcase.module.scss';

const Showcase = ({ 
   featuredImage, subtitle, title
}) => {
    return <section className={styles.showcase}>
            {backgroundImage &&
                <div className={styles.showcase_image}>
                    <Image 
                        src={featuredImage.sourceUrl}
                        alt={featuredImage.altText}
                        width={featuredImage.mediaDetails.width}
                        height={featuredImage.mediaDetails.height}
                        className={styles.showcase_image}
                    />
                </div>
            }
            <Container>
            <div className={styles.showcase_gradient}></div>
                <div className={styles.showcase_text}>
                    <Heading level={3} color="white" marginBottom={1}>2024{subtitle}</Heading>
                    <Heading level={1} color="white" marginBottom={2}>2024{title}</Heading>
                    {headline && 
                        <Heading level={1}>{headline}</Heading>
                    }
                    <Button 
                        label="Learn more" 
                        type="primary" 
                        clickHandler={() => {
                            scroller.scrollTo("main-content", {
                                duration: 800,
                                delay: 0,
                                smooth: true
                            });
                        }}
                    />
                </div>
            </Container>
    </section>
}
export default Showcase;