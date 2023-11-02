import Button from '../components/Button';
import CarColorPicker from '../components/CarColorPicker';
import Layout from '../components/Layout';

const Homepage =()=> {
  return <Layout>
<CarColorPicker/>

  <h1> Homepage</h1>
  <Button label="register now"
  type="primary"
  
  /> 
  <Button label="download now"
  type="secondary"
  
  /> 
</Layout> 
}
export default Homepage; 
 