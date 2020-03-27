import React, { Component } from 'react'
import { Header, HeaderWrapper, Logo, MenuButton } from './styles' 
import yellonLogo from '../../static/images/logotipo.png'

export default class Hero extends Component {
  render() {
    return(
      <Header>
        <HeaderWrapper onClick={() => {window.history.go("https://yellonpublicidade.com.br")}}>
            <Logo src={yellonLogo} alt="Yellon Publicidade logo" />
          <MenuButton>MENU</MenuButton>
        </HeaderWrapper>
      </Header>
    )
  }
}