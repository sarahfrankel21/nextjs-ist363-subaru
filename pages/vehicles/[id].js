import Layout from "../../components/Layout";
import {getVehicleBySlug, getAllVehicleSlugs} from '../../lib/api';

//water fall get static paths

export async function getStaticPaths(){
    const pathsArr = getAllVehicleSlugs();
    const paths=pathsArr.map((slug)=>{
        return{
            params: {
                id:slug
            }
        }
    });

    return{
        paths, 
        fallback: false 
    }


}
export async function getStaticProps({params}){
    const vehicleData =getVehicleBySlug(params.id);
    return {
        props :{
            vehicleData
        }

    }
}
const SingleVehiclePage=({vehicleData})=>{
const {model,price}= vehicleData;
return <Layout> 
<h1> {model} </h1>
<h2> {price} </h2>
</Layout>


}
export default SingleVehiclePage;