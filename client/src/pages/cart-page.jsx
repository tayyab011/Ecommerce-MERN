
import CartList from "../components/cart/cart-list";
import Layout from "../components/layout/layout";
import Categories from "../components/product/categories";



const   CartPage = () => {
    
    return (
        <Layout>
            <CartList/>
            <Categories/>
        </Layout>
    );
};

export default CartPage;