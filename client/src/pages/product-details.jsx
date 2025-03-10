
import { useParams } from 'react-router-dom';
import Layout from '../components/layout/layout';
import Details from '../components/product/details';
import Brands from '../components/product/brands';
import ProductStore from '../store/ProductStore';
import { useEffect } from 'react';

const ProductDetails = () => {
const {id}=useParams()
const { DetailsRequest, ReviewListRequest, BrandListRequest } = ProductStore();

useEffect(()=>{
(async ()=>{
    await DetailsRequest(id)
    await ReviewListRequest(id);
    BrandListRequest ===null ? await BrandListRequest(id): null;
})()
},[])
    return (
        <Layout>
           <Details/> 
           <Brands/>
        </Layout>
    );
};

export default ProductDetails;