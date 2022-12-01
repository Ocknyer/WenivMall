import ProductList from "../../components/ProductList/ProductList";
import { HomePageWrapper, CartIcon } from "./styled";

const HomePage = () => {
    
    return (
        <HomePageWrapper>
            <ProductList/>
            <CartIcon to="/cart"/>
        </HomePageWrapper>
    )
}

export default HomePage;