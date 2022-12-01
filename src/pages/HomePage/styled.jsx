import { Link } from "react-router-dom";
import styled from "styled-components";
import CartIconWhite from '../../asset/icon-shopping-cart-white.svg'

export const HomePageWrapper = styled.main`
        width: 1280px;
        margin: 0 auto;
        display: flex;
        position: relative;
`

export const CartIcon = styled(Link)`
        width: 80px;
        height: 80px;
        display: inline;
        border-radius: 50%;
        position: fixed;
        top: 60px;
        right: 10px;
        background: #6327FE url(${CartIconWhite}) no-repeat center/ 40px 40px;
`