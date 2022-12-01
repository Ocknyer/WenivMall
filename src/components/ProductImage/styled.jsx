import styled from "styled-components";

export const ProductImageWrapper = styled.div`
        position: relative;
        width: 380px;
        height: 380px;
        border: 1px solid #bdbdbd;
        border-radius: 10px;
        box-sizing: border-box;
        justify-content: center;
        display: flex;
        &::before {
            content: "";
            width: 100%;
            height: 100%;
            position: absolute;
            background-color: ${({ stockCount }) => (!stockCount ? "rgba(0, 0, 0, 0.3)" : "tranparent")}
        }
`

export const Image = styled.img`
    width: 100%;
    background-color: blue;
`

export const SoldOut = styled.p`
    position: absolute;
    display: flex;
    width: 300px;
    height: 40px;
    line-height: 18px;
    font-weight: 700;
    font-size: 14px;
    background: #333333;
    color: #f2f2f2;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    bottom: 30px;
`