import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faWindowClose } from '@fortawesome/free-solid-svg-icons'
import { Divider, Header, HeaderWrapper, Logo, MenuButton, SentenceImg, Sidebar, LogoSidebar } from './styles' 
import yellonLogo from '../../static/images/yellon-white.png'
import sentence from '../../static/images/sejaon.png'
import yellonOutline from '../../static/images/yellow-outline.png'
import instagramIcon from '../../static/images/icone-insta.png'
import facebookIcon from '../../static/images/icone-face.png'

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
        <Divider />
        <SentenceImg src={sentence} alt="Yellon Publicidade logo" />
      </HeaderWrapper>
      { state.isMenuOpen && 
        <Sidebar>
          <LogoSidebar src={yellonOutline} alt="menu lateral seja on"/>
          <li style={{ display: "grid", justifyContent: "start", lineHeight: 0 }}>
            <ul style={{ fontSize: '36px', color: 'black' }}>Home</ul>
            <ul style={{ fontSize: '36px', color: 'black' }}>A Agência</ul>
            <ul style={{ fontSize: '36px', color: 'black' }}>Portifólio</ul>
            <ul style={{ fontSize: '36px', color: 'black' }}>Team Yellon</ul>
            <ul style={{ fontSize: '36px', color: 'black' }}>Contatos</ul>
          </li>
          <div style={{ margin: '32px'}}>
            <img style={{ width: '36px'}} src={instagramIcon} alt={"Instagram icone"}/>
            <img style={{ width: '36px', marginLeft: '-10px'}} src={facebookIcon} alt={"Facebook icone"}/>
          </div>
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