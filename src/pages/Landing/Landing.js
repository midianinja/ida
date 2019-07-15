import React from "react";
import styled from "styled-components";

import rem from "../../utils/remConverter/remConverter.js";

const Welcome = styled.section`
    background-color: ''
`

const About = styled.section``

const Testimony = styled.section``

const Security = styled.section``

const NewsLetter = styled.section``

const SocialMedia = styled.section``

class Landing extends React.Component {

  componentDidMount() {
    document.title = "IDa";
  }

  render() {
    return (
      <>
        <Welcome>
            <h1>Você encontrou a rede social do ativismo.</h1>
            <button>Criar meu IDa +</button>
            <button className="transparent">Fazer login</button>
        </Welcome>
        <Testimony>
            <h4>Quem já tem o IDa</h4>
            {/* todo carousel */}
        </Testimony>
        <About>
            <h4>A IDa te dá acesso a diversas tecnologias num só lugar</h4>
            <div className="item">
                <img src="" alt="" title=""></img>
                <h4>SOM</h4>
                <p>Crie o perfil da sua banda, inscreva-se num festival e circule o mundo!</p>
            </div>
            <div className="item">
                <img src="" alt="" title=""></img>
                <h4>Novas ferramentas</h4>
                <p>Quer mudar o código do mundo?Nossas tecnologias são Open Source e estão abertas a colaboração :)</p>
            </div>
        </About>
        <Security>
           {/* todo carousel */}
        </Security>
        <NewsLetter>
            <p>Receba novas informações sobre os aplicativos direto no seu e-mail</p>
            <form>
                <input type="text" placeholder="Insira seu e-mail" />
            </form>
        </NewsLetter>
        <SocialMedia>
            <ul>
                <li><a routerLink=""><i className="facebook"></i></a></li>
                <li><a routerLink=""><i className="instagram"></i></a></li>
                <li><a routerLink=""><i className="twitter"></i></a></li>
            </ul>
        </SocialMedia>
      </>
    );
  }
}

export default Landing;
