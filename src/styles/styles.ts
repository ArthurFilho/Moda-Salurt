import styled from "styled-components";

import BannerLogoImage from "../assets/banners/bannerLogo.png"
import BannerLogoImage1 from "../assets/banners/bannerLogo1.png"

export const MainContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const LogoContainer = styled.div`
    display: flex;
    margin-top: 15px;
    img {
        width: 50px;
    }
`

export const BannerTenis = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 50px;
    margin-bottom: 50px;
    height: 400px;
    background-color: black;
    background-image: url(${BannerLogoImage1});
    background-position: center;
    img {
        width: 450px;
    }
    @media (max-width: 768px) {
        img {
            width: 300px;
        }
    }
`

export const ThreeBoots = styled.div`
    display: flex;
    width: 100%;
    height: 700px;
    margin-bottom: 50px;
    gap: 10px;
    align-items: center;
    justify-content: center;
    
    img {
        width: 600px;
        transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    }
    img:hover {
        transform:scale(1.06,1.06);
    } 
    div {
        display: flex;
        flex-direction: column;
        gap: 10px;
        img {
            width: 530px;
            transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
        }
        img:hover{
        transform:scale(1.06,1.06);
    }
    }
    @media (max-width: 768px) {
        width: 300px;
        height: 400px;
        img {
            width: 185px;
        }
        div{ 
            img {
            width: 155px;
        }
        }
    }
`

export const BannerLogo = styled.div`
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 200px;
    background-image: url(${BannerLogoImage});
    background-position: center;
    background-attachment: fixed;
`

export const Boots = styled.div`
    width: 100%;
    height: 650px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 300px;
    margin-top: 285px;
    img {
        width: 1500px;
        position: absolute;
        left: 0;
        z-index: -1;
    }
    div {
        display: flex;
        gap: 400px;
        position: absolute;
        top: 1950px;
        left: 490px;
        button {
            display: flex;
            align-items: center;
            border: none;
            cursor: pointer;
            background-color: white;
        img {
            width: 50px;
        }
    }
    }
    @media (max-width: 768px) {
        height: 300px;
        margin-bottom: 150px;
        div {
            gap: 130px;
            top: 1570px;
            left: 150px;
        }
        img {
            width: 500px;
        }
    }
`

// .parallax_section{
// 	box-sizing: border-box;
// 	min-height: 100vh;
// 	padding: 10vh 10vh;
// 	position: relative;
// 	width: 100vw;
// 	display: flex;
// 	align-items: center;
// 	justify-content: center;
// 	z-index: 1;

// 	overflow: hidden;

// 	transform-style: preserve-3d;
// }
// .parallax_bg{
// 	position: absolute;
// 	left: 0;
// 	top: 0;
// 	right: 0;
// 	bottom: 0;
// 	background-size: cover;
// 	background-position: center center;
// 	z-index: -1;
// 	min-height: 100%; 

// 	transform: translate3d(0,0,-1px) scale(2);
// }
// 



