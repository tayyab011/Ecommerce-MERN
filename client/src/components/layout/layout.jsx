import AppNavBar from "../layout/appNavBar.jsx";
import Footer from "../layout/footer.jsx";
import { Toaster } from "react-hot-toast";


const Layout = (props) => {
    return (
      <div>
        <AppNavBar />

        {props.children}
<Toaster 
position="bottom-center"/>
        <Footer />
      </div>
    );
};

export default Layout;