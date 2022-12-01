// import { SoldOut } from "../Product/styled"
import { ProductImageWrapper, SoldOut, Image } from "./styled"
import styled from "styled-components"

const ProductImage = ({ stockCount, thumbnailImg, productName }) => {
    // console.log(stockCount)
    // console.log(thumbnailImg)

    return (
            <ProductImageWrapper stockCount={stockCount}>
                    <Image src={`https://test.api.weniv.co.kr/${thumbnailImg}`} alt={productName}/>
                    {!stockCount ? <SoldOut>SOLD OUT</SoldOut> : null}
            </ProductImageWrapper>
    )
}

export default ProductImage;
