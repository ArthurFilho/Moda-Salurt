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
    width: 600px;
    height: 300px;
    margin-bottom: 50px;
    gap: 10px;
    align-items: center;
    justify-content: center;
    img {
        width: 285px;
    }
    div {
        display: flex;
        flex-direction: column;
        gap: 10px;
        img {
            width: 250px;
        }
    }
    @media (max-width: 768px) {
        width: 300px;
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
`

export const Boots = styled.div`
    width: 100%;
    height: 650px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 300px;
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
        top: 1300px;
        left: 490px;
        button {
            display: flex;
            align-items: center;
            border: none;
            cursor: pointer;
        img {
            width: 50px;
        }
    }
    }
    @media (max-width: 768px) {
        gap: 10px;
        flex-direction: column;
        flex-wrap: nowrap;
        height: 100%;
        img {
            width: 350px;
        }
    }
`