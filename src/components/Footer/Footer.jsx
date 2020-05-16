import React from 'react'
import yellonLogo from '../../static/images/yellon-white.png'
import iconeWhats from '../../static/images/icone-whats.png'
import iconeEmail from '../../static/images/icone-email.png'
import iconeInsta from '../../static/images/icone-insta.png'
import iconeFacebook from '../../static/images/icone-face.png'
import { yellow } from '../../utils/_colors'

const Footer = () => {
  return(
    <div style={{ height: "150px", display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", margin: "auto" }}>
        <img style={{ width: "120px", height: "120px"}} src={yellonLogo} alt={"Logotipo"}/>
        <div style={{ borderLeft: `2px solid ${yellow}`, margin: "auto 32px", height: "50px"}}></div>
        <div style={{ display: "flex", margin: "auto", flexDirection: "column"}}>
          <h3 style={{ marginBottom: "0"}}>VAMOS</h3>
          <h3 style={{ marginTop: "0", color: yellow, fontWeight: "bolder"}}>TROCAR IDEIAS?</h3>
        </div>
        <div style={{ display: "flex", margin: "auto auto auto 16px", width: "385px", fontSize: "12px", fontWeight: "bold"}}>
          Ficamos felizes que tenha chegado até aqui. Quer conhecer um
          pouco mais da agência e alavancar seu negócio? É só entrar em
          contato e marcamos aquele café para batermos um papo.
        </div>
      </div>
      <div style={{ display: "flex", margin: "auto" }}>
        <div style={{ display: "flex"}}>
          <img style={{ width: "36px", height: "36px", filter: "invert(1)"}} src={iconeWhats} alt={"icone whatsapp"}/>
          <p style={{ fontSize: "20px", margin: "auto" }}>92 98187-7859</p>
        </div>
        <div style={{ display: "flex", margin: "auto 16px"}}>
          <img style={{ width: "36px", height: "36px", filter: "invert(1)"}} src={iconeEmail} alt={"icone email"}/>
          <p style={{ fontSize: "20px", margin: "auto" }}>yellonpublicidade@gmail.com</p>
        </div>
        <div style={{ display: "flex"}}>
          <img style={{ width: "36px", height: "36px", filter: "invert(1)", marginRight: "-12px"}} src={iconeInsta} alt={"icone email"}/>
          <img style={{ width: "36px", height: "36px", filter: "invert(1)"}} src={iconeFacebook} alt={"icone email"}/>
          <p style={{ fontSize: "20px", margin: "auto" }}>/yellonpublicidade</p>
        </div>
      </div>
    </div>
  )
}

export default Footer