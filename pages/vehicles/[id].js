import CallToAction from '../../components/CallToAction';
import ColorPicker from '../../components/ColorPicker';
import Container from '../../components/Container';
import Image from 'next/image';
import Layout from '../../components/Layout';
import Showcase from '../../components/Showcase';
import TrimPicker from '../../components/TrimPicker';
import {getDrivingLocations} from'../../lib/locations';
import head from '/next/head';

import { getAllVehicleSlugs, getVehicleDataBySlug } from '../../lib/api'

export async function getStaticPaths() {
    const vehicles = await getAllVehicleSlugs();
  
    const paths = vehicles.map((vehicle) => {
        return {
            params: {
                id: vehicle.node.slug
            }
        }
    })
    
    return {
      paths: paths,
      fallback: false, 
    }
  }
  export async function getStaticProps({ params }) {
    const vehicleData = await getVehicleBySlug(params.id);
    const drivingLocations = getDrivingLocations();
  
    return {
      props: {
        vehicleData,
        drivingLocations,
      },
    };
  } 
  
  export default function SingleVehiclePage({ vehicleData }) {
    const { title, slug, featuredImage, vehicleInformation } = vehicleData;
    const {headline}=vehicleInformation.showcase;
    const { trimLevels  } = vehicleInformation;
  
    return <Layout>
      <Head><title> 
        Subaru USA
        </title> </Head>
        <Showcase 
        subtitle={title}
        title={headline}
          featuredImage={featuredImage}
        />
        <div id="main-content">
  <Container>
    <TrimPicker trims={trimLevels} locations={drivingLocations} />
  </Container>
</div>
        <Container>
          <TrimPicker trimLevels={trimLevels} />
          <ColorPicker vehicleColors={vehicleColors} />
        </Container>
        <CallToAction vehicleName={title} />
    </Layout>
}