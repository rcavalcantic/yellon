import React, { Component } from 'react'
import { Container, PanelTitle, Resume } from './styles'

export default class Panel extends Component {
  render() {
    return(
      <Container>
        <PanelTitle>A AGÊNCIA</PanelTitle>
        <div style={{ borderLeft: 'solid 2px black', height: '40%', margin: 'auto 16px'}}></div>
        <Resume>
          Focados no <strong style={{ display: 'contents'}}>ON</strong> e no <strong style={{ display: 'contents'}}>OFF</strong>, nosso objetivo vai além de criar postagens para
          redes sociais e materiais para impressão. Nós criamos <strong style={{ display: 'contents'}}>CONTEÚDO</strong> que gera 
          <strong style={{ display: 'contents'}}> RESULTADOS</strong> para sua empresa.
        </Resume>
      </Container>
    )
  }
}