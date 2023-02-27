import Logo from "./assets/logo.png"
import { GlobalStyle } from "./styles/global"
import { BannerLogo, BannerTenis, Boots, LogoContainer, MainContainer, ThreeBoots } from "./styles/styles"

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

        <BannerTenis />
        
        <ThreeBoots> 
        <img src="" alt="" />
        <div>
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
        </ThreeBoots>

        <BannerLogo />

        <Boots />

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
