import { useState } from 'react';
import { getAllVehicles } from '../../lib/api';
import Container from '../../components/Container';
import Grid from '../../components/Grid';
import Heading from '../../components/Heading';
import Layout from '../../components/Layout';
import Link from 'next/link';
import Tabs from '../../components/Tabs';

import { filterAllVehicleTypes } from '../../lib/utilities';

export async function getStaticProps() {
    const vehiclesData = await getAllVehicles();
    return {
      props: {
        vehiclesData
      }, 
    }
  }

const VehiclesPage = ({vehiclesData}) => {
    const [activeVehicleType, setActiveVehicleType] = useState("all");
    const vehicleTypes = ["all", ...filterAllVehicleTypes(vehiclesData)];

    const filteredVehicles = vehiclesData.filter((vehicle) => {
        const { vehicleTypes } = vehicle.node.vehicleInformation;
        return activeVehicleType === "all" || vehicleTypes.includes(activeVehicleType)
    });

    return (
        <Layout>
          <Container>
            <Heading 
              level={1} 
              color="black"
              textAlign="center"
              marginBottom={12}
            >Vehicles</Heading>
            <p>
            <Link href={`/vehicles/${slug}`}>Learn more</Link>
            </p>
            <Tabs 
              items={vehicleTypes} 
              activeItem={activeVehicleType}
              changeHandler={setActiveVehicleType}  
            />
            <Grid 
              activeItem={activeVehicleType}
              items={filteredVehicles}
            />
          </Container>
        </Layout>
    )
}
export default VehiclesPage