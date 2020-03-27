import styled from 'styled-components'

const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
`

const HeaderWrapper = styled.div`
  margin: 32px;
`

const Logo = styled.img`
  max-height: 200px;
  max-width: 200px;
  margin-left: 256px;
  margin-top: -50px;
`

const MenuButton = styled.button`
  float: right;
  background-color: initial;
  color: black;
  border: none;
  padding: 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 22px;
  cursor: pointer;
  font-weight: bolder;
  margin-right: 256px;

  &:hover {
    border: solid;
    border-width: 0.5px;
  }
`

export { Header, HeaderWrapper, Logo, MenuButton }