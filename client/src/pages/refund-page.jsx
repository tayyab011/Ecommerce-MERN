import { useEffect } from "react";
import FeatureStore from "../store/FeatureStore";
import Layout from "../components/layout/layout";
import LegalContents from "../components/features/legal-contents";


const RefundPage = () => {
   const { LegalDetailsRequest } = FeatureStore();

   useEffect(() => {
     (async () => {
       await LegalDetailsRequest("refund");
     })();
   }, []);
   return (
     <Layout>
       <LegalContents />
     </Layout>
   );
};

export default RefundPage;