import Logo from "./assets/logo.png"
import Logo2 from "./assets/logo2.png"
import { GlobalStyle } from "./styles/global"
import { BannerLogo, BannerTenis, Boots, LogoContainer, MainContainer, ThreeBoots } from "./styles/styles"
import TenisBanner from "./assets/banners/tenis.png"

import TenisOne from "./assets/ThreeBoots/1.png"
import TenisTwo from "./assets/ThreeBoots/2.png"
import TenisThree from "./assets/ThreeBoots/3.png"

import { ArrowCircleLeft, ArrowCircleRight } from "phosphor-react"
import { useState } from "react"

import Tenis1 from "./assets/sapatos/tenis-1.png"
import Tenis2 from "./assets/sapatos/tenis-2.png"
import Tenis3 from "./assets/sapatos/tenis-3.png"
import Tenis4 from "./assets/sapatos/tenis-4.png"
import Tenis5 from "./assets/sapatos/tenis-5.png"
import Tenis6 from "./assets/sapatos/tenis-6.png"

const TenisImages = [
  { id: 1, img: Tenis1 },
  { id: 2, img: Tenis2 },
  { id: 3, img: Tenis3 },
  { id: 4, img: Tenis4 },
  { id: 5, img: Tenis5 },
  { id: 6, img: Tenis6 },
]

export function App() {

    const [currentProductIndex, setCurrentProductIndex] = useState(0);
  
    const handleNext = () => {
      if (currentProductIndex === TenisImages.length - 1) {
        setCurrentProductIndex(0);
      } else {
        setCurrentProductIndex(currentProductIndex + 1);
      }
    };
  
    const handlePrev = () => {
      if (currentProductIndex === 0) {
        setCurrentProductIndex(TenisImages.length - 1);
      } else {
        setCurrentProductIndex(currentProductIndex - 1);
      }
    };

  return (
    <MainContainer>
      <LogoContainer>
        
        <img src={Logo} />
        
        <div>
        
          <h3>Salurt</h3>
          
          <p>Company</p>
        
        </div>

      </LogoContainer>

        <BannerTenis>
          <img src={TenisBanner} alt="" />
        </BannerTenis>
        
        <ThreeBoots> 
        <img src={TenisOne} alt="" />
        <div>
          <img src={TenisTwo} alt="" />
          <img src={TenisThree} alt="" />
        </div>
        </ThreeBoots>

        <BannerLogo >
          <p>Compre agora seu modelo de tênis</p>
          <h2>JUNTO CONOSCO O MELHOR</h2>
          <img src={Logo2} width={100} alt="" />
        </BannerLogo>

        <Boots>

      <img src={TenisImages[currentProductIndex].img} alt="" />
      
          <div>
          <button onClick={handlePrev}>
            <ArrowCircleLeft size={32} />
          </button>
          <button onClick={handleNext}>
            <ArrowCircleRight size={32} />
          </button>
          </div>
        </Boots>

        <LogoContainer>
        
        <img src={Logo} width={50} />
        
        <div>
        
          <h3>Salurt</h3>
          
          <p>Company</p>
        
        </div>

      </LogoContainer>

    <GlobalStyle />
    </MainContainer>
  )
}