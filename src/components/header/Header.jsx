import React from "react";
import Logo from "../../assets/images/logo/logo.svg";
import Facebook from "../../assets/images/icons/facebook.svg";
import Instagram from "../../assets/images/icons/instagram_icon.svg";
import Pinterest from "../../assets/images/icons/pinterest_icon.svg";
import { HeaderStyle,LogoBox,Image ,SocialMediaItem,SocialMediaItemList,HeaderFlex,SocialMediaItemLink} from "./Header.styles.jsx";
const Header = () => {
  return (
    <HeaderStyle>
      <div className="wrapper">
      <HeaderFlex>
        <select>
          <option selected>USD</option>
        </select>
        <LogoBox>
          <Image className="logo" src={Logo} alt="maynooth logo" />
        </LogoBox>

        <SocialMediaItemList>
          <SocialMediaItem>
            <SocialMediaItemLink
              href="https://www.facebook.com/hazqeel.niz.2"
              alt="hizqel nizamani facebook"
            >
              <Image src={Facebook} alt="facebook icon" />
            </SocialMediaItemLink>
          </SocialMediaItem>
          <SocialMediaItem>
            <SocialMediaItemLink
              href="https://www.facebook.com/hazqeel.niz.2"
              alt="hizqel nizamani instagram"
            >
              <Image src={Instagram} alt="Instagram icon" />
            </SocialMediaItemLink>
          </SocialMediaItem>
          <SocialMediaItem>
            <SocialMediaItemLink
              href="https://www.facebook.com/hazqeel.niz.2"
              alt="hizqel nizamani pinterest"
            >
              <Image src={Pinterest} alt="pinterest icon" />
            </SocialMediaItemLink>
          </SocialMediaItem>
        </SocialMediaItemList>
        </HeaderFlex>
      </div>
    </HeaderStyle>
  );
};

export default Header;
