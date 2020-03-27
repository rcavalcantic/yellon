import styled from 'styled-components'

const PanelTitle = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 64px;
  font-weight: bolder;
`
const Resume = styled.div`
  position: fixed;
  bottom: 8px;
  left: 16px;
  font-size: 18px;
  margin-left: 128px;

  > h2 {
    font-weight: normal;
  }

  > span {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: solid;
    border-width: 0.5px;
    &:hover {

    }
  }
` 

export { PanelTitle, Resume}