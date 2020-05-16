import React from 'react'
import unipett from '../../static/images/unipett.jpg'
import cepi from '../../static/images/cepi.jpg'
import backgroundJob from '../../static/images/job-planning.jpg'
import congressoBronzeamento from '../../static/images/congresso-bronzeamento.jpg'
import oticaClaro from '../../static/images/otica-claro.jpg'
import heroJob from '../../static/images/hero-one.jpg'
import pivnet from '../../static/images/pivnet.jpg'
import strangerJobs from '../../static/images/stranger-jobs.jpg'
import { yellow } from '../../utils/_colors'

const Portifolio = () => {
  return(
    <div style={{ height: '100%', width: "100%", backgroundColor: 'white', display: 'flex', flexWrap: 'wrap' }}>
      <img style={{ height: "40%", width: "33%", marginRight: '1px', marginBottom: '1px' }} alt={"unipett parceiro"} src={unipett} />
      <div style={{ height: "33%", width: "39.8%"}}>
        <img style={{ width: "100%", filter: "brightness(0.3)" }} src={backgroundJob} alt={"Background for portifolio"}/>
        <h5 style={{ color: yellow, position: "absolute", marginTop: "-125px", marginLeft: "32px", fontSize: "x-large"}}>PORTIFÓLIO</h5>
        <p style={{ position: "absolute", marginTop: "-90px", marginLeft: "32px", fontSize: "12px", width: "18%", fontWeight: "bold"}}>
            Apenas algumas de nossas melhores peças,
            ações e campanhas. Vem dar uma olhada,
            eu sei que você tá curioso.</p>
      </div>
      <img style={{ height: "36%", width: "27%", marginLeft: '1px', marginBottom: '1px' }} alt={"cepi cliente"} src={cepi} />
      <img style={{ width: "16.5%", marginBottom: '1px' }} alt={"trabalho para congresso bronzeamento"} src={congressoBronzeamento} />
      <img style={{ width: "16.5%", marginBottom: '1px' }} alt={"campanha otica claro"} src={oticaClaro} />
      <img style={{ width: "39.8%",  marginLeft: "1px", marginTop: "-160px", marginBottom: '1px' }} alt={"Job faltando"} src={heroJob} />
      <img style={{ height: "36%", width: "27%", marginLeft: '1px', marginBottom: '1px', marginTop: "-110px" }} alt={"Cliente Pivnet tecnologia"} src={pivnet} />
      <img style={{ width: "50%", marginTop: "1px", marginRight: "1px" }} alt={"Cliente Pivnet tecnologia"} src={backgroundJob} />
      <img style={{ width: "49.9%", marginTop: '1px' }} alt={"Cliente Pivnet tecnologia"} src={backgroundJob} />
    </div>
  )
}

export default Portifolio
