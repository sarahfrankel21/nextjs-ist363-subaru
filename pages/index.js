import Button from '../components/Button'

import Layout from '../components/Layout';
const Homepage = () => {
  return (
    <Layout>
      <BarColorPicker />
      <h1>Homepage</h1>
      <Button label="Register now" type="primary" />
      <Button label="Download now" type="secondary" />
      <Button label="Learn more" />
    </Layout>
  );
};

export default Homepage;
