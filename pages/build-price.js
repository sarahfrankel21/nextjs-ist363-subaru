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
          See how different Subaru models stack up.
Use our compare tool to break down Subaru models and features. You can even compare them to other manufacturers. 
          </Paragraph>
        </Container>
      </Layout>
    );
  }
  
  export default BuildPricePage;
  