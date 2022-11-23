import { ProductWrapper } from "./styled";

const Product = ({data}) => {
    const {thumbnailImg, price, productName, discountRate } = data;
    console.log(data);

    return <ProductWrapper>
        <img src={`http://test.api.weniv.co.kr/${thumbnailImg}`} alt={productName}/>
        <p className="product-title">{productName}</p>
        <p>
            <strong>{price}</strong>원
            {!!discountRate && (
            <>
                <span className="discount">{price}원</span>
                <span className="percent">{discountRate}%</span>
            </>
            )}
        </p>
    </ProductWrapper>
}

export default Product;