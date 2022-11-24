import ProductDetail from "../../components/ProductDetail/ProductDetail";
import { useLocation } from "react-router-dom";

const ProductDetailPage = () => {
    const location = useLocation();

    return <ProductDetail locationData={location}/>
};

export default ProductDetailPage;