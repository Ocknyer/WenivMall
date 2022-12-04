import { useLocation } from "react-router-dom";
import ProductDetail from "../../components/ProductDetail/ProductDetail";
import ProductDetailImage from "../../components/ProductDetailImage/ProductDetailImage";
import { CartIcon } from "../HomePage/styled";
import { ProductDetailPageWrapper } from "./styled";

const ProductDetailPage = () => {
  const location = useLocation();
  // console.log(location);

  return (
  <ProductDetailPageWrapper>
    <ProductDetail locationData={location} />
    <ProductDetailImage locationData={location}/>
    <CartIcon to="/cart" />
  </ProductDetailPageWrapper>
  );
};

export default ProductDetailPage;