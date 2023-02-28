import Logo from "./assets/logo.png"
import Logo2 from "./assets/logo2.png"
import { GlobalStyle } from "./styles/global"
import { BannerLogo, BannerTenis, Boots, LogoContainer, MainContainer, ThreeBoots } from "./styles/styles"
import TenisBanner from "./assets/banners/tenis.png"

import Tenis1 from "./assets/sapatos/tenis-1.png"
import Tenis2 from "./assets/sapatos/tenis-2.png"
import Tenis3 from "./assets/sapatos/tenis-3.png"
import Tenis4 from "./assets/sapatos/tenis-4.png"
import Tenis5 from "./assets/sapatos/tenis-5.png"
import Tenis6 from "./assets/sapatos/tenis-6.png"

import TenisOne from "./assets/ThreeBoots/1.png"
import TenisTwo from "./assets/ThreeBoots/2.png"
import TenisThree from "./assets/ThreeBoots/3.png"

export function App() {

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
          <img src={Tenis1} alt="tenis" />
          <img src={Tenis2} alt="tenis" />
          <img src={Tenis3} alt="tenis" />
          <img src={Tenis4} alt="tenis" />
          <img src={Tenis5} alt="tenis" />
          <img src={Tenis6} alt="tenis" />
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
