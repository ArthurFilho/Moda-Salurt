import { createGlobalStyle } from 'styled-components'

import BannerLogoImage2 from "../assets/banners/background.png"

export const GlobalStyle = createGlobalStyle`
*   {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }
body {
    background-color: white;
    color: black;
    -webkit-font-smoothing: antialised;
    background-image: url(${BannerLogoImage2});
    background-size: cover;
}
body, input-security, textarea, button {
    font: 400 1rem Roboto, sans-serif;
    overflow-x: hidden;
}
a {
    color: black;
    text-decoration: none;
}
`

