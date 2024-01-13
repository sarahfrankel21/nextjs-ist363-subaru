
import Button from './Button';
import ButtonGroup from './ButtonGroup';
import Container from './Container';
import Heading from './Heading';
import Paragraph from './Paragraph';
import styles from './customcalltoaction.module.scss'; 

const CustomCallToAction = ({ modelName }) => {
  return (
    <section className={styles.customCallToAction}>
      <Container>
        <div className={styles.ctaFlexbox}>
          <Heading level={2}>Explore {modelName}</Heading>
          <Paragraph color="white">
            Customize your {modelName} today or get in touch with your local dealership to experience it firsthand.
          </Paragraph>
          <ButtonGroup>
            <Button label="Build & Personalize" type="primary" />
            <Button label="Contact Local Dealer" type="secondary" />
          </ButtonGroup>
        </div>
      </Container>
    </section>
  );
};

export default CustomCallToAction;
