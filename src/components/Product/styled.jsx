import styled from "styled-components";

export const ProductWrapper = styled.li`
    width: 380px;

    img {
        width: 380px;
        height: 390px;
        border: 1px solid #BDBDBD;
        border-radius: 10px;
    }

    p {
        line-height: 20px;
        .discount {
            font-weight: 400;
            font-size: 16px;
            line-height: 20px;
            color: #828282;
            text-decoration-line: line-through;
        }

        .percent {
            font-weight: 700;
            font-size: 16px;
            line-height: 20px;
            color: #6327FE;
        }
    }

    .product-title {
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        display:block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    strong {
        font-weight: 700;
        font-size: 24px;
        line-height: 30px;
    }

`

