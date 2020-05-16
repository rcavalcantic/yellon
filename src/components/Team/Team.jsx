import React from 'react'
import logoBig from '../../static/images/logo-big.png'
import marcos from '../../static/images/marcos.jpg'
import sammy from '../../static/images/sammy.jpg'
import mailson from '../../static/images/mailson.jpg'
import roberto from '../../static/images/roberto.jpeg'

const Team = () => {
  return(
    <div style={{ width: "100%", display: 'flex', backgroundColor: "white" }}>
      <div style={{ width: "49.8%"}}>
        <img style={{ width: "100%"}} src={logoBig} alt={"Big Logo"}/>
        <div style={{ position: "absolute", color: "black", marginTop: "-404px", width: "50%"}}>
          <p style={{ color: "black", textAlign: "center"}}>TEAM <strong>YELLON</strong></p>
          <p style={{ width: "50%", textAlign: "left", display: "flex", margin: "auto"}}>Apenas algumas de nossas melhores
              peças, ações e campanhas. Vem dar
              uma olhada, eu sei que você tá curioso.</p>
        </div>
      </div>
      <div style={{ width: "50%", marginLeft: "4px"}}>
        <div style={{ width: "50%", display: "flex",  marginBottom: "1px" }}>
          <img style={{ width: "100%" }} src={marcos} alt={"Marcos Diretor Executivo e Criador de Conteúdo"}/>
          <img style={{ width: "99.9%", marginLeft: '1px' }} src={sammy} alt={"Sammy Muniz Diretor de Arte e Video"}/>
        </div>
        <div style={{ width: "50%", display: "flex" }}>
          <img style={{ width: "100%" }} src={mailson} alt={"Mailson Medina Fotografo e Videomaker"}/>
          <img style={{ width: "99.9%", marginLeft: '1px' }} src={roberto} alt={"Roberto Campos Desenvolvedor e Engenheiro de Software"}/>
        </div>
      </div>
    </div>
  )
}

export default Team