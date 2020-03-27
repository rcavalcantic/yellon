import styled from 'styled-components'
import imgHero from '../../static/images/teatro-amazonas.jpg'

const HeroImg = styled.img`
  background-image: url(${imgHero});
  height: -webkit-fill-available;
  width: -webkit-fill-available;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  z-index: -999;
  filter: grayscale(100%);
  opacity: 0.7;
`

export { HeroImg }