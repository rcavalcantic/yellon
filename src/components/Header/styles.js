import styled from 'styled-components'
import { tablet } from '../../utils/_breakpoints'

const Header = styled.header`
  position: fixed;
  display: flex;
  top: 0;
  width: 100%;
  height: 10%;
  background-color: black;
`

const HeaderWrapper = styled.div`
  margin: 0;
  @media (min-width: ${tablet}) {
    margin: 32px;
  }
`

const Logo = styled.img`
  max-height: 120px;
  max-width: 120px;
  margin-top: -25px;
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
    margin-right: 256px;
    margin-top: 22px;
    border: solid 0.5px;
    
    &::before {
      content: "menu";
    }
  }
`

const Sidebar = styled.div`
  height: 100%;
  background-color: black;
  position: fixed;
  width: 50%;
  transition: width 2s;
  z-index: -999;
  background-color: black;
  right: 0;

  @media (min-width: ${tablet}) {
    height: 100%;
    width: 15%;
  }
`

const LogoSidebar = styled.img`
  width: 120px;
  height: 120px;
  padding: 36px 36px 0;
  
  @media (min-width: ${tablet}) {
    padding: 81px 36px 0;
  }
`

export { Header, HeaderWrapper, Logo, MenuButton, Sidebar, LogoSidebar }