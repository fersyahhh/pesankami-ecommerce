import heroImage from "../../assets/images/hero-img.png";
import CardProduct from "../Fragments/Products";
import CategoryList from "../Fragments/CategoryList";
import Cart from "../Fragments/Cart";
import PaymentCard from "../Fragments/PaymentCard";
import ModalPayment from "../Fragments/ModalPayment";
import ToLogin from "../Fragments/ToLogin";
import AuthCard from "../Fragments/AuthCard";
import LogoutCard from "../Fragments/LogoutCard";

const HeroSection = () => {
  return (
    <div className="min-h-screen w-full">
      <div className="h-72 w-full">
        <img
          className="h-full w-full object-fill pt-10"
          src={heroImage}
          alt="our-products"
        />
      </div>
      <ToLogin />
      <CategoryList />
      <CardProduct />
      <Cart />
      <PaymentCard />
      <ModalPayment />
      <AuthCard />
      <LogoutCard />
    </div>
  );
};

export default HeroSection;
