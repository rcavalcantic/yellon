import styled from 'styled-components'

const PanelTitle = styled.div`
  display: flex;
  margin: auto 0 auto auto;
  font-weight: bolder;
  font-size: large;
  letter-spacing: 1px;
`

const Resume = styled.div`
  display: flex;
  margin: auto auto auto 0;
  width: 45%;
  font-weight: lighter;
`

const Container = styled.div`
  height: 140px;
  background-color: white;
  color: black;
  display: flex;
` 

export { Container, PanelTitle, Resume}