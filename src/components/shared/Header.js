import React from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";
import {GreyWhiteButton} from "../shared/Buttons"

const HeaderContainer = styled.div`
  padding: 2% 6%;
  width: 100%;
  box-sizing:border-box;
  font-size:2em;
`;

const HiddenLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    text-decoration: inherit;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color: inherit;
        text-decoration: inherit;
    }
`;

const HeaderLinks = styled.div`
    float:right;
    font-size:14px;
    display: flex;
    align-items: center;
`

const WhiteGreyLink = styled.div`
    font-size:14px;
    color:grey;
    margin: 0em 1em;
    font-weight:bold;
`;

function Header() {
    return (<div>
            <HeaderContainer>
                <HeaderLinks>
                    <HiddenLink to="/"><WhiteGreyLink>Latest Posts</WhiteGreyLink></HiddenLink>
                    <HiddenLink to="/garage"><WhiteGreyLink>Garage Sale Map</WhiteGreyLink></HiddenLink>
                    <HiddenLink to="/post"><GreyWhiteButton>CreatePost</GreyWhiteButton></HiddenLink>
                </HeaderLinks>
                {/* eslint-disable-next-line */}
                <HiddenLink to="/">//THE <b>STOKE LIST</b></HiddenLink>
            </HeaderContainer>
            <hr />
        </div>)
}

export default Header