import styled from "styled-components";
import {NavLink as Link} from 'react-router-dom'
import {FaPizzaSlice} from 'react-icons/fa'

export const Nav = styled.nav`
background: transparent;
height: 80px;
display: flex;
justify-content: center;
font-weight: 700;
font-size: 4rem;
margin-left: -8rem;
;
`
export const NavLink = styled(Link)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
cursor: pointer;

@media screen and (max-width: 670px) {
    position: absolute;
    top: 10px;
    left: 25px;
}
@media screen and (min-width: 670px) {
    margin-top: 2rem;
}

`
export const NavIcon = styled.div`
display: flex-end;
position: absolute;
top: 0;
right: 0;
cursor: pointer;
color: #fff;


p{
    transform: translate(-175%, 100%);
    display:block;
    font-weight: bold;
    font-size: 2rem;
   
    @media screen and (max-width: 850px) {
    display: none;
}
}
`

export const Bars = styled(FaPizzaSlice)`
font-size: 4rem;
transform: translate(-50%, -30%);

@media screen and (max-width: 500px) {
    font-size: 3rem;
    transform: translate(-50%, 50%);
}
@media screen and (max-width: 670px) {
    transform: translate(-50%, 20%);
}
@media screen and (min-width: 670px) {
    transform: translate(-50%, 30%);
}
@media screen and (min-width: 850px) {
    font-size: 4rem;
    transform: translate(-50%, -30%);
}
`