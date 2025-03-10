
import './App.css'
import {BrowserRouter, Route, Routes,} from "react-router-dom"
import HomePage from './pages/home-page';
import ProductByBrand from './pages/product-by-brand';
import ProductByCategory from './pages/product-by-category';
import ProductByKeyword from './pages/product-by-keyword';
import ProductDetails from './pages/product-details.JSX';
import AboutPage from './pages/about-page';
import RefundPage from './pages/refund-page';
import PrivacyPage from './pages/privacy-page';
import TermsPage from './pages/terms-page';
import HowToBuyPage from './pages/how-to-buy-page';
import ContactPage from './pages/contact-page';
import ComplainPage from './pages/complain-page';
import LoginPage from './pages/login-page';
import OtpPage from './pages/otp-page';
import ProfilePage from './pages/profile-page';
import WishPage from './pages/wish-page';
import CartList from './components/cart/cart-list';
import CartPage from './pages/cart-page';
import OrderPage from './pages/order-page';
import InvoicePage from './pages/invoice-page';



function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/by-brand/:id" element={<ProductByBrand />} />
        <Route path="/by-category/:id" element={<ProductByCategory />} />
        <Route path="/by-keyword/:keyword" element={<ProductByKeyword />} />
        <Route path="/details/:id" element={<ProductDetails />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/refund" element={<RefundPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/how-to-buy" element={<HowToBuyPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/complain" element={<ComplainPage />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/otp" element={<OtpPage />} />
        <Route path="/profile" element={<ProfilePage />} />

        <Route path="/wish" element={<WishPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/orders" element={<OrderPage />} />
        <Route path="/invoice/:id" element={<InvoicePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
