import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faWindowClose } from '@fortawesome/free-solid-svg-icons'
import { Header, HeaderWrapper, Logo, MenuButton, Sidebar, LogoSidebar } from './styles' 
import yellonLogo from '../../static/images/yellon-white.png'

export default function Hero() {
  const [state, setState] = useState({
    isMenuOpen: false,
  })

  const handleMenu = () => {
    setState({ isMenuOpen: !state.isMenuOpen })
  }

  return(
    <Header>
      <HeaderWrapper onClick={() => {window.history.go("https://yellonpublicidade.com.br")}}>
        <Logo src={yellonLogo} alt="Yellon Publicidade logo" />
      </HeaderWrapper>
      { state.isMenuOpen && 
        <Sidebar>
          <LogoSidebar src={yellonLogo} alt="menu lateral seja on"/>
          <li style={{ display: "grid", justifyContent: "start", lineHeight: 0, fontWeight: "bold" }}>
            <ul>Início</ul>
            <ul>Portifólio</ul>
            <ul>Equipe</ul>
          </li>
        </Sidebar>
      }
      <MenuButton onClick={handleMenu}>
        {
          state.isMenuOpen ? 
          <FontAwesomeIcon style={{ marginLeft: "8px"}} icon={faWindowClose} />
          :
          <FontAwesomeIcon style={{ marginLeft: "8px"}} icon={faBars} />
        }
      </MenuButton>
    </Header>
  )
}