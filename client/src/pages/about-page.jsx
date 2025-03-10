
import { useEffect } from 'react';
import LegalContents from '../components/features/legal-contents';
import FeatureStore from '../store/FeatureStore';
import Layout from './../components/layout/layout';

const AboutPage = () => {
    const { LegalDetailsRequest } = FeatureStore();

    useEffect(()=>{
(async ()=>{
    await LegalDetailsRequest("about")
})()
    },[])
    return (
        <Layout>
            <LegalContents/>
        </Layout>
    );
};

export default AboutPage;