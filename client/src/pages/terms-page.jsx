import { useEffect } from "react";
import Layout from "../components/layout/layout";
import LegalContents from "../components/features/legal-contents";
import FeatureStore from "../store/FeatureStore";


const TermsPage = () => {
   const { LegalDetailsRequest } = FeatureStore();

   useEffect(() => {
     (async () => {
       await LegalDetailsRequest("terms");
     })();
   }, []);
   return (
     <Layout>
       <LegalContents />
     </Layout>
   );
};

export default TermsPage;