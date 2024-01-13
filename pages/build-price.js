import Container from '../components/Container';
import Heading from '../components/Heading';
import Layout from '../components/Layout';
import Paragraph from '../components/Paragraph';

const BuildPricePage = () => {
    return (
      <Layout>
        <Container>
          <Heading level={1} textAlign="center">Build & Prices</Heading>
          <Paragraph>
            Looking to buy a Subaru car or SUV? Customize your perfect Subaru vehicle with our tools. Choose models, trims, options, and colors. Build yours today!
          </Paragraph>
        </Container>
      </Layout>
    );
  }
  
  export default BuildPricePage;
  