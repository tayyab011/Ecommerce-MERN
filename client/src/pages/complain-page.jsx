import { useEffect } from "react";
import FeatureStore from "../store/FeatureStore";
import Layout from "../components/layout/layout";
import LegalContents from "../components/features/legal-contents";


const ComplainPage = () => {
    const { LegalDetailsRequest } = FeatureStore();

    useEffect(() => {
      (async () => {
        await LegalDetailsRequest("complain");
      })();
    }, []);
    return (
      <Layout>
        <LegalContents />
      </Layout>
    );
};

export default ComplainPage;