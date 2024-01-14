import Container from '../components/Container';
import Heading from '../components/Heading';
import Layout from '../components/Layout';
import Paragraph from '../components/Paragraph';

const SoppingToolsPage = () => {
  return (
    <Layout>
      <Container>
      <Heading level={1} textAlign="center">Shopping Tools</Heading>
        <Paragraph>
        Select a model to compare against other Subaru models and manufacturers.
        </Paragraph>
      </Container>
    </Layout>
  );
}

export default ShoppingToolsPage;
