import styled from 'styled-components'
import { tablet } from '../../utils/_breakpoints'
import { yellow } from '../../utils/_colors'

const Header = styled.header`
  position: fixed;
  display: flex;
  top: 0;
  width: 100%;
  height: 70px;
  background-color: black;
`

const HeaderWrapper = styled.div`
  margin: 0;
`

const Divider = styled.div`
  border-left: 2px solid ${yellow};
  display: inline-block;
  width: 0;
  height: 45px;
  vertical-align: top;
  margin-top: 13px;
  margin-left: 20px;
  margin-right: 20px;
`

const SentenceImg = styled.img`
  margin-top: -10px;
  width: 120px;
  vertical-align: super;
`

const Logo = styled.img`
  max-height: 120px;
  max-width: 120px;
  margin-left: 8px;
  
  @media (min-width: ${tablet}) {
    margin-top: -50px;
    margin-left: 256px;
  }
`

const MenuButton = styled.button`
  background-color: black;
  color: white;
  border: none;
  text-align: center;
  text-decoration: none;
  font-size: 20px;
  cursor: pointer;
  position: absolute;
  right: 0;
  padding-top: 20px;
  padding-right: 16px;
  
  @media (min-width: ${tablet}) {
    padding: 8px;
    float: right;
    margin-right: 17%;
    margin-top: 22px;
    border: solid 0.5px;
    
    &::before {
      content: "menu";
    }
  }
`

const Sidebar = styled.div`
  height: 100%;
  background-color: ${yellow};
  position: fixed;
  width: 50%;
  z-index: -999;
  right: 0;
  transition: width 2s;
  
  @media (min-width: ${tablet}) {
    transition: width 2s;
    height: 100%;
    width: 22%;
    margin-top: 64px;
  }
`

const LogoSidebar = styled.img`
  width: 120px;
  padding: 36px 36px 0;
  
  @media (min-width: ${tablet}) {
    padding: 81px 36px 0;
    margin-bottom: 120px;
  }
`

export { Divider, Header, HeaderWrapper, Logo, MenuButton, SentenceImg, Sidebar, LogoSidebar }