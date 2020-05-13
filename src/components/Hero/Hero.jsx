import React, { Component } from 'react'
import { HeroImg } from './styles' 
import imgHero from '../../static/images/hero-one.jpg'

export default class Hero extends Component {
  render() {
    return(
      <HeroImg src={imgHero} />
    )
  }
}