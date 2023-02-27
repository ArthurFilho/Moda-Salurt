import Logo from "./assets/logo.png"
import { GlobalStyle } from "./styles/global"
import { BannerLogo, BannerTenis, Boots, LogoContainer, MainContainer, ThreeBoots } from "./styles/styles"
import TenisBanner from "./assets/banners/tenis.png"

import Tenis1 from "./assets/sapatos/tenis-1.png"
import Tenis2 from "./assets/sapatos/tenis-2.png"
import Tenis3 from "./assets/sapatos/tenis-3.png"
import Tenis4 from "./assets/sapatos/tenis-4.png"
import Tenis5 from "./assets/sapatos/tenis-5.png"
import Tenis6 from "./assets/sapatos/tenis-6.png"

export function App() {

  return (
    <MainContainer>
      <LogoContainer>
        
        <img src={Logo} width={50} />
        
        <div>
        
          <h3>Salurt</h3>
          
          <p>Company</p>
        
        </div>

      </LogoContainer>

        <BannerTenis>
          <img src={TenisBanner} alt="" />
        </BannerTenis>
        
        <ThreeBoots> 
        <img src={Tenis1} width={500} alt="" />
        <div>
          <img src={Tenis1} width={250} alt="" />
          <img src={Tenis1} width={250} alt="" />
        </div>
        </ThreeBoots>

        <BannerLogo >
        </BannerLogo>

        <Boots>
          <img src={Tenis1} width={200} alt="" />
          <img src={Tenis2} width={200} alt="" />
          <img src={Tenis3} width={200} alt="" />
          <img src={Tenis4} width={200} alt="" />
          <img src={Tenis5} width={200} alt="" />
          <img src={Tenis6} width={200} alt="" />
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
