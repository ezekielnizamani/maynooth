import React from 'react'
import CartIcon from "../../assets/images/icons/cart-icon.svg";
import {SerachInput,NavigationStyle,NavigationList,NavigationItem,NavigationFlex,NavigationLink} from './Navigation.styles'
const Navigation = () => {
  return (
    <NavigationStyle>
    <div className="wrapper ">
    <NavigationFlex>
    <div className="search_box">
        <SerachInput
          type="search"
          placeholder="find something you love"
          className="serach-input"
        />
        <span className="zoom_icon"></span>
      </div>
      <NavigationList >
        <NavigationItem>
          <NavigationLink href="#">Bedroom</NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink href="#">living room</NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink href="#">kitchen & dinning</NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink href="#">Sign in / sign up</NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <img src={CartIcon} />
        </NavigationItem>
      </NavigationList>
      </NavigationFlex>  
    </div>
    </NavigationStyle>
  )
}

export default Navigation