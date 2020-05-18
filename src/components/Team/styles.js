import styled from 'styled-components'
import { yellow } from '../../utils/_colors'

const ImgTeam = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  filter: brightness(0.5);
  cursor: pointer;
  margin: auto 4px;

  &:hover {
    filter: none;
  }
`

const TeamSection = styled.div`
  > h3 {
    display: flex;
    margin: auto;
    justify-content: center;
  }

  > h5 {
    display: flex;
    margin: auto;
    justify-content: center;
    color: ${yellow};
    font-weight: bolder;
  }
`

export { ImgTeam, TeamSection }